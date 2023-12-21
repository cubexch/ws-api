import {
  Side,
  TimeInForce,
  OrderType,
  SelfTradePrevention,
  PostOnly,
  FixedPointDecimal,
  Credentials,
  OrderRequest,
  NewOrder,
  CancelOrder,
  ModifyOrder,
  MassCancel,
  Heartbeat,
  OrderResponse,
  NewOrderAck,
  CancelOrderAck,
  CancelOrderAck_Reason,
  ModifyOrderAck,
  MassCancelAck,
  MassCancelAck_Reason,
  NewOrderReject,
  NewOrderReject_Reason,
  CancelOrderReject,
  CancelOrderReject_Reason,
  ModifyOrderReject,
  ModifyOrderReject_Reason,
  Fill,
  AssetPosition,
  RawUnits,
  Bootstrap,
  RestingOrders,
  AssetPositions,
  Done,
  RestingOrder,
} from '../trade';
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
export function sideFromJSON(object: any): Side {
  switch (object) {
    case 0:
    case "BID":
      return Side.BID;
    case 1:
    case "ASK":
      return Side.ASK;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum Side");
  }
}

export function sideToJSON(object: Side): string {
  switch (object) {
    case Side.BID:
      return "BID";
    case Side.ASK:
      return "ASK";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum Side");
  }
}

export function timeInForceFromJSON(object: any): TimeInForce {
  switch (object) {
    case 0:
    case "IMMEDIATE_OR_CANCEL":
      return TimeInForce.IMMEDIATE_OR_CANCEL;
    case 1:
    case "GOOD_FOR_SESSION":
      return TimeInForce.GOOD_FOR_SESSION;
    case 2:
    case "FILL_OR_KILL":
      return TimeInForce.FILL_OR_KILL;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum TimeInForce");
  }
}

export function timeInForceToJSON(object: TimeInForce): string {
  switch (object) {
    case TimeInForce.IMMEDIATE_OR_CANCEL:
      return "IMMEDIATE_OR_CANCEL";
    case TimeInForce.GOOD_FOR_SESSION:
      return "GOOD_FOR_SESSION";
    case TimeInForce.FILL_OR_KILL:
      return "FILL_OR_KILL";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum TimeInForce");
  }
}

export function orderTypeFromJSON(object: any): OrderType {
  switch (object) {
    case 0:
    case "LIMIT":
      return OrderType.LIMIT;
    case 1:
    case "MARKET_LIMIT":
      return OrderType.MARKET_LIMIT;
    case 2:
    case "MARKET_WITH_PROTECTION":
      return OrderType.MARKET_WITH_PROTECTION;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum OrderType");
  }
}

export function orderTypeToJSON(object: OrderType): string {
  switch (object) {
    case OrderType.LIMIT:
      return "LIMIT";
    case OrderType.MARKET_LIMIT:
      return "MARKET_LIMIT";
    case OrderType.MARKET_WITH_PROTECTION:
      return "MARKET_WITH_PROTECTION";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum OrderType");
  }
}

export function selfTradePreventionFromJSON(object: any): SelfTradePrevention {
  switch (object) {
    case 0:
    case "CANCEL_RESTING":
      return SelfTradePrevention.CANCEL_RESTING;
    case 1:
    case "CANCEL_AGGRESSING":
      return SelfTradePrevention.CANCEL_AGGRESSING;
    case 2:
    case "ALLOW_SELF_TRADE":
      return SelfTradePrevention.ALLOW_SELF_TRADE;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum SelfTradePrevention");
  }
}

export function selfTradePreventionToJSON(object: SelfTradePrevention): string {
  switch (object) {
    case SelfTradePrevention.CANCEL_RESTING:
      return "CANCEL_RESTING";
    case SelfTradePrevention.CANCEL_AGGRESSING:
      return "CANCEL_AGGRESSING";
    case SelfTradePrevention.ALLOW_SELF_TRADE:
      return "ALLOW_SELF_TRADE";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum SelfTradePrevention");
  }
}

export function postOnlyFromJSON(object: any): PostOnly {
  switch (object) {
    case 0:
    case "DISABLED":
      return PostOnly.DISABLED;
    case 1:
    case "ENABLED":
      return PostOnly.ENABLED;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum PostOnly");
  }
}

export function postOnlyToJSON(object: PostOnly): string {
  switch (object) {
    case PostOnly.DISABLED:
      return "DISABLED";
    case PostOnly.ENABLED:
      return "ENABLED";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum PostOnly");
  }
}

export function cancelOrderAck_ReasonFromJSON(object: any): CancelOrderAck_Reason {
  switch (object) {
    case 0:
    case "UNCLASSIFIED":
      return CancelOrderAck_Reason.UNCLASSIFIED;
    case 1:
    case "DISCONNECT":
      return CancelOrderAck_Reason.DISCONNECT;
    case 2:
    case "REQUESTED":
      return CancelOrderAck_Reason.REQUESTED;
    case 3:
    case "IOC":
      return CancelOrderAck_Reason.IOC;
    case 4:
    case "STP_RESTING":
      return CancelOrderAck_Reason.STP_RESTING;
    case 5:
    case "STP_AGGRESSING":
      return CancelOrderAck_Reason.STP_AGGRESSING;
    case 6:
    case "MASS_CANCEL":
      return CancelOrderAck_Reason.MASS_CANCEL;
    case 7:
    case "POSITION_LIMIT":
      return CancelOrderAck_Reason.POSITION_LIMIT;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CancelOrderAck_Reason");
  }
}

export function cancelOrderAck_ReasonToJSON(object: CancelOrderAck_Reason): string {
  switch (object) {
    case CancelOrderAck_Reason.UNCLASSIFIED:
      return "UNCLASSIFIED";
    case CancelOrderAck_Reason.DISCONNECT:
      return "DISCONNECT";
    case CancelOrderAck_Reason.REQUESTED:
      return "REQUESTED";
    case CancelOrderAck_Reason.IOC:
      return "IOC";
    case CancelOrderAck_Reason.STP_RESTING:
      return "STP_RESTING";
    case CancelOrderAck_Reason.STP_AGGRESSING:
      return "STP_AGGRESSING";
    case CancelOrderAck_Reason.MASS_CANCEL:
      return "MASS_CANCEL";
    case CancelOrderAck_Reason.POSITION_LIMIT:
      return "POSITION_LIMIT";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CancelOrderAck_Reason");
  }
}

export function massCancelAck_ReasonFromJSON(object: any): MassCancelAck_Reason {
  switch (object) {
    case 0:
    case "UNCLASSIFIED":
      return MassCancelAck_Reason.UNCLASSIFIED;
    case 1:
    case "INVALID_MARKET_ID":
      return MassCancelAck_Reason.INVALID_MARKET_ID;
    case 2:
    case "INVALID_SIDE":
      return MassCancelAck_Reason.INVALID_SIDE;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum MassCancelAck_Reason");
  }
}

export function massCancelAck_ReasonToJSON(object: MassCancelAck_Reason): string {
  switch (object) {
    case MassCancelAck_Reason.UNCLASSIFIED:
      return "UNCLASSIFIED";
    case MassCancelAck_Reason.INVALID_MARKET_ID:
      return "INVALID_MARKET_ID";
    case MassCancelAck_Reason.INVALID_SIDE:
      return "INVALID_SIDE";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum MassCancelAck_Reason");
  }
}

export function newOrderReject_ReasonFromJSON(object: any): NewOrderReject_Reason {
  switch (object) {
    case 0:
    case "UNCLASSIFIED":
      return NewOrderReject_Reason.UNCLASSIFIED;
    case 1:
    case "INVALID_QUANTITY":
      return NewOrderReject_Reason.INVALID_QUANTITY;
    case 2:
    case "INVALID_MARKET_ID":
      return NewOrderReject_Reason.INVALID_MARKET_ID;
    case 3:
    case "DUPLICATE_ORDER_ID":
      return NewOrderReject_Reason.DUPLICATE_ORDER_ID;
    case 4:
    case "INVALID_SIDE":
      return NewOrderReject_Reason.INVALID_SIDE;
    case 5:
    case "INVALID_TIME_IN_FORCE":
      return NewOrderReject_Reason.INVALID_TIME_IN_FORCE;
    case 6:
    case "INVALID_ORDER_TYPE":
      return NewOrderReject_Reason.INVALID_ORDER_TYPE;
    case 7:
    case "INVALID_POST_ONLY":
      return NewOrderReject_Reason.INVALID_POST_ONLY;
    case 8:
    case "INVALID_SELF_TRADE_PREVENTION":
      return NewOrderReject_Reason.INVALID_SELF_TRADE_PREVENTION;
    case 9:
    case "UNKNOWN_TRADER":
      return NewOrderReject_Reason.UNKNOWN_TRADER;
    case 10:
    case "PRICE_WITH_MARKET_LIMIT_ORDER":
      return NewOrderReject_Reason.PRICE_WITH_MARKET_LIMIT_ORDER;
    case 11:
    case "POST_ONLY_WITH_MARKET_ORDER":
      return NewOrderReject_Reason.POST_ONLY_WITH_MARKET_ORDER;
    case 12:
    case "POST_ONLY_WITH_INVALID_TIF":
      return NewOrderReject_Reason.POST_ONLY_WITH_INVALID_TIF;
    case 13:
    case "EXCEEDED_SPOT_POSITION":
      return NewOrderReject_Reason.EXCEEDED_SPOT_POSITION;
    case 14:
    case "NO_OPPOSING_RESTING_ORDER":
      return NewOrderReject_Reason.NO_OPPOSING_RESTING_ORDER;
    case 15:
    case "POST_ONLY_WOULD_TRADE":
      return NewOrderReject_Reason.POST_ONLY_WOULD_TRADE;
    case 16:
    case "DID_NOT_FULLY_FILL":
      return NewOrderReject_Reason.DID_NOT_FULLY_FILL;
    case 17:
    case "ONLY_ORDER_CANCEL_ACCEPTED":
      return NewOrderReject_Reason.ONLY_ORDER_CANCEL_ACCEPTED;
    case 18:
    case "PROTECTION_PRICE_WOULD_NOT_TRADE":
      return NewOrderReject_Reason.PROTECTION_PRICE_WOULD_NOT_TRADE;
    case 19:
    case "NO_REFERENCE_PRICE":
      return NewOrderReject_Reason.NO_REFERENCE_PRICE;
    case 20:
    case "SLIPPAGE_TOO_HIGH":
      return NewOrderReject_Reason.SLIPPAGE_TOO_HIGH;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum NewOrderReject_Reason");
  }
}

