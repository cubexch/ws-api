import {
  Side,
  KlineInterval,
  AggressingSide,
  RateUpdateSide,
  MdMessage,
  MarketByPrice,
  MarketByPrice_Level,
  MarketByPriceDiff,
  MarketByPriceDiff_DiffOp,
  MarketByPriceDiff_Diff,
  MarketByOrder,
  MarketByOrder_Order,
  MarketByOrderDiff,
  MarketByOrderDiff_DiffOp,
  MarketByOrderDiff_Diff,
  ImpliedMarketByPrice,
  ImpliedMarketByPrice_ImpliedLevels,
  ImpliedMarketByPrice_Level,
  Trades,
  Trades_Trade,
  Summary,
  Kline,
  Heartbeat,
  MdMessages,
  AggMessage,
  TopOfBook,
  TopOfBooks,
  RateUpdate,
  RateUpdates,
  ClientMessage,
  Config,
} from '../market_data';
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

export function klineIntervalFromJSON(object: any): KlineInterval {
  switch (object) {
    case 0:
    case "S1":
      return KlineInterval.S1;
    case 1:
    case "M1":
      return KlineInterval.M1;
    case 2:
    case "M15":
      return KlineInterval.M15;
    case 3:
    case "H1":
      return KlineInterval.H1;
    case 4:
    case "H4":
      return KlineInterval.H4;
    case 5:
    case "D1":
      return KlineInterval.D1;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum KlineInterval");
  }
}

export function klineIntervalToJSON(object: KlineInterval): string {
  switch (object) {
    case KlineInterval.S1:
      return "S1";
    case KlineInterval.M1:
      return "M1";
    case KlineInterval.M15:
      return "M15";
    case KlineInterval.H1:
      return "H1";
    case KlineInterval.H4:
      return "H4";
    case KlineInterval.D1:
      return "D1";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum KlineInterval");
  }
}

export function aggressingSideFromJSON(object: any): AggressingSide {
  switch (object) {
    case 0:
    case "AGGRESSING_BID":
      return AggressingSide.AGGRESSING_BID;
    case 1:
    case "AGGRESSING_ASK":
      return AggressingSide.AGGRESSING_ASK;
    case 2:
    case "AGGRESSING_IMPLIED_BID":
      return AggressingSide.AGGRESSING_IMPLIED_BID;
    case 3:
    case "AGGRESSING_IMPLIED_ASK":
      return AggressingSide.AGGRESSING_IMPLIED_ASK;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum AggressingSide");
  }
}

export function aggressingSideToJSON(object: AggressingSide): string {
  switch (object) {
    case AggressingSide.AGGRESSING_BID:
      return "AGGRESSING_BID";
    case AggressingSide.AGGRESSING_ASK:
      return "AGGRESSING_ASK";
    case AggressingSide.AGGRESSING_IMPLIED_BID:
      return "AGGRESSING_IMPLIED_BID";
    case AggressingSide.AGGRESSING_IMPLIED_ASK:
      return "AGGRESSING_IMPLIED_ASK";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum AggressingSide");
  }
}

export function rateUpdateSideFromJSON(object: any): RateUpdateSide {
  switch (object) {
    case 0:
    case "BASE":
      return RateUpdateSide.BASE;
    case 1:
    case "QUOTE":
      return RateUpdateSide.QUOTE;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum RateUpdateSide");
  }
}

export function rateUpdateSideToJSON(object: RateUpdateSide): string {
  switch (object) {
    case RateUpdateSide.BASE:
      return "BASE";
    case RateUpdateSide.QUOTE:
      return "QUOTE";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum RateUpdateSide");
  }
}

export function marketByPriceDiff_DiffOpFromJSON(object: any): MarketByPriceDiff_DiffOp {
  switch (object) {
    case 0:
    case "ADD":
      return MarketByPriceDiff_DiffOp.ADD;
    case 1:
    case "REMOVE":
      return MarketByPriceDiff_DiffOp.REMOVE;
    case 2:
    case "REPLACE":
      return MarketByPriceDiff_DiffOp.REPLACE;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum MarketByPriceDiff_DiffOp");
  }
}

export function marketByPriceDiff_DiffOpToJSON(object: MarketByPriceDiff_DiffOp): string {
  switch (object) {
    case MarketByPriceDiff_DiffOp.ADD:
      return "ADD";
    case MarketByPriceDiff_DiffOp.REMOVE:
      return "REMOVE";
    case MarketByPriceDiff_DiffOp.REPLACE:
      return "REPLACE";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum MarketByPriceDiff_DiffOp");
  }
}

export function marketByOrderDiff_DiffOpFromJSON(object: any): MarketByOrderDiff_DiffOp {
  switch (object) {
    case 0:
    case "ADD":
      return MarketByOrderDiff_DiffOp.ADD;
    case 1:
    case "REMOVE":
      return MarketByOrderDiff_DiffOp.REMOVE;
    case 2:
    case "REPLACE":
      return MarketByOrderDiff_DiffOp.REPLACE;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum MarketByOrderDiff_DiffOp");
  }
}

export function marketByOrderDiff_DiffOpToJSON(object: MarketByOrderDiff_DiffOp): string {
  switch (object) {
    case MarketByOrderDiff_DiffOp.ADD:
      return "ADD";
    case MarketByOrderDiff_DiffOp.REMOVE:
      return "REMOVE";
    case MarketByOrderDiff_DiffOp.REPLACE:
      return "REPLACE";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum MarketByOrderDiff_DiffOp");
  }
}


function createBaseMdMessage(): MdMessage {
  return {
    heartbeat: undefined,
    summary: undefined,
    trades: undefined,
    mboSnapshot: undefined,
    mboDiff: undefined,
    mbpSnapshot: undefined,
    mbpDiff: undefined,
    kline: undefined,
    implied: undefined,
  };
}

