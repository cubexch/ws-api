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

class TimeInForce(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    IMMEDIATE_OR_CANCEL: _ClassVar[TimeInForce]
    GOOD_FOR_SESSION: _ClassVar[TimeInForce]
    FILL_OR_KILL: _ClassVar[TimeInForce]

class OrderType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    LIMIT: _ClassVar[OrderType]
    MARKET_LIMIT: _ClassVar[OrderType]
    MARKET_WITH_PROTECTION: _ClassVar[OrderType]

class SelfTradePrevention(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    CANCEL_RESTING: _ClassVar[SelfTradePrevention]
    CANCEL_AGGRESSING: _ClassVar[SelfTradePrevention]
    ALLOW_SELF_TRADE: _ClassVar[SelfTradePrevention]

class PostOnly(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    DISABLED: _ClassVar[PostOnly]
    ENABLED: _ClassVar[PostOnly]
BID: Side
ASK: Side
IMMEDIATE_OR_CANCEL: TimeInForce
GOOD_FOR_SESSION: TimeInForce
FILL_OR_KILL: TimeInForce
LIMIT: OrderType
MARKET_LIMIT: OrderType
MARKET_WITH_PROTECTION: OrderType
CANCEL_RESTING: SelfTradePrevention
CANCEL_AGGRESSING: SelfTradePrevention
ALLOW_SELF_TRADE: SelfTradePrevention
DISABLED: PostOnly
ENABLED: PostOnly

class Credentials(_message.Message):
    __slots__ = ["accessKeyId", "signature", "timestamp"]
    ACCESSKEYID_FIELD_NUMBER: _ClassVar[int]
    SIGNATURE_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    accessKeyId: str
    signature: str
    timestamp: int
    def __init__(self, accessKeyId: _Optional[str] = ..., signature: _Optional[str] = ..., timestamp: _Optional[int] = ...) -> None: ...

class OrderRequest(_message.Message):
    __slots__ = ["new", "cancel", "modify", "heartbeat", "mc"]
    NEW_FIELD_NUMBER: _ClassVar[int]
    CANCEL_FIELD_NUMBER: _ClassVar[int]
    MODIFY_FIELD_NUMBER: _ClassVar[int]
    HEARTBEAT_FIELD_NUMBER: _ClassVar[int]
    MC_FIELD_NUMBER: _ClassVar[int]
    new: NewOrder
    cancel: CancelOrder
    modify: ModifyOrder
    heartbeat: Heartbeat
    mc: MassCancel
    def __init__(self, new: _Optional[_Union[NewOrder, _Mapping]] = ..., cancel: _Optional[_Union[CancelOrder, _Mapping]] = ..., modify: _Optional[_Union[ModifyOrder, _Mapping]] = ..., heartbeat: _Optional[_Union[Heartbeat, _Mapping]] = ..., mc: _Optional[_Union[MassCancel, _Mapping]] = ...) -> None: ...

class NewOrder(_message.Message):
    __slots__ = ["clientOrderId", "requestId", "marketId", "price", "quantity", "side", "timeInForce", "orderType", "subaccountId", "selfTradePrevention", "postOnly"]
    CLIENTORDERID_FIELD_NUMBER: _ClassVar[int]
    REQUESTID_FIELD_NUMBER: _ClassVar[int]
    MARKETID_FIELD_NUMBER: _ClassVar[int]
    PRICE_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_FIELD_NUMBER: _ClassVar[int]
    SIDE_FIELD_NUMBER: _ClassVar[int]
    TIMEINFORCE_FIELD_NUMBER: _ClassVar[int]
    ORDERTYPE_FIELD_NUMBER: _ClassVar[int]
    SUBACCOUNTID_FIELD_NUMBER: _ClassVar[int]
    SELFTRADEPREVENTION_FIELD_NUMBER: _ClassVar[int]
    POSTONLY_FIELD_NUMBER: _ClassVar[int]
    clientOrderId: int
    requestId: int
    marketId: int
    price: int
    quantity: int
    side: Side
    timeInForce: TimeInForce
    orderType: OrderType
    subaccountId: int
    selfTradePrevention: SelfTradePrevention
    postOnly: PostOnly
    def __init__(self, clientOrderId: _Optional[int] = ..., requestId: _Optional[int] = ..., marketId: _Optional[int] = ..., price: _Optional[int] = ..., quantity: _Optional[int] = ..., side: _Optional[_Union[Side, str]] = ..., timeInForce: _Optional[_Union[TimeInForce, str]] = ..., orderType: _Optional[_Union[OrderType, str]] = ..., subaccountId: _Optional[int] = ..., selfTradePrevention: _Optional[_Union[SelfTradePrevention, str]] = ..., postOnly: _Optional[_Union[PostOnly, str]] = ...) -> None: ...

class CancelOrder(_message.Message):
    __slots__ = ["marketId", "clientOrderId", "requestId", "subaccountId"]
    MARKETID_FIELD_NUMBER: _ClassVar[int]
    CLIENTORDERID_FIELD_NUMBER: _ClassVar[int]
    REQUESTID_FIELD_NUMBER: _ClassVar[int]
    SUBACCOUNTID_FIELD_NUMBER: _ClassVar[int]
    marketId: int
    clientOrderId: int
    requestId: int
    subaccountId: int
    def __init__(self, marketId: _Optional[int] = ..., clientOrderId: _Optional[int] = ..., requestId: _Optional[int] = ..., subaccountId: _Optional[int] = ...) -> None: ...

class ModifyOrder(_message.Message):
    __slots__ = ["marketId", "clientOrderId", "requestId", "newPrice", "newQuantity", "subaccountId", "selfTradePrevention", "postOnly"]
    MARKETID_FIELD_NUMBER: _ClassVar[int]
    CLIENTORDERID_FIELD_NUMBER: _ClassVar[int]
    REQUESTID_FIELD_NUMBER: _ClassVar[int]
    NEWPRICE_FIELD_NUMBER: _ClassVar[int]
    NEWQUANTITY_FIELD_NUMBER: _ClassVar[int]
    SUBACCOUNTID_FIELD_NUMBER: _ClassVar[int]
    SELFTRADEPREVENTION_FIELD_NUMBER: _ClassVar[int]
    POSTONLY_FIELD_NUMBER: _ClassVar[int]
    marketId: int
    clientOrderId: int
    requestId: int
    newPrice: int
    newQuantity: int
    subaccountId: int
    selfTradePrevention: SelfTradePrevention
    postOnly: PostOnly
    def __init__(self, marketId: _Optional[int] = ..., clientOrderId: _Optional[int] = ..., requestId: _Optional[int] = ..., newPrice: _Optional[int] = ..., newQuantity: _Optional[int] = ..., subaccountId: _Optional[int] = ..., selfTradePrevention: _Optional[_Union[SelfTradePrevention, str]] = ..., postOnly: _Optional[_Union[PostOnly, str]] = ...) -> None: ...

class MassCancel(_message.Message):
    __slots__ = ["subaccountId", "requestId", "marketId", "side"]
    SUBACCOUNTID_FIELD_NUMBER: _ClassVar[int]
    REQUESTID_FIELD_NUMBER: _ClassVar[int]
    MARKETID_FIELD_NUMBER: _ClassVar[int]
    SIDE_FIELD_NUMBER: _ClassVar[int]
    subaccountId: int
    requestId: int
    marketId: int
    side: Side
    def __init__(self, subaccountId: _Optional[int] = ..., requestId: _Optional[int] = ..., marketId: _Optional[int] = ..., side: _Optional[_Union[Side, str]] = ...) -> None: ...

class Heartbeat(_message.Message):
    __slots__ = ["requestId", "timestamp"]
    REQUESTID_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    requestId: int
    timestamp: int
    def __init__(self, requestId: _Optional[int] = ..., timestamp: _Optional[int] = ...) -> None: ...

class OrderResponse(_message.Message):
    __slots__ = ["newAck", "cancelAck", "modifyAck", "newReject", "cancelReject", "modifyReject", "fill", "heartbeat", "position", "massCancelAck"]
    NEWACK_FIELD_NUMBER: _ClassVar[int]
    CANCELACK_FIELD_NUMBER: _ClassVar[int]
    MODIFYACK_FIELD_NUMBER: _ClassVar[int]
    NEWREJECT_FIELD_NUMBER: _ClassVar[int]
    CANCELREJECT_FIELD_NUMBER: _ClassVar[int]
    MODIFYREJECT_FIELD_NUMBER: _ClassVar[int]
    FILL_FIELD_NUMBER: _ClassVar[int]
    HEARTBEAT_FIELD_NUMBER: _ClassVar[int]
    POSITION_FIELD_NUMBER: _ClassVar[int]
    MASSCANCELACK_FIELD_NUMBER: _ClassVar[int]
    newAck: NewOrderAck
    cancelAck: CancelOrderAck
    modifyAck: ModifyOrderAck
    newReject: NewOrderReject
    cancelReject: CancelOrderReject
    modifyReject: ModifyOrderReject
    fill: Fill
    heartbeat: Heartbeat
    position: AssetPosition
    massCancelAck: MassCancelAck
    def __init__(self, newAck: _Optional[_Union[NewOrderAck, _Mapping]] = ..., cancelAck: _Optional[_Union[CancelOrderAck, _Mapping]] = ..., modifyAck: _Optional[_Union[ModifyOrderAck, _Mapping]] = ..., newReject: _Optional[_Union[NewOrderReject, _Mapping]] = ..., cancelReject: _Optional[_Union[CancelOrderReject, _Mapping]] = ..., modifyReject: _Optional[_Union[ModifyOrderReject, _Mapping]] = ..., fill: _Optional[_Union[Fill, _Mapping]] = ..., heartbeat: _Optional[_Union[Heartbeat, _Mapping]] = ..., position: _Optional[_Union[AssetPosition, _Mapping]] = ..., massCancelAck: _Optional[_Union[MassCancelAck, _Mapping]] = ...) -> None: ...

class NewOrderAck(_message.Message):
    __slots__ = ["msgSeqNum", "clientOrderId", "requestId", "exchangeOrderId", "marketId", "price", "quantity", "side", "timeInForce", "orderType", "transactTime", "subaccountId"]
    MSGSEQNUM_FIELD_NUMBER: _ClassVar[int]
    CLIENTORDERID_FIELD_NUMBER: _ClassVar[int]
    REQUESTID_FIELD_NUMBER: _ClassVar[int]
    EXCHANGEORDERID_FIELD_NUMBER: _ClassVar[int]
    MARKETID_FIELD_NUMBER: _ClassVar[int]
    PRICE_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_FIELD_NUMBER: _ClassVar[int]
    SIDE_FIELD_NUMBER: _ClassVar[int]
    TIMEINFORCE_FIELD_NUMBER: _ClassVar[int]
    ORDERTYPE_FIELD_NUMBER: _ClassVar[int]
    TRANSACTTIME_FIELD_NUMBER: _ClassVar[int]
    SUBACCOUNTID_FIELD_NUMBER: _ClassVar[int]
    msgSeqNum: int
    clientOrderId: int
    requestId: int
    exchangeOrderId: int
    marketId: int
    price: int
    quantity: int
    side: Side
    timeInForce: TimeInForce
    orderType: OrderType
    transactTime: int
    subaccountId: int
    def __init__(self, msgSeqNum: _Optional[int] = ..., clientOrderId: _Optional[int] = ..., requestId: _Optional[int] = ..., exchangeOrderId: _Optional[int] = ..., marketId: _Optional[int] = ..., price: _Optional[int] = ..., quantity: _Optional[int] = ..., side: _Optional[_Union[Side, str]] = ..., timeInForce: _Optional[_Union[TimeInForce, str]] = ..., orderType: _Optional[_Union[OrderType, str]] = ..., transactTime: _Optional[int] = ..., subaccountId: _Optional[int] = ...) -> None: ...

class CancelOrderAck(_message.Message):
    __slots__ = ["msgSeqNum", "clientOrderId", "requestId", "transactTime", "subaccountId", "reason", "marketId"]
    class Reason(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
        UNCLASSIFIED: _ClassVar[CancelOrderAck.Reason]
        DISCONNECT: _ClassVar[CancelOrderAck.Reason]
        REQUESTED: _ClassVar[CancelOrderAck.Reason]
        IOC: _ClassVar[CancelOrderAck.Reason]
        STP_RESTING: _ClassVar[CancelOrderAck.Reason]
        STP_AGGRESSING: _ClassVar[CancelOrderAck.Reason]
        MASS_CANCEL: _ClassVar[CancelOrderAck.Reason]
    UNCLASSIFIED: CancelOrderAck.Reason
    DISCONNECT: CancelOrderAck.Reason
    REQUESTED: CancelOrderAck.Reason
    IOC: CancelOrderAck.Reason
    STP_RESTING: CancelOrderAck.Reason
    STP_AGGRESSING: CancelOrderAck.Reason
    MASS_CANCEL: CancelOrderAck.Reason
    MSGSEQNUM_FIELD_NUMBER: _ClassVar[int]
    CLIENTORDERID_FIELD_NUMBER: _ClassVar[int]
    REQUESTID_FIELD_NUMBER: _ClassVar[int]
    TRANSACTTIME_FIELD_NUMBER: _ClassVar[int]
    SUBACCOUNTID_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    MARKETID_FIELD_NUMBER: _ClassVar[int]
    msgSeqNum: int
    clientOrderId: int
    requestId: int
    transactTime: int
    subaccountId: int
    reason: CancelOrderAck.Reason
    marketId: int
    def __init__(self, msgSeqNum: _Optional[int] = ..., clientOrderId: _Optional[int] = ..., requestId: _Optional[int] = ..., transactTime: _Optional[int] = ..., subaccountId: _Optional[int] = ..., reason: _Optional[_Union[CancelOrderAck.Reason, str]] = ..., marketId: _Optional[int] = ...) -> None: ...

class ModifyOrderAck(_message.Message):
    __slots__ = ["msgSeqNum", "clientOrderId", "requestId", "transactTime", "newQuantity", "subaccountId", "marketId", "price"]
    MSGSEQNUM_FIELD_NUMBER: _ClassVar[int]
    CLIENTORDERID_FIELD_NUMBER: _ClassVar[int]
    REQUESTID_FIELD_NUMBER: _ClassVar[int]
    TRANSACTTIME_FIELD_NUMBER: _ClassVar[int]
    NEWQUANTITY_FIELD_NUMBER: _ClassVar[int]
    SUBACCOUNTID_FIELD_NUMBER: _ClassVar[int]
    MARKETID_FIELD_NUMBER: _ClassVar[int]
    PRICE_FIELD_NUMBER: _ClassVar[int]
    msgSeqNum: int
    clientOrderId: int
    requestId: int
    transactTime: int
    newQuantity: int
    subaccountId: int
    marketId: int
    price: int
    def __init__(self, msgSeqNum: _Optional[int] = ..., clientOrderId: _Optional[int] = ..., requestId: _Optional[int] = ..., transactTime: _Optional[int] = ..., newQuantity: _Optional[int] = ..., subaccountId: _Optional[int] = ..., marketId: _Optional[int] = ..., price: _Optional[int] = ...) -> None: ...

class MassCancelAck(_message.Message):
    __slots__ = ["msgSeqNum", "subaccountId", "requestId", "transactTime", "reason", "totalAffectedOrders"]
    class Reason(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
        UNCLASSIFIED: _ClassVar[MassCancelAck.Reason]
        INVALID_MARKET_ID: _ClassVar[MassCancelAck.Reason]
        INVALID_SIDE: _ClassVar[MassCancelAck.Reason]
    UNCLASSIFIED: MassCancelAck.Reason
    INVALID_MARKET_ID: MassCancelAck.Reason
    INVALID_SIDE: MassCancelAck.Reason
    MSGSEQNUM_FIELD_NUMBER: _ClassVar[int]
    SUBACCOUNTID_FIELD_NUMBER: _ClassVar[int]
    REQUESTID_FIELD_NUMBER: _ClassVar[int]
    TRANSACTTIME_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    TOTALAFFECTEDORDERS_FIELD_NUMBER: _ClassVar[int]
    msgSeqNum: int
    subaccountId: int
    requestId: int
    transactTime: int
    reason: MassCancelAck.Reason
    totalAffectedOrders: int
    def __init__(self, msgSeqNum: _Optional[int] = ..., subaccountId: _Optional[int] = ..., requestId: _Optional[int] = ..., transactTime: _Optional[int] = ..., reason: _Optional[_Union[MassCancelAck.Reason, str]] = ..., totalAffectedOrders: _Optional[int] = ...) -> None: ...

class NewOrderReject(_message.Message):
    __slots__ = ["msgSeqNum", "clientOrderId", "requestId", "transactTime", "subaccountId", "reason", "marketId", "price", "quantity", "side", "timeInForce", "orderType"]
    class Reason(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
        UNCLASSIFIED: _ClassVar[NewOrderReject.Reason]
        INVALID_QUANTITY: _ClassVar[NewOrderReject.Reason]
        INVALID_MARKET_ID: _ClassVar[NewOrderReject.Reason]
        DUPLICATE_ORDER_ID: _ClassVar[NewOrderReject.Reason]
        INVALID_SIDE: _ClassVar[NewOrderReject.Reason]
        INVALID_TIME_IN_FORCE: _ClassVar[NewOrderReject.Reason]
        INVALID_ORDER_TYPE: _ClassVar[NewOrderReject.Reason]
        INVALID_POST_ONLY: _ClassVar[NewOrderReject.Reason]
        INVALID_SELF_TRADE_PREVENTION: _ClassVar[NewOrderReject.Reason]
        UNKNOWN_TRADER: _ClassVar[NewOrderReject.Reason]
        PRICE_WITH_MARKET_ORDER: _ClassVar[NewOrderReject.Reason]
        POST_ONLY_WITH_MARKET_ORDER: _ClassVar[NewOrderReject.Reason]
        POST_ONLY_WITH_INVALID_TIF: _ClassVar[NewOrderReject.Reason]
        EXCEEDED_SPOT_POSITION: _ClassVar[NewOrderReject.Reason]
        NO_OPPOSING_LIMIT_ORDER: _ClassVar[NewOrderReject.Reason]
        POST_ONLY_WOULD_TRADE: _ClassVar[NewOrderReject.Reason]
        DID_NOT_FULLY_FILL: _ClassVar[NewOrderReject.Reason]
    UNCLASSIFIED: NewOrderReject.Reason
    INVALID_QUANTITY: NewOrderReject.Reason
    INVALID_MARKET_ID: NewOrderReject.Reason
    DUPLICATE_ORDER_ID: NewOrderReject.Reason
    INVALID_SIDE: NewOrderReject.Reason
    INVALID_TIME_IN_FORCE: NewOrderReject.Reason
    INVALID_ORDER_TYPE: NewOrderReject.Reason
    INVALID_POST_ONLY: NewOrderReject.Reason
    INVALID_SELF_TRADE_PREVENTION: NewOrderReject.Reason
    UNKNOWN_TRADER: NewOrderReject.Reason
    PRICE_WITH_MARKET_ORDER: NewOrderReject.Reason
    POST_ONLY_WITH_MARKET_ORDER: NewOrderReject.Reason
    POST_ONLY_WITH_INVALID_TIF: NewOrderReject.Reason
    EXCEEDED_SPOT_POSITION: NewOrderReject.Reason
    NO_OPPOSING_LIMIT_ORDER: NewOrderReject.Reason
    POST_ONLY_WOULD_TRADE: NewOrderReject.Reason
    DID_NOT_FULLY_FILL: NewOrderReject.Reason
    MSGSEQNUM_FIELD_NUMBER: _ClassVar[int]
    CLIENTORDERID_FIELD_NUMBER: _ClassVar[int]
    REQUESTID_FIELD_NUMBER: _ClassVar[int]
    TRANSACTTIME_FIELD_NUMBER: _ClassVar[int]
    SUBACCOUNTID_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    MARKETID_FIELD_NUMBER: _ClassVar[int]
    PRICE_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_FIELD_NUMBER: _ClassVar[int]
    SIDE_FIELD_NUMBER: _ClassVar[int]
    TIMEINFORCE_FIELD_NUMBER: _ClassVar[int]
    ORDERTYPE_FIELD_NUMBER: _ClassVar[int]
    msgSeqNum: int
    clientOrderId: int
    requestId: int
    transactTime: int
    subaccountId: int
    reason: NewOrderReject.Reason
    marketId: int
    price: int
    quantity: int
    side: Side
    timeInForce: TimeInForce
    orderType: OrderType
    def __init__(self, msgSeqNum: _Optional[int] = ..., clientOrderId: _Optional[int] = ..., requestId: _Optional[int] = ..., transactTime: _Optional[int] = ..., subaccountId: _Optional[int] = ..., reason: _Optional[_Union[NewOrderReject.Reason, str]] = ..., marketId: _Optional[int] = ..., price: _Optional[int] = ..., quantity: _Optional[int] = ..., side: _Optional[_Union[Side, str]] = ..., timeInForce: _Optional[_Union[TimeInForce, str]] = ..., orderType: _Optional[_Union[OrderType, str]] = ...) -> None: ...

class CancelOrderReject(_message.Message):
    __slots__ = ["msgSeqNum", "clientOrderId", "requestId", "transactTime", "subaccountId", "reason", "marketId"]
    class Reason(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
        UNCLASSIFIED: _ClassVar[CancelOrderReject.Reason]
        INVALID_MARKET_ID: _ClassVar[CancelOrderReject.Reason]
        ORDER_NOT_FOUND: _ClassVar[CancelOrderReject.Reason]
    UNCLASSIFIED: CancelOrderReject.Reason
    INVALID_MARKET_ID: CancelOrderReject.Reason
    ORDER_NOT_FOUND: CancelOrderReject.Reason
    MSGSEQNUM_FIELD_NUMBER: _ClassVar[int]
    CLIENTORDERID_FIELD_NUMBER: _ClassVar[int]
    REQUESTID_FIELD_NUMBER: _ClassVar[int]
    TRANSACTTIME_FIELD_NUMBER: _ClassVar[int]
    SUBACCOUNTID_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    MARKETID_FIELD_NUMBER: _ClassVar[int]
    msgSeqNum: int
    clientOrderId: int
    requestId: int
    transactTime: int
    subaccountId: int
    reason: CancelOrderReject.Reason
    marketId: int
    def __init__(self, msgSeqNum: _Optional[int] = ..., clientOrderId: _Optional[int] = ..., requestId: _Optional[int] = ..., transactTime: _Optional[int] = ..., subaccountId: _Optional[int] = ..., reason: _Optional[_Union[CancelOrderReject.Reason, str]] = ..., marketId: _Optional[int] = ...) -> None: ...

class ModifyOrderReject(_message.Message):
    __slots__ = ["msgSeqNum", "clientOrderId", "requestId", "transactTime", "subaccountId", "reason", "marketId"]
    class Reason(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
        UNCLASSIFIED: _ClassVar[ModifyOrderReject.Reason]
        INVALID_QUANTITY: _ClassVar[ModifyOrderReject.Reason]
        INVALID_MARKET_ID: _ClassVar[ModifyOrderReject.Reason]
        ORDER_NOT_FOUND: _ClassVar[ModifyOrderReject.Reason]
        INVALID_IFM: _ClassVar[ModifyOrderReject.Reason]
        INVALID_POST_ONLY: _ClassVar[ModifyOrderReject.Reason]
        INVALID_SELF_TRADE_PREVENTION: _ClassVar[ModifyOrderReject.Reason]
        UNKNOWN_TRADER: _ClassVar[ModifyOrderReject.Reason]
        EXCEEDED_SPOT_POSITION: _ClassVar[ModifyOrderReject.Reason]
        POST_ONLY_WOULD_TRADE: _ClassVar[ModifyOrderReject.Reason]
    UNCLASSIFIED: ModifyOrderReject.Reason
    INVALID_QUANTITY: ModifyOrderReject.Reason
    INVALID_MARKET_ID: ModifyOrderReject.Reason
    ORDER_NOT_FOUND: ModifyOrderReject.Reason
    INVALID_IFM: ModifyOrderReject.Reason
    INVALID_POST_ONLY: ModifyOrderReject.Reason
    INVALID_SELF_TRADE_PREVENTION: ModifyOrderReject.Reason
    UNKNOWN_TRADER: ModifyOrderReject.Reason
    EXCEEDED_SPOT_POSITION: ModifyOrderReject.Reason
    POST_ONLY_WOULD_TRADE: ModifyOrderReject.Reason
    MSGSEQNUM_FIELD_NUMBER: _ClassVar[int]
    CLIENTORDERID_FIELD_NUMBER: _ClassVar[int]
    REQUESTID_FIELD_NUMBER: _ClassVar[int]
    TRANSACTTIME_FIELD_NUMBER: _ClassVar[int]
    SUBACCOUNTID_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    MARKETID_FIELD_NUMBER: _ClassVar[int]
    msgSeqNum: int
    clientOrderId: int
    requestId: int
    transactTime: int
    subaccountId: int
    reason: ModifyOrderReject.Reason
    marketId: int
    def __init__(self, msgSeqNum: _Optional[int] = ..., clientOrderId: _Optional[int] = ..., requestId: _Optional[int] = ..., transactTime: _Optional[int] = ..., subaccountId: _Optional[int] = ..., reason: _Optional[_Union[ModifyOrderReject.Reason, str]] = ..., marketId: _Optional[int] = ...) -> None: ...

class Fill(_message.Message):
    __slots__ = ["msgSeqNum", "marketId", "clientOrderId", "exchangeOrderId", "fillPrice", "fillQuantity", "leavesQuantity", "transactTime", "subaccountId"]
    MSGSEQNUM_FIELD_NUMBER: _ClassVar[int]
    MARKETID_FIELD_NUMBER: _ClassVar[int]
    CLIENTORDERID_FIELD_NUMBER: _ClassVar[int]
    EXCHANGEORDERID_FIELD_NUMBER: _ClassVar[int]
    FILLPRICE_FIELD_NUMBER: _ClassVar[int]
    FILLQUANTITY_FIELD_NUMBER: _ClassVar[int]
    LEAVESQUANTITY_FIELD_NUMBER: _ClassVar[int]
    TRANSACTTIME_FIELD_NUMBER: _ClassVar[int]
    SUBACCOUNTID_FIELD_NUMBER: _ClassVar[int]
    msgSeqNum: int
    marketId: int
    clientOrderId: int
    exchangeOrderId: int
    fillPrice: int
    fillQuantity: int
    leavesQuantity: int
    transactTime: int
    subaccountId: int
    def __init__(self, msgSeqNum: _Optional[int] = ..., marketId: _Optional[int] = ..., clientOrderId: _Optional[int] = ..., exchangeOrderId: _Optional[int] = ..., fillPrice: _Optional[int] = ..., fillQuantity: _Optional[int] = ..., leavesQuantity: _Optional[int] = ..., transactTime: _Optional[int] = ..., subaccountId: _Optional[int] = ...) -> None: ...

class AssetPosition(_message.Message):
    __slots__ = ["subaccountId", "assetId", "total", "available"]
    SUBACCOUNTID_FIELD_NUMBER: _ClassVar[int]
    ASSETID_FIELD_NUMBER: _ClassVar[int]
    TOTAL_FIELD_NUMBER: _ClassVar[int]
    AVAILABLE_FIELD_NUMBER: _ClassVar[int]
    subaccountId: int
    assetId: int
    total: RawUnits
    available: RawUnits
    def __init__(self, subaccountId: _Optional[int] = ..., assetId: _Optional[int] = ..., total: _Optional[_Union[RawUnits, _Mapping]] = ..., available: _Optional[_Union[RawUnits, _Mapping]] = ...) -> None: ...

class RawUnits(_message.Message):
    __slots__ = ["word0", "word1", "word2", "word3"]
    WORD0_FIELD_NUMBER: _ClassVar[int]
    WORD1_FIELD_NUMBER: _ClassVar[int]
    WORD2_FIELD_NUMBER: _ClassVar[int]
    WORD3_FIELD_NUMBER: _ClassVar[int]
    word0: int
    word1: int
    word2: int
    word3: int
    def __init__(self, word0: _Optional[int] = ..., word1: _Optional[int] = ..., word2: _Optional[int] = ..., word3: _Optional[int] = ...) -> None: ...

class Bootstrap(_message.Message):
    __slots__ = ["done", "resting", "position"]
    DONE_FIELD_NUMBER: _ClassVar[int]
    RESTING_FIELD_NUMBER: _ClassVar[int]
    POSITION_FIELD_NUMBER: _ClassVar[int]
    done: Done
    resting: RestingOrders
    position: AssetPositions
    def __init__(self, done: _Optional[_Union[Done, _Mapping]] = ..., resting: _Optional[_Union[RestingOrders, _Mapping]] = ..., position: _Optional[_Union[AssetPositions, _Mapping]] = ...) -> None: ...

class RestingOrders(_message.Message):
    __slots__ = ["orders"]
    ORDERS_FIELD_NUMBER: _ClassVar[int]
    orders: _containers.RepeatedCompositeFieldContainer[RestingOrder]
    def __init__(self, orders: _Optional[_Iterable[_Union[RestingOrder, _Mapping]]] = ...) -> None: ...

class AssetPositions(_message.Message):
    __slots__ = ["positions"]
    POSITIONS_FIELD_NUMBER: _ClassVar[int]
    positions: _containers.RepeatedCompositeFieldContainer[AssetPosition]
    def __init__(self, positions: _Optional[_Iterable[_Union[AssetPosition, _Mapping]]] = ...) -> None: ...

class Done(_message.Message):
    __slots__ = ["latestTransactTime"]
    LATESTTRANSACTTIME_FIELD_NUMBER: _ClassVar[int]
    latestTransactTime: int
    def __init__(self, latestTransactTime: _Optional[int] = ...) -> None: ...

class RestingOrder(_message.Message):
    __slots__ = ["clientOrderId", "exchangeOrderId", "marketId", "price", "originalQuantity", "side", "timeInForce", "orderType", "remainingQuantity", "restTime", "subaccountId"]
    CLIENTORDERID_FIELD_NUMBER: _ClassVar[int]
    EXCHANGEORDERID_FIELD_NUMBER: _ClassVar[int]
    MARKETID_FIELD_NUMBER: _ClassVar[int]
    PRICE_FIELD_NUMBER: _ClassVar[int]
    ORIGINALQUANTITY_FIELD_NUMBER: _ClassVar[int]
    SIDE_FIELD_NUMBER: _ClassVar[int]
    TIMEINFORCE_FIELD_NUMBER: _ClassVar[int]
    ORDERTYPE_FIELD_NUMBER: _ClassVar[int]
    REMAININGQUANTITY_FIELD_NUMBER: _ClassVar[int]
    RESTTIME_FIELD_NUMBER: _ClassVar[int]
    SUBACCOUNTID_FIELD_NUMBER: _ClassVar[int]
    clientOrderId: int
    exchangeOrderId: int
    marketId: int
    price: int
    originalQuantity: int
    side: Side
    timeInForce: TimeInForce
    orderType: OrderType
    remainingQuantity: int
    restTime: int
    subaccountId: int
    def __init__(self, clientOrderId: _Optional[int] = ..., exchangeOrderId: _Optional[int] = ..., marketId: _Optional[int] = ..., price: _Optional[int] = ..., originalQuantity: _Optional[int] = ..., side: _Optional[_Union[Side, str]] = ..., timeInForce: _Optional[_Union[TimeInForce, str]] = ..., orderType: _Optional[_Union[OrderType, str]] = ..., remainingQuantity: _Optional[int] = ..., restTime: _Optional[int] = ..., subaccountId: _Optional[int] = ...) -> None: ...
