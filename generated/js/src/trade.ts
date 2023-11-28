/* eslint-disable */

export const protobufPackage = "trade";

/**
 * This schema defines the Protobuf messages used for communication with the
 * Cube Order Service (Osmium, OS).
 *
 * ### Connection
 *
 * The order service exposes a websocket endpoint for clients to connect to.
 * Once connected, clients should submit a [`Credentials`](#credentials)
 * message, listen for [`Bootstrap`](#bootstrap) messages for resting orders
 * and positions, and then can begin submitting
 * [`OrderRequest`](#order-request) and processing
 * [`OrderResponse`](#order-response).
 *
 * ### Heartbeats
 *
 * Application-level heartbeats are expected every 30 seconds. If more than one
 * interval is missed, the order service will disconnect the websocket.
 *
 * ### Price, Quantity, and Lots
 *
 * All orders are placed on a single market, specified by the market-id. The
 * market definition specifies the base and quote assets and their respective
 * lot sizes for the particular market. Prices and quantities in this API are in
 * units of base and quote _lots_. That is, a quantity of 1 equals 1 base lot,
 * and a price of 10 equals 10 quote lots / base lot (read as quote lots per
 * base lot).
 *
 * For example, consider an ETHBTC market. ETH is the base asset and BTC is the
 * quote asset. ETH has 18 decimal places (`1 ETH = 10^18 WEI`) and BTC has 8
 * decimal places (`1 BTC = 10^8 SAT`). Suppose that in this example, the ETHBTC
 * market has a base lot size of `10^15` and a quote lot size of `10^0` (`1`).
 * Then an order placed with `quantity = 230` and `price = 6300` in
 * market-agnostic terms is an order for `0.23 ETH` at a price of `0.06300 BTC /
 * ETH`. In more detail, we have:
 *
 * ```text
 * 230 base lots
 *   * (10^15 WEI / base lot)
 *   / (10^18 WEI / ETH)
 *   = 230 ETH
 *
 * 6300 quote lots / base lot
 *   * (1 SAT / quote lot)
 *   / (10^15 WEI / base lot)
 *   * (10^18 WEI / ETH)
 *   / (10^8 SAT / BTC)
 *   = 0.06300 BTC / ETH
 * ```
 *
 * ### Exchange Order ID
 *
 * Each order is assigned a unique ID by the exchange. This order ID is
 * consistent across modifies (including cancel-replace), and other operations.
 * The exchange order ID can be used to find a particular order in the
 * market-by-order market data feed, which allows the determination of FIFO
 * queue priority, etc.
 *
 * ### Transact Time
 *
 * The transact time is the matching engine timestamp for when an event is
 * processed. Events that occur with the same transact time occur atomically
 * from the perspective of the matching engine.
 */

/**
 * Side specifies whether the order is buying or selling the base asset. A trade
 * is matched when a buyer (BID) and a seller (ASK) agree on a price (cross).
 * The bid-ask spread is the gap between the highest bid price and lowest ask
 * price on the orderbook.
 */
export enum Side {
  /** BID - A bid order buys the base asset with the quote asset. */
  BID = 0,
  /** ASK - An ask (or offer) order sells the base asset and gets the quote asset. */
  ASK = 1,
}

/** Time-in-force (TIF) specifies how long the order remains in effect. */
export enum TimeInForce {
  /**
   * IMMEDIATE_OR_CANCEL - Immediate-or-cancel (IOC), also known as fill-and-kill (FAK), orders are
   * immediately executed against resting orders. If the order cannot be fully
   * filled, the remaining balance will be canceled, and an additional
   * CancelOrderAck with the IOC reason will be sent.
   */
  IMMEDIATE_OR_CANCEL = 0,
  /**
   * GOOD_FOR_SESSION - Good-for-session (GFS) orders are active until they are completely
   * executed, canceled, or when the session expires.
   */
  GOOD_FOR_SESSION = 1,
  /**
   * FILL_OR_KILL - Fill-or-kill (FOK), also known as all-or-none (AON), orders must be filled
   * immediately against resting orders or the entire order is canceled.
   */
  FILL_OR_KILL = 2,
}

