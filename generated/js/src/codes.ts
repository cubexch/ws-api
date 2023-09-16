/* eslint-disable */

export const protobufPackage = "codes";

/**
 * Custom error codes. Sent on a best-effort basis on the WebSocket
 * `CloseFrame`.
 */
export enum CloseCode {
  DO_NOT_USE = 0,
  ON_WAITLIST = 600,
  INCOMPLETE_KYC = 601,
  UNAPPROVED_KYC = 602,
  BAD_MESSAGE = 700,
  NO_HEARTBEAT = 701,
  UNSPECIFIED = 999,
}
