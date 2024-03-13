"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketByOrderDiff_DiffOp = exports.MarketByPriceDiff_DiffOp = exports.RateUpdateSide = exports.KlineInterval = exports.Side = exports.protobufPackage = void 0;
exports.protobufPackage = "md";
/**
 * This schema defines the Protobuf messages used for communication with the
 * Cube Market Data Service (Mendelev, MD).
 *
 * ### Order Book Data
 *
 * The market data service exposes a websocket endpoint for order book data for
 * a given market at `/book/:market_id`. The order book can be consumed by both
 * price level through the Market by Price (MBP) and order-by-order through the
 * Market by Order (MBO). In addition, clients can subscribe to the trade stream
 * and price candlesticks. Clients should submit a [`Config`](#config) and then
 * process [`MdMessage`'s](#md-message).
 *
 * ### Aggregate Book Tops Data
 *
 * The market data service exposes a websocket endpoint for aggregated
 * tops-of-book for all markets at `/tops`. Client should process
 * [`AggMessage`](#agg-message).
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
    MarketByPriceDiff_DiffOp[MarketByPriceDiff_DiffOp["ADD"] = 0] = "ADD";
    MarketByPriceDiff_DiffOp[MarketByPriceDiff_DiffOp["REMOVE"] = 1] = "REMOVE";
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