export function newOrderReject_ReasonToJSON(object: NewOrderReject_Reason): string {
  switch (object) {
    case NewOrderReject_Reason.UNCLASSIFIED:
      return "UNCLASSIFIED";
    case NewOrderReject_Reason.INVALID_QUANTITY:
      return "INVALID_QUANTITY";
    case NewOrderReject_Reason.INVALID_MARKET_ID:
      return "INVALID_MARKET_ID";
    case NewOrderReject_Reason.DUPLICATE_ORDER_ID:
      return "DUPLICATE_ORDER_ID";
    case NewOrderReject_Reason.INVALID_SIDE:
      return "INVALID_SIDE";
    case NewOrderReject_Reason.INVALID_TIME_IN_FORCE:
      return "INVALID_TIME_IN_FORCE";
    case NewOrderReject_Reason.INVALID_ORDER_TYPE:
      return "INVALID_ORDER_TYPE";
    case NewOrderReject_Reason.INVALID_POST_ONLY:
      return "INVALID_POST_ONLY";
    case NewOrderReject_Reason.INVALID_SELF_TRADE_PREVENTION:
      return "INVALID_SELF_TRADE_PREVENTION";
    case NewOrderReject_Reason.UNKNOWN_TRADER:
      return "UNKNOWN_TRADER";
    case NewOrderReject_Reason.PRICE_WITH_MARKET_LIMIT_ORDER:
      return "PRICE_WITH_MARKET_LIMIT_ORDER";
    case NewOrderReject_Reason.POST_ONLY_WITH_MARKET_ORDER:
      return "POST_ONLY_WITH_MARKET_ORDER";
    case NewOrderReject_Reason.POST_ONLY_WITH_INVALID_TIF:
      return "POST_ONLY_WITH_INVALID_TIF";
    case NewOrderReject_Reason.EXCEEDED_SPOT_POSITION:
      return "EXCEEDED_SPOT_POSITION";
    case NewOrderReject_Reason.NO_OPPOSING_RESTING_ORDER:
      return "NO_OPPOSING_RESTING_ORDER";
    case NewOrderReject_Reason.POST_ONLY_WOULD_TRADE:
      return "POST_ONLY_WOULD_TRADE";
    case NewOrderReject_Reason.DID_NOT_FULLY_FILL:
      return "DID_NOT_FULLY_FILL";
    case NewOrderReject_Reason.ONLY_ORDER_CANCEL_ACCEPTED:
      return "ONLY_ORDER_CANCEL_ACCEPTED";
    case NewOrderReject_Reason.PROTECTION_PRICE_WOULD_NOT_TRADE:
      return "PROTECTION_PRICE_WOULD_NOT_TRADE";
    case NewOrderReject_Reason.NO_REFERENCE_PRICE:
      return "NO_REFERENCE_PRICE";
    case NewOrderReject_Reason.SLIPPAGE_TOO_HIGH:
      return "SLIPPAGE_TOO_HIGH";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum NewOrderReject_Reason");
  }
}

export function cancelOrderReject_ReasonFromJSON(object: any): CancelOrderReject_Reason {
  switch (object) {
    case 0:
    case "UNCLASSIFIED":
      return CancelOrderReject_Reason.UNCLASSIFIED;
    case 1:
    case "INVALID_MARKET_ID":
      return CancelOrderReject_Reason.INVALID_MARKET_ID;
    case 2:
    case "ORDER_NOT_FOUND":
      return CancelOrderReject_Reason.ORDER_NOT_FOUND;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CancelOrderReject_Reason");
  }
}

export function cancelOrderReject_ReasonToJSON(object: CancelOrderReject_Reason): string {
  switch (object) {
    case CancelOrderReject_Reason.UNCLASSIFIED:
      return "UNCLASSIFIED";
    case CancelOrderReject_Reason.INVALID_MARKET_ID:
      return "INVALID_MARKET_ID";
    case CancelOrderReject_Reason.ORDER_NOT_FOUND:
      return "ORDER_NOT_FOUND";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CancelOrderReject_Reason");
  }
}

export function modifyOrderReject_ReasonFromJSON(object: any): ModifyOrderReject_Reason {
  switch (object) {
    case 0:
    case "UNCLASSIFIED":
      return ModifyOrderReject_Reason.UNCLASSIFIED;
    case 1:
    case "INVALID_QUANTITY":
      return ModifyOrderReject_Reason.INVALID_QUANTITY;
    case 2:
    case "INVALID_MARKET_ID":
      return ModifyOrderReject_Reason.INVALID_MARKET_ID;
    case 3:
    case "ORDER_NOT_FOUND":
      return ModifyOrderReject_Reason.ORDER_NOT_FOUND;
    case 4:
    case "INVALID_IFM":
      return ModifyOrderReject_Reason.INVALID_IFM;
    case 5:
    case "INVALID_POST_ONLY":
      return ModifyOrderReject_Reason.INVALID_POST_ONLY;
    case 6:
    case "INVALID_SELF_TRADE_PREVENTION":
      return ModifyOrderReject_Reason.INVALID_SELF_TRADE_PREVENTION;
    case 7:
    case "UNKNOWN_TRADER":
      return ModifyOrderReject_Reason.UNKNOWN_TRADER;
    case 8:
    case "EXCEEDED_SPOT_POSITION":
      return ModifyOrderReject_Reason.EXCEEDED_SPOT_POSITION;
    case 9:
    case "POST_ONLY_WOULD_TRADE":
      return ModifyOrderReject_Reason.POST_ONLY_WOULD_TRADE;
    case 17:
    case "ONLY_ORDER_CANCEL_ACCEPTED":
      return ModifyOrderReject_Reason.ONLY_ORDER_CANCEL_ACCEPTED;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ModifyOrderReject_Reason");
  }
}

export function modifyOrderReject_ReasonToJSON(object: ModifyOrderReject_Reason): string {
  switch (object) {
    case ModifyOrderReject_Reason.UNCLASSIFIED:
      return "UNCLASSIFIED";
    case ModifyOrderReject_Reason.INVALID_QUANTITY:
      return "INVALID_QUANTITY";
    case ModifyOrderReject_Reason.INVALID_MARKET_ID:
      return "INVALID_MARKET_ID";
    case ModifyOrderReject_Reason.ORDER_NOT_FOUND:
      return "ORDER_NOT_FOUND";
    case ModifyOrderReject_Reason.INVALID_IFM:
      return "INVALID_IFM";
    case ModifyOrderReject_Reason.INVALID_POST_ONLY:
      return "INVALID_POST_ONLY";
    case ModifyOrderReject_Reason.INVALID_SELF_TRADE_PREVENTION:
      return "INVALID_SELF_TRADE_PREVENTION";
    case ModifyOrderReject_Reason.UNKNOWN_TRADER:
      return "UNKNOWN_TRADER";
    case ModifyOrderReject_Reason.EXCEEDED_SPOT_POSITION:
      return "EXCEEDED_SPOT_POSITION";
    case ModifyOrderReject_Reason.POST_ONLY_WOULD_TRADE:
      return "POST_ONLY_WOULD_TRADE";
    case ModifyOrderReject_Reason.ONLY_ORDER_CANCEL_ACCEPTED:
      return "ONLY_ORDER_CANCEL_ACCEPTED";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ModifyOrderReject_Reason");
  }
}


function createBaseFixedPointDecimal(): FixedPointDecimal {
  return { mantissa: BigInt("0"), exponent: 0 };
}

