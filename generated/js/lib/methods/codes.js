"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeCodeToJSON = exports.closeCodeFromJSON = void 0;
const codes_1 = require("../codes");
function closeCodeFromJSON(object) {
    switch (object) {
        case 0:
        case "DO_NOT_USE":
            return codes_1.CloseCode.DO_NOT_USE;
        case 4600:
        case "ON_WAITLIST":
            return codes_1.CloseCode.ON_WAITLIST;
        case 4601:
        case "INCOMPLETE_KYC":
            return codes_1.CloseCode.INCOMPLETE_KYC;
        case 4602:
        case "UNAPPROVED_KYC":
            return codes_1.CloseCode.UNAPPROVED_KYC;
        case 4700:
        case "BAD_MESSAGE":
            return codes_1.CloseCode.BAD_MESSAGE;
        case 4701:
        case "NO_HEARTBEAT":
            return codes_1.CloseCode.NO_HEARTBEAT;
        case 4999:
        case "UNSPECIFIED":
            return codes_1.CloseCode.UNSPECIFIED;
        default:
            throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CloseCode");
    }
}
exports.closeCodeFromJSON = closeCodeFromJSON;
function closeCodeToJSON(object) {
    switch (object) {
        case codes_1.CloseCode.DO_NOT_USE:
            return "DO_NOT_USE";
        case codes_1.CloseCode.ON_WAITLIST:
            return "ON_WAITLIST";
        case codes_1.CloseCode.INCOMPLETE_KYC:
            return "INCOMPLETE_KYC";
        case codes_1.CloseCode.UNAPPROVED_KYC:
            return "UNAPPROVED_KYC";
        case codes_1.CloseCode.BAD_MESSAGE:
            return "BAD_MESSAGE";
        case codes_1.CloseCode.NO_HEARTBEAT:
            return "NO_HEARTBEAT";
        case codes_1.CloseCode.UNSPECIFIED:
            return "UNSPECIFIED";
        default:
            throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CloseCode");
    }
}
exports.closeCodeToJSON = closeCodeToJSON;
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