/** Order-type specifies how the order will be placed into the order book. */
export enum OrderType {
  /**
   * LIMIT - A limit order is accompanied with a price (inclusive) that specifies the
   * upper limit to buy and the lower limit to sell. If the price is not
   * immediately available and the TIF allows resting orders, the limit order
   * will rest until filled or canceled.
   */
  LIMIT = 0,
  /**
   * MARKET_LIMIT - A market limit order crosses the bid-ask spread and, if not fully filled,
   * becomes a limit order at the best available market price. If there is no
   * opposing market, the order is rejected with the NO_OPPOSING_LIMIT_ORDER
   * reason. Price must be null.
   */
  MARKET_LIMIT = 1,
  /**
   * MARKET_WITH_PROTECTION - A market with protection order crosses the bid-ask spread and continues to
   * cross until the order is fully filled or the price protection level,
   * defined by the best market price widened by a market-specific protection
   * point count, is reached. If there is no opposing market, the order is
   * rejected with the NO_OPPOSING_LIMIT_ORDER reason. Price must be null.
   */
  MARKET_WITH_PROTECTION = 2,
}

/**
 * Self-trade-prevention (STP) allows market participants to prevent the matching
 * of orders for accounts with common ownership. Currently, STP only applies for
 * orders with the same subaccount_id. STP will only be applied when a match is
 * about to occur between the two orders. That is, if the aggressing order is
 * fully filled before reaching the resting order in FIFO order, no STP cancels
 * will happen.
 */
export enum SelfTradePrevention {
  /**
   * CANCEL_RESTING - Cancel-resting specifies that if a self-trade is about to occur, the
   * resting order should be canceled instead and further order book processing
   * should occur as normal.
   */
  CANCEL_RESTING = 0,
  /**
   * CANCEL_AGGRESSING - Cancel-aggressing specifies that if a self-trade is about to occur, the
   * aggressing order should be canceled instead and no further action should be
   * taken.
   */
  CANCEL_AGGRESSING = 1,
  /** ALLOW_SELF_TRADE - Allow-self-trade disables STP functionality. */
  ALLOW_SELF_TRADE = 2,
}

/**
 * Post-only specifies whether a new order is allowed to immediately execute.
 * Post-only cannot be enabled with market orders or with a TIF that does not
 * allow resting orders.
 */
export enum PostOnly {
  DISABLED = 0,
  ENABLED = 1,
}

/**
 * Sent by client on websocket initialization. Once the websocket has been
 * connected, the client is expected to send this credentials message
 * immediately. The API key (UUID) and secret access key (hex-encoded 32-byte
 * array) should be generated on the settings page with the write access. The
 * signature should be calculated as the concatenation of the byte string
 * `cube.xyz` and the current unix epoch in seconds interpreted at a
 * little-endian 64-bit number. For example:
 *
 * ```rust compile_fail
 * use base64::Engine;
 * use hmac::{Hmac, Mac, NewMac};
 * use std::time::SystemTime;
 *
 * let secret_key = [...];
 *
 * let timestamp = SystemTime::now()
 *     .duration_since(SystemTime::UNIX_EPOCH)
 *     .expect("clock went backwords")
 *     .as_secs();
 *
 * let mut mac = Hmac::<sha2::Sha256>::new_from_slice(
 *     secret_key
 * ).expect("new HMAC error");
 * mac.update(b"cube.xyz");
 * mac.update(&timestamp.to_le_bytes());
 * let signature_bytes = <[u8; 32]>::from(mac.finalize().into_bytes());
 * let signature = base64::general_purpose::STANDARD.encode(signature_bytes);
 * ```
 *
 * Not that the signature is base-64 encoded with the 'standard' alphabet and
 * padding.
 *
 * ```
 * ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
 * ```
 */
export interface Credentials {
  /** Public API key */
  accessKeyId: string;
  /** HMAC signature, base-64 encoded */
  signature: string;
  /** Timestamp in seconds */
  timestamp: bigint;
}

/**
 * Every client message, aside from Credentials, must be wrapped as an
 * OrderRequest.
 */
export interface OrderRequest {
  new?: NewOrder | undefined;
  cancel?: CancelOrder | undefined;
  modify?: ModifyOrder | undefined;
  heartbeat?: Heartbeat | undefined;
  mc?: MassCancel | undefined;
}

