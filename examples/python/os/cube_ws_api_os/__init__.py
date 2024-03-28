import asyncio
import base64
import collections
import hashlib
import hmac
import json
import logging
import time
import typing

from google.protobuf import json_format, message
from cube_ws_api import trade_pb2
from cube_ws_api_util import Market

def calculate_hmac(secret_key: bytes, seeds: typing.List[bytes]) -> bytes:
    h = hmac.new(secret_key, digestmod=hashlib.sha256)
    h.update("cube.xyz".encode('ascii'))
    for seed in seeds:
        h.update(seed)
    return h.digest()


def generate_credentials(access_key_id: str, secret_key: str):
    timestamp = int(time.time())
    signature = calculate_hmac(
        bytes.fromhex(secret_key),
        [timestamp.to_bytes(8, byteorder="little", signed=False)],
    )

    return trade_pb2.Credentials(
        access_key_id=access_key_id,
        signature=base64.standard_b64encode(signature).decode('ascii'),
        timestamp=timestamp,
    )


class RequestSender:
    dry_run: bool
    tx: asyncio.Queue[bytes]

    def __init__(
        self,
        tx: asyncio.Queue[bytes],
        dry_run: bool,
    ):
        self.dry_run = dry_run
        self.tx = tx


    def send_request(self, request: trade_pb2.OrderRequest):
        if self.dry_run and request.WhichOneof('inner') != 'heartbeat':
            logging.debug(f'Dry run: {as_debug_string(request)}')
        else:
            self.tx.put_nowait(request.SerializeToString())


async def heartbeat(sender: RequestSender):
    while True:
        await asyncio.sleep(10)

        hb = trade_pb2.Heartbeat(
            request_id=0,
            timestamp=time.time_ns(),
        )

        logging.debug(f'Heartbeat: {as_debug_string(hb)}')
        sender.send_request(trade_pb2.OrderRequest(heartbeat=hb))


def as_debug_string(msg: message.Message):
    return json.dumps(json_format.MessageToDict(msg))


class Order:
    market_id: int
    subaccount_id: int
    client_order_id: int
    quantity: int
    exchange_order_id: int | None
    cumulative_quantity: int
    remaining_quantity: int
    cancel_sent: bool
    modify_inflight: typing.Deque[trade_pb2.ModifyOrder]

    def __init__(
        self,
        market_id: int,
        subaccount_id: int,
        client_order_id: int,
        quantity: int,
        exchange_order_id: int | None = None,
        cumulative_quantity: int | None = None,
        remaining_quantity: int | None = None,
    ):
        self.market_id = market_id
        self.subaccount_id = subaccount_id
        self.client_order_id = client_order_id
        self.quantity = quantity
        self.exchange_order_id = exchange_order_id
        self.cumulative_quantity = cumulative_quantity or 0
        self.remaining_quantity = remaining_quantity or quantity
        self.cancel_sent = False
        self.modify_inflight = collections.deque()


    def as_dict(self):
        return {
            'subaccount_id': self.subaccount_id,
            'client_order_id': self.client_order_id,
            'quantity': self.quantity,
            'exchange_order_id': self.exchange_order_id,
            'cumulative_quantity': self.cumulative_quantity,
            'remaining_quantity': self.remaining_quantity,
            'cancel_sent': self.cancel_sent,
            # modify_inflight?
        }


    # remaining, including in-flight modifies
    def latest_quantity(self):
        if self.cancel_sent:
            return 0

        if len(self.modify_inflight) == 0:
            return self.remaining_quantity
        else:
            latest = self.modify_inflight[-1]
            return latest.new_quantity - self.cumulative_quantity


    def handle_modify_ack(self, msg: trade_pb2.ModifyOrderAck):
        self.remaining_quantity = msg.remaining_quantity

        if len(self.modify_inflight) == 0:
            logging.error(f'No modify request for ack: {as_debug_string(msg)}')
            return

        request = self.modify_inflight.popleft()
        if request.request_id != msg.request_id:
            logging.error(f'Request ID mismatch on ack: {as_debug_string(msg)} vs {as_debug_string(request)}')
            return

        if request.new_quantity - self.cumulative_quantity != msg.remaining_quantity:
            logging.error(f'Quantity mismatch on ack: {as_debug_string(msg)} vs {as_debug_string(request)}')


    def handle_modify_reject(self, msg: trade_pb2.ModifyOrderReject):
        if len(self.modify_inflight) == 0:
            logging.error(f'No modify request for reject: {as_debug_string(msg)}')
            return

        request = self.modify_inflight.popleft()
        if request.request_id != msg.request_id:
            logging.error(f'Request ID mismatch on reject: {as_debug_string(msg)} vs {as_debug_string(request)}')
            return


    def handle_fill(self, msg: trade_pb2.Fill):
        if msg.leaves_quantity != self.remaining_quantity - msg.fill_quantity:
            logging.error(f'Leaves quantity mismatch on fill: {as_debug_string(msg)} vs {json.dumps(self.as_dict())}')

        self.cumulative_quantity = self.cumulative_quantity + msg.fill_quantity
        self.remaining_quantity = msg.leaves_quantity


    def cancel(
        self,
        sender: RequestSender,
    ):
        request = trade_pb2.CancelOrder(
            market_id=self.market_id,
            subaccount_id=self.subaccount_id,
            client_order_id=self.client_order_id,
            request_id=0,
        )

        logging.debug(f'Cancel: {as_debug_string(request)}')
        sender.send_request(trade_pb2.OrderRequest(cancel=request))

        self.cancel_sent = True


    def modify(
        self,
        sender: RequestSender,
        new_price: int,
        desired_quantity: int,
    ):
        # account for IFM of currently filled quantity
        new_quantity = desired_quantity + self.cumulative_quantity

        request = trade_pb2.ModifyOrder(
            market_id=self.market_id,
            client_order_id=self.client_order_id,
            request_id=0,
            new_price=new_price,
            new_quantity=new_quantity,
            subaccount_id=self.subaccount_id,
            self_trade_prevention=trade_pb2.SelfTradePrevention.CANCEL_RESTING,
            post_only=trade_pb2.PostOnly.DISABLED,
        )

        logging.debug(f'Modify: {as_debug_string(request)}')
        sender.send_request(trade_pb2.OrderRequest(modify=request))

        self.modify_inflight.append(request)


