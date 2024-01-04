import logging
from collections import OrderedDict
from cube_ws_api import market_data_pb2

class PriceBook:
    def __init__(self):
        self.bids = OrderedDict()
        self.asks = OrderedDict()

    def apply_mbp_diff(self, mbp_diff: market_data_pb2.MarketByPriceDiff):
        exp_bid_lvs, exp_ask_lvs = mbp_diff.total_bid_levels, mbp_diff.total_ask_levels
        diff: market_data_pb2.MarketByPriceDiff.Diff
        for diff in mbp_diff.diffs:
            logging.info(f"DIFF: {diff}")
            price = diff.price
            qty = diff.quantity
            match diff.op:
                case market_data_pb2.MarketByPriceDiff.ADD:
                    logging.error("DiffOp ADD not expected for MBP")
                case market_data_pb2.MarketByPriceDiff.REMOVE:
                    if diff.side == market_data_pb2.ASK:
                        if price not in self.asks:
                            logging.error(f"REMOVE {price} @ {qty} ask not exist")
                        else:
                            del self.asks[price]
                    else:
                        if price not in self.bids:
                            logging.error(f"REMOVE {price} @ {qty} bid not exist")
                        else:
                            del self.bids[price]
                case market_data_pb2.MarketByPriceDiff.REPLACE:
                    if diff.side == market_data_pb2.ASK:
                        self.asks[price] = qty
                    else:
                        self.bids[price] = qty
        act_bid_lvs, act_ask_lvs = len(self.bids), len(self.asks)
        if act_bid_lvs != exp_bid_lvs:
            logging.error(f"Expected bid levels: {exp_bid_lvs}, actual bid levels: {act_bid_lvs}")
        if act_ask_lvs != exp_ask_lvs:
            logging.error(f"Expected bid levels: {exp_ask_lvs}, actual bid levels: {act_ask_lvs}")

    def process_md_messages(self, md: market_data_pb2.MdMessages):
        for md_msg in md.messages:
            field = md_msg.WhichOneof('inner')
            if field == 'mbp_snapshot':
                for lv in md_msg.mbp_snapshot.levels:
                    logging.info(f"LEVEL: {lv}")
                    price = int(lv.price)
                    qty = int(lv.quantity)
                    if lv.side == market_data_pb2.BID:
                        self.bids[price] = qty
                    else:
                        self.asks[price] = qty
            elif field == 'mbp_diff':
                self.apply_mbp_diff(md_msg.mbp_diff)