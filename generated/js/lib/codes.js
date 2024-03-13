"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseCode = exports.protobufPackage = void 0;
exports.protobufPackage = "codes";
/**
 * Custom error codes. Sent on a best-effort basis on the WebSocket
 * `CloseFrame`.
 */
var CloseCode;
(function (CloseCode) {
    CloseCode[CloseCode["DO_NOT_USE"] = 0] = "DO_NOT_USE";
    CloseCode[CloseCode["ON_WAITLIST"] = 4600] = "ON_WAITLIST";
    CloseCode[CloseCode["INCOMPLETE_KYC"] = 4601] = "INCOMPLETE_KYC";
    CloseCode[CloseCode["UNAPPROVED_KYC"] = 4602] = "UNAPPROVED_KYC";
    CloseCode[CloseCode["BAD_MESSAGE"] = 4700] = "BAD_MESSAGE";
    CloseCode[CloseCode["NO_HEARTBEAT"] = 4701] = "NO_HEARTBEAT";
    CloseCode[CloseCode["UNSPECIFIED"] = 4999] = "UNSPECIFIED";
})(CloseCode = exports.CloseCode || (exports.CloseCode = {}));
