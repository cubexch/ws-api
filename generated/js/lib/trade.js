"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyOrderReject_Reason = exports.CancelOrderReject_Reason = exports.NewOrderReject_Reason = exports.MassCancelAck_Reason = exports.CancelOrderAck_Reason = exports.PostOnly = exports.SelfTradePrevention = exports.OrderType = exports.TimeInForce = exports.Side = exports.protobufPackage = void 0;
exports.protobufPackage = "trade";
/**
 * This schema defines the Protobuf messages used for communication with the
 * Cube Order Service (Osmium, OS). The base URL for channels described in this
 * page is `wss://api.cube.exchange/os`. The `proto` definition file can be found
 * [here](https://github.com/cubexch/ws-api/blob/main/schema/trade.proto).
 *
 * ### Connection
 *
 * The order service exposes a websocket endpoint for clients to connect to.
 * Once connected, clients should submit a [`Credentials`](#credentials)
 * message, listen for [`Bootstrap`](#bootstrap) messages for resting orders
 * and positions, and then can begin submitting
 * [`OrderRequest`](#orderrequest) and processing
 * [`OrderResponse`](#orderresponse).
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
 * ### Trading Fees
 *
 * Trading Fees are calculated on each individual trade as a ratio of the filled quantity,
 * and are always charged as a deduction from the asset received in that trade.
 *
 * Fee ratios may vary from trade to trade based on the user's VIP level.
 * For fee discounts based on Trading Volume, ratios are adjusted continuously
 * at the time of each trade based on the user's trailing 30-day volume.
 *
 * To ensure that the client has enough information to determine the exact fee charged,
 * the fee ratio is expressed as a fixed-point decimal number consisting of a mantissa and an exponent.
 * Generally, the exponent will be "-4", indicating that the mantissa is equivalent to pips,
 * Though some fees may be expressed with greater granularity.
 *
 * For example, consider the case of a trade where:
 * - Asset received is BTC
 * - `quantity` = 5
 * - `fee_ratio.mantissa` = 11
 * - `fee_ratio.exponent` = -4
 *
 * ...in which case:
 * - The fee ratio would be 0.0011, or 11 pips.
 * - The fee would be equal to 0.0055 BTC.
 * - The total amount credited at settlement would be 4.9945 BTC.
 *
 * If you need exact granularity at time of trade, you can replicate the fee calculation performed by the exchange.
 * To avoid rounding errors, this entire process is performed in integer math using the exponent as a devisor.
 * In the example above, the full fee amount in indivisible [RawUnits](#rawunits) would be calculated as:
 * ```text
 * 5 * 100_000_000 * 11 / 10_000 = 550_000 RawUnits
 *
 * (in the BTC case, that would be 550,000 Satoshi)
 * ```
 *
 * Since the fee is expressed with a decimal exponent, it's highly likely that this calculation results in a whole number.
 * In the unlikely case that the final division results in a non-whole number, the result should be truncated,
 * hence the division at the end: i.e. the fee is rounded down to the nearest `RawUnit`.
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
var Side;
(function (Side) {
    /** BID - A bid order buys the base asset with the quote asset. */
    Side[Side["BID"] = 0] = "BID";
    /** ASK - An ask (or offer) order sells the base asset and gets the quote asset. */
    Side[Side["ASK"] = 1] = "ASK";
})(Side = exports.Side || (exports.Side = {}));
/** Time-in-force (TIF) specifies how long the order remains in effect. */
var TimeInForce;
(function (TimeInForce) {
    /**
     * IMMEDIATE_OR_CANCEL - Immediate-or-cancel (IOC), also known as fill-and-kill (FAK), orders are
     * immediately executed against resting orders. If the order cannot be fully
     * filled, the remaining balance will be canceled, and an additional
     * CancelOrderAck with the IOC reason will be sent.
     */
    TimeInForce[TimeInForce["IMMEDIATE_OR_CANCEL"] = 0] = "IMMEDIATE_OR_CANCEL";
    /**
     * GOOD_FOR_SESSION - Good-for-session (GFS) orders are active until they are completely
     * executed, canceled, or when the session expires.
     */
    TimeInForce[TimeInForce["GOOD_FOR_SESSION"] = 1] = "GOOD_FOR_SESSION";
    /**
     * FILL_OR_KILL - Fill-or-kill (FOK), also known as all-or-none (AON), orders must be filled
     * immediately against resting orders or the entire order is canceled.
     */
    TimeInForce[TimeInForce["FILL_OR_KILL"] = 2] = "FILL_OR_KILL";
})(TimeInForce = exports.TimeInForce || (exports.TimeInForce = {}));
/**
 * Order-type specifies how the order will be placed into the order book.
 *
 * - Note that for LIMIT orders, there is a pre-flight check that there is
 *   sufficient available balance to place this order at the price and quantity
 *   specified. Otherwise, the order will be rejected with the
 *   EXCEEDED_SPOT_POSITION reason.
 * - For MARKET_LIMIT and MARKET_WITH_PROTECTION orders, there is no such
 *   pre-flight check and a submitted order will be partially filled up until
 *   the subaccount's position limit. The remaining quantity will be canceled
 *   with the POSITION_LIMIT reason.
 */
