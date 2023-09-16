from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Side(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    BID: _ClassVar[Side]
    ASK: _ClassVar[Side]

class KlineInterval(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    S1: _ClassVar[KlineInterval]
    M1: _ClassVar[KlineInterval]
    M15: _ClassVar[KlineInterval]
    H1: _ClassVar[KlineInterval]
    H4: _ClassVar[KlineInterval]
    D1: _ClassVar[KlineInterval]

class RateUpdateSide(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    BASE: _ClassVar[RateUpdateSide]
    QUOTE: _ClassVar[RateUpdateSide]
BID: Side
ASK: Side
S1: KlineInterval
M1: KlineInterval
M15: KlineInterval
H1: KlineInterval
H4: KlineInterval
D1: KlineInterval
BASE: RateUpdateSide
QUOTE: RateUpdateSide

class MdMessage(_message.Message):
    __slots__ = ["heartbeat", "summary", "trades", "mboSnapshot", "mboDiff", "mbpSnapshot", "mbpDiff", "kline"]
    HEARTBEAT_FIELD_NUMBER: _ClassVar[int]
    SUMMARY_FIELD_NUMBER: _ClassVar[int]
    TRADES_FIELD_NUMBER: _ClassVar[int]
    MBOSNAPSHOT_FIELD_NUMBER: _ClassVar[int]
    MBODIFF_FIELD_NUMBER: _ClassVar[int]
    MBPSNAPSHOT_FIELD_NUMBER: _ClassVar[int]
    MBPDIFF_FIELD_NUMBER: _ClassVar[int]
    KLINE_FIELD_NUMBER: _ClassVar[int]
    heartbeat: Heartbeat
    summary: Summary
    trades: Trades
    mboSnapshot: MarketByOrder
    mboDiff: MarketByOrderDiff
    mbpSnapshot: MarketByPrice
    mbpDiff: MarketByPriceDiff
    kline: Kline
    def __init__(self, heartbeat: _Optional[_Union[Heartbeat, _Mapping]] = ..., summary: _Optional[_Union[Summary, _Mapping]] = ..., trades: _Optional[_Union[Trades, _Mapping]] = ..., mboSnapshot: _Optional[_Union[MarketByOrder, _Mapping]] = ..., mboDiff: _Optional[_Union[MarketByOrderDiff, _Mapping]] = ..., mbpSnapshot: _Optional[_Union[MarketByPrice, _Mapping]] = ..., mbpDiff: _Optional[_Union[MarketByPriceDiff, _Mapping]] = ..., kline: _Optional[_Union[Kline, _Mapping]] = ...) -> None: ...

class MarketByPrice(_message.Message):
    __slots__ = ["levels", "chunk", "numChunks"]
    class Level(_message.Message):
        __slots__ = ["price", "quantity", "side"]
        PRICE_FIELD_NUMBER: _ClassVar[int]
        QUANTITY_FIELD_NUMBER: _ClassVar[int]
        SIDE_FIELD_NUMBER: _ClassVar[int]
        price: int
        quantity: int
        side: Side
        def __init__(self, price: _Optional[int] = ..., quantity: _Optional[int] = ..., side: _Optional[_Union[Side, str]] = ...) -> None: ...
    LEVELS_FIELD_NUMBER: _ClassVar[int]
    CHUNK_FIELD_NUMBER: _ClassVar[int]
    NUMCHUNKS_FIELD_NUMBER: _ClassVar[int]
    levels: _containers.RepeatedCompositeFieldContainer[MarketByPrice.Level]
    chunk: int
    numChunks: int
    def __init__(self, levels: _Optional[_Iterable[_Union[MarketByPrice.Level, _Mapping]]] = ..., chunk: _Optional[int] = ..., numChunks: _Optional[int] = ...) -> None: ...

class MarketByPriceDiff(_message.Message):
    __slots__ = ["diffs", "totalBidLevels", "totalAskLevels"]
    class DiffOp(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
        ADD: _ClassVar[MarketByPriceDiff.DiffOp]
        REMOVE: _ClassVar[MarketByPriceDiff.DiffOp]
        REPLACE: _ClassVar[MarketByPriceDiff.DiffOp]
    ADD: MarketByPriceDiff.DiffOp
    REMOVE: MarketByPriceDiff.DiffOp
    REPLACE: MarketByPriceDiff.DiffOp
    class Diff(_message.Message):
        __slots__ = ["price", "quantity", "side", "op"]
        PRICE_FIELD_NUMBER: _ClassVar[int]
        QUANTITY_FIELD_NUMBER: _ClassVar[int]
        SIDE_FIELD_NUMBER: _ClassVar[int]
        OP_FIELD_NUMBER: _ClassVar[int]
        price: int
        quantity: int
        side: Side
        op: MarketByPriceDiff.DiffOp
        def __init__(self, price: _Optional[int] = ..., quantity: _Optional[int] = ..., side: _Optional[_Union[Side, str]] = ..., op: _Optional[_Union[MarketByPriceDiff.DiffOp, str]] = ...) -> None: ...
    DIFFS_FIELD_NUMBER: _ClassVar[int]
    TOTALBIDLEVELS_FIELD_NUMBER: _ClassVar[int]
    TOTALASKLEVELS_FIELD_NUMBER: _ClassVar[int]
    diffs: _containers.RepeatedCompositeFieldContainer[MarketByPriceDiff.Diff]
    totalBidLevels: int
    totalAskLevels: int
    def __init__(self, diffs: _Optional[_Iterable[_Union[MarketByPriceDiff.Diff, _Mapping]]] = ..., totalBidLevels: _Optional[int] = ..., totalAskLevels: _Optional[int] = ...) -> None: ...

class MarketByOrder(_message.Message):
    __slots__ = ["orders", "chunk", "numChunks"]
    class Order(_message.Message):
        __slots__ = ["price", "quantity", "exchangeOrderId", "side", "priority"]
        PRICE_FIELD_NUMBER: _ClassVar[int]
        QUANTITY_FIELD_NUMBER: _ClassVar[int]
        EXCHANGEORDERID_FIELD_NUMBER: _ClassVar[int]
        SIDE_FIELD_NUMBER: _ClassVar[int]
        PRIORITY_FIELD_NUMBER: _ClassVar[int]
        price: int
        quantity: int
        exchangeOrderId: int
        side: Side
        priority: int
        def __init__(self, price: _Optional[int] = ..., quantity: _Optional[int] = ..., exchangeOrderId: _Optional[int] = ..., side: _Optional[_Union[Side, str]] = ..., priority: _Optional[int] = ...) -> None: ...
    ORDERS_FIELD_NUMBER: _ClassVar[int]
    CHUNK_FIELD_NUMBER: _ClassVar[int]
    NUMCHUNKS_FIELD_NUMBER: _ClassVar[int]
    orders: _containers.RepeatedCompositeFieldContainer[MarketByOrder.Order]
    chunk: int
    numChunks: int
    def __init__(self, orders: _Optional[_Iterable[_Union[MarketByOrder.Order, _Mapping]]] = ..., chunk: _Optional[int] = ..., numChunks: _Optional[int] = ...) -> None: ...

class MarketByOrderDiff(_message.Message):
    __slots__ = ["diffs", "totalBidLevels", "totalAskLevels", "totalBidOrders", "totalAskOrders"]
    class DiffOp(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
        ADD: _ClassVar[MarketByOrderDiff.DiffOp]
        REMOVE: _ClassVar[MarketByOrderDiff.DiffOp]
        REPLACE: _ClassVar[MarketByOrderDiff.DiffOp]
    ADD: MarketByOrderDiff.DiffOp
    REMOVE: MarketByOrderDiff.DiffOp
    REPLACE: MarketByOrderDiff.DiffOp
    class Diff(_message.Message):
        __slots__ = ["price", "quantity", "exchangeOrderId", "side", "op", "priority"]
        PRICE_FIELD_NUMBER: _ClassVar[int]
        QUANTITY_FIELD_NUMBER: _ClassVar[int]
        EXCHANGEORDERID_FIELD_NUMBER: _ClassVar[int]
        SIDE_FIELD_NUMBER: _ClassVar[int]
        OP_FIELD_NUMBER: _ClassVar[int]
        PRIORITY_FIELD_NUMBER: _ClassVar[int]
        price: int
        quantity: int
        exchangeOrderId: int
        side: Side
        op: MarketByOrderDiff.DiffOp
        priority: int
        def __init__(self, price: _Optional[int] = ..., quantity: _Optional[int] = ..., exchangeOrderId: _Optional[int] = ..., side: _Optional[_Union[Side, str]] = ..., op: _Optional[_Union[MarketByOrderDiff.DiffOp, str]] = ..., priority: _Optional[int] = ...) -> None: ...
    DIFFS_FIELD_NUMBER: _ClassVar[int]
    TOTALBIDLEVELS_FIELD_NUMBER: _ClassVar[int]
    TOTALASKLEVELS_FIELD_NUMBER: _ClassVar[int]
    TOTALBIDORDERS_FIELD_NUMBER: _ClassVar[int]
    TOTALASKORDERS_FIELD_NUMBER: _ClassVar[int]
    diffs: _containers.RepeatedCompositeFieldContainer[MarketByOrderDiff.Diff]
    totalBidLevels: int
    totalAskLevels: int
    totalBidOrders: int
    totalAskOrders: int
    def __init__(self, diffs: _Optional[_Iterable[_Union[MarketByOrderDiff.Diff, _Mapping]]] = ..., totalBidLevels: _Optional[int] = ..., totalAskLevels: _Optional[int] = ..., totalBidOrders: _Optional[int] = ..., totalAskOrders: _Optional[int] = ...) -> None: ...

class Trades(_message.Message):
    __slots__ = ["trades"]
    class Trade(_message.Message):
        __slots__ = ["tradeId", "price", "aggressingSide", "restingExchangeOrderId", "fillQuantity", "transactTime", "aggressingExchangeOrderId"]
        TRADEID_FIELD_NUMBER: _ClassVar[int]
        PRICE_FIELD_NUMBER: _ClassVar[int]
        AGGRESSINGSIDE_FIELD_NUMBER: _ClassVar[int]
        RESTINGEXCHANGEORDERID_FIELD_NUMBER: _ClassVar[int]
        FILLQUANTITY_FIELD_NUMBER: _ClassVar[int]
        TRANSACTTIME_FIELD_NUMBER: _ClassVar[int]
        AGGRESSINGEXCHANGEORDERID_FIELD_NUMBER: _ClassVar[int]
        tradeId: int
        price: int
        aggressingSide: Side
        restingExchangeOrderId: int
        fillQuantity: int
        transactTime: int
        aggressingExchangeOrderId: int
        def __init__(self, tradeId: _Optional[int] = ..., price: _Optional[int] = ..., aggressingSide: _Optional[_Union[Side, str]] = ..., restingExchangeOrderId: _Optional[int] = ..., fillQuantity: _Optional[int] = ..., transactTime: _Optional[int] = ..., aggressingExchangeOrderId: _Optional[int] = ...) -> None: ...
    TRADES_FIELD_NUMBER: _ClassVar[int]
    trades: _containers.RepeatedCompositeFieldContainer[Trades.Trade]
    def __init__(self, trades: _Optional[_Iterable[_Union[Trades.Trade, _Mapping]]] = ...) -> None: ...

class Summary(_message.Message):
    __slots__ = ["open", "close", "low", "high", "baseVolumeLo", "baseVolumeHi", "quoteVolumeLo", "quoteVolumeHi"]
    OPEN_FIELD_NUMBER: _ClassVar[int]
    CLOSE_FIELD_NUMBER: _ClassVar[int]
    LOW_FIELD_NUMBER: _ClassVar[int]
    HIGH_FIELD_NUMBER: _ClassVar[int]
    BASEVOLUMELO_FIELD_NUMBER: _ClassVar[int]
    BASEVOLUMEHI_FIELD_NUMBER: _ClassVar[int]
    QUOTEVOLUMELO_FIELD_NUMBER: _ClassVar[int]
    QUOTEVOLUMEHI_FIELD_NUMBER: _ClassVar[int]
    open: int
    close: int
    low: int
    high: int
    baseVolumeLo: int
    baseVolumeHi: int
    quoteVolumeLo: int
    quoteVolumeHi: int
    def __init__(self, open: _Optional[int] = ..., close: _Optional[int] = ..., low: _Optional[int] = ..., high: _Optional[int] = ..., baseVolumeLo: _Optional[int] = ..., baseVolumeHi: _Optional[int] = ..., quoteVolumeLo: _Optional[int] = ..., quoteVolumeHi: _Optional[int] = ...) -> None: ...

class Kline(_message.Message):
    __slots__ = ["interval", "startTime", "open", "close", "high", "low", "volumeLo", "volumeHi"]
    INTERVAL_FIELD_NUMBER: _ClassVar[int]
    STARTTIME_FIELD_NUMBER: _ClassVar[int]
    OPEN_FIELD_NUMBER: _ClassVar[int]
    CLOSE_FIELD_NUMBER: _ClassVar[int]
    HIGH_FIELD_NUMBER: _ClassVar[int]
    LOW_FIELD_NUMBER: _ClassVar[int]
    VOLUMELO_FIELD_NUMBER: _ClassVar[int]
    VOLUMEHI_FIELD_NUMBER: _ClassVar[int]
    interval: KlineInterval
    startTime: int
    open: int
    close: int
    high: int
    low: int
    volumeLo: int
    volumeHi: int
    def __init__(self, interval: _Optional[_Union[KlineInterval, str]] = ..., startTime: _Optional[int] = ..., open: _Optional[int] = ..., close: _Optional[int] = ..., high: _Optional[int] = ..., low: _Optional[int] = ..., volumeLo: _Optional[int] = ..., volumeHi: _Optional[int] = ...) -> None: ...

class Heartbeat(_message.Message):
    __slots__ = ["requestId", "timestamp"]
    REQUESTID_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    requestId: int
    timestamp: int
    def __init__(self, requestId: _Optional[int] = ..., timestamp: _Optional[int] = ...) -> None: ...

class MdMessages(_message.Message):
    __slots__ = ["messages"]
    MESSAGES_FIELD_NUMBER: _ClassVar[int]
    messages: _containers.RepeatedCompositeFieldContainer[MdMessage]
    def __init__(self, messages: _Optional[_Iterable[_Union[MdMessage, _Mapping]]] = ...) -> None: ...

class AggMessage(_message.Message):
    __slots__ = ["heartbeat", "topOfBooks", "rateUpdates"]
    HEARTBEAT_FIELD_NUMBER: _ClassVar[int]
    TOPOFBOOKS_FIELD_NUMBER: _ClassVar[int]
    RATEUPDATES_FIELD_NUMBER: _ClassVar[int]
    heartbeat: Heartbeat
    topOfBooks: TopOfBooks
    rateUpdates: RateUpdates
    def __init__(self, heartbeat: _Optional[_Union[Heartbeat, _Mapping]] = ..., topOfBooks: _Optional[_Union[TopOfBooks, _Mapping]] = ..., rateUpdates: _Optional[_Union[RateUpdates, _Mapping]] = ...) -> None: ...

class TopOfBook(_message.Message):
    __slots__ = ["marketId", "transactTime", "bidPrice", "bidQuantity", "askPrice", "askQuantity", "lastPrice", "rolling24hPrice"]
    MARKETID_FIELD_NUMBER: _ClassVar[int]
    TRANSACTTIME_FIELD_NUMBER: _ClassVar[int]
    BIDPRICE_FIELD_NUMBER: _ClassVar[int]
    BIDQUANTITY_FIELD_NUMBER: _ClassVar[int]
    ASKPRICE_FIELD_NUMBER: _ClassVar[int]
    ASKQUANTITY_FIELD_NUMBER: _ClassVar[int]
    LASTPRICE_FIELD_NUMBER: _ClassVar[int]
    ROLLING24HPRICE_FIELD_NUMBER: _ClassVar[int]
    marketId: int
    transactTime: int
    bidPrice: int
    bidQuantity: int
    askPrice: int
    askQuantity: int
    lastPrice: int
    rolling24hPrice: int
    def __init__(self, marketId: _Optional[int] = ..., transactTime: _Optional[int] = ..., bidPrice: _Optional[int] = ..., bidQuantity: _Optional[int] = ..., askPrice: _Optional[int] = ..., askQuantity: _Optional[int] = ..., lastPrice: _Optional[int] = ..., rolling24hPrice: _Optional[int] = ...) -> None: ...

class TopOfBooks(_message.Message):
    __slots__ = ["tops"]
    TOPS_FIELD_NUMBER: _ClassVar[int]
    tops: _containers.RepeatedCompositeFieldContainer[TopOfBook]
    def __init__(self, tops: _Optional[_Iterable[_Union[TopOfBook, _Mapping]]] = ...) -> None: ...

class RateUpdate(_message.Message):
    __slots__ = ["assetId", "timestamp", "rate", "side"]
    ASSETID_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    RATE_FIELD_NUMBER: _ClassVar[int]
    SIDE_FIELD_NUMBER: _ClassVar[int]
    assetId: int
    timestamp: int
    rate: int
    side: RateUpdateSide
    def __init__(self, assetId: _Optional[int] = ..., timestamp: _Optional[int] = ..., rate: _Optional[int] = ..., side: _Optional[_Union[RateUpdateSide, str]] = ...) -> None: ...

class RateUpdates(_message.Message):
    __slots__ = ["updates"]
    UPDATES_FIELD_NUMBER: _ClassVar[int]
    updates: _containers.RepeatedCompositeFieldContainer[RateUpdate]
    def __init__(self, updates: _Optional[_Iterable[_Union[RateUpdate, _Mapping]]] = ...) -> None: ...

class ClientMessage(_message.Message):
    __slots__ = ["heartbeat", "config"]
    HEARTBEAT_FIELD_NUMBER: _ClassVar[int]
    CONFIG_FIELD_NUMBER: _ClassVar[int]
    heartbeat: Heartbeat
    config: Config
    def __init__(self, heartbeat: _Optional[_Union[Heartbeat, _Mapping]] = ..., config: _Optional[_Union[Config, _Mapping]] = ...) -> None: ...

class Config(_message.Message):
    __slots__ = ["mbp", "mbo", "trades", "summary", "klines"]
    MBP_FIELD_NUMBER: _ClassVar[int]
    MBO_FIELD_NUMBER: _ClassVar[int]
    TRADES_FIELD_NUMBER: _ClassVar[int]
    SUMMARY_FIELD_NUMBER: _ClassVar[int]
    KLINES_FIELD_NUMBER: _ClassVar[int]
    mbp: bool
    mbo: bool
    trades: bool
    summary: bool
    klines: _containers.RepeatedScalarFieldContainer[KlineInterval]
    def __init__(self, mbp: bool = ..., mbo: bool = ..., trades: bool = ..., summary: bool = ..., klines: _Optional[_Iterable[_Union[KlineInterval, str]]] = ...) -> None: ...
