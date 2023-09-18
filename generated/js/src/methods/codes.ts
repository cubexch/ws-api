import {
  CloseCode,
} from '../codes';

export function closeCodeFromJSON(object: any): CloseCode {
  switch (object) {
    case 0:
    case "DO_NOT_USE":
      return CloseCode.DO_NOT_USE;
    case 4600:
    case "ON_WAITLIST":
      return CloseCode.ON_WAITLIST;
    case 4601:
    case "INCOMPLETE_KYC":
      return CloseCode.INCOMPLETE_KYC;
    case 4602:
    case "UNAPPROVED_KYC":
      return CloseCode.UNAPPROVED_KYC;
    case 4700:
    case "BAD_MESSAGE":
      return CloseCode.BAD_MESSAGE;
    case 4701:
    case "NO_HEARTBEAT":
      return CloseCode.NO_HEARTBEAT;
    case 4999:
    case "UNSPECIFIED":
      return CloseCode.UNSPECIFIED;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CloseCode");
  }
}

export function closeCodeToJSON(object: CloseCode): string {
  switch (object) {
    case CloseCode.DO_NOT_USE:
      return "DO_NOT_USE";
    case CloseCode.ON_WAITLIST:
      return "ON_WAITLIST";
    case CloseCode.INCOMPLETE_KYC:
      return "INCOMPLETE_KYC";
    case CloseCode.UNAPPROVED_KYC:
      return "UNAPPROVED_KYC";
    case CloseCode.BAD_MESSAGE:
      return "BAD_MESSAGE";
    case CloseCode.NO_HEARTBEAT:
      return "NO_HEARTBEAT";
    case CloseCode.UNSPECIFIED:
      return "UNSPECIFIED";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CloseCode");
  }
}

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