class Level:
    orders: typing.List[Order]

    def __init__(self):
        self.orders = []


    def remove_order(self, client_order_id: int) -> Order:
        filtered = [o for o in self.orders if o.client_order_id != client_order_id]
        order = self.find_order(client_order_id)
        self.orders = filtered
        return order


    def find_order(self, client_order_id: int):
        filtered = [o for o in self.orders if o.client_order_id == client_order_id]

        if len(filtered) == 0:
            raise Exception(f'Order {client_order_id} not found')
        elif len(filtered) > 1:
            raise Exception(f'Order {client_order_id} found multiple times')
        else:
            return filtered[0]


class Book:
    market: Market
    bids: typing.Dict[int, Level]
    asks: typing.Dict[int, Level]

    def __init__(self, market: Market) -> None:
        self.market = market
        self.bids = {}
        self.asks = {}


    def side(self, side: trade_pb2.Side) -> typing.Dict[int, Level]:
        if side == trade_pb2.Side.BID:
            return self.bids
        elif side == trade_pb2.Side.ASK:
            return self.asks
        else:
            raise Exception(f'Unknown side: {side}')


def raw_units_as_int(raw_units: trade_pb2.RawUnits) -> int:
    return raw_units.word0 \
        + (raw_units.word1 << 64) \
        + (raw_units.word2 << 128) \
        + (raw_units.word3 << 192)


class Position:
    asset_id: int
    subaccount_id: int
    total: int
    available: int

    def __init__(self, proto: trade_pb2.AssetPosition) -> None:
        self.asset_id = proto.asset_id
        self.subaccount_id = proto.subaccount_id
        self.total = raw_units_as_int(proto.total)
        self.available = raw_units_as_int(proto.available)


class BootstrapException(Exception):
    bootstrap: trade_pb2.Bootstrap

    def __init__(self, bootstrap: trade_pb2.Bootstrap):
        self.bootstrap = bootstrap


class OrderResponseException(Exception):
    response: trade_pb2.OrderResponse

    def __init__(self, response: trade_pb2.OrderResponse):
        self.response = response


OrderFill = typing.Tuple[trade_pb2.Fill, trade_pb2.Side, int]