var OrderType;
(function (OrderType) {
    /**
     * LIMIT - A limit order is accompanied with a price (inclusive) that specifies the
     * upper limit to buy and the lower limit to sell. If the price is not
     * immediately available and the TIF allows resting orders, the limit order
     * will rest until filled or canceled.
     */
    OrderType[OrderType["LIMIT"] = 0] = "LIMIT";
    /**
     * MARKET_LIMIT - A market limit order crosses the bid-ask spread and, if not fully filled,
     * becomes a limit order at the best available market price.
     * - If there is no opposing market, the order is rejected with the
     *   NO_OPPOSING_RESTING_ORDER reason.
     * - The price must be null.
     */
    OrderType[OrderType["MARKET_LIMIT"] = 1] = "MARKET_LIMIT";
    /**
     * MARKET_WITH_PROTECTION - A market with protection order crosses the bid-ask spread and continues to
     * cross until the order is fully filled or the protection price is reached.
     * - The protection price is defined as:
     *   - If the price is provided, this price is used as the protection price.
     *   - If the price is null, the best market price widened by a
     *     market-specific protection point count.
     * - If the protection price would not cross the resting market, the order is
     *   rejected with the NO_OPPOSING_RESTING_ORDER reason instead of resting at
     *   that level.
     */
    OrderType[OrderType["MARKET_WITH_PROTECTION"] = 2] = "MARKET_WITH_PROTECTION";
})(OrderType = exports.OrderType || (exports.OrderType = {}));
/**
 * Self-trade-prevention (STP) allows market participants to prevent the matching
 * of orders for accounts with common ownership. Currently, STP only applies for
 * orders with the same subaccount_id. STP will only be applied when a match is
 * about to occur between the two orders. That is, if the aggressing order is
 * fully filled before reaching the resting order in FIFO order, no STP cancels
 * will happen.
 */
var SelfTradePrevention;
(function (SelfTradePrevention) {
    /**
     * CANCEL_RESTING - Cancel-resting specifies that if a self-trade is about to occur, the
     * resting order should be canceled instead and further order book processing
     * should occur as normal.
     */
    SelfTradePrevention[SelfTradePrevention["CANCEL_RESTING"] = 0] = "CANCEL_RESTING";
    /**
     * CANCEL_AGGRESSING - Cancel-aggressing specifies that if a self-trade is about to occur, the
     * aggressing order should be canceled instead and no further action should be
     * taken.
     */
    SelfTradePrevention[SelfTradePrevention["CANCEL_AGGRESSING"] = 1] = "CANCEL_AGGRESSING";
    /** ALLOW_SELF_TRADE - Allow-self-trade disables STP functionality. */
    SelfTradePrevention[SelfTradePrevention["ALLOW_SELF_TRADE"] = 2] = "ALLOW_SELF_TRADE";
})(SelfTradePrevention = exports.SelfTradePrevention || (exports.SelfTradePrevention = {}));
/**
 * Post-only specifies whether a new order is allowed to immediately execute.
 * Post-only cannot be enabled with market orders or with a TIF that does not
 * allow resting orders.
 */