export const MdMessageMethods = {
  encode(message: MdMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heartbeat !== undefined) {
      HeartbeatMethods.encode(message.heartbeat, writer.uint32(10).fork()).ldelim();
    }
    if (message.summary !== undefined) {
      SummaryMethods.encode(message.summary, writer.uint32(18).fork()).ldelim();
    }
    if (message.trades !== undefined) {
      TradesMethods.encode(message.trades, writer.uint32(26).fork()).ldelim();
    }
    if (message.mboSnapshot !== undefined) {
      MarketByOrderMethods.encode(message.mboSnapshot, writer.uint32(34).fork()).ldelim();
    }
    if (message.mboDiff !== undefined) {
      MarketByOrderDiffMethods.encode(message.mboDiff, writer.uint32(42).fork()).ldelim();
    }
    if (message.mbpSnapshot !== undefined) {
      MarketByPriceMethods.encode(message.mbpSnapshot, writer.uint32(50).fork()).ldelim();
    }
    if (message.mbpDiff !== undefined) {
      MarketByPriceDiffMethods.encode(message.mbpDiff, writer.uint32(58).fork()).ldelim();
    }
    if (message.kline !== undefined) {
      KlineMethods.encode(message.kline, writer.uint32(66).fork()).ldelim();
    }
    if (message.implied !== undefined) {
      ImpliedMarketByPriceMethods.encode(message.implied, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MdMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMdMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.heartbeat = HeartbeatMethods.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.summary = SummaryMethods.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.trades = TradesMethods.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mboSnapshot = MarketByOrderMethods.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.mboDiff = MarketByOrderDiffMethods.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.mbpSnapshot = MarketByPriceMethods.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.mbpDiff = MarketByPriceDiffMethods.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.kline = KlineMethods.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.implied = ImpliedMarketByPriceMethods.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MdMessage {
    return {
      heartbeat: isSet(object.heartbeat) ? HeartbeatMethods.fromJSON(object.heartbeat) : undefined,
      summary: isSet(object.summary) ? SummaryMethods.fromJSON(object.summary) : undefined,
      trades: isSet(object.trades) ? TradesMethods.fromJSON(object.trades) : undefined,
      mboSnapshot: isSet(object.mboSnapshot) ? MarketByOrderMethods.fromJSON(object.mboSnapshot) : undefined,
      mboDiff: isSet(object.mboDiff) ? MarketByOrderDiffMethods.fromJSON(object.mboDiff) : undefined,
      mbpSnapshot: isSet(object.mbpSnapshot) ? MarketByPriceMethods.fromJSON(object.mbpSnapshot) : undefined,
      mbpDiff: isSet(object.mbpDiff) ? MarketByPriceDiffMethods.fromJSON(object.mbpDiff) : undefined,
      kline: isSet(object.kline) ? KlineMethods.fromJSON(object.kline) : undefined,
      implied: isSet(object.implied) ? ImpliedMarketByPriceMethods.fromJSON(object.implied) : undefined,
    };
  },

  toJSON(message: MdMessage): unknown {
    const obj: any = {};
    message.heartbeat !== undefined &&
      (obj.heartbeat = message.heartbeat ? HeartbeatMethods.toJSON(message.heartbeat) : undefined);
    message.summary !== undefined && (obj.summary = message.summary ? SummaryMethods.toJSON(message.summary) : undefined);
    message.trades !== undefined && (obj.trades = message.trades ? TradesMethods.toJSON(message.trades) : undefined);
    message.mboSnapshot !== undefined &&
      (obj.mboSnapshot = message.mboSnapshot ? MarketByOrderMethods.toJSON(message.mboSnapshot) : undefined);
    message.mboDiff !== undefined &&
      (obj.mboDiff = message.mboDiff ? MarketByOrderDiffMethods.toJSON(message.mboDiff) : undefined);
    message.mbpSnapshot !== undefined &&
      (obj.mbpSnapshot = message.mbpSnapshot ? MarketByPriceMethods.toJSON(message.mbpSnapshot) : undefined);
    message.mbpDiff !== undefined &&
      (obj.mbpDiff = message.mbpDiff ? MarketByPriceDiffMethods.toJSON(message.mbpDiff) : undefined);
    message.kline !== undefined && (obj.kline = message.kline ? KlineMethods.toJSON(message.kline) : undefined);
    message.implied !== undefined &&
      (obj.implied = message.implied ? ImpliedMarketByPriceMethods.toJSON(message.implied) : undefined);
    return obj;
  },
};

function createBaseMarketByPrice(): MarketByPrice {
  return { levels: [], chunk: 0, numChunks: 0 };
}

export const MarketByPriceMethods = {
  encode(message: MarketByPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.levels) {
      MarketByPrice_LevelMethods.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.chunk !== 0) {
      writer.uint32(16).uint32(message.chunk);
    }
    if (message.numChunks !== 0) {
      writer.uint32(24).uint32(message.numChunks);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketByPrice {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketByPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.levels.push(MarketByPrice_LevelMethods.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.chunk = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.numChunks = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MarketByPrice {
    return {
      levels: Array.isArray(object?.levels) ? object.levels.map((e: any) => MarketByPrice_LevelMethods.fromJSON(e)) : [],
      chunk: isSet(object.chunk) ? Number(object.chunk) : 0,
      numChunks: isSet(object.numChunks) ? Number(object.numChunks) : 0,
    };
  },

  toJSON(message: MarketByPrice): unknown {
    const obj: any = {};
    if (message.levels) {
      obj.levels = message.levels.map((e) => e ? MarketByPrice_LevelMethods.toJSON(e) : undefined);
    } else {
      obj.levels = [];
    }
    message.chunk !== undefined && (obj.chunk = Math.round(message.chunk));
    message.numChunks !== undefined && (obj.numChunks = Math.round(message.numChunks));
    return obj;
  },
};

function createBaseMarketByPrice_Level(): MarketByPrice_Level {
  return { price: BigInt("0"), quantity: BigInt("0"), side: 0 };
}

export const MarketByPrice_LevelMethods = {
  encode(message: MarketByPrice_Level, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== BigInt("0")) {
      writer.uint32(8).uint64(message.price.toString());
    }
    if (message.quantity !== BigInt("0")) {
      writer.uint32(16).uint64(message.quantity.toString());
    }
    if (message.side !== 0) {
      writer.uint32(24).int32(message.side);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketByPrice_Level {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketByPrice_Level();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.price = longToBigint(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.quantity = longToBigint(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
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

  fromJSON(object: any): MarketByPrice_Level {
    return {
      price: isSet(object.price) ? BigInt(object.price) : BigInt("0"),
      quantity: isSet(object.quantity) ? BigInt(object.quantity) : BigInt("0"),
      side: isSet(object.side) ? sideFromJSON(object.side) : 0,
    };
  },

  toJSON(message: MarketByPrice_Level): unknown {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price.toString());
    message.quantity !== undefined && (obj.quantity = message.quantity.toString());
    message.side !== undefined && (obj.side = sideToJSON(message.side));
    return obj;
  },
};

function createBaseMarketByPriceDiff(): MarketByPriceDiff {
  return { diffs: [], totalBidLevels: 0, totalAskLevels: 0 };
}

export const MarketByPriceDiffMethods = {
  encode(message: MarketByPriceDiff, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.diffs) {
      MarketByPriceDiff_DiffMethods.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalBidLevels !== 0) {
      writer.uint32(16).uint32(message.totalBidLevels);
    }
    if (message.totalAskLevels !== 0) {
      writer.uint32(24).uint32(message.totalAskLevels);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketByPriceDiff {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketByPriceDiff();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.diffs.push(MarketByPriceDiff_DiffMethods.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.totalBidLevels = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.totalAskLevels = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MarketByPriceDiff {
    return {
      diffs: Array.isArray(object?.diffs) ? object.diffs.map((e: any) => MarketByPriceDiff_DiffMethods.fromJSON(e)) : [],
      totalBidLevels: isSet(object.totalBidLevels) ? Number(object.totalBidLevels) : 0,
      totalAskLevels: isSet(object.totalAskLevels) ? Number(object.totalAskLevels) : 0,
    };
  },

  toJSON(message: MarketByPriceDiff): unknown {
    const obj: any = {};
    if (message.diffs) {
      obj.diffs = message.diffs.map((e) => e ? MarketByPriceDiff_DiffMethods.toJSON(e) : undefined);
    } else {
      obj.diffs = [];
    }
    message.totalBidLevels !== undefined && (obj.totalBidLevels = Math.round(message.totalBidLevels));
    message.totalAskLevels !== undefined && (obj.totalAskLevels = Math.round(message.totalAskLevels));
    return obj;
  },
};

function createBaseMarketByPriceDiff_Diff(): MarketByPriceDiff_Diff {
  return { price: BigInt("0"), quantity: BigInt("0"), side: 0, op: 0 };
}

export const MarketByPriceDiff_DiffMethods = {
  encode(message: MarketByPriceDiff_Diff, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== BigInt("0")) {
      writer.uint32(8).uint64(message.price.toString());
    }
    if (message.quantity !== BigInt("0")) {
      writer.uint32(16).uint64(message.quantity.toString());
    }
    if (message.side !== 0) {
      writer.uint32(24).int32(message.side);
    }
    if (message.op !== 0) {
      writer.uint32(32).int32(message.op);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketByPriceDiff_Diff {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketByPriceDiff_Diff();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.price = longToBigint(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.quantity = longToBigint(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.side = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.op = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MarketByPriceDiff_Diff {
    return {
      price: isSet(object.price) ? BigInt(object.price) : BigInt("0"),
      quantity: isSet(object.quantity) ? BigInt(object.quantity) : BigInt("0"),
      side: isSet(object.side) ? sideFromJSON(object.side) : 0,
      op: isSet(object.op) ? marketByPriceDiff_DiffOpFromJSON(object.op) : 0,
    };
  },

  toJSON(message: MarketByPriceDiff_Diff): unknown {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price.toString());
    message.quantity !== undefined && (obj.quantity = message.quantity.toString());
    message.side !== undefined && (obj.side = sideToJSON(message.side));
    message.op !== undefined && (obj.op = marketByPriceDiff_DiffOpToJSON(message.op));
    return obj;
  },
};

function createBaseMarketByOrder(): MarketByOrder {
  return { orders: [], chunk: 0, numChunks: 0 };
}

export const MarketByOrderMethods = {
  encode(message: MarketByOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      MarketByOrder_OrderMethods.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.chunk !== 0) {
      writer.uint32(16).uint32(message.chunk);
    }
    if (message.numChunks !== 0) {
      writer.uint32(24).uint32(message.numChunks);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketByOrder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketByOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orders.push(MarketByOrder_OrderMethods.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.chunk = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.numChunks = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MarketByOrder {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => MarketByOrder_OrderMethods.fromJSON(e)) : [],
      chunk: isSet(object.chunk) ? Number(object.chunk) : 0,
      numChunks: isSet(object.numChunks) ? Number(object.numChunks) : 0,
    };
  },

  toJSON(message: MarketByOrder): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map((e) => e ? MarketByOrder_OrderMethods.toJSON(e) : undefined);
    } else {
      obj.orders = [];
    }
    message.chunk !== undefined && (obj.chunk = Math.round(message.chunk));
    message.numChunks !== undefined && (obj.numChunks = Math.round(message.numChunks));
    return obj;
  },
};

function createBaseMarketByOrder_Order(): MarketByOrder_Order {
  return { price: BigInt("0"), quantity: BigInt("0"), exchangeOrderId: BigInt("0"), side: 0, priority: BigInt("0") };
}

export const MarketByOrder_OrderMethods = {
  encode(message: MarketByOrder_Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== BigInt("0")) {
      writer.uint32(8).uint64(message.price.toString());
    }
    if (message.quantity !== BigInt("0")) {
      writer.uint32(16).uint64(message.quantity.toString());
    }
    if (message.exchangeOrderId !== BigInt("0")) {
      writer.uint32(24).uint64(message.exchangeOrderId.toString());
    }
    if (message.side !== 0) {
      writer.uint32(32).int32(message.side);
    }
    if (message.priority !== BigInt("0")) {
      writer.uint32(40).uint64(message.priority.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketByOrder_Order {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketByOrder_Order();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.price = longToBigint(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.quantity = longToBigint(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.exchangeOrderId = longToBigint(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.side = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.priority = longToBigint(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MarketByOrder_Order {
    return {
      price: isSet(object.price) ? BigInt(object.price) : BigInt("0"),
      quantity: isSet(object.quantity) ? BigInt(object.quantity) : BigInt("0"),
      exchangeOrderId: isSet(object.exchangeOrderId) ? BigInt(object.exchangeOrderId) : BigInt("0"),
      side: isSet(object.side) ? sideFromJSON(object.side) : 0,
      priority: isSet(object.priority) ? BigInt(object.priority) : BigInt("0"),
    };
  },

  toJSON(message: MarketByOrder_Order): unknown {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price.toString());
    message.quantity !== undefined && (obj.quantity = message.quantity.toString());
    message.exchangeOrderId !== undefined && (obj.exchangeOrderId = message.exchangeOrderId.toString());
    message.side !== undefined && (obj.side = sideToJSON(message.side));
    message.priority !== undefined && (obj.priority = message.priority.toString());
    return obj;
  },
};

function createBaseMarketByOrderDiff(): MarketByOrderDiff {
  return { diffs: [], totalBidLevels: 0, totalAskLevels: 0, totalBidOrders: 0, totalAskOrders: 0 };
}

export const MarketByOrderDiffMethods = {
  encode(message: MarketByOrderDiff, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.diffs) {
      MarketByOrderDiff_DiffMethods.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalBidLevels !== 0) {
      writer.uint32(16).uint32(message.totalBidLevels);
    }
    if (message.totalAskLevels !== 0) {
      writer.uint32(24).uint32(message.totalAskLevels);
    }
    if (message.totalBidOrders !== 0) {
      writer.uint32(32).uint32(message.totalBidOrders);
    }
    if (message.totalAskOrders !== 0) {
      writer.uint32(40).uint32(message.totalAskOrders);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketByOrderDiff {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketByOrderDiff();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.diffs.push(MarketByOrderDiff_DiffMethods.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.totalBidLevels = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.totalAskLevels = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.totalBidOrders = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.totalAskOrders = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MarketByOrderDiff {
    return {
      diffs: Array.isArray(object?.diffs) ? object.diffs.map((e: any) => MarketByOrderDiff_DiffMethods.fromJSON(e)) : [],
      totalBidLevels: isSet(object.totalBidLevels) ? Number(object.totalBidLevels) : 0,
      totalAskLevels: isSet(object.totalAskLevels) ? Number(object.totalAskLevels) : 0,
      totalBidOrders: isSet(object.totalBidOrders) ? Number(object.totalBidOrders) : 0,
      totalAskOrders: isSet(object.totalAskOrders) ? Number(object.totalAskOrders) : 0,
    };
  },

  toJSON(message: MarketByOrderDiff): unknown {
    const obj: any = {};
    if (message.diffs) {
      obj.diffs = message.diffs.map((e) => e ? MarketByOrderDiff_DiffMethods.toJSON(e) : undefined);
    } else {
      obj.diffs = [];
    }
    message.totalBidLevels !== undefined && (obj.totalBidLevels = Math.round(message.totalBidLevels));
    message.totalAskLevels !== undefined && (obj.totalAskLevels = Math.round(message.totalAskLevels));
    message.totalBidOrders !== undefined && (obj.totalBidOrders = Math.round(message.totalBidOrders));
    message.totalAskOrders !== undefined && (obj.totalAskOrders = Math.round(message.totalAskOrders));
    return obj;
  },
};

function createBaseMarketByOrderDiff_Diff(): MarketByOrderDiff_Diff {
  return {
    price: BigInt("0"),
    quantity: BigInt("0"),
    exchangeOrderId: BigInt("0"),
    side: 0,
    op: 0,
    priority: BigInt("0"),
  };
}

export const MarketByOrderDiff_DiffMethods = {
  encode(message: MarketByOrderDiff_Diff, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== BigInt("0")) {
      writer.uint32(8).uint64(message.price.toString());
    }
    if (message.quantity !== BigInt("0")) {
      writer.uint32(16).uint64(message.quantity.toString());
    }
    if (message.exchangeOrderId !== BigInt("0")) {
      writer.uint32(24).uint64(message.exchangeOrderId.toString());
    }
    if (message.side !== 0) {
      writer.uint32(32).int32(message.side);
    }
    if (message.op !== 0) {
      writer.uint32(40).int32(message.op);
    }
    if (message.priority !== BigInt("0")) {
      writer.uint32(48).uint64(message.priority.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketByOrderDiff_Diff {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketByOrderDiff_Diff();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.price = longToBigint(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.quantity = longToBigint(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.exchangeOrderId = longToBigint(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.side = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.op = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.priority = longToBigint(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MarketByOrderDiff_Diff {
    return {
      price: isSet(object.price) ? BigInt(object.price) : BigInt("0"),
      quantity: isSet(object.quantity) ? BigInt(object.quantity) : BigInt("0"),
      exchangeOrderId: isSet(object.exchangeOrderId) ? BigInt(object.exchangeOrderId) : BigInt("0"),
      side: isSet(object.side) ? sideFromJSON(object.side) : 0,
      op: isSet(object.op) ? marketByOrderDiff_DiffOpFromJSON(object.op) : 0,
      priority: isSet(object.priority) ? BigInt(object.priority) : BigInt("0"),
    };
  },

  toJSON(message: MarketByOrderDiff_Diff): unknown {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price.toString());
    message.quantity !== undefined && (obj.quantity = message.quantity.toString());
    message.exchangeOrderId !== undefined && (obj.exchangeOrderId = message.exchangeOrderId.toString());
    message.side !== undefined && (obj.side = sideToJSON(message.side));
    message.op !== undefined && (obj.op = marketByOrderDiff_DiffOpToJSON(message.op));
    message.priority !== undefined && (obj.priority = message.priority.toString());
    return obj;
  },
};

function createBaseImpliedMarketByPrice(): ImpliedMarketByPrice {
  return { bids: undefined, asks: undefined };
}

export const ImpliedMarketByPriceMethods = {
  encode(message: ImpliedMarketByPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bids !== undefined) {
      ImpliedMarketByPrice_ImpliedLevelsMethods.encode(message.bids, writer.uint32(10).fork()).ldelim();
    }
    if (message.asks !== undefined) {
      ImpliedMarketByPrice_ImpliedLevelsMethods.encode(message.asks, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ImpliedMarketByPrice {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImpliedMarketByPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bids = ImpliedMarketByPrice_ImpliedLevelsMethods.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.asks = ImpliedMarketByPrice_ImpliedLevelsMethods.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ImpliedMarketByPrice {
    return {
      bids: isSet(object.bids) ? ImpliedMarketByPrice_ImpliedLevelsMethods.fromJSON(object.bids) : undefined,
      asks: isSet(object.asks) ? ImpliedMarketByPrice_ImpliedLevelsMethods.fromJSON(object.asks) : undefined,
    };
  },

  toJSON(message: ImpliedMarketByPrice): unknown {
    const obj: any = {};
    message.bids !== undefined &&
      (obj.bids = message.bids ? ImpliedMarketByPrice_ImpliedLevelsMethods.toJSON(message.bids) : undefined);
    message.asks !== undefined &&
      (obj.asks = message.asks ? ImpliedMarketByPrice_ImpliedLevelsMethods.toJSON(message.asks) : undefined);
    return obj;
  },
};

function createBaseImpliedMarketByPrice_ImpliedLevels(): ImpliedMarketByPrice_ImpliedLevels {
  return { levels: [] };
}

export const ImpliedMarketByPrice_ImpliedLevelsMethods = {
  encode(message: ImpliedMarketByPrice_ImpliedLevels, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.levels) {
      ImpliedMarketByPrice_LevelMethods.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ImpliedMarketByPrice_ImpliedLevels {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImpliedMarketByPrice_ImpliedLevels();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.levels.push(ImpliedMarketByPrice_LevelMethods.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ImpliedMarketByPrice_ImpliedLevels {
    return {
      levels: Array.isArray(object?.levels)
        ? object.levels.map((e: any) => ImpliedMarketByPrice_LevelMethods.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ImpliedMarketByPrice_ImpliedLevels): unknown {
    const obj: any = {};
    if (message.levels) {
      obj.levels = message.levels.map((e) => e ? ImpliedMarketByPrice_LevelMethods.toJSON(e) : undefined);
    } else {
      obj.levels = [];
    }
    return obj;
  },
};

function createBaseImpliedMarketByPrice_Level(): ImpliedMarketByPrice_Level {
  return { price: BigInt("0"), quantity: BigInt("0") };
}

export const ImpliedMarketByPrice_LevelMethods = {
  encode(message: ImpliedMarketByPrice_Level, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== BigInt("0")) {
      writer.uint32(8).uint64(message.price.toString());
    }
    if (message.quantity !== BigInt("0")) {
      writer.uint32(16).uint64(message.quantity.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ImpliedMarketByPrice_Level {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImpliedMarketByPrice_Level();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.price = longToBigint(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.quantity = longToBigint(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ImpliedMarketByPrice_Level {
    return {
      price: isSet(object.price) ? BigInt(object.price) : BigInt("0"),
      quantity: isSet(object.quantity) ? BigInt(object.quantity) : BigInt("0"),
    };
  },

  toJSON(message: ImpliedMarketByPrice_Level): unknown {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price.toString());
    message.quantity !== undefined && (obj.quantity = message.quantity.toString());
    return obj;
  },
};

function createBaseTrades(): Trades {
  return { trades: [] };
}

export const TradesMethods = {
  encode(message: Trades, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.trades) {
      Trades_TradeMethods.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trades {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrades();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.trades.push(Trades_TradeMethods.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trades {
    return { trades: Array.isArray(object?.trades) ? object.trades.map((e: any) => Trades_TradeMethods.fromJSON(e)) : [] };
  },

  toJSON(message: Trades): unknown {
    const obj: any = {};
    if (message.trades) {
      obj.trades = message.trades.map((e) => e ? Trades_TradeMethods.toJSON(e) : undefined);
    } else {
      obj.trades = [];
    }
    return obj;
  },
};

function createBaseTrades_Trade(): Trades_Trade {
  return {
    tradeId: BigInt("0"),
    price: BigInt("0"),
    aggressingSide: 0,
    restingExchangeOrderId: BigInt("0"),
    fillQuantity: BigInt("0"),
    transactTime: BigInt("0"),
    aggressingExchangeOrderId: BigInt("0"),
  };
}

export const Trades_TradeMethods = {
  encode(message: Trades_Trade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradeId !== BigInt("0")) {
      writer.uint32(8).uint64(message.tradeId.toString());
    }
    if (message.price !== BigInt("0")) {
      writer.uint32(16).uint64(message.price.toString());
    }
    if (message.aggressingSide !== 0) {
      writer.uint32(24).int32(message.aggressingSide);
    }
    if (message.restingExchangeOrderId !== BigInt("0")) {
      writer.uint32(32).uint64(message.restingExchangeOrderId.toString());
    }
    if (message.fillQuantity !== BigInt("0")) {
      writer.uint32(40).uint64(message.fillQuantity.toString());
    }
    if (message.transactTime !== BigInt("0")) {
      writer.uint32(48).uint64(message.transactTime.toString());
    }
    if (message.aggressingExchangeOrderId !== BigInt("0")) {
      writer.uint32(56).uint64(message.aggressingExchangeOrderId.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trades_Trade {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrades_Trade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.tradeId = longToBigint(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.price = longToBigint(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.aggressingSide = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.restingExchangeOrderId = longToBigint(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.fillQuantity = longToBigint(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.transactTime = longToBigint(reader.uint64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.aggressingExchangeOrderId = longToBigint(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trades_Trade {
    return {
      tradeId: isSet(object.tradeId) ? BigInt(object.tradeId) : BigInt("0"),
      price: isSet(object.price) ? BigInt(object.price) : BigInt("0"),
      aggressingSide: isSet(object.aggressingSide) ? aggressingSideFromJSON(object.aggressingSide) : 0,
      restingExchangeOrderId: isSet(object.restingExchangeOrderId)
        ? BigInt(object.restingExchangeOrderId)
        : BigInt("0"),
      fillQuantity: isSet(object.fillQuantity) ? BigInt(object.fillQuantity) : BigInt("0"),
      transactTime: isSet(object.transactTime) ? BigInt(object.transactTime) : BigInt("0"),
      aggressingExchangeOrderId: isSet(object.aggressingExchangeOrderId)
        ? BigInt(object.aggressingExchangeOrderId)
        : BigInt("0"),
    };
  },

  toJSON(message: Trades_Trade): unknown {
    const obj: any = {};
    message.tradeId !== undefined && (obj.tradeId = message.tradeId.toString());
    message.price !== undefined && (obj.price = message.price.toString());
    message.aggressingSide !== undefined && (obj.aggressingSide = aggressingSideToJSON(message.aggressingSide));
    message.restingExchangeOrderId !== undefined &&
      (obj.restingExchangeOrderId = message.restingExchangeOrderId.toString());
    message.fillQuantity !== undefined && (obj.fillQuantity = message.fillQuantity.toString());
    message.transactTime !== undefined && (obj.transactTime = message.transactTime.toString());
    message.aggressingExchangeOrderId !== undefined &&
      (obj.aggressingExchangeOrderId = message.aggressingExchangeOrderId.toString());
    return obj;
  },
};

function createBaseSummary(): Summary {
  return {
    open: undefined,
    close: undefined,
    low: undefined,
    high: undefined,
    baseVolumeLo: BigInt("0"),
    baseVolumeHi: BigInt("0"),
    quoteVolumeLo: BigInt("0"),
    quoteVolumeHi: BigInt("0"),
  };
}

export const SummaryMethods = {
  encode(message: Summary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.open !== undefined) {
      writer.uint32(8).uint64(message.open.toString());
    }
    if (message.close !== undefined) {
      writer.uint32(16).uint64(message.close.toString());
    }
    if (message.low !== undefined) {
      writer.uint32(24).uint64(message.low.toString());
    }
    if (message.high !== undefined) {
      writer.uint32(32).uint64(message.high.toString());
    }
    if (message.baseVolumeLo !== BigInt("0")) {
      writer.uint32(40).uint64(message.baseVolumeLo.toString());
    }
    if (message.baseVolumeHi !== BigInt("0")) {
      writer.uint32(48).uint64(message.baseVolumeHi.toString());
    }
    if (message.quoteVolumeLo !== BigInt("0")) {
      writer.uint32(56).uint64(message.quoteVolumeLo.toString());
    }
    if (message.quoteVolumeHi !== BigInt("0")) {
      writer.uint32(64).uint64(message.quoteVolumeHi.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Summary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.open = longToBigint(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.close = longToBigint(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.low = longToBigint(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.high = longToBigint(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.baseVolumeLo = longToBigint(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.baseVolumeHi = longToBigint(reader.uint64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.quoteVolumeLo = longToBigint(reader.uint64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.quoteVolumeHi = longToBigint(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Summary {
    return {
      open: isSet(object.open) ? BigInt(object.open) : undefined,
      close: isSet(object.close) ? BigInt(object.close) : undefined,
      low: isSet(object.low) ? BigInt(object.low) : undefined,
      high: isSet(object.high) ? BigInt(object.high) : undefined,
      baseVolumeLo: isSet(object.baseVolumeLo) ? BigInt(object.baseVolumeLo) : BigInt("0"),
      baseVolumeHi: isSet(object.baseVolumeHi) ? BigInt(object.baseVolumeHi) : BigInt("0"),
      quoteVolumeLo: isSet(object.quoteVolumeLo) ? BigInt(object.quoteVolumeLo) : BigInt("0"),
      quoteVolumeHi: isSet(object.quoteVolumeHi) ? BigInt(object.quoteVolumeHi) : BigInt("0"),
    };
  },

  toJSON(message: Summary): unknown {
    const obj: any = {};
    message.open !== undefined && (obj.open = message.open.toString());
    message.close !== undefined && (obj.close = message.close.toString());
    message.low !== undefined && (obj.low = message.low.toString());
    message.high !== undefined && (obj.high = message.high.toString());
    message.baseVolumeLo !== undefined && (obj.baseVolumeLo = message.baseVolumeLo.toString());
    message.baseVolumeHi !== undefined && (obj.baseVolumeHi = message.baseVolumeHi.toString());
    message.quoteVolumeLo !== undefined && (obj.quoteVolumeLo = message.quoteVolumeLo.toString());
    message.quoteVolumeHi !== undefined && (obj.quoteVolumeHi = message.quoteVolumeHi.toString());
    return obj;
  },
};

function createBaseKline(): Kline {
  return {
    interval: 0,
    startTime: BigInt("0"),
    open: undefined,
    close: undefined,
    high: undefined,
    low: undefined,
    volumeLo: BigInt("0"),
    volumeHi: BigInt("0"),
  };
}

export const KlineMethods = {
  encode(message: Kline, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.interval !== 0) {
      writer.uint32(8).int32(message.interval);
    }
    if (message.startTime !== BigInt("0")) {
      writer.uint32(16).uint64(message.startTime.toString());
    }
    if (message.open !== undefined) {
      writer.uint32(24).uint64(message.open.toString());
    }
    if (message.close !== undefined) {
      writer.uint32(32).uint64(message.close.toString());
    }
    if (message.high !== undefined) {
      writer.uint32(40).uint64(message.high.toString());
    }
    if (message.low !== undefined) {
      writer.uint32(48).uint64(message.low.toString());
    }
    if (message.volumeLo !== BigInt("0")) {
      writer.uint32(56).uint64(message.volumeLo.toString());
    }
    if (message.volumeHi !== BigInt("0")) {
      writer.uint32(64).uint64(message.volumeHi.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Kline {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKline();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.interval = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.startTime = longToBigint(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.open = longToBigint(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.close = longToBigint(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.high = longToBigint(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.low = longToBigint(reader.uint64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.volumeLo = longToBigint(reader.uint64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.volumeHi = longToBigint(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Kline {
    return {
      interval: isSet(object.interval) ? klineIntervalFromJSON(object.interval) : 0,
      startTime: isSet(object.startTime) ? BigInt(object.startTime) : BigInt("0"),
      open: isSet(object.open) ? BigInt(object.open) : undefined,
      close: isSet(object.close) ? BigInt(object.close) : undefined,
      high: isSet(object.high) ? BigInt(object.high) : undefined,
      low: isSet(object.low) ? BigInt(object.low) : undefined,
      volumeLo: isSet(object.volumeLo) ? BigInt(object.volumeLo) : BigInt("0"),
      volumeHi: isSet(object.volumeHi) ? BigInt(object.volumeHi) : BigInt("0"),
    };
  },

  toJSON(message: Kline): unknown {
    const obj: any = {};
    message.interval !== undefined && (obj.interval = klineIntervalToJSON(message.interval));
    message.startTime !== undefined && (obj.startTime = message.startTime.toString());
    message.open !== undefined && (obj.open = message.open.toString());
    message.close !== undefined && (obj.close = message.close.toString());
    message.high !== undefined && (obj.high = message.high.toString());
    message.low !== undefined && (obj.low = message.low.toString());
    message.volumeLo !== undefined && (obj.volumeLo = message.volumeLo.toString());
    message.volumeHi !== undefined && (obj.volumeHi = message.volumeHi.toString());
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

function createBaseMdMessages(): MdMessages {
  return { messages: [] };
}

export const MdMessagesMethods = {
  encode(message: MdMessages, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.messages) {
      MdMessageMethods.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MdMessages {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMdMessages();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.messages.push(MdMessageMethods.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MdMessages {
    return { messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => MdMessageMethods.fromJSON(e)) : [] };
  },

  toJSON(message: MdMessages): unknown {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map((e) => e ? MdMessageMethods.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }
    return obj;
  },
};

function createBaseAggMessage(): AggMessage {
  return { heartbeat: undefined, topOfBooks: undefined, rateUpdates: undefined };
}

export const AggMessageMethods = {
  encode(message: AggMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heartbeat !== undefined) {
      HeartbeatMethods.encode(message.heartbeat, writer.uint32(10).fork()).ldelim();
    }
    if (message.topOfBooks !== undefined) {
      TopOfBooksMethods.encode(message.topOfBooks, writer.uint32(18).fork()).ldelim();
    }
    if (message.rateUpdates !== undefined) {
      RateUpdatesMethods.encode(message.rateUpdates, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AggMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAggMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.heartbeat = HeartbeatMethods.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.topOfBooks = TopOfBooksMethods.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rateUpdates = RateUpdatesMethods.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AggMessage {
    return {
      heartbeat: isSet(object.heartbeat) ? HeartbeatMethods.fromJSON(object.heartbeat) : undefined,
      topOfBooks: isSet(object.topOfBooks) ? TopOfBooksMethods.fromJSON(object.topOfBooks) : undefined,
      rateUpdates: isSet(object.rateUpdates) ? RateUpdatesMethods.fromJSON(object.rateUpdates) : undefined,
    };
  },

  toJSON(message: AggMessage): unknown {
    const obj: any = {};
    message.heartbeat !== undefined &&
      (obj.heartbeat = message.heartbeat ? HeartbeatMethods.toJSON(message.heartbeat) : undefined);
    message.topOfBooks !== undefined &&
      (obj.topOfBooks = message.topOfBooks ? TopOfBooksMethods.toJSON(message.topOfBooks) : undefined);
    message.rateUpdates !== undefined &&
      (obj.rateUpdates = message.rateUpdates ? RateUpdatesMethods.toJSON(message.rateUpdates) : undefined);
    return obj;
  },
};

function createBaseTopOfBook(): TopOfBook {
  return {
    marketId: BigInt("0"),
    transactTime: BigInt("0"),
    bidPrice: undefined,
    bidQuantity: undefined,
    askPrice: undefined,
    askQuantity: undefined,
    lastPrice: undefined,
    rolling24hPrice: undefined,
    impliedBidPrice: undefined,
    impliedBidQuantity: undefined,
    impliedAskPrice: undefined,
    impliedAskQuantity: undefined,
  };
}

export const TopOfBookMethods = {
  encode(message: TopOfBook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== BigInt("0")) {
      writer.uint32(8).uint64(message.marketId.toString());
    }
    if (message.transactTime !== BigInt("0")) {
      writer.uint32(16).uint64(message.transactTime.toString());
    }
    if (message.bidPrice !== undefined) {
      writer.uint32(24).uint64(message.bidPrice.toString());
    }
    if (message.bidQuantity !== undefined) {
      writer.uint32(32).uint64(message.bidQuantity.toString());
    }
    if (message.askPrice !== undefined) {
      writer.uint32(40).uint64(message.askPrice.toString());
    }
    if (message.askQuantity !== undefined) {
      writer.uint32(48).uint64(message.askQuantity.toString());
    }
    if (message.lastPrice !== undefined) {
      writer.uint32(56).uint64(message.lastPrice.toString());
    }
    if (message.rolling24hPrice !== undefined) {
      writer.uint32(64).uint64(message.rolling24hPrice.toString());
    }
    if (message.impliedBidPrice !== undefined) {
      writer.uint32(72).uint64(message.impliedBidPrice.toString());
    }
    if (message.impliedBidQuantity !== undefined) {
      writer.uint32(80).uint64(message.impliedBidQuantity.toString());
    }
    if (message.impliedAskPrice !== undefined) {
      writer.uint32(88).uint64(message.impliedAskPrice.toString());
    }
    if (message.impliedAskQuantity !== undefined) {
      writer.uint32(96).uint64(message.impliedAskQuantity.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TopOfBook {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTopOfBook();
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

          message.transactTime = longToBigint(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.bidPrice = longToBigint(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.bidQuantity = longToBigint(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.askPrice = longToBigint(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.askQuantity = longToBigint(reader.uint64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.lastPrice = longToBigint(reader.uint64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.rolling24hPrice = longToBigint(reader.uint64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.impliedBidPrice = longToBigint(reader.uint64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.impliedBidQuantity = longToBigint(reader.uint64() as Long);
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.impliedAskPrice = longToBigint(reader.uint64() as Long);
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.impliedAskQuantity = longToBigint(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TopOfBook {
    return {
      marketId: isSet(object.marketId) ? BigInt(object.marketId) : BigInt("0"),
      transactTime: isSet(object.transactTime) ? BigInt(object.transactTime) : BigInt("0"),
      bidPrice: isSet(object.bidPrice) ? BigInt(object.bidPrice) : undefined,
      bidQuantity: isSet(object.bidQuantity) ? BigInt(object.bidQuantity) : undefined,
      askPrice: isSet(object.askPrice) ? BigInt(object.askPrice) : undefined,
      askQuantity: isSet(object.askQuantity) ? BigInt(object.askQuantity) : undefined,
      lastPrice: isSet(object.lastPrice) ? BigInt(object.lastPrice) : undefined,
      rolling24hPrice: isSet(object.rolling24hPrice) ? BigInt(object.rolling24hPrice) : undefined,
      impliedBidPrice: isSet(object.impliedBidPrice) ? BigInt(object.impliedBidPrice) : undefined,
      impliedBidQuantity: isSet(object.impliedBidQuantity) ? BigInt(object.impliedBidQuantity) : undefined,
      impliedAskPrice: isSet(object.impliedAskPrice) ? BigInt(object.impliedAskPrice) : undefined,
      impliedAskQuantity: isSet(object.impliedAskQuantity) ? BigInt(object.impliedAskQuantity) : undefined,
    };
  },

  toJSON(message: TopOfBook): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId.toString());
    message.transactTime !== undefined && (obj.transactTime = message.transactTime.toString());
    message.bidPrice !== undefined && (obj.bidPrice = message.bidPrice.toString());
    message.bidQuantity !== undefined && (obj.bidQuantity = message.bidQuantity.toString());
    message.askPrice !== undefined && (obj.askPrice = message.askPrice.toString());
    message.askQuantity !== undefined && (obj.askQuantity = message.askQuantity.toString());
    message.lastPrice !== undefined && (obj.lastPrice = message.lastPrice.toString());
    message.rolling24hPrice !== undefined && (obj.rolling24hPrice = message.rolling24hPrice.toString());
    message.impliedBidPrice !== undefined && (obj.impliedBidPrice = message.impliedBidPrice.toString());
    message.impliedBidQuantity !== undefined && (obj.impliedBidQuantity = message.impliedBidQuantity.toString());
    message.impliedAskPrice !== undefined && (obj.impliedAskPrice = message.impliedAskPrice.toString());
    message.impliedAskQuantity !== undefined && (obj.impliedAskQuantity = message.impliedAskQuantity.toString());
    return obj;
  },
};

function createBaseTopOfBooks(): TopOfBooks {
  return { tops: [] };
}

export const TopOfBooksMethods = {
  encode(message: TopOfBooks, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tops) {
      TopOfBookMethods.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TopOfBooks {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTopOfBooks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tops.push(TopOfBookMethods.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TopOfBooks {
    return { tops: Array.isArray(object?.tops) ? object.tops.map((e: any) => TopOfBookMethods.fromJSON(e)) : [] };
  },

  toJSON(message: TopOfBooks): unknown {
    const obj: any = {};
    if (message.tops) {
      obj.tops = message.tops.map((e) => e ? TopOfBookMethods.toJSON(e) : undefined);
    } else {
      obj.tops = [];
    }
    return obj;
  },
};

function createBaseRateUpdate(): RateUpdate {
  return { assetId: BigInt("0"), timestamp: BigInt("0"), rate: BigInt("0"), side: 0 };
}

export const RateUpdateMethods = {
  encode(message: RateUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetId !== BigInt("0")) {
      writer.uint32(8).uint64(message.assetId.toString());
    }
    if (message.timestamp !== BigInt("0")) {
      writer.uint32(16).uint64(message.timestamp.toString());
    }
    if (message.rate !== BigInt("0")) {
      writer.uint32(24).uint64(message.rate.toString());
    }
    if (message.side !== 0) {
      writer.uint32(32).int32(message.side);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RateUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRateUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.assetId = longToBigint(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.timestamp = longToBigint(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.rate = longToBigint(reader.uint64() as Long);
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

  fromJSON(object: any): RateUpdate {
    return {
      assetId: isSet(object.assetId) ? BigInt(object.assetId) : BigInt("0"),
      timestamp: isSet(object.timestamp) ? BigInt(object.timestamp) : BigInt("0"),
      rate: isSet(object.rate) ? BigInt(object.rate) : BigInt("0"),
      side: isSet(object.side) ? rateUpdateSideFromJSON(object.side) : 0,
    };
  },

  toJSON(message: RateUpdate): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId.toString());
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toString());
    message.rate !== undefined && (obj.rate = message.rate.toString());
    message.side !== undefined && (obj.side = rateUpdateSideToJSON(message.side));
    return obj;
  },
};

function createBaseRateUpdates(): RateUpdates {
  return { updates: [] };
}

export const RateUpdatesMethods = {
  encode(message: RateUpdates, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.updates) {
      RateUpdateMethods.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RateUpdates {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRateUpdates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.updates.push(RateUpdateMethods.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RateUpdates {
    return { updates: Array.isArray(object?.updates) ? object.updates.map((e: any) => RateUpdateMethods.fromJSON(e)) : [] };
  },

  toJSON(message: RateUpdates): unknown {
    const obj: any = {};
    if (message.updates) {
      obj.updates = message.updates.map((e) => e ? RateUpdateMethods.toJSON(e) : undefined);
    } else {
      obj.updates = [];
    }
    return obj;
  },
};

function createBaseClientMessage(): ClientMessage {
  return { heartbeat: undefined, config: undefined };
}

export const ClientMessageMethods = {
  encode(message: ClientMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heartbeat !== undefined) {
      HeartbeatMethods.encode(message.heartbeat, writer.uint32(10).fork()).ldelim();
    }
    if (message.config !== undefined) {
      ConfigMethods.encode(message.config, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.heartbeat = HeartbeatMethods.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.config = ConfigMethods.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClientMessage {
    return {
      heartbeat: isSet(object.heartbeat) ? HeartbeatMethods.fromJSON(object.heartbeat) : undefined,
      config: isSet(object.config) ? ConfigMethods.fromJSON(object.config) : undefined,
    };
  },

  toJSON(message: ClientMessage): unknown {
    const obj: any = {};
    message.heartbeat !== undefined &&
      (obj.heartbeat = message.heartbeat ? HeartbeatMethods.toJSON(message.heartbeat) : undefined);
    message.config !== undefined && (obj.config = message.config ? ConfigMethods.toJSON(message.config) : undefined);
    return obj;
  },
};

function createBaseConfig(): Config {
  return { mbp: false, mbo: false, trades: false, summary: false, klines: [], impliedLevels: 0 };
}

export const ConfigMethods = {
  encode(message: Config, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mbp === true) {
      writer.uint32(8).bool(message.mbp);
    }
    if (message.mbo === true) {
      writer.uint32(16).bool(message.mbo);
    }
    if (message.trades === true) {
      writer.uint32(24).bool(message.trades);
    }
    if (message.summary === true) {
      writer.uint32(32).bool(message.summary);
    }
    writer.uint32(42).fork();
    for (const v of message.klines) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.impliedLevels !== 0) {
      writer.uint32(48).uint32(message.impliedLevels);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Config {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.mbp = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.mbo = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.trades = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.summary = reader.bool();
          continue;
        case 5:
          if (tag === 40) {
            message.klines.push(reader.int32() as any);

            continue;
          }

          if (tag === 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.klines.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.impliedLevels = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Config {
    return {
      mbp: isSet(object.mbp) ? Boolean(object.mbp) : false,
      mbo: isSet(object.mbo) ? Boolean(object.mbo) : false,
      trades: isSet(object.trades) ? Boolean(object.trades) : false,
      summary: isSet(object.summary) ? Boolean(object.summary) : false,
      klines: Array.isArray(object?.klines) ? object.klines.map((e: any) => klineIntervalFromJSON(e)) : [],
      impliedLevels: isSet(object.impliedLevels) ? Number(object.impliedLevels) : 0,
    };
  },

  toJSON(message: Config): unknown {
    const obj: any = {};
    message.mbp !== undefined && (obj.mbp = message.mbp);
    message.mbo !== undefined && (obj.mbo = message.mbo);
    message.trades !== undefined && (obj.trades = message.trades);
    message.summary !== undefined && (obj.summary = message.summary);
    if (message.klines) {
      obj.klines = message.klines.map((e) => klineIntervalToJSON(e));
    } else {
      obj.klines = [];
    }
    message.impliedLevels !== undefined && (obj.impliedLevels = Math.round(message.impliedLevels));
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