export const FixedPointDecimalMethods = {
  encode(message: FixedPointDecimal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mantissa !== BigInt("0")) {
      writer.uint32(8).int64(message.mantissa.toString());
    }
    if (message.exponent !== 0) {
      writer.uint32(16).int32(message.exponent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FixedPointDecimal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFixedPointDecimal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.mantissa = longToBigint(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.exponent = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FixedPointDecimal {
    return {
      mantissa: isSet(object.mantissa) ? BigInt(object.mantissa) : BigInt("0"),
      exponent: isSet(object.exponent) ? Number(object.exponent) : 0,
    };
  },

  toJSON(message: FixedPointDecimal): unknown {
    const obj: any = {};
    message.mantissa !== undefined && (obj.mantissa = message.mantissa.toString());
    message.exponent !== undefined && (obj.exponent = Math.round(message.exponent));
    return obj;
  },
};

function createBaseCredentials(): Credentials {
  return { accessKeyId: "", signature: "", timestamp: BigInt("0") };
}

export const CredentialsMethods = {
  encode(message: Credentials, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessKeyId !== "") {
      writer.uint32(10).string(message.accessKeyId);
    }
    if (message.signature !== "") {
      writer.uint32(18).string(message.signature);
    }
    if (message.timestamp !== BigInt("0")) {
      writer.uint32(24).uint64(message.timestamp.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Credentials {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCredentials();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accessKeyId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.signature = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.timestamp = longToBigint(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Credentials {
    return {
      accessKeyId: isSet(object.accessKeyId) ? String(object.accessKeyId) : "",
      signature: isSet(object.signature) ? String(object.signature) : "",
      timestamp: isSet(object.timestamp) ? BigInt(object.timestamp) : BigInt("0"),
    };
  },

  toJSON(message: Credentials): unknown {
    const obj: any = {};
    message.accessKeyId !== undefined && (obj.accessKeyId = message.accessKeyId);
    message.signature !== undefined && (obj.signature = message.signature);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toString());
    return obj;
  },
};

function createBaseOrderRequest(): OrderRequest {
  return { new: undefined, cancel: undefined, modify: undefined, heartbeat: undefined, mc: undefined };
}

export const OrderRequestMethods = {
  encode(message: OrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.new !== undefined) {
      NewOrderMethods.encode(message.new, writer.uint32(10).fork()).ldelim();
    }
    if (message.cancel !== undefined) {
      CancelOrderMethods.encode(message.cancel, writer.uint32(18).fork()).ldelim();
    }
    if (message.modify !== undefined) {
      ModifyOrderMethods.encode(message.modify, writer.uint32(26).fork()).ldelim();
    }
    if (message.heartbeat !== undefined) {
      HeartbeatMethods.encode(message.heartbeat, writer.uint32(34).fork()).ldelim();
    }
    if (message.mc !== undefined) {
      MassCancelMethods.encode(message.mc, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.new = NewOrderMethods.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cancel = CancelOrderMethods.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.modify = ModifyOrderMethods.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.heartbeat = HeartbeatMethods.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.mc = MassCancelMethods.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OrderRequest {
    return {
      new: isSet(object.new) ? NewOrderMethods.fromJSON(object.new) : undefined,
      cancel: isSet(object.cancel) ? CancelOrderMethods.fromJSON(object.cancel) : undefined,
      modify: isSet(object.modify) ? ModifyOrderMethods.fromJSON(object.modify) : undefined,
      heartbeat: isSet(object.heartbeat) ? HeartbeatMethods.fromJSON(object.heartbeat) : undefined,
      mc: isSet(object.mc) ? MassCancelMethods.fromJSON(object.mc) : undefined,
    };
  },

  toJSON(message: OrderRequest): unknown {
    const obj: any = {};
    message.new !== undefined && (obj.new = message.new ? NewOrderMethods.toJSON(message.new) : undefined);
    message.cancel !== undefined && (obj.cancel = message.cancel ? CancelOrderMethods.toJSON(message.cancel) : undefined);
    message.modify !== undefined && (obj.modify = message.modify ? ModifyOrderMethods.toJSON(message.modify) : undefined);
    message.heartbeat !== undefined &&
      (obj.heartbeat = message.heartbeat ? HeartbeatMethods.toJSON(message.heartbeat) : undefined);
    message.mc !== undefined && (obj.mc = message.mc ? MassCancelMethods.toJSON(message.mc) : undefined);
    return obj;
  },
};

function createBaseNewOrder(): NewOrder {
  return {
    clientOrderId: BigInt("0"),
    requestId: BigInt("0"),
    marketId: BigInt("0"),
    price: undefined,
    quantity: BigInt("0"),
    side: 0,
    timeInForce: 0,
    orderType: 0,
    subaccountId: BigInt("0"),
    selfTradePrevention: undefined,
    postOnly: 0,
    cancelOnDisconnect: false,
  };
}

export const NewOrderMethods = {
  encode(message: NewOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientOrderId !== BigInt("0")) {
      writer.uint32(8).uint64(message.clientOrderId.toString());
    }
    if (message.requestId !== BigInt("0")) {
      writer.uint32(16).uint64(message.requestId.toString());
    }
    if (message.marketId !== BigInt("0")) {
      writer.uint32(24).uint64(message.marketId.toString());
    }
    if (message.price !== undefined) {
      writer.uint32(32).uint64(message.price.toString());
    }
    if (message.quantity !== BigInt("0")) {
      writer.uint32(40).uint64(message.quantity.toString());
    }
    if (message.side !== 0) {
      writer.uint32(48).int32(message.side);
    }
    if (message.timeInForce !== 0) {
      writer.uint32(56).int32(message.timeInForce);
    }
    if (message.orderType !== 0) {
      writer.uint32(64).int32(message.orderType);
    }
    if (message.subaccountId !== BigInt("0")) {
      writer.uint32(72).uint64(message.subaccountId.toString());
    }
    if (message.selfTradePrevention !== undefined) {
      writer.uint32(80).int32(message.selfTradePrevention);
    }
    if (message.postOnly !== 0) {
      writer.uint32(88).int32(message.postOnly);
    }
    if (message.cancelOnDisconnect === true) {
      writer.uint32(96).bool(message.cancelOnDisconnect);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewOrder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.clientOrderId = longToBigint(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.requestId = longToBigint(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.marketId = longToBigint(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.price = longToBigint(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.quantity = longToBigint(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.side = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.timeInForce = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.orderType = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.subaccountId = longToBigint(reader.uint64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.selfTradePrevention = reader.int32() as any;
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.postOnly = reader.int32() as any;
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.cancelOnDisconnect = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NewOrder {
    return {
      clientOrderId: isSet(object.clientOrderId) ? BigInt(object.clientOrderId) : BigInt("0"),
      requestId: isSet(object.requestId) ? BigInt(object.requestId) : BigInt("0"),
      marketId: isSet(object.marketId) ? BigInt(object.marketId) : BigInt("0"),
      price: isSet(object.price) ? BigInt(object.price) : undefined,
      quantity: isSet(object.quantity) ? BigInt(object.quantity) : BigInt("0"),
      side: isSet(object.side) ? sideFromJSON(object.side) : 0,
      timeInForce: isSet(object.timeInForce) ? timeInForceFromJSON(object.timeInForce) : 0,
      orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : 0,
      subaccountId: isSet(object.subaccountId) ? BigInt(object.subaccountId) : BigInt("0"),
      selfTradePrevention: isSet(object.selfTradePrevention)
        ? selfTradePreventionFromJSON(object.selfTradePrevention)
        : undefined,
      postOnly: isSet(object.postOnly) ? postOnlyFromJSON(object.postOnly) : 0,
      cancelOnDisconnect: isSet(object.cancelOnDisconnect) ? Boolean(object.cancelOnDisconnect) : false,
    };
  },

  toJSON(message: NewOrder): unknown {
    const obj: any = {};
    message.clientOrderId !== undefined && (obj.clientOrderId = message.clientOrderId.toString());
    message.requestId !== undefined && (obj.requestId = message.requestId.toString());
    message.marketId !== undefined && (obj.marketId = message.marketId.toString());
    message.price !== undefined && (obj.price = message.price.toString());
    message.quantity !== undefined && (obj.quantity = message.quantity.toString());
    message.side !== undefined && (obj.side = sideToJSON(message.side));
    message.timeInForce !== undefined && (obj.timeInForce = timeInForceToJSON(message.timeInForce));
    message.orderType !== undefined && (obj.orderType = orderTypeToJSON(message.orderType));
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId.toString());
    message.selfTradePrevention !== undefined && (obj.selfTradePrevention = message.selfTradePrevention !== undefined
      ? selfTradePreventionToJSON(message.selfTradePrevention)
      : undefined);
    message.postOnly !== undefined && (obj.postOnly = postOnlyToJSON(message.postOnly));
    message.cancelOnDisconnect !== undefined && (obj.cancelOnDisconnect = message.cancelOnDisconnect);
    return obj;
  },
};

function createBaseCancelOrder(): CancelOrder {
  return { marketId: BigInt("0"), clientOrderId: BigInt("0"), requestId: BigInt("0"), subaccountId: BigInt("0") };
}

export const CancelOrderMethods = {
  encode(message: CancelOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== BigInt("0")) {
      writer.uint32(8).uint64(message.marketId.toString());
    }
    if (message.clientOrderId !== BigInt("0")) {
      writer.uint32(16).uint64(message.clientOrderId.toString());
    }
    if (message.requestId !== BigInt("0")) {
      writer.uint32(24).uint64(message.requestId.toString());
    }
    if (message.subaccountId !== BigInt("0")) {
      writer.uint32(32).uint64(message.subaccountId.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelOrder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.marketId = longToBigint(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.clientOrderId = longToBigint(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.requestId = longToBigint(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.subaccountId = longToBigint(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CancelOrder {
    return {
      marketId: isSet(object.marketId) ? BigInt(object.marketId) : BigInt("0"),
      clientOrderId: isSet(object.clientOrderId) ? BigInt(object.clientOrderId) : BigInt("0"),
      requestId: isSet(object.requestId) ? BigInt(object.requestId) : BigInt("0"),
      subaccountId: isSet(object.subaccountId) ? BigInt(object.subaccountId) : BigInt("0"),
    };
  },

  toJSON(message: CancelOrder): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId.toString());
    message.clientOrderId !== undefined && (obj.clientOrderId = message.clientOrderId.toString());
    message.requestId !== undefined && (obj.requestId = message.requestId.toString());
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId.toString());
    return obj;
  },
};

function createBaseModifyOrder(): ModifyOrder {
  return {
    marketId: BigInt("0"),
    clientOrderId: BigInt("0"),
    requestId: BigInt("0"),
    newPrice: BigInt("0"),
    newQuantity: BigInt("0"),
    subaccountId: BigInt("0"),
    selfTradePrevention: undefined,
    postOnly: 0,
  };
}

export const ModifyOrderMethods = {
  encode(message: ModifyOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== BigInt("0")) {
      writer.uint32(8).uint64(message.marketId.toString());
    }
    if (message.clientOrderId !== BigInt("0")) {
      writer.uint32(16).uint64(message.clientOrderId.toString());
    }
    if (message.requestId !== BigInt("0")) {
      writer.uint32(24).uint64(message.requestId.toString());
    }
    if (message.newPrice !== BigInt("0")) {
      writer.uint32(32).uint64(message.newPrice.toString());
    }
    if (message.newQuantity !== BigInt("0")) {
      writer.uint32(40).uint64(message.newQuantity.toString());
    }
    if (message.subaccountId !== BigInt("0")) {
      writer.uint32(48).uint64(message.subaccountId.toString());
    }
    if (message.selfTradePrevention !== undefined) {
      writer.uint32(56).int32(message.selfTradePrevention);
    }
    if (message.postOnly !== 0) {
      writer.uint32(64).int32(message.postOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModifyOrder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModifyOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.marketId = longToBigint(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.clientOrderId = longToBigint(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.requestId = longToBigint(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.newPrice = longToBigint(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.newQuantity = longToBigint(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.subaccountId = longToBigint(reader.uint64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.selfTradePrevention = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.postOnly = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ModifyOrder {
    return {
      marketId: isSet(object.marketId) ? BigInt(object.marketId) : BigInt("0"),
      clientOrderId: isSet(object.clientOrderId) ? BigInt(object.clientOrderId) : BigInt("0"),
      requestId: isSet(object.requestId) ? BigInt(object.requestId) : BigInt("0"),
      newPrice: isSet(object.newPrice) ? BigInt(object.newPrice) : BigInt("0"),
      newQuantity: isSet(object.newQuantity) ? BigInt(object.newQuantity) : BigInt("0"),
      subaccountId: isSet(object.subaccountId) ? BigInt(object.subaccountId) : BigInt("0"),
      selfTradePrevention: isSet(object.selfTradePrevention)
        ? selfTradePreventionFromJSON(object.selfTradePrevention)
        : undefined,
      postOnly: isSet(object.postOnly) ? postOnlyFromJSON(object.postOnly) : 0,
    };
  },

  toJSON(message: ModifyOrder): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId.toString());
    message.clientOrderId !== undefined && (obj.clientOrderId = message.clientOrderId.toString());
    message.requestId !== undefined && (obj.requestId = message.requestId.toString());
    message.newPrice !== undefined && (obj.newPrice = message.newPrice.toString());
    message.newQuantity !== undefined && (obj.newQuantity = message.newQuantity.toString());
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId.toString());
    message.selfTradePrevention !== undefined && (obj.selfTradePrevention = message.selfTradePrevention !== undefined
      ? selfTradePreventionToJSON(message.selfTradePrevention)
      : undefined);
    message.postOnly !== undefined && (obj.postOnly = postOnlyToJSON(message.postOnly));
    return obj;
  },
};

function createBaseMassCancel(): MassCancel {
  return { subaccountId: BigInt("0"), requestId: BigInt("0"), marketId: undefined, side: undefined };
}

export const MassCancelMethods = {
  encode(message: MassCancel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== BigInt("0")) {
      writer.uint32(8).uint64(message.subaccountId.toString());
    }
    if (message.requestId !== BigInt("0")) {
      writer.uint32(16).uint64(message.requestId.toString());
    }
    if (message.marketId !== undefined) {
      writer.uint32(24).uint64(message.marketId.toString());
    }
    if (message.side !== undefined) {
      writer.uint32(32).int32(message.side);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MassCancel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMassCancel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.subaccountId = longToBigint(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.requestId = longToBigint(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.marketId = longToBigint(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.side = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MassCancel {
    return {
      subaccountId: isSet(object.subaccountId) ? BigInt(object.subaccountId) : BigInt("0"),
      requestId: isSet(object.requestId) ? BigInt(object.requestId) : BigInt("0"),
      marketId: isSet(object.marketId) ? BigInt(object.marketId) : undefined,
      side: isSet(object.side) ? sideFromJSON(object.side) : undefined,
    };
  },

  toJSON(message: MassCancel): unknown {
    const obj: any = {};
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId.toString());
    message.requestId !== undefined && (obj.requestId = message.requestId.toString());
    message.marketId !== undefined && (obj.marketId = message.marketId.toString());
    message.side !== undefined && (obj.side = message.side !== undefined ? sideToJSON(message.side) : undefined);
    return obj;
  },
};

function createBaseHeartbeat(): Heartbeat {
  return { requestId: BigInt("0"), timestamp: BigInt("0") };
}

export const HeartbeatMethods = {
  encode(message: Heartbeat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestId !== BigInt("0")) {
      writer.uint32(8).uint64(message.requestId.toString());
    }
    if (message.timestamp !== BigInt("0")) {
      writer.uint32(16).uint64(message.timestamp.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Heartbeat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeartbeat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.requestId = longToBigint(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.timestamp = longToBigint(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Heartbeat {
    return {
      requestId: isSet(object.requestId) ? BigInt(object.requestId) : BigInt("0"),
      timestamp: isSet(object.timestamp) ? BigInt(object.timestamp) : BigInt("0"),
    };
  },

  toJSON(message: Heartbeat): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId.toString());
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toString());
    return obj;
  },
};

function createBaseOrderResponse(): OrderResponse {
  return {
    newAck: undefined,
    cancelAck: undefined,
    modifyAck: undefined,
    newReject: undefined,
    cancelReject: undefined,
    modifyReject: undefined,
    fill: undefined,
    heartbeat: undefined,
    position: undefined,
    massCancelAck: undefined,
  };
}

export const OrderResponseMethods = {
  encode(message: OrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newAck !== undefined) {
      NewOrderAckMethods.encode(message.newAck, writer.uint32(10).fork()).ldelim();
    }
    if (message.cancelAck !== undefined) {
      CancelOrderAckMethods.encode(message.cancelAck, writer.uint32(18).fork()).ldelim();
    }
    if (message.modifyAck !== undefined) {
      ModifyOrderAckMethods.encode(message.modifyAck, writer.uint32(26).fork()).ldelim();
    }
    if (message.newReject !== undefined) {
      NewOrderRejectMethods.encode(message.newReject, writer.uint32(34).fork()).ldelim();
    }
    if (message.cancelReject !== undefined) {
      CancelOrderRejectMethods.encode(message.cancelReject, writer.uint32(42).fork()).ldelim();
    }
    if (message.modifyReject !== undefined) {
      ModifyOrderRejectMethods.encode(message.modifyReject, writer.uint32(50).fork()).ldelim();
    }
    if (message.fill !== undefined) {
      FillMethods.encode(message.fill, writer.uint32(58).fork()).ldelim();
    }
    if (message.heartbeat !== undefined) {
      HeartbeatMethods.encode(message.heartbeat, writer.uint32(66).fork()).ldelim();
    }
    if (message.position !== undefined) {
      AssetPositionMethods.encode(message.position, writer.uint32(74).fork()).ldelim();
    }
    if (message.massCancelAck !== undefined) {
      MassCancelAckMethods.encode(message.massCancelAck, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.newAck = NewOrderAckMethods.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cancelAck = CancelOrderAckMethods.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.modifyAck = ModifyOrderAckMethods.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.newReject = NewOrderRejectMethods.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.cancelReject = CancelOrderRejectMethods.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.modifyReject = ModifyOrderRejectMethods.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.fill = FillMethods.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.heartbeat = HeartbeatMethods.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.position = AssetPositionMethods.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.massCancelAck = MassCancelAckMethods.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OrderResponse {
    return {
      newAck: isSet(object.newAck) ? NewOrderAckMethods.fromJSON(object.newAck) : undefined,
      cancelAck: isSet(object.cancelAck) ? CancelOrderAckMethods.fromJSON(object.cancelAck) : undefined,
      modifyAck: isSet(object.modifyAck) ? ModifyOrderAckMethods.fromJSON(object.modifyAck) : undefined,
      newReject: isSet(object.newReject) ? NewOrderRejectMethods.fromJSON(object.newReject) : undefined,
      cancelReject: isSet(object.cancelReject) ? CancelOrderRejectMethods.fromJSON(object.cancelReject) : undefined,
      modifyReject: isSet(object.modifyReject) ? ModifyOrderRejectMethods.fromJSON(object.modifyReject) : undefined,
      fill: isSet(object.fill) ? FillMethods.fromJSON(object.fill) : undefined,
      heartbeat: isSet(object.heartbeat) ? HeartbeatMethods.fromJSON(object.heartbeat) : undefined,
      position: isSet(object.position) ? AssetPositionMethods.fromJSON(object.position) : undefined,
      massCancelAck: isSet(object.massCancelAck) ? MassCancelAckMethods.fromJSON(object.massCancelAck) : undefined,
    };
  },

  toJSON(message: OrderResponse): unknown {
    const obj: any = {};
    message.newAck !== undefined && (obj.newAck = message.newAck ? NewOrderAckMethods.toJSON(message.newAck) : undefined);
    message.cancelAck !== undefined &&
      (obj.cancelAck = message.cancelAck ? CancelOrderAckMethods.toJSON(message.cancelAck) : undefined);
    message.modifyAck !== undefined &&
      (obj.modifyAck = message.modifyAck ? ModifyOrderAckMethods.toJSON(message.modifyAck) : undefined);
    message.newReject !== undefined &&
      (obj.newReject = message.newReject ? NewOrderRejectMethods.toJSON(message.newReject) : undefined);
    message.cancelReject !== undefined &&
      (obj.cancelReject = message.cancelReject ? CancelOrderRejectMethods.toJSON(message.cancelReject) : undefined);
    message.modifyReject !== undefined &&
      (obj.modifyReject = message.modifyReject ? ModifyOrderRejectMethods.toJSON(message.modifyReject) : undefined);
    message.fill !== undefined && (obj.fill = message.fill ? FillMethods.toJSON(message.fill) : undefined);
    message.heartbeat !== undefined &&
      (obj.heartbeat = message.heartbeat ? HeartbeatMethods.toJSON(message.heartbeat) : undefined);
    message.position !== undefined &&
      (obj.position = message.position ? AssetPositionMethods.toJSON(message.position) : undefined);
    message.massCancelAck !== undefined &&
      (obj.massCancelAck = message.massCancelAck ? MassCancelAckMethods.toJSON(message.massCancelAck) : undefined);
    return obj;
  },
};

function createBaseNewOrderAck(): NewOrderAck {
  return {
    msgSeqNum: BigInt("0"),
    clientOrderId: BigInt("0"),
    requestId: BigInt("0"),
    exchangeOrderId: BigInt("0"),
    marketId: BigInt("0"),
    price: undefined,
    quantity: BigInt("0"),
    side: 0,
    timeInForce: 0,
    orderType: 0,
    transactTime: BigInt("0"),
    subaccountId: BigInt("0"),
    cancelOnDisconnect: false,
  };
}

export const NewOrderAckMethods = {
  encode(message: NewOrderAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgSeqNum !== BigInt("0")) {
      writer.uint32(8).uint64(message.msgSeqNum.toString());
    }
    if (message.clientOrderId !== BigInt("0")) {
      writer.uint32(16).uint64(message.clientOrderId.toString());
    }
    if (message.requestId !== BigInt("0")) {
      writer.uint32(24).uint64(message.requestId.toString());
    }
    if (message.exchangeOrderId !== BigInt("0")) {
      writer.uint32(32).uint64(message.exchangeOrderId.toString());
    }
    if (message.marketId !== BigInt("0")) {
      writer.uint32(40).uint64(message.marketId.toString());
    }
    if (message.price !== undefined) {
      writer.uint32(48).uint64(message.price.toString());
    }
    if (message.quantity !== BigInt("0")) {
      writer.uint32(56).uint64(message.quantity.toString());
    }
    if (message.side !== 0) {
      writer.uint32(64).int32(message.side);
    }
    if (message.timeInForce !== 0) {
      writer.uint32(72).int32(message.timeInForce);
    }
    if (message.orderType !== 0) {
      writer.uint32(80).int32(message.orderType);
    }
    if (message.transactTime !== BigInt("0")) {
      writer.uint32(88).uint64(message.transactTime.toString());
    }
    if (message.subaccountId !== BigInt("0")) {
      writer.uint32(96).uint64(message.subaccountId.toString());
    }
    if (message.cancelOnDisconnect === true) {
      writer.uint32(104).bool(message.cancelOnDisconnect);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewOrderAck {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewOrderAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.msgSeqNum = longToBigint(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.clientOrderId = longToBigint(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.requestId = longToBigint(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.exchangeOrderId = longToBigint(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.marketId = longToBigint(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.price = longToBigint(reader.uint64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.quantity = longToBigint(reader.uint64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.side = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.timeInForce = reader.int32() as any;
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.orderType = reader.int32() as any;
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.transactTime = longToBigint(reader.uint64() as Long);
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.subaccountId = longToBigint(reader.uint64() as Long);
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.cancelOnDisconnect = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NewOrderAck {
    return {
      msgSeqNum: isSet(object.msgSeqNum) ? BigInt(object.msgSeqNum) : BigInt("0"),
      clientOrderId: isSet(object.clientOrderId) ? BigInt(object.clientOrderId) : BigInt("0"),
      requestId: isSet(object.requestId) ? BigInt(object.requestId) : BigInt("0"),
      exchangeOrderId: isSet(object.exchangeOrderId) ? BigInt(object.exchangeOrderId) : BigInt("0"),
      marketId: isSet(object.marketId) ? BigInt(object.marketId) : BigInt("0"),
      price: isSet(object.price) ? BigInt(object.price) : undefined,
      quantity: isSet(object.quantity) ? BigInt(object.quantity) : BigInt("0"),
      side: isSet(object.side) ? sideFromJSON(object.side) : 0,
      timeInForce: isSet(object.timeInForce) ? timeInForceFromJSON(object.timeInForce) : 0,
      orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : 0,
      transactTime: isSet(object.transactTime) ? BigInt(object.transactTime) : BigInt("0"),
      subaccountId: isSet(object.subaccountId) ? BigInt(object.subaccountId) : BigInt("0"),
      cancelOnDisconnect: isSet(object.cancelOnDisconnect) ? Boolean(object.cancelOnDisconnect) : false,
    };
  },

  toJSON(message: NewOrderAck): unknown {
    const obj: any = {};
    message.msgSeqNum !== undefined && (obj.msgSeqNum = message.msgSeqNum.toString());
    message.clientOrderId !== undefined && (obj.clientOrderId = message.clientOrderId.toString());
    message.requestId !== undefined && (obj.requestId = message.requestId.toString());
    message.exchangeOrderId !== undefined && (obj.exchangeOrderId = message.exchangeOrderId.toString());
    message.marketId !== undefined && (obj.marketId = message.marketId.toString());
    message.price !== undefined && (obj.price = message.price.toString());
    message.quantity !== undefined && (obj.quantity = message.quantity.toString());
    message.side !== undefined && (obj.side = sideToJSON(message.side));
    message.timeInForce !== undefined && (obj.timeInForce = timeInForceToJSON(message.timeInForce));
    message.orderType !== undefined && (obj.orderType = orderTypeToJSON(message.orderType));
    message.transactTime !== undefined && (obj.transactTime = message.transactTime.toString());
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId.toString());
    message.cancelOnDisconnect !== undefined && (obj.cancelOnDisconnect = message.cancelOnDisconnect);
    return obj;
  },
};

function createBaseCancelOrderAck(): CancelOrderAck {
  return {
    msgSeqNum: BigInt("0"),
    clientOrderId: BigInt("0"),
    requestId: BigInt("0"),
    transactTime: BigInt("0"),
    subaccountId: BigInt("0"),
    reason: 0,
    marketId: BigInt("0"),
    exchangeOrderId: BigInt("0"),
  };
}

export const CancelOrderAckMethods = {
  encode(message: CancelOrderAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgSeqNum !== BigInt("0")) {
      writer.uint32(8).uint64(message.msgSeqNum.toString());
    }
    if (message.clientOrderId !== BigInt("0")) {
      writer.uint32(16).uint64(message.clientOrderId.toString());
    }
    if (message.requestId !== BigInt("0")) {
      writer.uint32(24).uint64(message.requestId.toString());
    }
    if (message.transactTime !== BigInt("0")) {
      writer.uint32(32).uint64(message.transactTime.toString());
    }
    if (message.subaccountId !== BigInt("0")) {
      writer.uint32(40).uint64(message.subaccountId.toString());
    }
    if (message.reason !== 0) {
      writer.uint32(48).int32(message.reason);
    }
    if (message.marketId !== BigInt("0")) {
      writer.uint32(56).uint64(message.marketId.toString());
    }
    if (message.exchangeOrderId !== BigInt("0")) {
      writer.uint32(64).uint64(message.exchangeOrderId.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelOrderAck {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelOrderAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.msgSeqNum = longToBigint(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.clientOrderId = longToBigint(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.requestId = longToBigint(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.transactTime = longToBigint(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.subaccountId = longToBigint(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.reason = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.marketId = longToBigint(reader.uint64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.exchangeOrderId = longToBigint(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CancelOrderAck {
    return {
      msgSeqNum: isSet(object.msgSeqNum) ? BigInt(object.msgSeqNum) : BigInt("0"),
      clientOrderId: isSet(object.clientOrderId) ? BigInt(object.clientOrderId) : BigInt("0"),
      requestId: isSet(object.requestId) ? BigInt(object.requestId) : BigInt("0"),
      transactTime: isSet(object.transactTime) ? BigInt(object.transactTime) : BigInt("0"),
      subaccountId: isSet(object.subaccountId) ? BigInt(object.subaccountId) : BigInt("0"),
      reason: isSet(object.reason) ? cancelOrderAck_ReasonFromJSON(object.reason) : 0,
      marketId: isSet(object.marketId) ? BigInt(object.marketId) : BigInt("0"),
      exchangeOrderId: isSet(object.exchangeOrderId) ? BigInt(object.exchangeOrderId) : BigInt("0"),
    };
  },

  toJSON(message: CancelOrderAck): unknown {
    const obj: any = {};
    message.msgSeqNum !== undefined && (obj.msgSeqNum = message.msgSeqNum.toString());
    message.clientOrderId !== undefined && (obj.clientOrderId = message.clientOrderId.toString());
    message.requestId !== undefined && (obj.requestId = message.requestId.toString());
    message.transactTime !== undefined && (obj.transactTime = message.transactTime.toString());
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId.toString());
    message.reason !== undefined && (obj.reason = cancelOrderAck_ReasonToJSON(message.reason));
    message.marketId !== undefined && (obj.marketId = message.marketId.toString());
    message.exchangeOrderId !== undefined && (obj.exchangeOrderId = message.exchangeOrderId.toString());
    return obj;
  },
};

function createBaseModifyOrderAck(): ModifyOrderAck {
  return {
    msgSeqNum: BigInt("0"),
    clientOrderId: BigInt("0"),
    requestId: BigInt("0"),
    transactTime: BigInt("0"),
    remainingQuantity: BigInt("0"),
    subaccountId: BigInt("0"),
    marketId: BigInt("0"),
    price: BigInt("0"),
    quantity: BigInt("0"),
    cumulativeQuantity: BigInt("0"),
    exchangeOrderId: BigInt("0"),
  };
}

export const ModifyOrderAckMethods = {
  encode(message: ModifyOrderAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgSeqNum !== BigInt("0")) {
      writer.uint32(8).uint64(message.msgSeqNum.toString());
    }
    if (message.clientOrderId !== BigInt("0")) {
      writer.uint32(16).uint64(message.clientOrderId.toString());
    }
    if (message.requestId !== BigInt("0")) {
      writer.uint32(24).uint64(message.requestId.toString());
    }
    if (message.transactTime !== BigInt("0")) {
      writer.uint32(32).uint64(message.transactTime.toString());
    }
    if (message.remainingQuantity !== BigInt("0")) {
      writer.uint32(40).uint64(message.remainingQuantity.toString());
    }
    if (message.subaccountId !== BigInt("0")) {
      writer.uint32(48).uint64(message.subaccountId.toString());
    }
    if (message.marketId !== BigInt("0")) {
      writer.uint32(56).uint64(message.marketId.toString());
    }
    if (message.price !== BigInt("0")) {
      writer.uint32(64).uint64(message.price.toString());
    }
    if (message.quantity !== BigInt("0")) {
      writer.uint32(72).uint64(message.quantity.toString());
    }
    if (message.cumulativeQuantity !== BigInt("0")) {
      writer.uint32(80).uint64(message.cumulativeQuantity.toString());
    }
    if (message.exchangeOrderId !== BigInt("0")) {
      writer.uint32(88).uint64(message.exchangeOrderId.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModifyOrderAck {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModifyOrderAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.msgSeqNum = longToBigint(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.clientOrderId = longToBigint(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.requestId = longToBigint(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.transactTime = longToBigint(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.remainingQuantity = longToBigint(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.subaccountId = longToBigint(reader.uint64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.marketId = longToBigint(reader.uint64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.price = longToBigint(reader.uint64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.quantity = longToBigint(reader.uint64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.cumulativeQuantity = longToBigint(reader.uint64() as Long);
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.exchangeOrderId = longToBigint(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ModifyOrderAck {
    return {
      msgSeqNum: isSet(object.msgSeqNum) ? BigInt(object.msgSeqNum) : BigInt("0"),
      clientOrderId: isSet(object.clientOrderId) ? BigInt(object.clientOrderId) : BigInt("0"),
      requestId: isSet(object.requestId) ? BigInt(object.requestId) : BigInt("0"),
      transactTime: isSet(object.transactTime) ? BigInt(object.transactTime) : BigInt("0"),
      remainingQuantity: isSet(object.remainingQuantity) ? BigInt(object.remainingQuantity) : BigInt("0"),
      subaccountId: isSet(object.subaccountId) ? BigInt(object.subaccountId) : BigInt("0"),
      marketId: isSet(object.marketId) ? BigInt(object.marketId) : BigInt("0"),
      price: isSet(object.price) ? BigInt(object.price) : BigInt("0"),
      quantity: isSet(object.quantity) ? BigInt(object.quantity) : BigInt("0"),
      cumulativeQuantity: isSet(object.cumulativeQuantity) ? BigInt(object.cumulativeQuantity) : BigInt("0"),
      exchangeOrderId: isSet(object.exchangeOrderId) ? BigInt(object.exchangeOrderId) : BigInt("0"),
    };
  },

  toJSON(message: ModifyOrderAck): unknown {
    const obj: any = {};
    message.msgSeqNum !== undefined && (obj.msgSeqNum = message.msgSeqNum.toString());
    message.clientOrderId !== undefined && (obj.clientOrderId = message.clientOrderId.toString());
    message.requestId !== undefined && (obj.requestId = message.requestId.toString());
    message.transactTime !== undefined && (obj.transactTime = message.transactTime.toString());
    message.remainingQuantity !== undefined && (obj.remainingQuantity = message.remainingQuantity.toString());
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId.toString());
    message.marketId !== undefined && (obj.marketId = message.marketId.toString());
    message.price !== undefined && (obj.price = message.price.toString());
    message.quantity !== undefined && (obj.quantity = message.quantity.toString());
    message.cumulativeQuantity !== undefined && (obj.cumulativeQuantity = message.cumulativeQuantity.toString());
    message.exchangeOrderId !== undefined && (obj.exchangeOrderId = message.exchangeOrderId.toString());
    return obj;
  },
};

function createBaseMassCancelAck(): MassCancelAck {
  return {
    msgSeqNum: BigInt("0"),
    subaccountId: BigInt("0"),
    requestId: BigInt("0"),
    transactTime: BigInt("0"),
    reason: undefined,
    totalAffectedOrders: 0,
  };
}

export const MassCancelAckMethods = {
  encode(message: MassCancelAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgSeqNum !== BigInt("0")) {
      writer.uint32(8).uint64(message.msgSeqNum.toString());
    }
    if (message.subaccountId !== BigInt("0")) {
      writer.uint32(16).uint64(message.subaccountId.toString());
    }
    if (message.requestId !== BigInt("0")) {
      writer.uint32(24).uint64(message.requestId.toString());
    }
    if (message.transactTime !== BigInt("0")) {
      writer.uint32(32).uint64(message.transactTime.toString());
    }
    if (message.reason !== undefined) {
      writer.uint32(48).int32(message.reason);
    }
    if (message.totalAffectedOrders !== 0) {
      writer.uint32(56).uint32(message.totalAffectedOrders);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MassCancelAck {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMassCancelAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.msgSeqNum = longToBigint(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.subaccountId = longToBigint(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.requestId = longToBigint(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.transactTime = longToBigint(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.reason = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.totalAffectedOrders = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MassCancelAck {
    return {
      msgSeqNum: isSet(object.msgSeqNum) ? BigInt(object.msgSeqNum) : BigInt("0"),
      subaccountId: isSet(object.subaccountId) ? BigInt(object.subaccountId) : BigInt("0"),
      requestId: isSet(object.requestId) ? BigInt(object.requestId) : BigInt("0"),
      transactTime: isSet(object.transactTime) ? BigInt(object.transactTime) : BigInt("0"),
      reason: isSet(object.reason) ? massCancelAck_ReasonFromJSON(object.reason) : undefined,
      totalAffectedOrders: isSet(object.totalAffectedOrders) ? Number(object.totalAffectedOrders) : 0,
    };
  },

  toJSON(message: MassCancelAck): unknown {
    const obj: any = {};
    message.msgSeqNum !== undefined && (obj.msgSeqNum = message.msgSeqNum.toString());
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId.toString());
    message.requestId !== undefined && (obj.requestId = message.requestId.toString());
    message.transactTime !== undefined && (obj.transactTime = message.transactTime.toString());
    message.reason !== undefined &&
      (obj.reason = message.reason !== undefined ? massCancelAck_ReasonToJSON(message.reason) : undefined);
    message.totalAffectedOrders !== undefined && (obj.totalAffectedOrders = Math.round(message.totalAffectedOrders));
    return obj;
  },
};

function createBaseNewOrderReject(): NewOrderReject {
  return {
    msgSeqNum: BigInt("0"),
    clientOrderId: BigInt("0"),
    requestId: BigInt("0"),
    transactTime: BigInt("0"),
    subaccountId: BigInt("0"),
    reason: 0,
    marketId: BigInt("0"),
    price: undefined,
    quantity: BigInt("0"),
    side: 0,
    timeInForce: 0,
    orderType: 0,
  };
}

export const NewOrderRejectMethods = {
  encode(message: NewOrderReject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgSeqNum !== BigInt("0")) {
      writer.uint32(8).uint64(message.msgSeqNum.toString());
    }
    if (message.clientOrderId !== BigInt("0")) {
      writer.uint32(16).uint64(message.clientOrderId.toString());
    }
    if (message.requestId !== BigInt("0")) {
      writer.uint32(24).uint64(message.requestId.toString());
    }
    if (message.transactTime !== BigInt("0")) {
      writer.uint32(32).uint64(message.transactTime.toString());
    }
    if (message.subaccountId !== BigInt("0")) {
      writer.uint32(40).uint64(message.subaccountId.toString());
    }
    if (message.reason !== 0) {
      writer.uint32(48).int32(message.reason);
    }
    if (message.marketId !== BigInt("0")) {
      writer.uint32(56).uint64(message.marketId.toString());
    }
    if (message.price !== undefined) {
      writer.uint32(64).uint64(message.price.toString());
    }
    if (message.quantity !== BigInt("0")) {
      writer.uint32(72).uint64(message.quantity.toString());
    }
    if (message.side !== 0) {
      writer.uint32(80).int32(message.side);
    }
    if (message.timeInForce !== 0) {
      writer.uint32(88).int32(message.timeInForce);
    }
    if (message.orderType !== 0) {
      writer.uint32(96).int32(message.orderType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewOrderReject {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewOrderReject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.msgSeqNum = longToBigint(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.clientOrderId = longToBigint(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.requestId = longToBigint(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.transactTime = longToBigint(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.subaccountId = longToBigint(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.reason = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.marketId = longToBigint(reader.uint64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.price = longToBigint(reader.uint64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.quantity = longToBigint(reader.uint64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.side = reader.int32() as any;
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.timeInForce = reader.int32() as any;
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.orderType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NewOrderReject {
    return {
      msgSeqNum: isSet(object.msgSeqNum) ? BigInt(object.msgSeqNum) : BigInt("0"),
      clientOrderId: isSet(object.clientOrderId) ? BigInt(object.clientOrderId) : BigInt("0"),
      requestId: isSet(object.requestId) ? BigInt(object.requestId) : BigInt("0"),
      transactTime: isSet(object.transactTime) ? BigInt(object.transactTime) : BigInt("0"),
      subaccountId: isSet(object.subaccountId) ? BigInt(object.subaccountId) : BigInt("0"),
      reason: isSet(object.reason) ? newOrderReject_ReasonFromJSON(object.reason) : 0,
      marketId: isSet(object.marketId) ? BigInt(object.marketId) : BigInt("0"),
      price: isSet(object.price) ? BigInt(object.price) : undefined,
      quantity: isSet(object.quantity) ? BigInt(object.quantity) : BigInt("0"),
      side: isSet(object.side) ? sideFromJSON(object.side) : 0,
      timeInForce: isSet(object.timeInForce) ? timeInForceFromJSON(object.timeInForce) : 0,
      orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : 0,
    };
  },

  toJSON(message: NewOrderReject): unknown {
    const obj: any = {};
    message.msgSeqNum !== undefined && (obj.msgSeqNum = message.msgSeqNum.toString());
    message.clientOrderId !== undefined && (obj.clientOrderId = message.clientOrderId.toString());
    message.requestId !== undefined && (obj.requestId = message.requestId.toString());
    message.transactTime !== undefined && (obj.transactTime = message.transactTime.toString());
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId.toString());
    message.reason !== undefined && (obj.reason = newOrderReject_ReasonToJSON(message.reason));
    message.marketId !== undefined && (obj.marketId = message.marketId.toString());
    message.price !== undefined && (obj.price = message.price.toString());
    message.quantity !== undefined && (obj.quantity = message.quantity.toString());
    message.side !== undefined && (obj.side = sideToJSON(message.side));
    message.timeInForce !== undefined && (obj.timeInForce = timeInForceToJSON(message.timeInForce));
    message.orderType !== undefined && (obj.orderType = orderTypeToJSON(message.orderType));
    return obj;
  },
};

function createBaseCancelOrderReject(): CancelOrderReject {
  return {
    msgSeqNum: BigInt("0"),
    clientOrderId: BigInt("0"),
    requestId: BigInt("0"),
    transactTime: BigInt("0"),
    subaccountId: BigInt("0"),
    reason: 0,
    marketId: BigInt("0"),
  };
}

export const CancelOrderRejectMethods = {
  encode(message: CancelOrderReject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgSeqNum !== BigInt("0")) {
      writer.uint32(8).uint64(message.msgSeqNum.toString());
    }
    if (message.clientOrderId !== BigInt("0")) {
      writer.uint32(16).uint64(message.clientOrderId.toString());
    }
    if (message.requestId !== BigInt("0")) {
      writer.uint32(24).uint64(message.requestId.toString());
    }
    if (message.transactTime !== BigInt("0")) {
      writer.uint32(32).uint64(message.transactTime.toString());
    }
    if (message.subaccountId !== BigInt("0")) {
      writer.uint32(40).uint64(message.subaccountId.toString());
    }
    if (message.reason !== 0) {
      writer.uint32(48).int32(message.reason);
    }
    if (message.marketId !== BigInt("0")) {
      writer.uint32(56).uint64(message.marketId.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelOrderReject {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelOrderReject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.msgSeqNum = longToBigint(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.clientOrderId = longToBigint(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.requestId = longToBigint(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.transactTime = longToBigint(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.subaccountId = longToBigint(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.reason = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.marketId = longToBigint(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CancelOrderReject {
    return {
      msgSeqNum: isSet(object.msgSeqNum) ? BigInt(object.msgSeqNum) : BigInt("0"),
      clientOrderId: isSet(object.clientOrderId) ? BigInt(object.clientOrderId) : BigInt("0"),
      requestId: isSet(object.requestId) ? BigInt(object.requestId) : BigInt("0"),
      transactTime: isSet(object.transactTime) ? BigInt(object.transactTime) : BigInt("0"),
      subaccountId: isSet(object.subaccountId) ? BigInt(object.subaccountId) : BigInt("0"),
      reason: isSet(object.reason) ? cancelOrderReject_ReasonFromJSON(object.reason) : 0,
      marketId: isSet(object.marketId) ? BigInt(object.marketId) : BigInt("0"),
    };
  },

  toJSON(message: CancelOrderReject): unknown {
    const obj: any = {};
    message.msgSeqNum !== undefined && (obj.msgSeqNum = message.msgSeqNum.toString());
    message.clientOrderId !== undefined && (obj.clientOrderId = message.clientOrderId.toString());
    message.requestId !== undefined && (obj.requestId = message.requestId.toString());
    message.transactTime !== undefined && (obj.transactTime = message.transactTime.toString());
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId.toString());
    message.reason !== undefined && (obj.reason = cancelOrderReject_ReasonToJSON(message.reason));
    message.marketId !== undefined && (obj.marketId = message.marketId.toString());
    return obj;
  },
};

function createBaseModifyOrderReject(): ModifyOrderReject {
  return {
    msgSeqNum: BigInt("0"),
    clientOrderId: BigInt("0"),
    requestId: BigInt("0"),
    transactTime: BigInt("0"),
    subaccountId: BigInt("0"),
    reason: 0,
    marketId: BigInt("0"),
  };
}

export const ModifyOrderRejectMethods = {
  encode(message: ModifyOrderReject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgSeqNum !== BigInt("0")) {
      writer.uint32(8).uint64(message.msgSeqNum.toString());
    }
    if (message.clientOrderId !== BigInt("0")) {
      writer.uint32(16).uint64(message.clientOrderId.toString());
    }
    if (message.requestId !== BigInt("0")) {
      writer.uint32(24).uint64(message.requestId.toString());
    }
    if (message.transactTime !== BigInt("0")) {
      writer.uint32(32).uint64(message.transactTime.toString());
    }
    if (message.subaccountId !== BigInt("0")) {
      writer.uint32(40).uint64(message.subaccountId.toString());
    }
    if (message.reason !== 0) {
      writer.uint32(48).int32(message.reason);
    }
    if (message.marketId !== BigInt("0")) {
      writer.uint32(56).uint64(message.marketId.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModifyOrderReject {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModifyOrderReject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.msgSeqNum = longToBigint(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.clientOrderId = longToBigint(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.requestId = longToBigint(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.transactTime = longToBigint(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.subaccountId = longToBigint(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.reason = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.marketId = longToBigint(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ModifyOrderReject {
    return {
      msgSeqNum: isSet(object.msgSeqNum) ? BigInt(object.msgSeqNum) : BigInt("0"),
      clientOrderId: isSet(object.clientOrderId) ? BigInt(object.clientOrderId) : BigInt("0"),
      requestId: isSet(object.requestId) ? BigInt(object.requestId) : BigInt("0"),
      transactTime: isSet(object.transactTime) ? BigInt(object.transactTime) : BigInt("0"),
      subaccountId: isSet(object.subaccountId) ? BigInt(object.subaccountId) : BigInt("0"),
      reason: isSet(object.reason) ? modifyOrderReject_ReasonFromJSON(object.reason) : 0,
      marketId: isSet(object.marketId) ? BigInt(object.marketId) : BigInt("0"),
    };
  },

  toJSON(message: ModifyOrderReject): unknown {
    const obj: any = {};
    message.msgSeqNum !== undefined && (obj.msgSeqNum = message.msgSeqNum.toString());
    message.clientOrderId !== undefined && (obj.clientOrderId = message.clientOrderId.toString());
    message.requestId !== undefined && (obj.requestId = message.requestId.toString());
    message.transactTime !== undefined && (obj.transactTime = message.transactTime.toString());
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId.toString());
    message.reason !== undefined && (obj.reason = modifyOrderReject_ReasonToJSON(message.reason));
    message.marketId !== undefined && (obj.marketId = message.marketId.toString());
    return obj;
  },
};

function createBaseFill(): Fill {
  return {
    msgSeqNum: BigInt("0"),
    marketId: BigInt("0"),
    clientOrderId: BigInt("0"),
    exchangeOrderId: BigInt("0"),
    fillPrice: BigInt("0"),
    fillQuantity: BigInt("0"),
    leavesQuantity: BigInt("0"),
    transactTime: BigInt("0"),
    subaccountId: BigInt("0"),
    cumulativeQuantity: BigInt("0"),
    side: 0,
    aggressorIndicator: false,
    feeRatio: undefined,
    tradeId: BigInt("0"),
  };
}

export const FillMethods = {
  encode(message: Fill, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgSeqNum !== BigInt("0")) {
      writer.uint32(8).uint64(message.msgSeqNum.toString());
    }
    if (message.marketId !== BigInt("0")) {
      writer.uint32(16).uint64(message.marketId.toString());
    }
    if (message.clientOrderId !== BigInt("0")) {
      writer.uint32(24).uint64(message.clientOrderId.toString());
    }
    if (message.exchangeOrderId !== BigInt("0")) {
      writer.uint32(32).uint64(message.exchangeOrderId.toString());
    }
    if (message.fillPrice !== BigInt("0")) {
      writer.uint32(40).uint64(message.fillPrice.toString());
    }
    if (message.fillQuantity !== BigInt("0")) {
      writer.uint32(48).uint64(message.fillQuantity.toString());
    }
    if (message.leavesQuantity !== BigInt("0")) {
      writer.uint32(56).uint64(message.leavesQuantity.toString());
    }
    if (message.transactTime !== BigInt("0")) {
      writer.uint32(64).uint64(message.transactTime.toString());
    }
    if (message.subaccountId !== BigInt("0")) {
      writer.uint32(72).uint64(message.subaccountId.toString());
    }
    if (message.cumulativeQuantity !== BigInt("0")) {
      writer.uint32(80).uint64(message.cumulativeQuantity.toString());
    }
    if (message.side !== 0) {
      writer.uint32(88).int32(message.side);
    }
    if (message.aggressorIndicator === true) {
      writer.uint32(96).bool(message.aggressorIndicator);
    }
    if (message.feeRatio !== undefined) {
      FixedPointDecimalMethods.encode(message.feeRatio, writer.uint32(106).fork()).ldelim();
    }
    if (message.tradeId !== BigInt("0")) {
      writer.uint32(112).uint64(message.tradeId.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Fill {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFill();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.msgSeqNum = longToBigint(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.marketId = longToBigint(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.clientOrderId = longToBigint(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.exchangeOrderId = longToBigint(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.fillPrice = longToBigint(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.fillQuantity = longToBigint(reader.uint64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.leavesQuantity = longToBigint(reader.uint64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.transactTime = longToBigint(reader.uint64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.subaccountId = longToBigint(reader.uint64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.cumulativeQuantity = longToBigint(reader.uint64() as Long);
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.side = reader.int32() as any;
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.aggressorIndicator = reader.bool();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.feeRatio = FixedPointDecimalMethods.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.tradeId = longToBigint(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Fill {
    return {
      msgSeqNum: isSet(object.msgSeqNum) ? BigInt(object.msgSeqNum) : BigInt("0"),
      marketId: isSet(object.marketId) ? BigInt(object.marketId) : BigInt("0"),
      clientOrderId: isSet(object.clientOrderId) ? BigInt(object.clientOrderId) : BigInt("0"),
      exchangeOrderId: isSet(object.exchangeOrderId) ? BigInt(object.exchangeOrderId) : BigInt("0"),
      fillPrice: isSet(object.fillPrice) ? BigInt(object.fillPrice) : BigInt("0"),
      fillQuantity: isSet(object.fillQuantity) ? BigInt(object.fillQuantity) : BigInt("0"),
      leavesQuantity: isSet(object.leavesQuantity) ? BigInt(object.leavesQuantity) : BigInt("0"),
      transactTime: isSet(object.transactTime) ? BigInt(object.transactTime) : BigInt("0"),
      subaccountId: isSet(object.subaccountId) ? BigInt(object.subaccountId) : BigInt("0"),
      cumulativeQuantity: isSet(object.cumulativeQuantity) ? BigInt(object.cumulativeQuantity) : BigInt("0"),
      side: isSet(object.side) ? sideFromJSON(object.side) : 0,
      aggressorIndicator: isSet(object.aggressorIndicator) ? Boolean(object.aggressorIndicator) : false,
      feeRatio: isSet(object.feeRatio) ? FixedPointDecimalMethods.fromJSON(object.feeRatio) : undefined,
      tradeId: isSet(object.tradeId) ? BigInt(object.tradeId) : BigInt("0"),
    };
  },

  toJSON(message: Fill): unknown {
    const obj: any = {};
    message.msgSeqNum !== undefined && (obj.msgSeqNum = message.msgSeqNum.toString());
    message.marketId !== undefined && (obj.marketId = message.marketId.toString());
    message.clientOrderId !== undefined && (obj.clientOrderId = message.clientOrderId.toString());
    message.exchangeOrderId !== undefined && (obj.exchangeOrderId = message.exchangeOrderId.toString());
    message.fillPrice !== undefined && (obj.fillPrice = message.fillPrice.toString());
    message.fillQuantity !== undefined && (obj.fillQuantity = message.fillQuantity.toString());
    message.leavesQuantity !== undefined && (obj.leavesQuantity = message.leavesQuantity.toString());
    message.transactTime !== undefined && (obj.transactTime = message.transactTime.toString());
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId.toString());
    message.cumulativeQuantity !== undefined && (obj.cumulativeQuantity = message.cumulativeQuantity.toString());
    message.side !== undefined && (obj.side = sideToJSON(message.side));
    message.aggressorIndicator !== undefined && (obj.aggressorIndicator = message.aggressorIndicator);
    message.feeRatio !== undefined &&
      (obj.feeRatio = message.feeRatio ? FixedPointDecimalMethods.toJSON(message.feeRatio) : undefined);
    message.tradeId !== undefined && (obj.tradeId = message.tradeId.toString());
    return obj;
  },
};

function createBaseAssetPosition(): AssetPosition {
  return { subaccountId: BigInt("0"), assetId: BigInt("0"), total: undefined, available: undefined };
}

export const AssetPositionMethods = {
  encode(message: AssetPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== BigInt("0")) {
      writer.uint32(8).uint64(message.subaccountId.toString());
    }
    if (message.assetId !== BigInt("0")) {
      writer.uint32(16).uint64(message.assetId.toString());
    }
    if (message.total !== undefined) {
      RawUnitsMethods.encode(message.total, writer.uint32(26).fork()).ldelim();
    }
    if (message.available !== undefined) {
      RawUnitsMethods.encode(message.available, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.subaccountId = longToBigint(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.assetId = longToBigint(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.total = RawUnitsMethods.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.available = RawUnitsMethods.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssetPosition {
    return {
      subaccountId: isSet(object.subaccountId) ? BigInt(object.subaccountId) : BigInt("0"),
      assetId: isSet(object.assetId) ? BigInt(object.assetId) : BigInt("0"),
      total: isSet(object.total) ? RawUnitsMethods.fromJSON(object.total) : undefined,
      available: isSet(object.available) ? RawUnitsMethods.fromJSON(object.available) : undefined,
    };
  },

  toJSON(message: AssetPosition): unknown {
    const obj: any = {};
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId.toString());
    message.assetId !== undefined && (obj.assetId = message.assetId.toString());
    message.total !== undefined && (obj.total = message.total ? RawUnitsMethods.toJSON(message.total) : undefined);
    message.available !== undefined &&
      (obj.available = message.available ? RawUnitsMethods.toJSON(message.available) : undefined);
    return obj;
  },
};

function createBaseRawUnits(): RawUnits {
  return { word0: BigInt("0"), word1: BigInt("0"), word2: BigInt("0"), word3: BigInt("0") };
}

export const RawUnitsMethods = {
  encode(message: RawUnits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.word0 !== BigInt("0")) {
      writer.uint32(8).uint64(message.word0.toString());
    }
    if (message.word1 !== BigInt("0")) {
      writer.uint32(16).uint64(message.word1.toString());
    }
    if (message.word2 !== BigInt("0")) {
      writer.uint32(24).uint64(message.word2.toString());
    }
    if (message.word3 !== BigInt("0")) {
      writer.uint32(32).uint64(message.word3.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RawUnits {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRawUnits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.word0 = longToBigint(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.word1 = longToBigint(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.word2 = longToBigint(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.word3 = longToBigint(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RawUnits {
    return {
      word0: isSet(object.word0) ? BigInt(object.word0) : BigInt("0"),
      word1: isSet(object.word1) ? BigInt(object.word1) : BigInt("0"),
      word2: isSet(object.word2) ? BigInt(object.word2) : BigInt("0"),
      word3: isSet(object.word3) ? BigInt(object.word3) : BigInt("0"),
    };
  },

  toJSON(message: RawUnits): unknown {
    const obj: any = {};
    message.word0 !== undefined && (obj.word0 = message.word0.toString());
    message.word1 !== undefined && (obj.word1 = message.word1.toString());
    message.word2 !== undefined && (obj.word2 = message.word2.toString());
    message.word3 !== undefined && (obj.word3 = message.word3.toString());
    return obj;
  },
};

function createBaseBootstrap(): Bootstrap {
  return { done: undefined, resting: undefined, position: undefined };
}

export const BootstrapMethods = {
  encode(message: Bootstrap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.done !== undefined) {
      DoneMethods.encode(message.done, writer.uint32(10).fork()).ldelim();
    }
    if (message.resting !== undefined) {
      RestingOrdersMethods.encode(message.resting, writer.uint32(18).fork()).ldelim();
    }
    if (message.position !== undefined) {
      AssetPositionsMethods.encode(message.position, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bootstrap {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBootstrap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.done = DoneMethods.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resting = RestingOrdersMethods.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.position = AssetPositionsMethods.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Bootstrap {
    return {
      done: isSet(object.done) ? DoneMethods.fromJSON(object.done) : undefined,
      resting: isSet(object.resting) ? RestingOrdersMethods.fromJSON(object.resting) : undefined,
      position: isSet(object.position) ? AssetPositionsMethods.fromJSON(object.position) : undefined,
    };
  },

  toJSON(message: Bootstrap): unknown {
    const obj: any = {};
    message.done !== undefined && (obj.done = message.done ? DoneMethods.toJSON(message.done) : undefined);
    message.resting !== undefined &&
      (obj.resting = message.resting ? RestingOrdersMethods.toJSON(message.resting) : undefined);
    message.position !== undefined &&
      (obj.position = message.position ? AssetPositionsMethods.toJSON(message.position) : undefined);
    return obj;
  },
};

function createBaseRestingOrders(): RestingOrders {
  return { orders: [] };
}

export const RestingOrdersMethods = {
  encode(message: RestingOrders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      RestingOrderMethods.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestingOrders {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRestingOrders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orders.push(RestingOrderMethods.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RestingOrders {
    return { orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => RestingOrderMethods.fromJSON(e)) : [] };
  },

  toJSON(message: RestingOrders): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map((e) => e ? RestingOrderMethods.toJSON(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },
};

function createBaseAssetPositions(): AssetPositions {
  return { positions: [] };
}

export const AssetPositionsMethods = {
  encode(message: AssetPositions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.positions) {
      AssetPositionMethods.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetPositions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetPositions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.positions.push(AssetPositionMethods.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssetPositions {
    return {
      positions: Array.isArray(object?.positions) ? object.positions.map((e: any) => AssetPositionMethods.fromJSON(e)) : [],
    };
  },

  toJSON(message: AssetPositions): unknown {
    const obj: any = {};
    if (message.positions) {
      obj.positions = message.positions.map((e) => e ? AssetPositionMethods.toJSON(e) : undefined);
    } else {
      obj.positions = [];
    }
    return obj;
  },
};

function createBaseDone(): Done {
  return { latestTransactTime: BigInt("0"), readOnly: false };
}

export const DoneMethods = {
  encode(message: Done, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.latestTransactTime !== BigInt("0")) {
      writer.uint32(8).uint64(message.latestTransactTime.toString());
    }
    if (message.readOnly === true) {
      writer.uint32(16).bool(message.readOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Done {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDone();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.latestTransactTime = longToBigint(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.readOnly = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Done {
    return {
      latestTransactTime: isSet(object.latestTransactTime) ? BigInt(object.latestTransactTime) : BigInt("0"),
      readOnly: isSet(object.readOnly) ? Boolean(object.readOnly) : false,
    };
  },

  toJSON(message: Done): unknown {
    const obj: any = {};
    message.latestTransactTime !== undefined && (obj.latestTransactTime = message.latestTransactTime.toString());
    message.readOnly !== undefined && (obj.readOnly = message.readOnly);
    return obj;
  },
};

function createBaseRestingOrder(): RestingOrder {
  return {
    clientOrderId: BigInt("0"),
    exchangeOrderId: BigInt("0"),
    marketId: BigInt("0"),
    price: BigInt("0"),
    orderQuantity: BigInt("0"),
    side: 0,
    timeInForce: 0,
    orderType: 0,
    remainingQuantity: BigInt("0"),
    restTime: BigInt("0"),
    subaccountId: BigInt("0"),
    cumulativeQuantity: BigInt("0"),
  };
}

export const RestingOrderMethods = {
  encode(message: RestingOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientOrderId !== BigInt("0")) {
      writer.uint32(8).uint64(message.clientOrderId.toString());
    }
    if (message.exchangeOrderId !== BigInt("0")) {
      writer.uint32(16).uint64(message.exchangeOrderId.toString());
    }
    if (message.marketId !== BigInt("0")) {
      writer.uint32(24).uint64(message.marketId.toString());
    }
    if (message.price !== BigInt("0")) {
      writer.uint32(32).uint64(message.price.toString());
    }
    if (message.orderQuantity !== BigInt("0")) {
      writer.uint32(40).uint64(message.orderQuantity.toString());
    }
    if (message.side !== 0) {
      writer.uint32(48).int32(message.side);
    }
    if (message.timeInForce !== 0) {
      writer.uint32(56).int32(message.timeInForce);
    }
    if (message.orderType !== 0) {
      writer.uint32(64).int32(message.orderType);
    }
    if (message.remainingQuantity !== BigInt("0")) {
      writer.uint32(72).uint64(message.remainingQuantity.toString());
    }
    if (message.restTime !== BigInt("0")) {
      writer.uint32(80).uint64(message.restTime.toString());
    }
    if (message.subaccountId !== BigInt("0")) {
      writer.uint32(88).uint64(message.subaccountId.toString());
    }
    if (message.cumulativeQuantity !== BigInt("0")) {
      writer.uint32(96).uint64(message.cumulativeQuantity.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestingOrder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRestingOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.clientOrderId = longToBigint(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.exchangeOrderId = longToBigint(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.marketId = longToBigint(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.price = longToBigint(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.orderQuantity = longToBigint(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.side = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.timeInForce = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.orderType = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.remainingQuantity = longToBigint(reader.uint64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.restTime = longToBigint(reader.uint64() as Long);
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.subaccountId = longToBigint(reader.uint64() as Long);
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.cumulativeQuantity = longToBigint(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RestingOrder {
    return {
      clientOrderId: isSet(object.clientOrderId) ? BigInt(object.clientOrderId) : BigInt("0"),
      exchangeOrderId: isSet(object.exchangeOrderId) ? BigInt(object.exchangeOrderId) : BigInt("0"),
      marketId: isSet(object.marketId) ? BigInt(object.marketId) : BigInt("0"),
      price: isSet(object.price) ? BigInt(object.price) : BigInt("0"),
      orderQuantity: isSet(object.orderQuantity) ? BigInt(object.orderQuantity) : BigInt("0"),
      side: isSet(object.side) ? sideFromJSON(object.side) : 0,
      timeInForce: isSet(object.timeInForce) ? timeInForceFromJSON(object.timeInForce) : 0,
      orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : 0,
      remainingQuantity: isSet(object.remainingQuantity) ? BigInt(object.remainingQuantity) : BigInt("0"),
      restTime: isSet(object.restTime) ? BigInt(object.restTime) : BigInt("0"),
      subaccountId: isSet(object.subaccountId) ? BigInt(object.subaccountId) : BigInt("0"),
      cumulativeQuantity: isSet(object.cumulativeQuantity) ? BigInt(object.cumulativeQuantity) : BigInt("0"),
    };
  },

  toJSON(message: RestingOrder): unknown {
    const obj: any = {};
    message.clientOrderId !== undefined && (obj.clientOrderId = message.clientOrderId.toString());
    message.exchangeOrderId !== undefined && (obj.exchangeOrderId = message.exchangeOrderId.toString());
    message.marketId !== undefined && (obj.marketId = message.marketId.toString());
    message.price !== undefined && (obj.price = message.price.toString());
    message.orderQuantity !== undefined && (obj.orderQuantity = message.orderQuantity.toString());
    message.side !== undefined && (obj.side = sideToJSON(message.side));
    message.timeInForce !== undefined && (obj.timeInForce = timeInForceToJSON(message.timeInForce));
    message.orderType !== undefined && (obj.orderType = orderTypeToJSON(message.orderType));
    message.remainingQuantity !== undefined && (obj.remainingQuantity = message.remainingQuantity.toString());
    message.restTime !== undefined && (obj.restTime = message.restTime.toString());
    message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId.toString());
    message.cumulativeQuantity !== undefined && (obj.cumulativeQuantity = message.cumulativeQuantity.toString());
    return obj;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function longToBigint(long: Long) {
  return BigInt(long.toString());
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