var PostOnly;
(function (PostOnly) {
    PostOnly[PostOnly["DISABLED"] = 0] = "DISABLED";
    PostOnly[PostOnly["ENABLED"] = 1] = "ENABLED";
})(PostOnly = exports.PostOnly || (exports.PostOnly = {}));
var CancelOrderAck_Reason;
(function (CancelOrderAck_Reason) {
    CancelOrderAck_Reason[CancelOrderAck_Reason["UNCLASSIFIED"] = 0] = "UNCLASSIFIED";
    CancelOrderAck_Reason[CancelOrderAck_Reason["DISCONNECT"] = 1] = "DISCONNECT";
    /** REQUESTED - This order was specified in a cancel request. */
    CancelOrderAck_Reason[CancelOrderAck_Reason["REQUESTED"] = 2] = "REQUESTED";
    /** IOC - This was an IOC new-order that does not get fully filled. */
    CancelOrderAck_Reason[CancelOrderAck_Reason["IOC"] = 3] = "IOC";
    /** STP_RESTING - A resting order was STP canceled. */
    CancelOrderAck_Reason[CancelOrderAck_Reason["STP_RESTING"] = 4] = "STP_RESTING";
    /** STP_AGGRESSING - An aggressing order was STP canceled. */
    CancelOrderAck_Reason[CancelOrderAck_Reason["STP_AGGRESSING"] = 5] = "STP_AGGRESSING";
    /** MASS_CANCEL - This order was covered by a mass-cancel request. */
    CancelOrderAck_Reason[CancelOrderAck_Reason["MASS_CANCEL"] = 6] = "MASS_CANCEL";
    /**
     * POSITION_LIMIT - This order was canceled because asset position limits would be otherwise
     * breached.
     */
    CancelOrderAck_Reason[CancelOrderAck_Reason["POSITION_LIMIT"] = 7] = "POSITION_LIMIT";
})(CancelOrderAck_Reason = exports.CancelOrderAck_Reason || (exports.CancelOrderAck_Reason = {}));
var MassCancelAck_Reason;
(function (MassCancelAck_Reason) {
    MassCancelAck_Reason[MassCancelAck_Reason["UNCLASSIFIED"] = 0] = "UNCLASSIFIED";
    MassCancelAck_Reason[MassCancelAck_Reason["INVALID_MARKET_ID"] = 1] = "INVALID_MARKET_ID";
    MassCancelAck_Reason[MassCancelAck_Reason["INVALID_SIDE"] = 2] = "INVALID_SIDE";
})(MassCancelAck_Reason = exports.MassCancelAck_Reason || (exports.MassCancelAck_Reason = {}));
/**
 * Reasons that are prefixed with `INVALID_` normally indicate that the
 * corresponding field did not take a valid value.
 */
