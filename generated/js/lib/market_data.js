"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketByOrderDiff_DiffOp = exports.MarketByPriceDiff_DiffOp = exports.RateUpdateSide = exports.AggressingSide = exports.MarketState = exports.KlineInterval = exports.Side = exports.protobufPackage = void 0;
exports.protobufPackage = "market_data";
/**
 * This schema defines the Protobuf messages used for communication with the
 * Cube Market Data Service (Mendelev, MD). The `proto` definition file can be
 * found [here](https://github.com/cubexch/ws-api/blob/main/schema/market_data.proto).
 *
 * ### Order Book Data
 *
 * The market data service exposes a websocket endpoint for order book data for
 * a given market at `wss://api.cube.exchange/md/book/:market_id`. The order
 * book can be consumed by both
 * price level through the Market by Price (MBP) and order-by-order through the
 * Market by Order (MBO). In addition, clients can subscribe to the trade stream
 * and price candlesticks. Clients should submit a [`Config`](#config) and then
 * process [`MdMessage`](#mdmessage)'s.
 *
 * ### Aggregate Book Tops Data
 *
 * The market data service exposes a websocket endpoint for aggregated
 * tops-of-book for all markets at `wss://api.cube.exchange/md/tops`. Client
 * should process [`AggMessage`](#aggmessage).
 *
 * ### Heartbeats
 *
 * Application-level heartbeats are expected every 30 seconds. If more than one
 * interval is missed, the market data service will disconnect the websocket.
 */
/**
 * Side specifies whether the level, order, or diff, is for buying or selling
 * the base asset.
 */
var Side;
(function (Side) {
    /** BID - Bids buy the base asset with the quote asset. */
    Side[Side["BID"] = 0] = "BID";
    /** ASK - Asks (or offers) sell the base asset and get the quote asset. */
    Side[Side["ASK"] = 1] = "ASK";
})(Side = exports.Side || (exports.Side = {}));
/** The candlestick interval. */
var KlineInterval;
(function (KlineInterval) {
    /** S1 - 1 second */
    KlineInterval[KlineInterval["S1"] = 0] = "S1";
    /** M1 - 1 minute */
    KlineInterval[KlineInterval["M1"] = 1] = "M1";
    /** M15 - 15 minutes */
    KlineInterval[KlineInterval["M15"] = 2] = "M15";
    /** H1 - 1 hour */
    KlineInterval[KlineInterval["H1"] = 3] = "H1";
    /** H4 - 4 hours */
    KlineInterval[KlineInterval["H4"] = 4] = "H4";
    /** D1 - 1 day */
    KlineInterval[KlineInterval["D1"] = 5] = "D1";
})(KlineInterval = exports.KlineInterval || (exports.KlineInterval = {}));
/** The per-market matching engine state. Affects order-entry. */
var MarketState;
(function (MarketState) {
    /** UNSPECIFIED - Sentinel */
    MarketState[MarketState["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * NORMAL_OPERATION - The market is in its normal operating state. All order operations are
     * supported.
     */
    MarketState[MarketState["NORMAL_OPERATION"] = 1] = "NORMAL_OPERATION";
    /**
     * CANCEL_ONLY - The market is in cancel-only mode. Existing orders are not automatically
     * canceled, and may be filled when the market transitions back to
     * normal-operation.
     */
    MarketState[MarketState["CANCEL_ONLY"] = 2] = "CANCEL_ONLY";
})(MarketState = exports.MarketState || (exports.MarketState = {}));
/**
 * The side of the aggressing order. This also indicates if the aggressing order
 * was an implied order (i.e aggressed into a different market and executed into
 * this one through implieds)
 */
var AggressingSide;
(function (AggressingSide) {
    AggressingSide[AggressingSide["AGGRESSING_BID"] = 0] = "AGGRESSING_BID";
    AggressingSide[AggressingSide["AGGRESSING_ASK"] = 1] = "AGGRESSING_ASK";
    AggressingSide[AggressingSide["AGGRESSING_IMPLIED_BID"] = 2] = "AGGRESSING_IMPLIED_BID";
    AggressingSide[AggressingSide["AGGRESSING_IMPLIED_ASK"] = 3] = "AGGRESSING_IMPLIED_ASK";
})(AggressingSide = exports.AggressingSide || (exports.AggressingSide = {}));
/**
 * The side of the rate update. Given a `BASE` rate of `r`, the `QUOTE` rate is
 * `1 / r`, and vice versa.
 */
var RateUpdateSide;
(function (RateUpdateSide) {
    /** BASE - The asset serves as the base asset for the given rate. */
    RateUpdateSide[RateUpdateSide["BASE"] = 0] = "BASE";
    /** QUOTE - The asset serves as the quote asset for the given rate. */
    RateUpdateSide[RateUpdateSide["QUOTE"] = 1] = "QUOTE";
})(RateUpdateSide = exports.RateUpdateSide || (exports.RateUpdateSide = {}));
/**
 * The operation to apply for this price level. Currently, new price levels
 * are created with `REPLACE`.
 */
var MarketByPriceDiff_DiffOp;
(function (MarketByPriceDiff_DiffOp) {
    /**
     * ADD - This operation is NOT used for MBP.
     * The operation of adding a new price level is specified as `REPLACE`.
     */
    MarketByPriceDiff_DiffOp[MarketByPriceDiff_DiffOp["ADD"] = 0] = "ADD";
    /** REMOVE - This operation is used when a price level is removed from the book. */
    MarketByPriceDiff_DiffOp[MarketByPriceDiff_DiffOp["REMOVE"] = 1] = "REMOVE";
    /**
     * REPLACE - This operation is used when a new price level is added or
     * an existing price level is modified.
     */
    MarketByPriceDiff_DiffOp[MarketByPriceDiff_DiffOp["REPLACE"] = 2] = "REPLACE";
})(MarketByPriceDiff_DiffOp = exports.MarketByPriceDiff_DiffOp || (exports.MarketByPriceDiff_DiffOp = {}));
/**
 * The operation to apply for this price level. For example, an resting order
 * that gets filled will be `REPLACE`'d with the new resting quantity. An
 * order is `REMOVE`'d when it is fully filled or canceled.
 */
var MarketByOrderDiff_DiffOp;
(function (MarketByOrderDiff_DiffOp) {
    MarketByOrderDiff_DiffOp[MarketByOrderDiff_DiffOp["ADD"] = 0] = "ADD";
    MarketByOrderDiff_DiffOp[MarketByOrderDiff_DiffOp["REMOVE"] = 1] = "REMOVE";
    MarketByOrderDiff_DiffOp[MarketByOrderDiff_DiffOp["REPLACE"] = 2] = "REPLACE";
})(MarketByOrderDiff_DiffOp = exports.MarketByOrderDiff_DiffOp || (exports.MarketByOrderDiff_DiffOp = {}));
