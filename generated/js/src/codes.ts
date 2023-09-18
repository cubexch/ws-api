/* eslint-disable */

export const protobufPackage = "codes";

/**
 * Custom error codes. Sent on a best-effort basis on the WebSocket
 * `CloseFrame`.
 */
export enum CloseCode {
  DO_NOT_USE = 0,
  ON_WAITLIST = 4600,
  INCOMPLETE_KYC = 4601,
  UNAPPROVED_KYC = 4602,
  BAD_MESSAGE = 4700,
  NO_HEARTBEAT = 4701,
  UNSPECIFIED = 4999,
}