/** Place a new order. */
export interface NewOrder {
  /**
   * A unique order ID assigned by the client for this order. The ID must be
   * unique among open orders by this subaccount.
   */
  clientOrderId: bigint;
  /** A request ID that is echoed back on the NewOrderAck or NewOrderReject */
  requestId: bigint;
  marketId: bigint;
  price?: bigint | undefined;
  quantity: bigint;
  side: Side;
  timeInForce: TimeInForce;
  orderType: OrderType;
  /**
   * The subaccount to place this order on. This subaccount must be writable by
   * the API key specified in the Credentials message.
   */
  subaccountId: bigint;
  selfTradePrevention?: SelfTradePrevention | undefined;
  postOnly: PostOnly;
  /**
   * If true, this order will be automatically cancelled
   * after the closure of the network connection
   * between Cube's servers and the client that placed the order.
   *
   * If the client initiates the disconnect or network instability drops the connection,
   * the order will be cancelled when Cube's servers recognize the disconnection.
   *
   * In the event of a server-side disconnect that causes a halt in trading,
   * such as scheduled downtime, the order will be cancelled before trading resumes.
   */
  cancelOnDisconnect: boolean;
}

/**
 * Cancel a resting order.
 * Note that this can be done before the order is acknowledged (an aggressive
 * cancel) since the identifying field is the `client_order_id`.
 */
export interface CancelOrder {
  marketId: bigint;
  /** The order ID specified by the client on the NewOrder request. */
  clientOrderId: bigint;
  /** A request ID that is echoed back on the CancelOrderAck or CancelOrderReject */
  requestId: bigint;
  /** The subaccount that the NewOrder was placed on. */
  subaccountId: bigint;
}

/**
 * Modify a resting order.
 * - If the `newPrice` and the current resting order's price is the same, and
 * `newQuantity` is not greater, then the modify is considered a modify down,
 * and the FIFO queue priority is maintained. Otherwise, the modify-order
 * request is treated as an atomic cancel-replace and the replacement order is
 * placed at the end of the FIFO queue for the new price level.
 * - If post-only is specified and the replacement order would trade, then the
 * request is rejected and the current resting order remains resting.
 *
 * Currently, in-flight-mitigation (IFM) is always enabled. That is, the
 * cumulative fill qty is subtracted from `newQuantity` to calculate the new
 * resting quantity. For example:
 *
 * ```text
 *          | Resting | Filled
 * ---------+---------+--------
 * New 5    | 5       | 0
 * Fill 2   | 3       | 2
 * Modify 4 | 2       | 2
 * ```
 *
 * The post-modify quantity will be `newQuantity - filled = 4 - 2 = 2`.
 *
 * Regardless of IFM, the invariant for order quantity is that `quantity =
 * remaining_quantity + cumulative_quantity`.
 */
export interface ModifyOrder {
  marketId: bigint;
  /** The order ID specified by the client on the NewOrder request. */
  clientOrderId: bigint;
  /** A request ID that is echoed back on the ModifyOrderAck or ModifyOrderReject */
  requestId: bigint;
  newPrice: bigint;
  newQuantity: bigint;
  /** The subaccount that the NewOrder was placed on. */
  subaccountId: bigint;
  selfTradePrevention?: SelfTradePrevention | undefined;
  postOnly: PostOnly;
}

/**
 * Cancel all resting orders, optionally limiting to a particular market and /
 * or order book side.
 */
export interface MassCancel {
  /** The subaccount to cancel orders for. */
  subaccountId: bigint;
  /**
   * A request ID that is echoed back on the MassCancelAck and individual
   * CancelOrderAck's.
   */
  requestId: bigint;
  /** If specified, only orders on the corresponding market will be canceled. */
  marketId?:
    | bigint
    | undefined;
  /** If specified, only orders with this side will be canceled. */
  side?: Side | undefined;
}

/**
 * A client and server heartbeat. The heartbeat reply, including the timestamp
 * value, comes from the order service and not the matching engine. Matching
 * engine timestamps can be extracted from `transact_time` (below).
 *
 * Latency can be estimated from this, but only the relative difference between
 * successive server messages should be used. In particular, the client and
 * server clock should not be expected to be synchronized.
 */
export interface Heartbeat {
  /** A request ID that is echoed back on the Heartbeat */
  requestId: bigint;
  timestamp: bigint;
}

/**
 * Every exchange message after the initial bootstrap will be wrapped as an
 * OrderResponse.
 */