var NewOrderReject_Reason;
(function (NewOrderReject_Reason) {
    NewOrderReject_Reason[NewOrderReject_Reason["UNCLASSIFIED"] = 0] = "UNCLASSIFIED";
    /** INVALID_QUANTITY - Quantity was zero. */
    NewOrderReject_Reason[NewOrderReject_Reason["INVALID_QUANTITY"] = 1] = "INVALID_QUANTITY";
    /** INVALID_MARKET_ID - The specified market ID does not exist. */
    NewOrderReject_Reason[NewOrderReject_Reason["INVALID_MARKET_ID"] = 2] = "INVALID_MARKET_ID";
    /**
     * DUPLICATE_ORDER_ID - The specified client order ID was not unique among open orders for this
     * subaccount.
     */
    NewOrderReject_Reason[NewOrderReject_Reason["DUPLICATE_ORDER_ID"] = 3] = "DUPLICATE_ORDER_ID";
    NewOrderReject_Reason[NewOrderReject_Reason["INVALID_SIDE"] = 4] = "INVALID_SIDE";
    NewOrderReject_Reason[NewOrderReject_Reason["INVALID_TIME_IN_FORCE"] = 5] = "INVALID_TIME_IN_FORCE";
    NewOrderReject_Reason[NewOrderReject_Reason["INVALID_ORDER_TYPE"] = 6] = "INVALID_ORDER_TYPE";
    NewOrderReject_Reason[NewOrderReject_Reason["INVALID_POST_ONLY"] = 7] = "INVALID_POST_ONLY";
    NewOrderReject_Reason[NewOrderReject_Reason["INVALID_SELF_TRADE_PREVENTION"] = 8] = "INVALID_SELF_TRADE_PREVENTION";
    /**
     * UNKNOWN_TRADER - Internal error: the matching engine could not find this subaccounts
     * positions.
     */
    NewOrderReject_Reason[NewOrderReject_Reason["UNKNOWN_TRADER"] = 9] = "UNKNOWN_TRADER";
    NewOrderReject_Reason[NewOrderReject_Reason["PRICE_WITH_MARKET_LIMIT_ORDER"] = 10] = "PRICE_WITH_MARKET_LIMIT_ORDER";
    NewOrderReject_Reason[NewOrderReject_Reason["POST_ONLY_WITH_MARKET_ORDER"] = 11] = "POST_ONLY_WITH_MARKET_ORDER";
    NewOrderReject_Reason[NewOrderReject_Reason["POST_ONLY_WITH_INVALID_TIF"] = 12] = "POST_ONLY_WITH_INVALID_TIF";
    /**
     * EXCEEDED_SPOT_POSITION - The sum of open orders and this new-order would exceed the subaccounts
     * spot limits.
     */
    NewOrderReject_Reason[NewOrderReject_Reason["EXCEEDED_SPOT_POSITION"] = 13] = "EXCEEDED_SPOT_POSITION";
    /** NO_OPPOSING_RESTING_ORDER - There are no opposing resting orders to trade against. */
    NewOrderReject_Reason[NewOrderReject_Reason["NO_OPPOSING_RESTING_ORDER"] = 14] = "NO_OPPOSING_RESTING_ORDER";
    /** POST_ONLY_WOULD_TRADE - The post-only order would have crossed and traded. */
    NewOrderReject_Reason[NewOrderReject_Reason["POST_ONLY_WOULD_TRADE"] = 15] = "POST_ONLY_WOULD_TRADE";
    /**
     * DID_NOT_FULLY_FILL - A FOK was not fully fillable against resting orders at the requested
     * price and quantity.
     */
    NewOrderReject_Reason[NewOrderReject_Reason["DID_NOT_FULLY_FILL"] = 16] = "DID_NOT_FULLY_FILL";
    /** ONLY_ORDER_CANCEL_ACCEPTED - An exchange accepts no now orders at this time */
    NewOrderReject_Reason[NewOrderReject_Reason["ONLY_ORDER_CANCEL_ACCEPTED"] = 17] = "ONLY_ORDER_CANCEL_ACCEPTED";
    /**
     * PROTECTION_PRICE_WOULD_NOT_TRADE - A more specific error code for market-with-protection orders that could
     * trade but have a user-specified protection price that is too tight.
     */
    NewOrderReject_Reason[NewOrderReject_Reason["PROTECTION_PRICE_WOULD_NOT_TRADE"] = 18] = "PROTECTION_PRICE_WOULD_NOT_TRADE";
    /**
     * NO_REFERENCE_PRICE - Market orders cannot be place because there is currently no internal
     * reference price
     */
    NewOrderReject_Reason[NewOrderReject_Reason["NO_REFERENCE_PRICE"] = 19] = "NO_REFERENCE_PRICE";
    /**
     * SLIPPAGE_TOO_HIGH - A market order would trade beyond the internal reference price offset by
     * protection levels in the direction of aggress.
     */
    NewOrderReject_Reason[NewOrderReject_Reason["SLIPPAGE_TOO_HIGH"] = 20] = "SLIPPAGE_TOO_HIGH";
    /**
     * OUTSIDE_PRICE_BAND - Limit orders cannot have bid price too low or ask price too high that
     * is multiple times away from the internal reference price.
     */
    NewOrderReject_Reason[NewOrderReject_Reason["OUTSIDE_PRICE_BAND"] = 21] = "OUTSIDE_PRICE_BAND";
})(NewOrderReject_Reason = exports.NewOrderReject_Reason || (exports.NewOrderReject_Reason = {}));
var CancelOrderReject_Reason;
(function (CancelOrderReject_Reason) {
    CancelOrderReject_Reason[CancelOrderReject_Reason["UNCLASSIFIED"] = 0] = "UNCLASSIFIED";
    /** INVALID_MARKET_ID - The specified market ID does not exist. */
    CancelOrderReject_Reason[CancelOrderReject_Reason["INVALID_MARKET_ID"] = 1] = "INVALID_MARKET_ID";
    /**
     * ORDER_NOT_FOUND - The specified client order ID does not exist for the corresponding market
     * ID and subaccount ID.
     */
    CancelOrderReject_Reason[CancelOrderReject_Reason["ORDER_NOT_FOUND"] = 2] = "ORDER_NOT_FOUND";
})(CancelOrderReject_Reason = exports.CancelOrderReject_Reason || (exports.CancelOrderReject_Reason = {}));
/**
 * Reasons that are prefixed with `INVALID_` normally indicate that the
 * corresponding field did not take a valid value.
 */
