import logging
from collections import OrderedDict
from cube_ws_api import market_data_pb2

class PriceBook:
    def __init__(self):
        self.bids = OrderedDict()
        self.asks = OrderedDict()
        self.logger = logging.getLogger('pricebook')

    def apply_mbp_diff(self, mbp_diff: market_data_pb2.MarketByPriceDiff):
        exp_bid_lvs, exp_ask_lvs = mbp_diff.total_bid_levels, mbp_diff.total_ask_levels
        diff: market_data_pb2.MarketByPriceDiff.Diff
        for diff in mbp_diff.diffs:
            self.logger.info(f"DIFF: {diff}")
            price = diff.price
            qty = diff.quantity
            match diff.op:
                case market_data_pb2.MarketByPriceDiff.ADD:
                    self.logger.error("DiffOp ADD not expected for MBP")
                case market_data_pb2.MarketByPriceDiff.REMOVE:
                    if diff.side == market_data_pb2.ASK:
                        if price not in self.asks:
                            self.logger.error(f"REMOVE ask price {price} not exist")
                        else:
                            del self.asks[price]
                    else:
                        if price not in self.bids:
                            self.logger.error(f"REMOVE bid price {price} not exist")
                        else:
                            del self.bids[price]
                case market_data_pb2.MarketByPriceDiff.REPLACE:
                    best_bid = next(reversed(self.bids))
                    best_ask = next(iter(self.asks))
                    if price > best_bid and price < best_ask:
                        self.logger.error(f"REPLACE price {price} between BBO ({best_bid} {best_ask})")
                    # still try to insert in pricelevels to achieve eventual consistency
                    # due to out of order sequence of diff events
                    if diff.side == market_data_pb2.ASK:
                        self.asks[price] = qty
                    else:
                        self.bids[price] = qty
        act_bid_lvs, act_ask_lvs = len(self.bids), len(self.asks)
        if act_bid_lvs != exp_bid_lvs:
            self.logger.error(f"Expected bid levels: {exp_bid_lvs}, actual bid levels: {act_bid_lvs}")
        if act_ask_lvs != exp_ask_lvs:
            self.logger.error(f"Expected bid levels: {exp_ask_lvs}, actual bid levels: {act_ask_lvs}")

    def process_md_messages(self, md: market_data_pb2.MdMessages):
        for md_msg in md.messages:
            field = md_msg.WhichOneof('inner')
            if field == 'mbp_snapshot':
                for lv in md_msg.mbp_snapshot.levels:
                    self.logger.info(f"LEVEL: {lv}")
                    price = lv.price
                    qty = lv.quantity
                    if lv.side == market_data_pb2.BID:
                        self.bids[price] = qty
                    else:
                        self.asks[price] = qty
            elif field == 'mbp_diff':
                self.apply_mbp_diff(md_msg.mbp_diff)
            else:
                # don't care since not related to mbp
                pass
