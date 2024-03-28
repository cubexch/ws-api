import logging
from sortedcontainers import SortedDict
from cube_ws_api import market_data_pb2
from cube_ws_api_md import constants

class DefaultListSortedDict(SortedDict):
    def __missing__(self,k):
        self[k] = []
        return self[k]

class Order:
    def __init__(self, oid, side, price, qty):
        self.exchange_order_id = oid
        self.side = side
        self.price = price
        self.quantity = qty 

class OrderBook:
    def __init__(self):
        self.orders = {}
        self.bids = DefaultListSortedDict()
        self.asks = DefaultListSortedDict()
        self.logger = logging.getLogger('orderbook')
    
    def dump(self, fname, levels_only = True):
        with open(fname, "w") as f:
            f.write(constants.BIDS_HEADER)
            for i, bp in enumerate(reversed(self.bids)):
                if levels_only:
                    lv_qty = sum([ o.quantity for o in self.bids[bp]])
                    f.write(f"level: {i} price: {bp} quantity: {lv_qty}\n")
                else:
                    for o in self.bids[bp]:
                        f.write(f"oid: {o.exchange_order_id}, price: {o.price}, quantity: {o.quantity}\n")
            f.write(constants.ASKS_HEADER)
            for i, ap in enumerate(self.asks):
                if levels_only:
                    lv_qty = sum([ o.quantity for o in self.asks[ap]])
                    f.write(f"level: {i} price: {ap} quantity: {lv_qty}\n")
                else:
                    for o in self.asks[ap]:
                        f.write(f"oid: {o.exchange_order_id}, price: {o.price}, quantity: {o.quantity}\n")

    def add_order(self, side, oid, price, qty):
        order = Order(oid, side, price, qty)
        self.orders[oid] = order
        if side == market_data_pb2.BID:
            self.bids[price].append(order)
        else:
            self.asks[price].append(order)    

    def replace_order(self, side, oid, price, qty):
        if qty <= 0:
            self.logger.error(f"Replace {oid} with qty <= 0 {qty}")
        if oid not in self.orders:
            self.logger.error(f"Cannot find order ID {oid} to replace")
            return
        old_order = self.orders[oid]
        found_oid_idx = -1
        order: Order
        new_order = Order(oid, side, price, qty)
        if side == market_data_pb2.BID:
            for i, order in enumerate(self.bids[old_order.price]):
                if oid == order.exchange_order_id:
                    found_oid_idx = i
                    break
            if found_oid_idx != -1:
                self.bids[old_order.price].pop(i)
                if len(self.bids[old_order.price]) == 0:
                    self.bids.pop(old_order.price, None)
                self.bids[price].append(new_order)
        else:
            for i, order in enumerate(self.asks[old_order.price]):
                if oid == order.exchange_order_id:
                    found_oid_idx = i
                    break
            if found_oid_idx != -1:
                self.asks[old_order.price].pop(i)
                if len(self.asks[old_order.price]) == 0:
                    self.asks.pop(old_order.price, None)
                self.asks[price].append(new_order)
        if found_oid_idx == -1:
            self.logger.error(f"Replace {oid} not found")
        self.orders.pop(oid, None)
        self.orders[oid] = new_order

    def remove_order(self, side, oid, price, qty):
        if oid not in self.orders:
            self.logger.error(f"Cannot find order ID {oid} to remove")
            return
        old_order: Order
        old_order = self.orders[oid]
        if qty != 0 and old_order.quantity != qty:
            self.logger.error(f"Remove {oid} with incorrect quantity {qty} vs {old_order.quantity}")
        found_oid_idx = -1
        order: Order
        if side == market_data_pb2.BID:
            for i, order in enumerate(self.bids[old_order.price]):
                if oid == order.exchange_order_id:
                    found_oid_idx = i
                    break
            if found_oid_idx != -1:
                self.bids[old_order.price].pop(i)
                if len(self.bids[old_order.price]) == 0:
                    self.bids.pop(old_order.price, None)
        else:
            for i, order in enumerate(self.asks[old_order.price]):
                if oid == order.exchange_order_id:
                    found_oid_idx = i
                    break
            if found_oid_idx != -1:
                self.asks[old_order.price].pop(i)
                if len(self.asks[old_order.price]) == 0:
                    self.asks.pop(old_order.price, None)
        if found_oid_idx == -1:
            self.logger.error(f"Remove {oid} not found")
        self.orders.pop(oid, None)

    def get_total_side_orders(self, side):
        if side == market_data_pb2.BID:
            return sum([len(v) for v in self.bids.values()])
        else:
            return sum([len(v) for v in self.asks.values()])

    def apply_mbo_diff(self, mbo_diff: market_data_pb2.MarketByOrderDiff):
        exp_bid_lvs, exp_ask_lvs = mbo_diff.total_bid_levels, mbo_diff.total_ask_levels
        exp_bid_ods, exp_ask_ods = mbo_diff.total_bid_orders, mbo_diff.total_ask_orders
        diff: market_data_pb2.MarketByOrderDiff.Diff
        for diff in mbo_diff.diffs:
            self.logger.info(f"DIFF: {diff}")
            price = diff.price
            qty = diff.quantity
            side = diff.side
            oid = diff.exchange_order_id
            match diff.op:
                case market_data_pb2.MarketByOrderDiff.ADD:
                    self.add_order(side, oid, price, qty)
                case market_data_pb2.MarketByOrderDiff.REMOVE:
                    self.remove_order(side, oid, price, qty)
                case market_data_pb2.MarketByOrderDiff.REPLACE:
                    self.replace_order(side, oid, price, qty)
        act_bid_lvs, act_ask_lvs = len(self.bids), len(self.asks)
        if act_bid_lvs != exp_bid_lvs:
            self.logger.error(f"Expected bid levels: {exp_bid_lvs}, actual bid levels: {act_bid_lvs}")
        if act_ask_lvs != exp_ask_lvs:
            self.logger.error(f"Expected ask levels: {exp_ask_lvs}, actual ask levels: {act_ask_lvs}")
        act_bid_ods = self.get_total_side_orders(market_data_pb2.BID)
        act_ask_ods = self.get_total_side_orders(market_data_pb2.ASK)
        if act_bid_ods != exp_bid_ods:
            self.logger.error(f"Expected bid orders: {exp_bid_ods}, actual bid orders: {act_bid_ods}")
        if act_ask_ods != exp_ask_ods:
            self.logger.error(f"Expected ask orders: {exp_ask_ods}, actual ask orders: {act_ask_ods}")        

    def process_md_messages(self, md: market_data_pb2.MdMessages):
        for md_msg in md.messages:
            field = md_msg.WhichOneof('inner')
            if field == 'mbo_snapshot':
                od: market_data_pb2.MarketByOrder.Order
                for od in md_msg.mbo_snapshot.orders:
                    self.logger.info(f"ORDER: {od}")
                    price = od.price
                    qty = od.quantity
                    side = od.side
                    oid = od.exchange_order_id
                    self.add_order(side, oid, price, qty)
            elif field == 'mbo_diff':
                self.apply_mbo_diff(md_msg.mbo_diff)
            else:
                # don't care since not related to mbo
                pass