var ModifyOrderReject_Reason;
(function (ModifyOrderReject_Reason) {
    ModifyOrderReject_Reason[ModifyOrderReject_Reason["UNCLASSIFIED"] = 0] = "UNCLASSIFIED";
    /** INVALID_QUANTITY - Quantity was zero. */
    ModifyOrderReject_Reason[ModifyOrderReject_Reason["INVALID_QUANTITY"] = 1] = "INVALID_QUANTITY";
    /** INVALID_MARKET_ID - The specified market ID does not exist. */
    ModifyOrderReject_Reason[ModifyOrderReject_Reason["INVALID_MARKET_ID"] = 2] = "INVALID_MARKET_ID";
    /**
     * ORDER_NOT_FOUND - The specified client order ID does not exist for the corresponding market
     * ID and subaccount ID.
     */
    ModifyOrderReject_Reason[ModifyOrderReject_Reason["ORDER_NOT_FOUND"] = 3] = "ORDER_NOT_FOUND";
    ModifyOrderReject_Reason[ModifyOrderReject_Reason["INVALID_IFM"] = 4] = "INVALID_IFM";
    ModifyOrderReject_Reason[ModifyOrderReject_Reason["INVALID_POST_ONLY"] = 5] = "INVALID_POST_ONLY";
    ModifyOrderReject_Reason[ModifyOrderReject_Reason["INVALID_SELF_TRADE_PREVENTION"] = 6] = "INVALID_SELF_TRADE_PREVENTION";
    /**
     * UNKNOWN_TRADER - Internal error: the matching engine could not find this subaccounts
     * positions.
     */
    ModifyOrderReject_Reason[ModifyOrderReject_Reason["UNKNOWN_TRADER"] = 7] = "UNKNOWN_TRADER";
    /**
     * EXCEEDED_SPOT_POSITION - If the modify-order would cause a cancel-replace, the sum of open orders
     * and this replacement order would exceed the subaccounts spot limits.
     */
    ModifyOrderReject_Reason[ModifyOrderReject_Reason["EXCEEDED_SPOT_POSITION"] = 8] = "EXCEEDED_SPOT_POSITION";
    /**
     * POST_ONLY_WOULD_TRADE - If the modify-order would cause a cancel-replace, the post-only
     * replacement would have crossed and traded.
     */
    ModifyOrderReject_Reason[ModifyOrderReject_Reason["POST_ONLY_WOULD_TRADE"] = 9] = "POST_ONLY_WOULD_TRADE";
    /** ONLY_ORDER_CANCEL_ACCEPTED - An exchange accepts no order modifications at this time */
    ModifyOrderReject_Reason[ModifyOrderReject_Reason["ONLY_ORDER_CANCEL_ACCEPTED"] = 17] = "ONLY_ORDER_CANCEL_ACCEPTED";
    /**
     * OUTSIDE_PRICE_BAND - Limit orders cannot have bid price too low or ask price too high that
     * is multiple times away from the internal reference price.
     */
    ModifyOrderReject_Reason[ModifyOrderReject_Reason["OUTSIDE_PRICE_BAND"] = 11] = "OUTSIDE_PRICE_BAND";
})(ModifyOrderReject_Reason = exports.ModifyOrderReject_Reason || (exports.ModifyOrderReject_Reason = {}));
