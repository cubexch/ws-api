"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestingOrderMethods = exports.DoneMethods = exports.AssetPositionsMethods = exports.RestingOrdersMethods = exports.BootstrapMethods = exports.RawUnitsMethods = exports.AssetPositionMethods = exports.FixedPointDecimalMethods = exports.FillMethods = exports.ModifyOrderRejectMethods = exports.CancelOrderRejectMethods = exports.NewOrderRejectMethods = exports.MassCancelAckMethods = exports.ModifyOrderAckMethods = exports.CancelOrderAckMethods = exports.NewOrderAckMethods = exports.OrderResponseMethods = exports.HeartbeatMethods = exports.MassCancelMethods = exports.ModifyOrderMethods = exports.CancelOrderMethods = exports.NewOrderMethods = exports.OrderRequestMethods = exports.CredentialsMethods = exports.modifyOrderReject_ReasonToJSON = exports.modifyOrderReject_ReasonFromJSON = exports.cancelOrderReject_ReasonToJSON = exports.cancelOrderReject_ReasonFromJSON = exports.newOrderReject_ReasonToJSON = exports.newOrderReject_ReasonFromJSON = exports.massCancelAck_ReasonToJSON = exports.massCancelAck_ReasonFromJSON = exports.cancelOrderAck_ReasonToJSON = exports.cancelOrderAck_ReasonFromJSON = exports.postOnlyToJSON = exports.postOnlyFromJSON = exports.selfTradePreventionToJSON = exports.selfTradePreventionFromJSON = exports.orderTypeToJSON = exports.orderTypeFromJSON = exports.timeInForceToJSON = exports.timeInForceFromJSON = exports.sideToJSON = exports.sideFromJSON = void 0;
const trade_1 = require("../trade");
const Long = require("long");
const _m0 = require("protobufjs/minimal");
function sideFromJSON(object) {
    switch (object) {
        case 0:
        case "BID":
            return trade_1.Side.BID;
        case 1:
        case "ASK":
            return trade_1.Side.ASK;
        default:
            throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum Side");
    }
}
exports.sideFromJSON = sideFromJSON;
function sideToJSON(object) {
    switch (object) {
        case trade_1.Side.BID:
            return "BID";
        case trade_1.Side.ASK:
            return "ASK";
        default:
            throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum Side");
    }
}
exports.sideToJSON = sideToJSON;
function timeInForceFromJSON(object) {
    switch (object) {
        case 0:
        case "IMMEDIATE_OR_CANCEL":
            return trade_1.TimeInForce.IMMEDIATE_OR_CANCEL;
        case 1:
        case "GOOD_FOR_SESSION":
            return trade_1.TimeInForce.GOOD_FOR_SESSION;
        case 2:
        case "FILL_OR_KILL":
            return trade_1.TimeInForce.FILL_OR_KILL;
        default:
            throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum TimeInForce");
    }
}
exports.timeInForceFromJSON = timeInForceFromJSON;
function timeInForceToJSON(object) {
    switch (object) {
        case trade_1.TimeInForce.IMMEDIATE_OR_CANCEL:
            return "IMMEDIATE_OR_CANCEL";
        case trade_1.TimeInForce.GOOD_FOR_SESSION:
            return "GOOD_FOR_SESSION";
        case trade_1.TimeInForce.FILL_OR_KILL:
            return "FILL_OR_KILL";
        default:
            throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum TimeInForce");
    }
}
exports.timeInForceToJSON = timeInForceToJSON;
function orderTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "LIMIT":
            return trade_1.OrderType.LIMIT;
        case 1:
        case "MARKET_LIMIT":
            return trade_1.OrderType.MARKET_LIMIT;
        case 2:
        case "MARKET_WITH_PROTECTION":
            return trade_1.OrderType.MARKET_WITH_PROTECTION;
        default:
            throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum OrderType");
    }
}
exports.orderTypeFromJSON = orderTypeFromJSON;
function orderTypeToJSON(object) {
    switch (object) {
        case trade_1.OrderType.LIMIT:
            return "LIMIT";
        case trade_1.OrderType.MARKET_LIMIT:
            return "MARKET_LIMIT";
        case trade_1.OrderType.MARKET_WITH_PROTECTION:
            return "MARKET_WITH_PROTECTION";
        default:
            throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum OrderType");
    }
}
exports.orderTypeToJSON = orderTypeToJSON;
function selfTradePreventionFromJSON(object) {
    switch (object) {
        case 0:
        case "CANCEL_RESTING":
            return trade_1.SelfTradePrevention.CANCEL_RESTING;
        case 1:
        case "CANCEL_AGGRESSING":
            return trade_1.SelfTradePrevention.CANCEL_AGGRESSING;
        case 2:
        case "ALLOW_SELF_TRADE":
            return trade_1.SelfTradePrevention.ALLOW_SELF_TRADE;
        default:
            throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum SelfTradePrevention");
    }
}
exports.selfTradePreventionFromJSON = selfTradePreventionFromJSON;
function selfTradePreventionToJSON(object) {
    switch (object) {
        case trade_1.SelfTradePrevention.CANCEL_RESTING:
            return "CANCEL_RESTING";
        case trade_1.SelfTradePrevention.CANCEL_AGGRESSING:
            return "CANCEL_AGGRESSING";
        case trade_1.SelfTradePrevention.ALLOW_SELF_TRADE:
            return "ALLOW_SELF_TRADE";
        default:
            throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum SelfTradePrevention");
    }
}
exports.selfTradePreventionToJSON = selfTradePreventionToJSON;
function postOnlyFromJSON(object) {
    switch (object) {
        case 0:
        case "DISABLED":
            return trade_1.PostOnly.DISABLED;
        case 1:
        case "ENABLED":
            return trade_1.PostOnly.ENABLED;
        default:
            throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum PostOnly");
    }
}
exports.postOnlyFromJSON = postOnlyFromJSON;
function postOnlyToJSON(object) {
    switch (object) {
        case trade_1.PostOnly.DISABLED:
            return "DISABLED";
        case trade_1.PostOnly.ENABLED:
            return "ENABLED";
        default:
            throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum PostOnly");
    }
}
exports.postOnlyToJSON = postOnlyToJSON;
function cancelOrderAck_ReasonFromJSON(object) {
    switch (object) {
        case 0:
        case "UNCLASSIFIED":
            return trade_1.CancelOrderAck_Reason.UNCLASSIFIED;
        case 1:
        case "DISCONNECT":
            return trade_1.CancelOrderAck_Reason.DISCONNECT;
        case 2:
        case "REQUESTED":
            return trade_1.CancelOrderAck_Reason.REQUESTED;
        case 3:
        case "IOC":
            return trade_1.CancelOrderAck_Reason.IOC;
        case 4:
        case "STP_RESTING":
            return trade_1.CancelOrderAck_Reason.STP_RESTING;
        case 5:
        case "STP_AGGRESSING":
            return trade_1.CancelOrderAck_Reason.STP_AGGRESSING;
        case 6:
        case "MASS_CANCEL":
            return trade_1.CancelOrderAck_Reason.MASS_CANCEL;
        case 7:
        case "POSITION_LIMIT":
            return trade_1.CancelOrderAck_Reason.POSITION_LIMIT;
        default:
            throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CancelOrderAck_Reason");
    }
}
exports.cancelOrderAck_ReasonFromJSON = cancelOrderAck_ReasonFromJSON;
function cancelOrderAck_ReasonToJSON(object) {
    switch (object) {
        case trade_1.CancelOrderAck_Reason.UNCLASSIFIED:
            return "UNCLASSIFIED";
        case trade_1.CancelOrderAck_Reason.DISCONNECT:
            return "DISCONNECT";
        case trade_1.CancelOrderAck_Reason.REQUESTED:
            return "REQUESTED";
        case trade_1.CancelOrderAck_Reason.IOC:
            return "IOC";
        case trade_1.CancelOrderAck_Reason.STP_RESTING:
            return "STP_RESTING";
        case trade_1.CancelOrderAck_Reason.STP_AGGRESSING:
            return "STP_AGGRESSING";
        case trade_1.CancelOrderAck_Reason.MASS_CANCEL:
            return "MASS_CANCEL";
        case trade_1.CancelOrderAck_Reason.POSITION_LIMIT:
            return "POSITION_LIMIT";
        default:
            throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CancelOrderAck_Reason");
    }
}
exports.cancelOrderAck_ReasonToJSON = cancelOrderAck_ReasonToJSON;
function massCancelAck_ReasonFromJSON(object) {
    switch (object) {
        case 0:
        case "UNCLASSIFIED":
            return trade_1.MassCancelAck_Reason.UNCLASSIFIED;
        case 1:
        case "INVALID_MARKET_ID":
            return trade_1.MassCancelAck_Reason.INVALID_MARKET_ID;
        case 2:
        case "INVALID_SIDE":
            return trade_1.MassCancelAck_Reason.INVALID_SIDE;
        default:
            throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum MassCancelAck_Reason");
    }
}
exports.massCancelAck_ReasonFromJSON = massCancelAck_ReasonFromJSON;
function massCancelAck_ReasonToJSON(object) {
    switch (object) {
        case trade_1.MassCancelAck_Reason.UNCLASSIFIED:
            return "UNCLASSIFIED";
        case trade_1.MassCancelAck_Reason.INVALID_MARKET_ID:
            return "INVALID_MARKET_ID";
        case trade_1.MassCancelAck_Reason.INVALID_SIDE:
            return "INVALID_SIDE";
        default:
            throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum MassCancelAck_Reason");
    }
}
exports.massCancelAck_ReasonToJSON = massCancelAck_ReasonToJSON;
function newOrderReject_ReasonFromJSON(object) {
    switch (object) {
        case 0:
        case "UNCLASSIFIED":
            return trade_1.NewOrderReject_Reason.UNCLASSIFIED;
        case 1:
        case "INVALID_QUANTITY":
            return trade_1.NewOrderReject_Reason.INVALID_QUANTITY;
        case 2:
        case "INVALID_MARKET_ID":
            return trade_1.NewOrderReject_Reason.INVALID_MARKET_ID;
        case 3:
        case "DUPLICATE_ORDER_ID":
            return trade_1.NewOrderReject_Reason.DUPLICATE_ORDER_ID;
        case 4:
        case "INVALID_SIDE":
            return trade_1.NewOrderReject_Reason.INVALID_SIDE;
        case 5:
        case "INVALID_TIME_IN_FORCE":
            return trade_1.NewOrderReject_Reason.INVALID_TIME_IN_FORCE;
        case 6:
        case "INVALID_ORDER_TYPE":
            return trade_1.NewOrderReject_Reason.INVALID_ORDER_TYPE;
        case 7:
        case "INVALID_POST_ONLY":
            return trade_1.NewOrderReject_Reason.INVALID_POST_ONLY;
        case 8:
        case "INVALID_SELF_TRADE_PREVENTION":
            return trade_1.NewOrderReject_Reason.INVALID_SELF_TRADE_PREVENTION;
        case 9:
        case "UNKNOWN_TRADER":
            return trade_1.NewOrderReject_Reason.UNKNOWN_TRADER;
        case 10:
        case "PRICE_WITH_MARKET_LIMIT_ORDER":
            return trade_1.NewOrderReject_Reason.PRICE_WITH_MARKET_LIMIT_ORDER;
        case 11:
        case "POST_ONLY_WITH_MARKET_ORDER":
            return trade_1.NewOrderReject_Reason.POST_ONLY_WITH_MARKET_ORDER;
        case 12:
        case "POST_ONLY_WITH_INVALID_TIF":
            return trade_1.NewOrderReject_Reason.POST_ONLY_WITH_INVALID_TIF;
        case 13:
        case "EXCEEDED_SPOT_POSITION":
            return trade_1.NewOrderReject_Reason.EXCEEDED_SPOT_POSITION;
        case 14:
        case "NO_OPPOSING_RESTING_ORDER":
            return trade_1.NewOrderReject_Reason.NO_OPPOSING_RESTING_ORDER;
        case 15:
        case "POST_ONLY_WOULD_TRADE":
            return trade_1.NewOrderReject_Reason.POST_ONLY_WOULD_TRADE;
        case 16:
        case "DID_NOT_FULLY_FILL":
            return trade_1.NewOrderReject_Reason.DID_NOT_FULLY_FILL;
        case 17:
        case "ONLY_ORDER_CANCEL_ACCEPTED":
            return trade_1.NewOrderReject_Reason.ONLY_ORDER_CANCEL_ACCEPTED;
        case 18:
        case "PROTECTION_PRICE_WOULD_NOT_TRADE":
            return trade_1.NewOrderReject_Reason.PROTECTION_PRICE_WOULD_NOT_TRADE;
        case 19:
        case "NO_REFERENCE_PRICE":
            return trade_1.NewOrderReject_Reason.NO_REFERENCE_PRICE;
        case 20:
        case "SLIPPAGE_TOO_HIGH":
            return trade_1.NewOrderReject_Reason.SLIPPAGE_TOO_HIGH;
        case 21:
        case "OUTSIDE_PRICE_BAND":
            return trade_1.NewOrderReject_Reason.OUTSIDE_PRICE_BAND;
        default:
            throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum NewOrderReject_Reason");
    }
}
exports.newOrderReject_ReasonFromJSON = newOrderReject_ReasonFromJSON;
function newOrderReject_ReasonToJSON(object) {
    switch (object) {
        case trade_1.NewOrderReject_Reason.UNCLASSIFIED:
            return "UNCLASSIFIED";
        case trade_1.NewOrderReject_Reason.INVALID_QUANTITY:
            return "INVALID_QUANTITY";
        case trade_1.NewOrderReject_Reason.INVALID_MARKET_ID:
            return "INVALID_MARKET_ID";
        case trade_1.NewOrderReject_Reason.DUPLICATE_ORDER_ID:
            return "DUPLICATE_ORDER_ID";
        case trade_1.NewOrderReject_Reason.INVALID_SIDE:
            return "INVALID_SIDE";
        case trade_1.NewOrderReject_Reason.INVALID_TIME_IN_FORCE:
            return "INVALID_TIME_IN_FORCE";
        case trade_1.NewOrderReject_Reason.INVALID_ORDER_TYPE:
            return "INVALID_ORDER_TYPE";
        case trade_1.NewOrderReject_Reason.INVALID_POST_ONLY:
            return "INVALID_POST_ONLY";
        case trade_1.NewOrderReject_Reason.INVALID_SELF_TRADE_PREVENTION:
            return "INVALID_SELF_TRADE_PREVENTION";
        case trade_1.NewOrderReject_Reason.UNKNOWN_TRADER:
            return "UNKNOWN_TRADER";
        case trade_1.NewOrderReject_Reason.PRICE_WITH_MARKET_LIMIT_ORDER:
            return "PRICE_WITH_MARKET_LIMIT_ORDER";
        case trade_1.NewOrderReject_Reason.POST_ONLY_WITH_MARKET_ORDER:
            return "POST_ONLY_WITH_MARKET_ORDER";
        case trade_1.NewOrderReject_Reason.POST_ONLY_WITH_INVALID_TIF:
            return "POST_ONLY_WITH_INVALID_TIF";
        case trade_1.NewOrderReject_Reason.EXCEEDED_SPOT_POSITION:
            return "EXCEEDED_SPOT_POSITION";
        case trade_1.NewOrderReject_Reason.NO_OPPOSING_RESTING_ORDER:
            return "NO_OPPOSING_RESTING_ORDER";
        case trade_1.NewOrderReject_Reason.POST_ONLY_WOULD_TRADE:
            return "POST_ONLY_WOULD_TRADE";
        case trade_1.NewOrderReject_Reason.DID_NOT_FULLY_FILL:
            return "DID_NOT_FULLY_FILL";
        case trade_1.NewOrderReject_Reason.ONLY_ORDER_CANCEL_ACCEPTED:
            return "ONLY_ORDER_CANCEL_ACCEPTED";
        case trade_1.NewOrderReject_Reason.PROTECTION_PRICE_WOULD_NOT_TRADE:
            return "PROTECTION_PRICE_WOULD_NOT_TRADE";
        case trade_1.NewOrderReject_Reason.NO_REFERENCE_PRICE:
            return "NO_REFERENCE_PRICE";
        case trade_1.NewOrderReject_Reason.SLIPPAGE_TOO_HIGH:
            return "SLIPPAGE_TOO_HIGH";
        case trade_1.NewOrderReject_Reason.OUTSIDE_PRICE_BAND:
            return "OUTSIDE_PRICE_BAND";
        default:
            throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum NewOrderReject_Reason");
    }
}
exports.newOrderReject_ReasonToJSON = newOrderReject_ReasonToJSON;
function cancelOrderReject_ReasonFromJSON(object) {
    switch (object) {
        case 0:
        case "UNCLASSIFIED":
            return trade_1.CancelOrderReject_Reason.UNCLASSIFIED;
        case 1:
        case "INVALID_MARKET_ID":
            return trade_1.CancelOrderReject_Reason.INVALID_MARKET_ID;
        case 2:
        case "ORDER_NOT_FOUND":
            return trade_1.CancelOrderReject_Reason.ORDER_NOT_FOUND;
        default:
            throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CancelOrderReject_Reason");
    }
}
exports.cancelOrderReject_ReasonFromJSON = cancelOrderReject_ReasonFromJSON;
function cancelOrderReject_ReasonToJSON(object) {
    switch (object) {
        case trade_1.CancelOrderReject_Reason.UNCLASSIFIED:
            return "UNCLASSIFIED";
        case trade_1.CancelOrderReject_Reason.INVALID_MARKET_ID:
            return "INVALID_MARKET_ID";
        case trade_1.CancelOrderReject_Reason.ORDER_NOT_FOUND:
            return "ORDER_NOT_FOUND";
        default:
            throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CancelOrderReject_Reason");
    }
}
exports.cancelOrderReject_ReasonToJSON = cancelOrderReject_ReasonToJSON;
function modifyOrderReject_ReasonFromJSON(object) {
    switch (object) {
        case 0:
        case "UNCLASSIFIED":
            return trade_1.ModifyOrderReject_Reason.UNCLASSIFIED;
        case 1:
        case "INVALID_QUANTITY":
            return trade_1.ModifyOrderReject_Reason.INVALID_QUANTITY;
        case 2:
        case "INVALID_MARKET_ID":
            return trade_1.ModifyOrderReject_Reason.INVALID_MARKET_ID;
        case 3:
        case "ORDER_NOT_FOUND":
            return trade_1.ModifyOrderReject_Reason.ORDER_NOT_FOUND;
        case 4:
        case "INVALID_IFM":
            return trade_1.ModifyOrderReject_Reason.INVALID_IFM;
        case 5:
        case "INVALID_POST_ONLY":
            return trade_1.ModifyOrderReject_Reason.INVALID_POST_ONLY;
        case 6:
        case "INVALID_SELF_TRADE_PREVENTION":
            return trade_1.ModifyOrderReject_Reason.INVALID_SELF_TRADE_PREVENTION;
        case 7:
        case "UNKNOWN_TRADER":
            return trade_1.ModifyOrderReject_Reason.UNKNOWN_TRADER;
        case 8:
        case "EXCEEDED_SPOT_POSITION":
            return trade_1.ModifyOrderReject_Reason.EXCEEDED_SPOT_POSITION;
        case 9:
        case "POST_ONLY_WOULD_TRADE":
            return trade_1.ModifyOrderReject_Reason.POST_ONLY_WOULD_TRADE;
        case 17:
        case "ONLY_ORDER_CANCEL_ACCEPTED":
            return trade_1.ModifyOrderReject_Reason.ONLY_ORDER_CANCEL_ACCEPTED;
        case 11:
        case "OUTSIDE_PRICE_BAND":
            return trade_1.ModifyOrderReject_Reason.OUTSIDE_PRICE_BAND;
        default:
            throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ModifyOrderReject_Reason");
    }
}
exports.modifyOrderReject_ReasonFromJSON = modifyOrderReject_ReasonFromJSON;
function modifyOrderReject_ReasonToJSON(object) {
    switch (object) {
        case trade_1.ModifyOrderReject_Reason.UNCLASSIFIED:
            return "UNCLASSIFIED";
        case trade_1.ModifyOrderReject_Reason.INVALID_QUANTITY:
            return "INVALID_QUANTITY";
        case trade_1.ModifyOrderReject_Reason.INVALID_MARKET_ID:
            return "INVALID_MARKET_ID";
        case trade_1.ModifyOrderReject_Reason.ORDER_NOT_FOUND:
            return "ORDER_NOT_FOUND";
        case trade_1.ModifyOrderReject_Reason.INVALID_IFM:
            return "INVALID_IFM";
        case trade_1.ModifyOrderReject_Reason.INVALID_POST_ONLY:
            return "INVALID_POST_ONLY";
        case trade_1.ModifyOrderReject_Reason.INVALID_SELF_TRADE_PREVENTION:
            return "INVALID_SELF_TRADE_PREVENTION";
        case trade_1.ModifyOrderReject_Reason.UNKNOWN_TRADER:
            return "UNKNOWN_TRADER";
        case trade_1.ModifyOrderReject_Reason.EXCEEDED_SPOT_POSITION:
            return "EXCEEDED_SPOT_POSITION";
        case trade_1.ModifyOrderReject_Reason.POST_ONLY_WOULD_TRADE:
            return "POST_ONLY_WOULD_TRADE";
        case trade_1.ModifyOrderReject_Reason.ONLY_ORDER_CANCEL_ACCEPTED:
            return "ONLY_ORDER_CANCEL_ACCEPTED";
        case trade_1.ModifyOrderReject_Reason.OUTSIDE_PRICE_BAND:
            return "OUTSIDE_PRICE_BAND";
        default:
            throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ModifyOrderReject_Reason");
    }
}
exports.modifyOrderReject_ReasonToJSON = modifyOrderReject_ReasonToJSON;
function createBaseCredentials() {
    return { accessKeyId: "", signature: "", timestamp: BigInt("0") };
}
exports.CredentialsMethods = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.timestamp = longToBigint(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            accessKeyId: isSet(object.accessKeyId) ? String(object.accessKeyId) : "",
            signature: isSet(object.signature) ? String(object.signature) : "",
            timestamp: isSet(object.timestamp) ? BigInt(object.timestamp) : BigInt("0"),
        };
    },
    toJSON(message) {
        const obj = {};
        message.accessKeyId !== undefined && (obj.accessKeyId = message.accessKeyId);
        message.signature !== undefined && (obj.signature = message.signature);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toString());
        return obj;
    },
};
function createBaseOrderRequest() {
    return { new: undefined, cancel: undefined, modify: undefined, heartbeat: undefined, mc: undefined };
}
exports.OrderRequestMethods = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.new !== undefined) {
            exports.NewOrderMethods.encode(message.new, writer.uint32(10).fork()).ldelim();
        }
        if (message.cancel !== undefined) {
            exports.CancelOrderMethods.encode(message.cancel, writer.uint32(18).fork()).ldelim();
        }
        if (message.modify !== undefined) {
            exports.ModifyOrderMethods.encode(message.modify, writer.uint32(26).fork()).ldelim();
        }
        if (message.heartbeat !== undefined) {
            exports.HeartbeatMethods.encode(message.heartbeat, writer.uint32(34).fork()).ldelim();
        }
        if (message.mc !== undefined) {
            exports.MassCancelMethods.encode(message.mc, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
                    message.new = exports.NewOrderMethods.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.cancel = exports.CancelOrderMethods.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.modify = exports.ModifyOrderMethods.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.heartbeat = exports.HeartbeatMethods.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.mc = exports.MassCancelMethods.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            new: isSet(object.new) ? exports.NewOrderMethods.fromJSON(object.new) : undefined,
            cancel: isSet(object.cancel) ? exports.CancelOrderMethods.fromJSON(object.cancel) : undefined,
            modify: isSet(object.modify) ? exports.ModifyOrderMethods.fromJSON(object.modify) : undefined,
            heartbeat: isSet(object.heartbeat) ? exports.HeartbeatMethods.fromJSON(object.heartbeat) : undefined,
            mc: isSet(object.mc) ? exports.MassCancelMethods.fromJSON(object.mc) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.new !== undefined && (obj.new = message.new ? exports.NewOrderMethods.toJSON(message.new) : undefined);
        message.cancel !== undefined && (obj.cancel = message.cancel ? exports.CancelOrderMethods.toJSON(message.cancel) : undefined);
        message.modify !== undefined && (obj.modify = message.modify ? exports.ModifyOrderMethods.toJSON(message.modify) : undefined);
        message.heartbeat !== undefined &&
            (obj.heartbeat = message.heartbeat ? exports.HeartbeatMethods.toJSON(message.heartbeat) : undefined);
        message.mc !== undefined && (obj.mc = message.mc ? exports.MassCancelMethods.toJSON(message.mc) : undefined);
        return obj;
    },
};
function createBaseNewOrder() {
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
exports.NewOrderMethods = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.clientOrderId = longToBigint(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.requestId = longToBigint(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.marketId = longToBigint(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.price = longToBigint(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.quantity = longToBigint(reader.uint64());
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.side = reader.int32();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.timeInForce = reader.int32();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.orderType = reader.int32();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.subaccountId = longToBigint(reader.uint64());
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.selfTradePrevention = reader.int32();
                    continue;
                case 11:
                    if (tag !== 88) {
                        break;
                    }
                    message.postOnly = reader.int32();
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
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
function createBaseCancelOrder() {
    return { marketId: BigInt("0"), clientOrderId: BigInt("0"), requestId: BigInt("0"), subaccountId: BigInt("0") };
}
exports.CancelOrderMethods = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.marketId = longToBigint(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.clientOrderId = longToBigint(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.requestId = longToBigint(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.subaccountId = longToBigint(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            marketId: isSet(object.marketId) ? BigInt(object.marketId) : BigInt("0"),
            clientOrderId: isSet(object.clientOrderId) ? BigInt(object.clientOrderId) : BigInt("0"),
            requestId: isSet(object.requestId) ? BigInt(object.requestId) : BigInt("0"),
            subaccountId: isSet(object.subaccountId) ? BigInt(object.subaccountId) : BigInt("0"),
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId.toString());
        message.clientOrderId !== undefined && (obj.clientOrderId = message.clientOrderId.toString());
        message.requestId !== undefined && (obj.requestId = message.requestId.toString());
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId.toString());
        return obj;
    },
};
function createBaseModifyOrder() {
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
exports.ModifyOrderMethods = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.marketId = longToBigint(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.clientOrderId = longToBigint(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.requestId = longToBigint(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.newPrice = longToBigint(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.newQuantity = longToBigint(reader.uint64());
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.subaccountId = longToBigint(reader.uint64());
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.selfTradePrevention = reader.int32();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.postOnly = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
function createBaseMassCancel() {
    return { subaccountId: BigInt("0"), requestId: BigInt("0"), marketId: undefined, side: undefined };
}
exports.MassCancelMethods = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.subaccountId = longToBigint(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.requestId = longToBigint(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.marketId = longToBigint(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.side = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            subaccountId: isSet(object.subaccountId) ? BigInt(object.subaccountId) : BigInt("0"),
            requestId: isSet(object.requestId) ? BigInt(object.requestId) : BigInt("0"),
            marketId: isSet(object.marketId) ? BigInt(object.marketId) : undefined,
            side: isSet(object.side) ? sideFromJSON(object.side) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId.toString());
        message.requestId !== undefined && (obj.requestId = message.requestId.toString());
        message.marketId !== undefined && (obj.marketId = message.marketId.toString());
        message.side !== undefined && (obj.side = message.side !== undefined ? sideToJSON(message.side) : undefined);
        return obj;
    },
};
function createBaseHeartbeat() {
    return { requestId: BigInt("0"), timestamp: BigInt("0") };
}
exports.HeartbeatMethods = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.requestId !== BigInt("0")) {
            writer.uint32(8).uint64(message.requestId.toString());
        }
        if (message.timestamp !== BigInt("0")) {
            writer.uint32(16).uint64(message.timestamp.toString());
        }
        return writer;
    },
    decode(input, length) {
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
                    message.requestId = longToBigint(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.timestamp = longToBigint(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            requestId: isSet(object.requestId) ? BigInt(object.requestId) : BigInt("0"),
            timestamp: isSet(object.timestamp) ? BigInt(object.timestamp) : BigInt("0"),
        };
    },
    toJSON(message) {
        const obj = {};
        message.requestId !== undefined && (obj.requestId = message.requestId.toString());
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toString());
        return obj;
    },
};
function createBaseOrderResponse() {
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
exports.OrderResponseMethods = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.newAck !== undefined) {
            exports.NewOrderAckMethods.encode(message.newAck, writer.uint32(10).fork()).ldelim();
        }
        if (message.cancelAck !== undefined) {
            exports.CancelOrderAckMethods.encode(message.cancelAck, writer.uint32(18).fork()).ldelim();
        }
        if (message.modifyAck !== undefined) {
            exports.ModifyOrderAckMethods.encode(message.modifyAck, writer.uint32(26).fork()).ldelim();
        }
        if (message.newReject !== undefined) {
            exports.NewOrderRejectMethods.encode(message.newReject, writer.uint32(34).fork()).ldelim();
        }
        if (message.cancelReject !== undefined) {
            exports.CancelOrderRejectMethods.encode(message.cancelReject, writer.uint32(42).fork()).ldelim();
        }
        if (message.modifyReject !== undefined) {
            exports.ModifyOrderRejectMethods.encode(message.modifyReject, writer.uint32(50).fork()).ldelim();
        }
        if (message.fill !== undefined) {
            exports.FillMethods.encode(message.fill, writer.uint32(58).fork()).ldelim();
        }
        if (message.heartbeat !== undefined) {
            exports.HeartbeatMethods.encode(message.heartbeat, writer.uint32(66).fork()).ldelim();
        }
        if (message.position !== undefined) {
            exports.AssetPositionMethods.encode(message.position, writer.uint32(74).fork()).ldelim();
        }
        if (message.massCancelAck !== undefined) {
            exports.MassCancelAckMethods.encode(message.massCancelAck, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
                    message.newAck = exports.NewOrderAckMethods.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.cancelAck = exports.CancelOrderAckMethods.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.modifyAck = exports.ModifyOrderAckMethods.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.newReject = exports.NewOrderRejectMethods.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.cancelReject = exports.CancelOrderRejectMethods.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.modifyReject = exports.ModifyOrderRejectMethods.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.fill = exports.FillMethods.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.heartbeat = exports.HeartbeatMethods.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.position = exports.AssetPositionMethods.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.massCancelAck = exports.MassCancelAckMethods.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            newAck: isSet(object.newAck) ? exports.NewOrderAckMethods.fromJSON(object.newAck) : undefined,
            cancelAck: isSet(object.cancelAck) ? exports.CancelOrderAckMethods.fromJSON(object.cancelAck) : undefined,
            modifyAck: isSet(object.modifyAck) ? exports.ModifyOrderAckMethods.fromJSON(object.modifyAck) : undefined,
            newReject: isSet(object.newReject) ? exports.NewOrderRejectMethods.fromJSON(object.newReject) : undefined,
            cancelReject: isSet(object.cancelReject) ? exports.CancelOrderRejectMethods.fromJSON(object.cancelReject) : undefined,
            modifyReject: isSet(object.modifyReject) ? exports.ModifyOrderRejectMethods.fromJSON(object.modifyReject) : undefined,
            fill: isSet(object.fill) ? exports.FillMethods.fromJSON(object.fill) : undefined,
            heartbeat: isSet(object.heartbeat) ? exports.HeartbeatMethods.fromJSON(object.heartbeat) : undefined,
            position: isSet(object.position) ? exports.AssetPositionMethods.fromJSON(object.position) : undefined,
            massCancelAck: isSet(object.massCancelAck) ? exports.MassCancelAckMethods.fromJSON(object.massCancelAck) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.newAck !== undefined && (obj.newAck = message.newAck ? exports.NewOrderAckMethods.toJSON(message.newAck) : undefined);
        message.cancelAck !== undefined &&
            (obj.cancelAck = message.cancelAck ? exports.CancelOrderAckMethods.toJSON(message.cancelAck) : undefined);
        message.modifyAck !== undefined &&
            (obj.modifyAck = message.modifyAck ? exports.ModifyOrderAckMethods.toJSON(message.modifyAck) : undefined);
        message.newReject !== undefined &&
            (obj.newReject = message.newReject ? exports.NewOrderRejectMethods.toJSON(message.newReject) : undefined);
        message.cancelReject !== undefined &&
            (obj.cancelReject = message.cancelReject ? exports.CancelOrderRejectMethods.toJSON(message.cancelReject) : undefined);
        message.modifyReject !== undefined &&
            (obj.modifyReject = message.modifyReject ? exports.ModifyOrderRejectMethods.toJSON(message.modifyReject) : undefined);
        message.fill !== undefined && (obj.fill = message.fill ? exports.FillMethods.toJSON(message.fill) : undefined);
        message.heartbeat !== undefined &&
            (obj.heartbeat = message.heartbeat ? exports.HeartbeatMethods.toJSON(message.heartbeat) : undefined);
        message.position !== undefined &&
            (obj.position = message.position ? exports.AssetPositionMethods.toJSON(message.position) : undefined);
        message.massCancelAck !== undefined &&
            (obj.massCancelAck = message.massCancelAck ? exports.MassCancelAckMethods.toJSON(message.massCancelAck) : undefined);
        return obj;
    },
};
function createBaseNewOrderAck() {
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
exports.NewOrderAckMethods = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.msgSeqNum = longToBigint(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.clientOrderId = longToBigint(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.requestId = longToBigint(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.exchangeOrderId = longToBigint(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.marketId = longToBigint(reader.uint64());
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.price = longToBigint(reader.uint64());
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.quantity = longToBigint(reader.uint64());
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.side = reader.int32();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.timeInForce = reader.int32();
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.orderType = reader.int32();
                    continue;
                case 11:
                    if (tag !== 88) {
                        break;
                    }
                    message.transactTime = longToBigint(reader.uint64());
                    continue;
                case 12:
                    if (tag !== 96) {
                        break;
                    }
                    message.subaccountId = longToBigint(reader.uint64());
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
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
function createBaseCancelOrderAck() {
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
exports.CancelOrderAckMethods = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.msgSeqNum = longToBigint(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.clientOrderId = longToBigint(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.requestId = longToBigint(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.transactTime = longToBigint(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.subaccountId = longToBigint(reader.uint64());
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.reason = reader.int32();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.marketId = longToBigint(reader.uint64());
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.exchangeOrderId = longToBigint(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
function createBaseModifyOrderAck() {
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
exports.ModifyOrderAckMethods = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.msgSeqNum = longToBigint(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.clientOrderId = longToBigint(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.requestId = longToBigint(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.transactTime = longToBigint(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.remainingQuantity = longToBigint(reader.uint64());
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.subaccountId = longToBigint(reader.uint64());
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.marketId = longToBigint(reader.uint64());
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.price = longToBigint(reader.uint64());
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.quantity = longToBigint(reader.uint64());
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.cumulativeQuantity = longToBigint(reader.uint64());
                    continue;
                case 11:
                    if (tag !== 88) {
                        break;
                    }
                    message.exchangeOrderId = longToBigint(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
function createBaseMassCancelAck() {
    return {
        msgSeqNum: BigInt("0"),
        subaccountId: BigInt("0"),
        requestId: BigInt("0"),
        transactTime: BigInt("0"),
        reason: undefined,
        totalAffectedOrders: 0,
    };
}
exports.MassCancelAckMethods = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.msgSeqNum = longToBigint(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.subaccountId = longToBigint(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.requestId = longToBigint(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.transactTime = longToBigint(reader.uint64());
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.reason = reader.int32();
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
    fromJSON(object) {
        return {
            msgSeqNum: isSet(object.msgSeqNum) ? BigInt(object.msgSeqNum) : BigInt("0"),
            subaccountId: isSet(object.subaccountId) ? BigInt(object.subaccountId) : BigInt("0"),
            requestId: isSet(object.requestId) ? BigInt(object.requestId) : BigInt("0"),
            transactTime: isSet(object.transactTime) ? BigInt(object.transactTime) : BigInt("0"),
            reason: isSet(object.reason) ? massCancelAck_ReasonFromJSON(object.reason) : undefined,
            totalAffectedOrders: isSet(object.totalAffectedOrders) ? Number(object.totalAffectedOrders) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
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
function createBaseNewOrderReject() {
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
exports.NewOrderRejectMethods = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.msgSeqNum = longToBigint(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.clientOrderId = longToBigint(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.requestId = longToBigint(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.transactTime = longToBigint(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.subaccountId = longToBigint(reader.uint64());
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.reason = reader.int32();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.marketId = longToBigint(reader.uint64());
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.price = longToBigint(reader.uint64());
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.quantity = longToBigint(reader.uint64());
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.side = reader.int32();
                    continue;
                case 11:
                    if (tag !== 88) {
                        break;
                    }
                    message.timeInForce = reader.int32();
                    continue;
                case 12:
                    if (tag !== 96) {
                        break;
                    }
                    message.orderType = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
function createBaseCancelOrderReject() {
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
exports.CancelOrderRejectMethods = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.msgSeqNum = longToBigint(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.clientOrderId = longToBigint(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.requestId = longToBigint(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.transactTime = longToBigint(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.subaccountId = longToBigint(reader.uint64());
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.reason = reader.int32();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.marketId = longToBigint(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
function createBaseModifyOrderReject() {
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
exports.ModifyOrderRejectMethods = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.msgSeqNum = longToBigint(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.clientOrderId = longToBigint(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.requestId = longToBigint(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.transactTime = longToBigint(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.subaccountId = longToBigint(reader.uint64());
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.reason = reader.int32();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.marketId = longToBigint(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
function createBaseFill() {
    return {
        msgSeqNum: BigInt("0"),
        marketId: BigInt("0"),
        clientOrderId: BigInt("0"),
        exchangeOrderId: BigInt("0"),
        fillPrice: BigInt("0"),
        fillQuantity: BigInt("0"),
        leavesQuantity: BigInt("0"),
        fillQuoteQuantity: BigInt("0"),
        transactTime: BigInt("0"),
        subaccountId: BigInt("0"),
        cumulativeQuantity: BigInt("0"),
        side: 0,
        aggressorIndicator: false,
        feeRatio: undefined,
        tradeId: BigInt("0"),
    };
}
exports.FillMethods = {
    encode(message, writer = _m0.Writer.create()) {
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
        if (message.fillQuoteQuantity !== BigInt("0")) {
            writer.uint32(120).uint64(message.fillQuoteQuantity.toString());
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
            exports.FixedPointDecimalMethods.encode(message.feeRatio, writer.uint32(106).fork()).ldelim();
        }
        if (message.tradeId !== BigInt("0")) {
            writer.uint32(112).uint64(message.tradeId.toString());
        }
        return writer;
    },
    decode(input, length) {
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
                    message.msgSeqNum = longToBigint(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.marketId = longToBigint(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.clientOrderId = longToBigint(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.exchangeOrderId = longToBigint(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.fillPrice = longToBigint(reader.uint64());
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.fillQuantity = longToBigint(reader.uint64());
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.leavesQuantity = longToBigint(reader.uint64());
                    continue;
                case 15:
                    if (tag !== 120) {
                        break;
                    }
                    message.fillQuoteQuantity = longToBigint(reader.uint64());
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.transactTime = longToBigint(reader.uint64());
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.subaccountId = longToBigint(reader.uint64());
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.cumulativeQuantity = longToBigint(reader.uint64());
                    continue;
                case 11:
                    if (tag !== 88) {
                        break;
                    }
                    message.side = reader.int32();
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
                    message.feeRatio = exports.FixedPointDecimalMethods.decode(reader, reader.uint32());
                    continue;
                case 14:
                    if (tag !== 112) {
                        break;
                    }
                    message.tradeId = longToBigint(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            msgSeqNum: isSet(object.msgSeqNum) ? BigInt(object.msgSeqNum) : BigInt("0"),
            marketId: isSet(object.marketId) ? BigInt(object.marketId) : BigInt("0"),
            clientOrderId: isSet(object.clientOrderId) ? BigInt(object.clientOrderId) : BigInt("0"),
            exchangeOrderId: isSet(object.exchangeOrderId) ? BigInt(object.exchangeOrderId) : BigInt("0"),
            fillPrice: isSet(object.fillPrice) ? BigInt(object.fillPrice) : BigInt("0"),
            fillQuantity: isSet(object.fillQuantity) ? BigInt(object.fillQuantity) : BigInt("0"),
            leavesQuantity: isSet(object.leavesQuantity) ? BigInt(object.leavesQuantity) : BigInt("0"),
            fillQuoteQuantity: isSet(object.fillQuoteQuantity) ? BigInt(object.fillQuoteQuantity) : BigInt("0"),
            transactTime: isSet(object.transactTime) ? BigInt(object.transactTime) : BigInt("0"),
            subaccountId: isSet(object.subaccountId) ? BigInt(object.subaccountId) : BigInt("0"),
            cumulativeQuantity: isSet(object.cumulativeQuantity) ? BigInt(object.cumulativeQuantity) : BigInt("0"),
            side: isSet(object.side) ? sideFromJSON(object.side) : 0,
            aggressorIndicator: isSet(object.aggressorIndicator) ? Boolean(object.aggressorIndicator) : false,
            feeRatio: isSet(object.feeRatio) ? exports.FixedPointDecimalMethods.fromJSON(object.feeRatio) : undefined,
            tradeId: isSet(object.tradeId) ? BigInt(object.tradeId) : BigInt("0"),
        };
    },
    toJSON(message) {
        const obj = {};
        message.msgSeqNum !== undefined && (obj.msgSeqNum = message.msgSeqNum.toString());
        message.marketId !== undefined && (obj.marketId = message.marketId.toString());
        message.clientOrderId !== undefined && (obj.clientOrderId = message.clientOrderId.toString());
        message.exchangeOrderId !== undefined && (obj.exchangeOrderId = message.exchangeOrderId.toString());
        message.fillPrice !== undefined && (obj.fillPrice = message.fillPrice.toString());
        message.fillQuantity !== undefined && (obj.fillQuantity = message.fillQuantity.toString());
        message.leavesQuantity !== undefined && (obj.leavesQuantity = message.leavesQuantity.toString());
        message.fillQuoteQuantity !== undefined && (obj.fillQuoteQuantity = message.fillQuoteQuantity.toString());
        message.transactTime !== undefined && (obj.transactTime = message.transactTime.toString());
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId.toString());
        message.cumulativeQuantity !== undefined && (obj.cumulativeQuantity = message.cumulativeQuantity.toString());
        message.side !== undefined && (obj.side = sideToJSON(message.side));
        message.aggressorIndicator !== undefined && (obj.aggressorIndicator = message.aggressorIndicator);
        message.feeRatio !== undefined &&
            (obj.feeRatio = message.feeRatio ? exports.FixedPointDecimalMethods.toJSON(message.feeRatio) : undefined);
        message.tradeId !== undefined && (obj.tradeId = message.tradeId.toString());
        return obj;
    },
};
function createBaseFixedPointDecimal() {
    return { mantissa: BigInt("0"), exponent: 0 };
}
exports.FixedPointDecimalMethods = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.mantissa !== BigInt("0")) {
            writer.uint32(8).int64(message.mantissa.toString());
        }
        if (message.exponent !== 0) {
            writer.uint32(16).int32(message.exponent);
        }
        return writer;
    },
    decode(input, length) {
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
                    message.mantissa = longToBigint(reader.int64());
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
    fromJSON(object) {
        return {
            mantissa: isSet(object.mantissa) ? BigInt(object.mantissa) : BigInt("0"),
            exponent: isSet(object.exponent) ? Number(object.exponent) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.mantissa !== undefined && (obj.mantissa = message.mantissa.toString());
        message.exponent !== undefined && (obj.exponent = Math.round(message.exponent));
        return obj;
    },
};
function createBaseAssetPosition() {
    return { subaccountId: BigInt("0"), assetId: BigInt("0"), total: undefined, available: undefined };
}
exports.AssetPositionMethods = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subaccountId !== BigInt("0")) {
            writer.uint32(8).uint64(message.subaccountId.toString());
        }
        if (message.assetId !== BigInt("0")) {
            writer.uint32(16).uint64(message.assetId.toString());
        }
        if (message.total !== undefined) {
            exports.RawUnitsMethods.encode(message.total, writer.uint32(26).fork()).ldelim();
        }
        if (message.available !== undefined) {
            exports.RawUnitsMethods.encode(message.available, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
                    message.subaccountId = longToBigint(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.assetId = longToBigint(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.total = exports.RawUnitsMethods.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.available = exports.RawUnitsMethods.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            subaccountId: isSet(object.subaccountId) ? BigInt(object.subaccountId) : BigInt("0"),
            assetId: isSet(object.assetId) ? BigInt(object.assetId) : BigInt("0"),
            total: isSet(object.total) ? exports.RawUnitsMethods.fromJSON(object.total) : undefined,
            available: isSet(object.available) ? exports.RawUnitsMethods.fromJSON(object.available) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId.toString());
        message.assetId !== undefined && (obj.assetId = message.assetId.toString());
        message.total !== undefined && (obj.total = message.total ? exports.RawUnitsMethods.toJSON(message.total) : undefined);
        message.available !== undefined &&
            (obj.available = message.available ? exports.RawUnitsMethods.toJSON(message.available) : undefined);
        return obj;
    },
};
function createBaseRawUnits() {
    return { word0: BigInt("0"), word1: BigInt("0"), word2: BigInt("0"), word3: BigInt("0") };
}
exports.RawUnitsMethods = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.word0 = longToBigint(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.word1 = longToBigint(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.word2 = longToBigint(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.word3 = longToBigint(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            word0: isSet(object.word0) ? BigInt(object.word0) : BigInt("0"),
            word1: isSet(object.word1) ? BigInt(object.word1) : BigInt("0"),
            word2: isSet(object.word2) ? BigInt(object.word2) : BigInt("0"),
            word3: isSet(object.word3) ? BigInt(object.word3) : BigInt("0"),
        };
    },
    toJSON(message) {
        const obj = {};
        message.word0 !== undefined && (obj.word0 = message.word0.toString());
        message.word1 !== undefined && (obj.word1 = message.word1.toString());
        message.word2 !== undefined && (obj.word2 = message.word2.toString());
        message.word3 !== undefined && (obj.word3 = message.word3.toString());
        return obj;
    },
};
function createBaseBootstrap() {
    return { done: undefined, resting: undefined, position: undefined };
}
exports.BootstrapMethods = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.done !== undefined) {
            exports.DoneMethods.encode(message.done, writer.uint32(10).fork()).ldelim();
        }
        if (message.resting !== undefined) {
            exports.RestingOrdersMethods.encode(message.resting, writer.uint32(18).fork()).ldelim();
        }
        if (message.position !== undefined) {
            exports.AssetPositionsMethods.encode(message.position, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
                    message.done = exports.DoneMethods.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.resting = exports.RestingOrdersMethods.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.position = exports.AssetPositionsMethods.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            done: isSet(object.done) ? exports.DoneMethods.fromJSON(object.done) : undefined,
            resting: isSet(object.resting) ? exports.RestingOrdersMethods.fromJSON(object.resting) : undefined,
            position: isSet(object.position) ? exports.AssetPositionsMethods.fromJSON(object.position) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.done !== undefined && (obj.done = message.done ? exports.DoneMethods.toJSON(message.done) : undefined);
        message.resting !== undefined &&
            (obj.resting = message.resting ? exports.RestingOrdersMethods.toJSON(message.resting) : undefined);
        message.position !== undefined &&
            (obj.position = message.position ? exports.AssetPositionsMethods.toJSON(message.position) : undefined);
        return obj;
    },
};
function createBaseRestingOrders() {
    return { orders: [] };
}
exports.RestingOrdersMethods = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.orders) {
            exports.RestingOrderMethods.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
                    message.orders.push(exports.RestingOrderMethods.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { orders: Array.isArray(object?.orders) ? object.orders.map((e) => exports.RestingOrderMethods.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map((e) => e ? exports.RestingOrderMethods.toJSON(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        return obj;
    },
};
function createBaseAssetPositions() {
    return { positions: [] };
}
exports.AssetPositionsMethods = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.positions) {
            exports.AssetPositionMethods.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
                    message.positions.push(exports.AssetPositionMethods.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            positions: Array.isArray(object?.positions) ? object.positions.map((e) => exports.AssetPositionMethods.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.positions) {
            obj.positions = message.positions.map((e) => e ? exports.AssetPositionMethods.toJSON(e) : undefined);
        }
        else {
            obj.positions = [];
        }
        return obj;
    },
};
function createBaseDone() {
    return { latestTransactTime: BigInt("0"), readOnly: false };
}
exports.DoneMethods = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.latestTransactTime !== BigInt("0")) {
            writer.uint32(8).uint64(message.latestTransactTime.toString());
        }
        if (message.readOnly === true) {
            writer.uint32(16).bool(message.readOnly);
        }
        return writer;
    },
    decode(input, length) {
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
                    message.latestTransactTime = longToBigint(reader.uint64());
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
    fromJSON(object) {
        return {
            latestTransactTime: isSet(object.latestTransactTime) ? BigInt(object.latestTransactTime) : BigInt("0"),
            readOnly: isSet(object.readOnly) ? Boolean(object.readOnly) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.latestTransactTime !== undefined && (obj.latestTransactTime = message.latestTransactTime.toString());
        message.readOnly !== undefined && (obj.readOnly = message.readOnly);
        return obj;
    },
};
function createBaseRestingOrder() {
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
        cancelOnDisconnect: false,
    };
}
exports.RestingOrderMethods = {
    encode(message, writer = _m0.Writer.create()) {
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
        if (message.cancelOnDisconnect === true) {
            writer.uint32(104).bool(message.cancelOnDisconnect);
        }
        return writer;
    },
    decode(input, length) {
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
                    message.clientOrderId = longToBigint(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.exchangeOrderId = longToBigint(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.marketId = longToBigint(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.price = longToBigint(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.orderQuantity = longToBigint(reader.uint64());
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.side = reader.int32();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.timeInForce = reader.int32();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.orderType = reader.int32();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.remainingQuantity = longToBigint(reader.uint64());
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.restTime = longToBigint(reader.uint64());
                    continue;
                case 11:
                    if (tag !== 88) {
                        break;
                    }
                    message.subaccountId = longToBigint(reader.uint64());
                    continue;
                case 12:
                    if (tag !== 96) {
                        break;
                    }
                    message.cumulativeQuantity = longToBigint(reader.uint64());
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
    fromJSON(object) {
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
            cancelOnDisconnect: isSet(object.cancelOnDisconnect) ? Boolean(object.cancelOnDisconnect) : false,
        };
    },
    toJSON(message) {
        const obj = {};
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
        message.cancelOnDisconnect !== undefined && (obj.cancelOnDisconnect = message.cancelOnDisconnect);
        return obj;
    },
};
var tsProtoGlobalThis = (() => {
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
function longToBigint(long) {
    return BigInt(long.toString());
}
// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