export interface OrderResponse {
  newAck?: NewOrderAck | undefined;
  cancelAck?: CancelOrderAck | undefined;
  modifyAck?: ModifyOrderAck | undefined;
  newReject?: NewOrderReject | undefined;
  cancelReject?: CancelOrderReject | undefined;
  modifyReject?: ModifyOrderReject | undefined;
  fill?: Fill | undefined;
  heartbeat?: Heartbeat | undefined;
  position?: AssetPosition | undefined;
  massCancelAck?: MassCancelAck | undefined;
}

/**
 * New-order-ack confirms a new-order request. The ack will be ordered before
 * any fills for this order.
 */
export interface NewOrderAck {
  msgSeqNum: bigint;
  /** The client order ID specified in the new-order request. */
  clientOrderId: bigint;
  /** The request ID specified in the new-order request. */
  requestId: bigint;
  /** [Exchange order ID](#exchange-order-id) */
  exchangeOrderId: bigint;
  marketId: bigint;
  /**
   * If the order ultimately rests, the `price` field will include the resting
   * price.
   */
  price?:
    | bigint
    | undefined;
  /** The quantity submitted in the new-order request. */
  quantity: bigint;
  side: Side;
  timeInForce: TimeInForce;
  orderType: OrderType;
  /** [Transact time](#transact-time) */
  transactTime: bigint;
  subaccountId: bigint;
  cancelOnDisconnect: boolean;
}

/**
 * Cancel-order-ack confirms a cancel request, or that an order has been
 * canceled as the result of a different user-initiated reason.
 */
export interface CancelOrderAck {
  msgSeqNum: bigint;
  clientOrderId: bigint;
  /**
   * If the Reason is `DISCONNECT`, `IOC`, `STP_RESTING`, or `STP_AGGRESSING`,
   * this request ID will be `u64::MAX`. Otherwise, it will be the request ID of
   * the initiated cancel action. For a mass cancel, each cancel order ack will
   * have the MassCancel's request_id.
   */
  requestId: bigint;
  /** [Transact time](#transact-time) */
  transactTime: bigint;
  subaccountId: bigint;
  reason: CancelOrderAck_Reason;
  marketId: bigint;
}

export enum CancelOrderAck_Reason {
  UNCLASSIFIED = 0,
  DISCONNECT = 1,
  /** REQUESTED - This order was specified in a cancel request. */
  REQUESTED = 2,
  /** IOC - This was an IOC new-order that does not get fully filled. */
  IOC = 3,
  /** STP_RESTING - A resting order was STP canceled. */
  STP_RESTING = 4,
  /** STP_AGGRESSING - An aggressing order was STP canceled. */
  STP_AGGRESSING = 5,
  /** MASS_CANCEL - This order was covered by a mass-cancel request. */
  MASS_CANCEL = 6,
}

/**
 * Modify-order-ack confirms a modify-order request. If the modify resulted in
 * an aggressing cancel-replace, the ack will be ordered before any fills for
 * this order.
 */
export interface ModifyOrderAck {
  msgSeqNum: bigint;
  clientOrderId: bigint;
  /** The request ID specified in the modify request. */
  requestId: bigint;
  /** [Transact time](#transact-time) */
  transactTime: bigint;
  /** The quantity remaining on the book after applying the modify request. */
  remainingQuantity: bigint;
  subaccountId: bigint;
  marketId: bigint;
  price: bigint;
  /** The quantity submitted in the modify request. */
  quantity: bigint;
  /** The cumulative filled quantity for this order. */
  cumulativeQuantity: bigint;
}

/**
 * Mass-cancel-ack confirms a mass-cancel request. If `reason` is set, the mass
 * cancel was not applied and there are no affected orders. Individual
 * CancelOrderAck's will be sent for each order that was affected.
 */
export interface MassCancelAck {
  msgSeqNum: bigint;
  subaccountId: bigint;
  /** The request ID specified in the mass-cancel request. */
  requestId: bigint;
  /** [Transact time](#transact-time) */
  transactTime: bigint;
  reason?:
    | MassCancelAck_Reason
    | undefined;
  /** The total number of orders that were canceled. */
  totalAffectedOrders: number;
}

export enum MassCancelAck_Reason {
  UNCLASSIFIED = 0,
  INVALID_MARKET_ID = 1,
  INVALID_SIDE = 2,
}