class Oms:
    sender: RequestSender
    subaccount_id: int
    bootstrapped: bool
    positions: typing.Dict[int, Position]
    books: typing.Dict[int, Book]
    lookup: typing.Dict[int, typing.Tuple[trade_pb2.Side, int]]

    def __init__(
        self,
        sender: RequestSender,
        markets: typing.List[Market],
        subaccount_id: int,
    ) -> None:
        self.sender = sender
        self.subaccount_id = subaccount_id
        self.bootstrapped = False
        self.positions = {}
        self.books = dict((m.market_id, Book(m)) for m in markets)
        self.lookup = {}


    def handle_message(self, msg: bytes) -> OrderFill | None:
        if not self.bootstrapped:
            b = trade_pb2.Bootstrap()
            b.ParseFromString(msg)
            try:
                self.handle_bootstrap_message(b)
                return None
            except Exception as e:
                raise BootstrapException(b) from e
        else:
            o = trade_pb2.OrderResponse()
            o.ParseFromString(msg)
            try:
                return self.handle_order_response(o)
            except Exception as e:
                raise OrderResponseException(o) from e


    def mass_cancel(self):
        request = trade_pb2.MassCancel(
            subaccount_id=self.subaccount_id,
            request_id=0,
        )

        logging.debug(f'Mass cancel: {as_debug_string(request)}')
        self.sender.send_request(trade_pb2.OrderRequest(mc=request))

        for book in self.books.values():
            for level in book.bids.values():
                for order in level.orders:
                    order.cancel_sent = True

            for level in book.asks.values():
                for order in level.orders:
                    order.cancel_sent = True


    def get_next_order_id(self):
        # something unique. may be better to use an incrementing sequence but
        # then that needs to be persisted somewhere
        return time.time_ns()


    def create_and_send_new_order(
        self,
        market_id: int,
        price: int,
        quantity: int,
        side: trade_pb2.Side,
        cancel_on_disconnect: bool,
    ):
        client_order_id = self.get_next_order_id()

        book = self.books.get(market_id)
        if book is None:
            raise Exception(f'Unknown market: {market_id}')

        level = book.side(side).setdefault(price, Level())

        order = Order(
            market_id,
            self.subaccount_id,
            client_order_id,
            quantity,
        )
        level.orders.append(order)

        self.lookup[client_order_id] = (side, price)

        request = trade_pb2.NewOrder(
            market_id=market_id,
            subaccount_id=self.subaccount_id,
            price=price,
            quantity=quantity,
            side=side,
            client_order_id=client_order_id,
            request_id=0,
            time_in_force=trade_pb2.TimeInForce.GOOD_FOR_SESSION,
            order_type=trade_pb2.OrderType.LIMIT,
            self_trade_prevention=trade_pb2.SelfTradePrevention.CANCEL_RESTING,
            post_only=trade_pb2.PostOnly.DISABLED,
            cancel_on_disconnect=cancel_on_disconnect,
        )

        logging.debug(f'New order: {as_debug_string(request)}')
        self.sender.send_request(trade_pb2.OrderRequest(new=request))


    def handle_bootstrap_message(self, msg: trade_pb2.Bootstrap) -> None:
        logging.debug(f'Bootstrap: {as_debug_string(msg)}')

        field = msg.WhichOneof('inner')
        if field == 'resting':
            for o in msg.resting.orders:
                if not self.should_process_message(o):
                    continue

                book = self.books.get(o.market_id)
                if book is None:
                    raise Exception(f'Unknown market: {o.market_id}')

                level = book.side(o.side).setdefault(o.price, Level())
                cumulative_quantity = o.order_quantity - o.remaining_quantity
                level.orders.append(Order(
                    o.market_id,
                    o.subaccount_id,
                    o.client_order_id,
                    o.order_quantity,
                    exchange_order_id=o.exchange_order_id,
                    cumulative_quantity=cumulative_quantity,
                    remaining_quantity=o.remaining_quantity,
                ))

                self.lookup[o.client_order_id] = (o.side, o.price)
        elif field == 'position':
            for p in msg.position.positions:
                if not self.should_process_message(p):
                    continue

                self.positions[p.asset_id] = Position(p)
        elif field == 'done':
            self.bootstrapped = True
            logging.info(f'Completed bootstrap')
            for pos in self.positions.values():
                logging.info(f'Position: {json.dumps(pos.__dict__)}')


    def handle_order_response(
        self,
        msg: trade_pb2.OrderResponse,
    ) -> OrderFill | None:
        logging.debug(f'OrderResponse: {as_debug_string(msg)}')

        field = msg.WhichOneof('inner')
        if not self.should_process_message(getattr(msg, field)):
            return None

        if field == 'new_ack':
            self.handle_new_ack(msg.new_ack)
        elif field == 'cancel_ack':
            self.handle_cancel_ack(msg.cancel_ack)
        elif field == 'modify_ack':
            self.handle_modify_ack(msg.modify_ack)
        elif field == 'new_reject':
            self.handle_new_reject(msg.new_reject)
        elif field == 'cancel_reject':
            self.handle_cancel_reject(msg.cancel_reject)
        elif field == 'modify_reject':
            self.handle_modify_reject(msg.modify_reject)
        elif field == 'fill':
            return self.handle_fill(msg.fill)
        elif field == 'mass_cancel_ack':
            self.handle_mass_cancel_ack(msg.mass_cancel_ack)
        elif field == 'heartbeat':
            # heartbeat ack
            pass
        elif field == 'position':
            p = msg.position
            self.positions[p.asset_id] = Position(p)

        return None


    def level(self, market_id: int, side: trade_pb2.Side, price: int) -> typing.Tuple[Book, Level]:
        book = self.books.get(market_id)
        if book is None:
            raise Exception(f'Unknown market: {market_id}')

        level = book.side(side).get(price)
        if level is None:
            raise Exception(f'Missing price level: {side} {price} {market_id}')

        return (book, level)


    def handle_new_ack(self, msg: trade_pb2.NewOrderAck):
        [_, level] = self.level(msg.market_id, msg.side, msg.price)
        order = level.find_order(msg.client_order_id)

        order.exchange_order_id = msg.exchange_order_id


    def handle_cancel_ack(self, msg: trade_pb2.CancelOrderAck):
        [side, price] = self.lookup.pop(msg.client_order_id)
        [book, level] = self.level(msg.market_id, side, price)
        order = level.remove_order(msg.client_order_id)

        if len(level.orders) == 0:
            book.side(side).pop(price)


    def handle_modify_ack(self, msg: trade_pb2.ModifyOrderAck):
        if msg.remaining_quantity == 0:
            [side, price] = self.lookup.pop(msg.client_order_id)
            [book, level] = self.level(msg.market_id, side, price)
            order = level.remove_order(msg.client_order_id)

            if len(level.orders) == 0:
                book.side(side).pop(price)
        else:
            [side, price] = self.lookup[msg.client_order_id]
            [_, level] = self.level(msg.market_id, side, price)
            order = level.find_order(msg.client_order_id)

            order.handle_modify_ack(msg)


    def handle_new_reject(self, msg: trade_pb2.NewOrderReject):
        [side, price] = self.lookup.pop(msg.client_order_id)

        [book, level] = self.level(msg.market_id, side, price)
        order = level.remove_order(msg.client_order_id)

        if msg.reason == trade_pb2.NewOrderReject.Reason.EXCEEDED_SPOT_POSITION:
            logging.warn(f'Order ({json.dumps(order.as_dict())}) exceeded position limit')
        else:
            try:
                # todo: fix typing
                reason: typing.Any = trade_pb2.NewOrderReject.Reason.Name(msg.reason)
            except:
                reason = msg.reason
            logging.error(f'Order ({json.dumps(order.as_dict())}) rejected: {reason}')

        if len(level.orders) == 0:
            book.side(side).pop(price)


    def handle_cancel_reject(self, msg: trade_pb2.CancelOrderReject):
        if msg.client_order_id in self.lookup:
            logging.warn(f'Got cancel reject but order is still alive: {as_debug_string(msg)}')


    def handle_modify_reject(self, msg: trade_pb2.ModifyOrderReject):
        if msg.client_order_id in self.lookup:
            logging.warn(f'Got modify reject but order is still alive: {as_debug_string(msg)}')

            [side, price] = self.lookup[msg.client_order_id]
            [_, level] = self.level(msg.market_id, side, price)
            order = level.find_order(msg.client_order_id)
            order.handle_modify_reject(msg)


    def handle_fill(self, msg: trade_pb2.Fill) -> OrderFill | None:
        if msg.leaves_quantity == 0:
            [side, price] = self.lookup.pop(msg.client_order_id)
            [book, level] = self.level(msg.market_id, side, price)
            order = level.remove_order(msg.client_order_id)

            if len(level.orders) == 0:
                book.side(side).pop(price)
        else:
            [side, price] = self.lookup[msg.client_order_id]
            [_, level] = self.level(msg.market_id, side, price)
            order = level.find_order(msg.client_order_id)

            order.handle_fill(msg)

        return (msg, side, price)


    def handle_mass_cancel_ack(self, msg: trade_pb2.MassCancelAck):
        # we'll get individual cancel-acks
        pass

    def should_process_message(self, msg) -> bool:
        # Messages with no subaccount ID are still related
        return self.subaccount_id == msg.subaccount_id if hasattr(msg, 'subaccount_id') else True
