# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: market_data.proto
# Protobuf Python Version: 4.25.3
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x11market_data.proto\x12\x0bmarket_data\"\xe0\x03\n\tMdMessage\x12+\n\theartbeat\x18\x01 \x01(\x0b\x32\x16.market_data.HeartbeatH\x00\x12\'\n\x07summary\x18\x02 \x01(\x0b\x32\x14.market_data.SummaryH\x00\x12%\n\x06trades\x18\x03 \x01(\x0b\x32\x13.market_data.TradesH\x00\x12\x32\n\x0cmbo_snapshot\x18\x04 \x01(\x0b\x32\x1a.market_data.MarketByOrderH\x00\x12\x32\n\x08mbo_diff\x18\x05 \x01(\x0b\x32\x1e.market_data.MarketByOrderDiffH\x00\x12\x32\n\x0cmbp_snapshot\x18\x06 \x01(\x0b\x32\x1a.market_data.MarketByPriceH\x00\x12\x32\n\x08mbp_diff\x18\x07 \x01(\x0b\x32\x1e.market_data.MarketByPriceDiffH\x00\x12#\n\x05kline\x18\x08 \x01(\x0b\x32\x12.market_data.KlineH\x00\x12\x32\n\rmarket_status\x18\n \x01(\x0b\x32\x19.market_data.MarketStatusH\x00\x12\x16\n\tmarket_id\x18\t \x01(\x04H\x01\x88\x01\x01\x42\x07\n\x05innerB\x0c\n\n_market_id\"\xaf\x01\n\rMarketByPrice\x12\x30\n\x06levels\x18\x01 \x03(\x0b\x32 .market_data.MarketByPrice.Level\x12\r\n\x05\x63hunk\x18\x02 \x01(\r\x12\x12\n\nnum_chunks\x18\x03 \x01(\r\x1aI\n\x05Level\x12\r\n\x05price\x18\x01 \x01(\x04\x12\x10\n\x08quantity\x18\x02 \x01(\x04\x12\x1f\n\x04side\x18\x03 \x01(\x0e\x32\x11.market_data.Side\"\xa4\x02\n\x11MarketByPriceDiff\x12\x32\n\x05\x64iffs\x18\x01 \x03(\x0b\x32#.market_data.MarketByPriceDiff.Diff\x12\x18\n\x10total_bid_levels\x18\x02 \x01(\r\x12\x18\n\x10total_ask_levels\x18\x03 \x01(\r\x1a{\n\x04\x44iff\x12\r\n\x05price\x18\x01 \x01(\x04\x12\x10\n\x08quantity\x18\x02 \x01(\x04\x12\x1f\n\x04side\x18\x03 \x01(\x0e\x32\x11.market_data.Side\x12\x31\n\x02op\x18\x04 \x01(\x0e\x32%.market_data.MarketByPriceDiff.DiffOp\"*\n\x06\x44iffOp\x12\x07\n\x03\x41\x44\x44\x10\x00\x12\n\n\x06REMOVE\x10\x01\x12\x0b\n\x07REPLACE\x10\x02\"\xdc\x01\n\rMarketByOrder\x12\x30\n\x06orders\x18\x01 \x03(\x0b\x32 .market_data.MarketByOrder.Order\x12\r\n\x05\x63hunk\x18\x02 \x01(\r\x12\x12\n\nnum_chunks\x18\x03 \x01(\r\x1av\n\x05Order\x12\r\n\x05price\x18\x01 \x01(\x04\x12\x10\n\x08quantity\x18\x02 \x01(\x04\x12\x19\n\x11\x65xchange_order_id\x18\x03 \x01(\x04\x12\x1f\n\x04side\x18\x04 \x01(\x0e\x32\x11.market_data.Side\x12\x10\n\x08priority\x18\x05 \x01(\x04\"\x86\x03\n\x11MarketByOrderDiff\x12\x32\n\x05\x64iffs\x18\x01 \x03(\x0b\x32#.market_data.MarketByOrderDiff.Diff\x12\x18\n\x10total_bid_levels\x18\x02 \x01(\r\x12\x18\n\x10total_ask_levels\x18\x03 \x01(\r\x12\x18\n\x10total_bid_orders\x18\x04 \x01(\r\x12\x18\n\x10total_ask_orders\x18\x05 \x01(\r\x1a\xa8\x01\n\x04\x44iff\x12\r\n\x05price\x18\x01 \x01(\x04\x12\x10\n\x08quantity\x18\x02 \x01(\x04\x12\x19\n\x11\x65xchange_order_id\x18\x03 \x01(\x04\x12\x1f\n\x04side\x18\x04 \x01(\x0e\x32\x11.market_data.Side\x12\x31\n\x02op\x18\x05 \x01(\x0e\x32%.market_data.MarketByOrderDiff.DiffOp\x12\x10\n\x08priority\x18\x06 \x01(\x04\"*\n\x06\x44iffOp\x12\x07\n\x03\x41\x44\x44\x10\x00\x12\n\n\x06REMOVE\x10\x01\x12\x0b\n\x07REPLACE\x10\x02\"U\n\x0cMarketStatus\x12\x15\n\rtransact_time\x18\x01 \x01(\x04\x12.\n\x0cmarket_state\x18\x02 \x01(\x0e\x32\x18.market_data.MarketState\"\x8a\x02\n\x06Trades\x12)\n\x06trades\x18\x01 \x03(\x0b\x32\x19.market_data.Trades.Trade\x1a\xd4\x01\n\x05Trade\x12\x0f\n\x07tradeId\x18\x01 \x01(\x04\x12\r\n\x05price\x18\x02 \x01(\x04\x12\x34\n\x0f\x61ggressing_side\x18\x03 \x01(\x0e\x32\x1b.market_data.AggressingSide\x12!\n\x19resting_exchange_order_id\x18\x04 \x01(\x04\x12\x15\n\rfill_quantity\x18\x05 \x01(\x04\x12\x15\n\rtransact_time\x18\x06 \x01(\x04\x12$\n\x1c\x61ggressing_exchange_order_id\x18\x07 \x01(\x04\"\xdb\x01\n\x07Summary\x12\x11\n\x04open\x18\x01 \x01(\x04H\x00\x88\x01\x01\x12\x12\n\x05\x63lose\x18\x02 \x01(\x04H\x01\x88\x01\x01\x12\x10\n\x03low\x18\x03 \x01(\x04H\x02\x88\x01\x01\x12\x11\n\x04high\x18\x04 \x01(\x04H\x03\x88\x01\x01\x12\x16\n\x0e\x62\x61se_volume_lo\x18\x05 \x01(\x04\x12\x16\n\x0e\x62\x61se_volume_hi\x18\x06 \x01(\x04\x12\x17\n\x0fquote_volume_lo\x18\x07 \x01(\x04\x12\x17\n\x0fquote_volume_hi\x18\x08 \x01(\x04\x42\x07\n\x05_openB\x08\n\x06_closeB\x06\n\x04_lowB\x07\n\x05_high\"\xdf\x01\n\x05Kline\x12,\n\x08interval\x18\x01 \x01(\x0e\x32\x1a.market_data.KlineInterval\x12\x12\n\nstart_time\x18\x02 \x01(\x04\x12\x11\n\x04open\x18\x03 \x01(\x04H\x00\x88\x01\x01\x12\x12\n\x05\x63lose\x18\x04 \x01(\x04H\x01\x88\x01\x01\x12\x11\n\x04high\x18\x05 \x01(\x04H\x02\x88\x01\x01\x12\x10\n\x03low\x18\x06 \x01(\x04H\x03\x88\x01\x01\x12\x11\n\tvolume_lo\x18\x07 \x01(\x04\x12\x11\n\tvolume_hi\x18\x08 \x01(\x04\x42\x07\n\x05_openB\x08\n\x06_closeB\x07\n\x05_highB\x06\n\x04_low\"2\n\tHeartbeat\x12\x12\n\nrequest_id\x18\x01 \x01(\x04\x12\x11\n\ttimestamp\x18\x02 \x01(\x04\"6\n\nMdMessages\x12(\n\x08messages\x18\x01 \x03(\x0b\x32\x16.market_data.MdMessage\"\xa5\x01\n\nAggMessage\x12+\n\theartbeat\x18\x01 \x01(\x0b\x32\x16.market_data.HeartbeatH\x00\x12/\n\x0ctop_of_books\x18\x02 \x01(\x0b\x32\x17.market_data.TopOfBooksH\x00\x12\x30\n\x0crate_updates\x18\x03 \x01(\x0b\x32\x18.market_data.RateUpdatesH\x00\x42\x07\n\x05inner\"\xc9\x04\n\tTopOfBook\x12\x11\n\tmarket_id\x18\x01 \x01(\x04\x12\x15\n\rtransact_time\x18\x02 \x01(\x04\x12\x16\n\tbid_price\x18\x03 \x01(\x04H\x00\x88\x01\x01\x12\x19\n\x0c\x62id_quantity\x18\x04 \x01(\x04H\x01\x88\x01\x01\x12\x16\n\task_price\x18\x05 \x01(\x04H\x02\x88\x01\x01\x12\x19\n\x0c\x61sk_quantity\x18\x06 \x01(\x04H\x03\x88\x01\x01\x12\x17\n\nlast_price\x18\x07 \x01(\x04H\x04\x88\x01\x01\x12\x1d\n\x10rolling24h_price\x18\x08 \x01(\x04H\x05\x88\x01\x01\x12\x1e\n\x11implied_bid_price\x18\t \x01(\x04H\x06\x88\x01\x01\x12!\n\x14implied_bid_quantity\x18\n \x01(\x04H\x07\x88\x01\x01\x12\x1e\n\x11implied_ask_price\x18\x0b \x01(\x04H\x08\x88\x01\x01\x12!\n\x14implied_ask_quantity\x18\x0c \x01(\x04H\t\x88\x01\x01\x12.\n\x0cmarket_state\x18\r \x01(\x0e\x32\x18.market_data.MarketStateB\x0c\n\n_bid_priceB\x0f\n\r_bid_quantityB\x0c\n\n_ask_priceB\x0f\n\r_ask_quantityB\r\n\x0b_last_priceB\x13\n\x11_rolling24h_priceB\x14\n\x12_implied_bid_priceB\x17\n\x15_implied_bid_quantityB\x14\n\x12_implied_ask_priceB\x17\n\x15_implied_ask_quantity\"2\n\nTopOfBooks\x12$\n\x04tops\x18\x01 \x03(\x0b\x32\x16.market_data.TopOfBook\"j\n\nRateUpdate\x12\x10\n\x08\x61sset_id\x18\x01 \x01(\x04\x12\x11\n\ttimestamp\x18\x02 \x01(\x04\x12\x0c\n\x04rate\x18\x03 \x01(\x04\x12)\n\x04side\x18\x04 \x01(\x0e\x32\x1b.market_data.RateUpdateSide\"7\n\x0bRateUpdates\x12(\n\x07updates\x18\x01 \x03(\x0b\x32\x17.market_data.RateUpdate\"l\n\rClientMessage\x12+\n\theartbeat\x18\x01 \x01(\x0b\x32\x16.market_data.HeartbeatH\x00\x12%\n\x06\x63onfig\x18\x02 \x01(\x0b\x32\x13.market_data.ConfigH\x00\x42\x07\n\x05inner\"\x83\x01\n\x06\x43onfig\x12\x0b\n\x03mbp\x18\x01 \x01(\x08\x12\x0b\n\x03mbo\x18\x02 \x01(\x08\x12\x0e\n\x06trades\x18\x03 \x01(\x08\x12\x0f\n\x07summary\x18\x04 \x01(\x08\x12*\n\x06klines\x18\x05 \x03(\x0e\x32\x1a.market_data.KlineInterval\x12\x12\n\nmarket_ids\x18\x06 \x03(\x04*\x18\n\x04Side\x12\x07\n\x03\x42ID\x10\x00\x12\x07\n\x03\x41SK\x10\x01*@\n\rKlineInterval\x12\x06\n\x02S1\x10\x00\x12\x06\n\x02M1\x10\x01\x12\x07\n\x03M15\x10\x02\x12\x06\n\x02H1\x10\x03\x12\x06\n\x02H4\x10\x04\x12\x06\n\x02\x44\x31\x10\x05*E\n\x0bMarketState\x12\x0f\n\x0bUNSPECIFIED\x10\x00\x12\x14\n\x10NORMAL_OPERATION\x10\x01\x12\x0f\n\x0b\x43\x41NCEL_ONLY\x10\x02*p\n\x0e\x41ggressingSide\x12\x12\n\x0e\x41GGRESSING_BID\x10\x00\x12\x12\n\x0e\x41GGRESSING_ASK\x10\x01\x12\x1a\n\x16\x41GGRESSING_IMPLIED_BID\x10\x02\x12\x1a\n\x16\x41GGRESSING_IMPLIED_ASK\x10\x03*%\n\x0eRateUpdateSide\x12\x08\n\x04\x42\x41SE\x10\x00\x12\t\n\x05QUOTE\x10\x01\x42\x17Z\x03go/\xaa\x02\x0f\x43ube.MarketDatab\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'market_data_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  _globals['DESCRIPTOR']._options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z\003go/\252\002\017Cube.MarketData'
  _globals['_SIDE']._serialized_start=3735
  _globals['_SIDE']._serialized_end=3759
  _globals['_KLINEINTERVAL']._serialized_start=3761
  _globals['_KLINEINTERVAL']._serialized_end=3825
  _globals['_MARKETSTATE']._serialized_start=3827
  _globals['_MARKETSTATE']._serialized_end=3896
  _globals['_AGGRESSINGSIDE']._serialized_start=3898
  _globals['_AGGRESSINGSIDE']._serialized_end=4010
  _globals['_RATEUPDATESIDE']._serialized_start=4012
  _globals['_RATEUPDATESIDE']._serialized_end=4049
  _globals['_MDMESSAGE']._serialized_start=35
  _globals['_MDMESSAGE']._serialized_end=515
  _globals['_MARKETBYPRICE']._serialized_start=518
  _globals['_MARKETBYPRICE']._serialized_end=693
  _globals['_MARKETBYPRICE_LEVEL']._serialized_start=620
  _globals['_MARKETBYPRICE_LEVEL']._serialized_end=693
  _globals['_MARKETBYPRICEDIFF']._serialized_start=696
  _globals['_MARKETBYPRICEDIFF']._serialized_end=988
  _globals['_MARKETBYPRICEDIFF_DIFF']._serialized_start=821
  _globals['_MARKETBYPRICEDIFF_DIFF']._serialized_end=944
  _globals['_MARKETBYPRICEDIFF_DIFFOP']._serialized_start=946
  _globals['_MARKETBYPRICEDIFF_DIFFOP']._serialized_end=988
  _globals['_MARKETBYORDER']._serialized_start=991
  _globals['_MARKETBYORDER']._serialized_end=1211
  _globals['_MARKETBYORDER_ORDER']._serialized_start=1093
  _globals['_MARKETBYORDER_ORDER']._serialized_end=1211
  _globals['_MARKETBYORDERDIFF']._serialized_start=1214
  _globals['_MARKETBYORDERDIFF']._serialized_end=1604
  _globals['_MARKETBYORDERDIFF_DIFF']._serialized_start=1392
  _globals['_MARKETBYORDERDIFF_DIFF']._serialized_end=1560
  _globals['_MARKETBYORDERDIFF_DIFFOP']._serialized_start=946
  _globals['_MARKETBYORDERDIFF_DIFFOP']._serialized_end=988
  _globals['_MARKETSTATUS']._serialized_start=1606
  _globals['_MARKETSTATUS']._serialized_end=1691
  _globals['_TRADES']._serialized_start=1694
  _globals['_TRADES']._serialized_end=1960
  _globals['_TRADES_TRADE']._serialized_start=1748
  _globals['_TRADES_TRADE']._serialized_end=1960
  _globals['_SUMMARY']._serialized_start=1963
  _globals['_SUMMARY']._serialized_end=2182
  _globals['_KLINE']._serialized_start=2185
  _globals['_KLINE']._serialized_end=2408
  _globals['_HEARTBEAT']._serialized_start=2410
  _globals['_HEARTBEAT']._serialized_end=2460
  _globals['_MDMESSAGES']._serialized_start=2462
  _globals['_MDMESSAGES']._serialized_end=2516
  _globals['_AGGMESSAGE']._serialized_start=2519
  _globals['_AGGMESSAGE']._serialized_end=2684
  _globals['_TOPOFBOOK']._serialized_start=2687
  _globals['_TOPOFBOOK']._serialized_end=3272
  _globals['_TOPOFBOOKS']._serialized_start=3274
  _globals['_TOPOFBOOKS']._serialized_end=3324
  _globals['_RATEUPDATE']._serialized_start=3326
  _globals['_RATEUPDATE']._serialized_end=3432
  _globals['_RATEUPDATES']._serialized_start=3434
  _globals['_RATEUPDATES']._serialized_end=3489
  _globals['_CLIENTMESSAGE']._serialized_start=3491
  _globals['_CLIENTMESSAGE']._serialized_end=3599
  _globals['_CONFIG']._serialized_start=3602
  _globals['_CONFIG']._serialized_end=3733
# @@protoc_insertion_point(module_scope)