/** New-order-reject indicates that a new-order request was not applied. */
export interface NewOrderReject {
  msgSeqNum: bigint;
  /** The client order ID specified in the new-order request. */
  clientOrderId: bigint;
  /** The request ID specified in the new-order request. */
  requestId: bigint;
  /** [Transact time](#transact-time) */
  transactTime: bigint;
  subaccountId: bigint;
  reason: NewOrderReject_Reason;
  marketId: bigint;
  price?: bigint | undefined;
  quantity: bigint;
  side: Side;
  timeInForce: TimeInForce;
  orderType: OrderType;
}

/**
 * Reasons that are prefixed with `INVALID_` normally indicate that the
 * corresponding field did not take a valid value.
 */
export enum NewOrderReject_Reason {
  UNCLASSIFIED = 0,
  /** INVALID_QUANTITY - Quantity was zero. */
  INVALID_QUANTITY = 1,
  /** INVALID_MARKET_ID - The specified market ID does not exist. */
  INVALID_MARKET_ID = 2,
  /**
   * DUPLICATE_ORDER_ID - The specified client order ID was not unique among open orders for this
   * subaccount.
   */
  DUPLICATE_ORDER_ID = 3,
  INVALID_SIDE = 4,
  INVALID_TIME_IN_FORCE = 5,
  INVALID_ORDER_TYPE = 6,
  INVALID_POST_ONLY = 7,
  INVALID_SELF_TRADE_PREVENTION = 8,
  /**
   * UNKNOWN_TRADER - Internal error: the matching engine could not find this subaccounts
   * positions.
   */
  UNKNOWN_TRADER = 9,
  PRICE_WITH_MARKET_ORDER = 10,
  POST_ONLY_WITH_MARKET_ORDER = 11,
  POST_ONLY_WITH_INVALID_TIF = 12,
  /**
   * EXCEEDED_SPOT_POSITION - The sum of open orders and this new-order would exceed the subaccounts
   * spot limits.
   */
  EXCEEDED_SPOT_POSITION = 13,
  NO_OPPOSING_LIMIT_ORDER = 14,
  /** POST_ONLY_WOULD_TRADE - The post-only order would have crossed and traded. */
  POST_ONLY_WOULD_TRADE = 15,
  /**
   * DID_NOT_FULLY_FILL - A FOK was not fully fillable against resting orders at the requested
   * price and quantity.
   */
  DID_NOT_FULLY_FILL = 16,
  /** ONLY_ORDER_CANCEL_ACCEPTED - An exchange accepts no now orders at this time */
  ONLY_ORDER_CANCEL_ACCEPTED = 17,
}

/** Cancel-order-reject indicates that a cancel-order request was not applied. */
export interface CancelOrderReject {
  msgSeqNum: bigint;
  /** The client order ID specified in the cancel-order request. */
  clientOrderId: bigint;
  /** The request ID specified in the cancel-order request. */
  requestId: bigint;
  /** [Transact time](#transact-time) */
  transactTime: bigint;
  subaccountId: bigint;
  reason: CancelOrderReject_Reason;
  marketId: bigint;
}

export enum CancelOrderReject_Reason {
  UNCLASSIFIED = 0,
  /** INVALID_MARKET_ID - The specified market ID does not exist. */
  INVALID_MARKET_ID = 1,
  /**
   * ORDER_NOT_FOUND - The specified client order ID does not exist for the corresponding market
   * ID and subaccount ID.
   */
  ORDER_NOT_FOUND = 2,
}

/** Modify-order-reject indicates that a modify-order request was not applied. */
export interface ModifyOrderReject {
  msgSeqNum: bigint;
  /** The client order ID specified in the modify-order request. */
  clientOrderId: bigint;
  /** The request ID specified in the modify-order request. */
  requestId: bigint;
  /** [Transact time](#transact-time) */
  transactTime: bigint;
  subaccountId: bigint;
  reason: ModifyOrderReject_Reason;
  marketId: bigint;
}

/**
 * Reasons that are prefixed with `INVALID_` normally indicate that the
 * corresponding field did not take a valid value.
 */
export enum ModifyOrderReject_Reason {
  UNCLASSIFIED = 0,
  /** INVALID_QUANTITY - Quantity was zero. */
  INVALID_QUANTITY = 1,
  /** INVALID_MARKET_ID - The specified market ID does not exist. */
  INVALID_MARKET_ID = 2,
  /**
   * ORDER_NOT_FOUND - The specified client order ID does not exist for the corresponding market
   * ID and subaccount ID.
   */
  ORDER_NOT_FOUND = 3,
  INVALID_IFM = 4,
  INVALID_POST_ONLY = 5,
  INVALID_SELF_TRADE_PREVENTION = 6,
  /**
   * UNKNOWN_TRADER - Internal error: the matching engine could not find this subaccounts
   * positions.
   */
  UNKNOWN_TRADER = 7,
  /**
   * EXCEEDED_SPOT_POSITION - If the modify-order would cause a cancel-replace, the sum of open orders
   * and this replacement order would exceed the subaccounts spot limits.
   */
  EXCEEDED_SPOT_POSITION = 8,
  /**
   * POST_ONLY_WOULD_TRADE - If the modify-order would cause a cancel-replace, the post-only
   * replacement would have crossed and traded.
   */
  POST_ONLY_WOULD_TRADE = 9,
  /** ONLY_ORDER_CANCEL_ACCEPTED - An exchange accepts no order modifications at this time */
  ONLY_ORDER_CANCEL_ACCEPTED = 17,
}

/** A fill for an order. */
export interface Fill {
  msgSeqNum: bigint;
  marketId: bigint;
  /** The client order ID specified in the new-order request. */
  clientOrderId: bigint;
  /** [Exchange order ID](#exchange-order-id) */
  exchangeOrderId: bigint;
  /** The price that this trade occured at. */
  fillPrice: bigint;
  /** The quantity that was traded in this fill. */
  fillQuantity: bigint;
  /** The remaining quantity for this order after the fill is applied. */
  leavesQuantity: bigint;
  /** [Transact time](#transact-time) */
  transactTime: bigint;
  subaccountId: bigint;
  /** The cumulative filled quantity for this order after the fill is applied. */
  cumulativeQuantity: bigint;
}

/**
 * The user's underlying asset position. These are sent asynchronously as
 * positions are updated and broadcast through internal position channels. They
 * can also be tracked by applying other OrderResponse messages individually.
 */
export interface AssetPosition {
  subaccountId: bigint;
  assetId: bigint;
  total:
    | RawUnits
    | undefined;
  /** The available amount after open orders are subtracted. */
  available: RawUnits | undefined;
}

/**
 * Raw-units is a 256-bit number for the amount of an asset. The precision is
 * based on the underlying asset. For example, ETH is specified as if in
 * fixed-point 10^18, while BTC is specified as if in fixed-point 10^8.
 *
 * The number is interpreted in 'little-endian' as `[word0, word1, word2,
 * word3]`.
 */
export interface RawUnits {
  word0: bigint;
  word1: bigint;
  word2: bigint;
  word3: bigint;
}

/**
 * A bootstrap message sent after Credentials authentication.
 * Client resting and pending orders used to bootstrap state. Sent as the first
 * message(s) after initialization. Bootstrap is complete after a message tagged
 * `Done` is received and every message after that will be an `OrderResponse`.
 * Multiple messages may be received for `RestingOrders` and `AssetPositions`
 * and these should be concatenated.
 */
export interface Bootstrap {
  done?: Done | undefined;
  resting?: RestingOrders | undefined;
  position?: AssetPositions | undefined;
}

/** A chunk of resting orders. Sent on bootstrap. */
export interface RestingOrders {
  orders: RestingOrder[];
}

/** A chunk of asset positions. Sent on bootstrap. */
export interface AssetPositions {
  positions: AssetPosition[];
}

/** An indication that bootstrap is complete. */
export interface Done {
  /** [Transact time](#transact-time) */
  latestTransactTime: bigint;
}

/** A resting order. Sent on bootstrap in `RestingOrders`. */
export interface RestingOrder {
  /** The client order ID specified in the new-order request. */
  clientOrderId: bigint;
  /** [Exchange order ID](#exchange-order-id) */
  exchangeOrderId: bigint;
  marketId: bigint;
  price: bigint;
  /**
   * The quantity submitted in the latest quantity-modifying request. If the
   * order has not been modified, then it is the quantity on the new-order-ack.
   * If it has been modified, then it is the quantity of the latest
   * modify-order-ack.
   */
  orderQuantity: bigint;
  side: Side;
  timeInForce: TimeInForce;
  orderType: OrderType;
  /** The current remaining quantity on the book. */
  remainingQuantity: bigint;
  /** [Transact time](#transact-time) of the NewOrderAck */
  restTime: bigint;
  subaccountId: bigint;
  /** The cumulative filled quantity for this order. */
  cumulativeQuantity: bigint;
}
