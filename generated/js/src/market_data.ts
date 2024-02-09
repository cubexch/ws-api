/* eslint-disable */

export const protobufPackage = "market_data";

/**
 * This schema defines the Protobuf messages used for communication with the
 * Cube Market Data Service (Mendelev, MD). The `proto` definition file can be
 * found [here](https://github.com/cubexch/ws-api/blob/main/schema/market_data.proto).
 *
 * ### Order Book Data
 *
 * The market data service exposes a websocket endpoint for order book data for
 * a given market at `/book/:market_id`. The order book can be consumed by both
 * price level through the Market by Price (MBP) and order-by-order through the
 * Market by Order (MBO). In addition, clients can subscribe to the trade stream
 * and price candlesticks. Clients should submit a [`Config`](#config) and then
 * process [`MdMessage`](#mdmessage)'s.
 *
 * ### Aggregate Book Tops Data
 *
 * The market data service exposes a websocket endpoint for aggregated
 * tops-of-book for all markets at `/tops`. Client should process
 * [`AggMessage`](#aggmessage).
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
export enum Side {
  /** BID - Bids buy the base asset with the quote asset. */
  BID = 0,
  /** ASK - Asks (or offers) sell the base asset and get the quote asset. */
  ASK = 1,
}

/** The candlestick interval. */
export enum KlineInterval {
  /** S1 - 1 second */
  S1 = 0,
  /** M1 - 1 minute */
  M1 = 1,
  /** M15 - 15 minutes */
  M15 = 2,
  /** H1 - 1 hour */
  H1 = 3,
  /** H4 - 4 hours */
  H4 = 4,
  /** D1 - 1 day */
  D1 = 5,
}

/**
 * The side of the rate update. Given a `BASE` rate of `r`, the `QUOTE` rate is
 * `1 / r`, and vice versa.
 */
export enum RateUpdateSide {
  /** BASE - The asset serves as the base asset for the given rate. */
  BASE = 0,
  /** QUOTE - The asset serves as the quote asset for the given rate. */
  QUOTE = 1,
}

/**
 * Every exchange message from `/book/:market_id` will be wrapped as an
 * [`MdMessages`](#mdmessages) which contains multiple `MdMessage`'s.
 */
export interface MdMessage {
  /** Server heartbeat reply */
  heartbeat?:
    | Heartbeat
    | undefined;
  /** 24h summary */
  summary?:
    | Summary
    | undefined;
  /** Recent trades */
  trades?:
    | Trades
    | undefined;
  /** Market by order snapshot */
  mboSnapshot?:
    | MarketByOrder
    | undefined;
  /** Market by order diff */
  mboDiff?:
    | MarketByOrderDiff
    | undefined;
  /** Market by price snapshot */
  mbpSnapshot?:
    | MarketByPrice
    | undefined;
  /** Market by price diff */
  mbpDiff?:
    | MarketByPriceDiff
    | undefined;
  /** Candlestick */
  kline?: Kline | undefined;
}

/**
 * Market by price snapshot message. This is chunked into `num_chunks` and starts
 * with `chunk = 0`. A snapshot is sent on first connect. `Level`'s should be
 * concatened until `chunk = num_chunks - 1`. Currently, the chunks and levels
 * are streamed from tightest price level outwards with interleaved Bid and Ask
 * levels, but no ordering is guaranteed.
 */
export interface MarketByPrice {
  levels: MarketByPrice_Level[];
  chunk: number;
  numChunks: number;
}

/**
 * Each price level is the aggregate total quantity of orders placed at that
 * price.
 */
export interface MarketByPrice_Level {
  price: bigint;
  quantity: bigint;
  side: Side;
}

/**
 * Market by price diff message. Book updates for the MBP feed are sent as diffs
 * after the initial snapshot. The number of total side levels are for
 * reconciliation.
 */
export interface MarketByPriceDiff {
  diffs: MarketByPriceDiff_Diff[];
  /** Total number of bid levels after this diff is applied. */
  totalBidLevels: number;
  /** Total number of ask levels after this diff is applied. */
  totalAskLevels: number;
}

/**
 * The operation to apply for this price level. Currently, new price levels
 * are created with `REPLACE`.
 */
export enum MarketByPriceDiff_DiffOp {
  /**
   * ADD - This operation is NOT used for MBP.
   * The operation of adding a new price level is specified as `REPLACE`.
   */
  ADD = 0,
  /** REMOVE - This operation is used when a price level is removed from the book. */
  REMOVE = 1,
  /**
   * REPLACE - This operation is used when a new price level is added or
   * an existing price level is modified.
   */
  REPLACE = 2,
}

/** A price level diff overwrites the existing price level. */
export interface MarketByPriceDiff_Diff {
  price: bigint;
  quantity: bigint;
  side: Side;
  op: MarketByPriceDiff_DiffOp;
}

/**
 * Market by order snapshot message. This is chunked into `num_chunks` and starts
 * with `chunk = 0`. A snapshot is sent on first connect. `Level`'s should be
 * concatened until `chunk = num_chunks - 1`. Orders are sent in order of FIFO
 * queue priority so the first order of a level should be the first order to be
 * matched when that level is aggressed.
 */
export interface MarketByOrder {
  orders: MarketByOrder_Order[];
  chunk: number;
  numChunks: number;
}

/** A resting order. */
export interface MarketByOrder_Order {
  price: bigint;
  quantity: bigint;
  /** [Exchange order ID](./websocket-trade-api.md#exchange-order-id) */
  exchangeOrderId: bigint;
  side: Side;
  /**
   * Order priority for execution. Valid within a price level and side. That
   * is, orders must first be sorted by side and price (in descending order
   * for bids and ascending for asks), and then the OrderPriority within the
   * level. A lower value is a higher priority.
   */
  priority: bigint;
}

/**
 * Market by order diff message. Book updates for the MBO feed are sent as diffs
 * after the initial snapshot. The number of total side levels and orders are
 * for reconciliation.
 *
 * Note that for orders that are cancel-replace'd (a modify that lost queue
 * priority), the new price and quantity will be reported as a `REPLACE` but the
 * exchange order ID will not change.
 */
export interface MarketByOrderDiff {
  diffs: MarketByOrderDiff_Diff[];
  /** Total number of bid levels after this diff is applied. */
  totalBidLevels: number;
  /** Total number of ask levels after this diff is applied. */
  totalAskLevels: number;
  /** Total number of bid orders after this diff is applied. */
  totalBidOrders: number;
  /** Total number of ask orders after this diff is applied. */
  totalAskOrders: number;
}

/**
 * The operation to apply for this price level. For example, an resting order
 * that gets filled will be `REPLACE`'d with the new resting quantity. An
 * order is `REMOVE`'d when it is fully filled or canceled.
 */
export enum MarketByOrderDiff_DiffOp {
  ADD = 0,
  REMOVE = 1,
  REPLACE = 2,
}

/**
 * An order diff creates, updates, or deletes a resting order based on the
 * `exchange_order_id`
 */
export interface MarketByOrderDiff_Diff {
  price: bigint;
  quantity: bigint;
  /** [Exchange order ID](./websocket-trade-api.md#exchange-order-id) */
  exchangeOrderId: bigint;
  side: Side;
  op: MarketByOrderDiff_DiffOp;
  /** See [`MarketByOrder.Order`](#marketbyorder.order) */
  priority: bigint;
}

/**
 * Trades since the latest `Trades` message. The result of the trades will also
 * appear in the MBP and MBO feeds independently as updates to the resting
 * orders and levels, respectively.
 */
export interface Trades {
  trades: Trades_Trade[];
}

export interface Trades_Trade {
  /**
   * The ID assigned to this trade. All trades that occur from the same event
   * will be assigned the same ID, and are considered to be an atomic batch.
   */
  tradeId: bigint;
  /** The price that this trade occurred at. */
  price: bigint;
  /** The side of the aggressing order. */
  aggressingSide: Side;
  /**
   * The [Exchange order ID](./websocket-trade-api.md#exchange-order-id) of
   * the resting order.
   */
  restingExchangeOrderId: bigint;
  fillQuantity: bigint;
  /**
   * The [transact time](./websocket-trade-api.md#transact-time) assigned by
   * the matching engine for this trade. All trades that occur from the same
   * event will be assigned the same transact time.
   */
  transactTime: bigint;
  /**
   * The [Exchange order ID](./websocket-trade-api.md#exchange-order-id) of
   * the aggressing order.
   */
  aggressingExchangeOrderId: bigint;
}

/** Rolling 24h stats. */
export interface Summary {
  /** 24h open price */
  open?:
    | bigint
    | undefined;
  /** Latest price */
  close?:
    | bigint
    | undefined;
  /** 24h low price */
  low?:
    | bigint
    | undefined;
  /** 24h high price */
  high?:
    | bigint
    | undefined;
  /** Low 64-bits of the base quantity traded */
  baseVolumeLo: bigint;
  /** High 64-bits of the base quantity traded */
  baseVolumeHi: bigint;
  /** Low 64-bits of the quote quantity traded */
  quoteVolumeLo: bigint;
  /** High 64-bits of the quote quantity traded */
  quoteVolumeHi: bigint;
}

/** Candlestick bar. */
export interface Kline {
  interval: KlineInterval;
  /** The unix nanosecond timestamp that this kline covers. */
  startTime: bigint;
  /** Kline open price. */
  open?:
    | bigint
    | undefined;
  /** Kline close price. */
  close?:
    | bigint
    | undefined;
  /** Kline high price. */
  high?:
    | bigint
    | undefined;
  /** Kline low price. */
  low?:
    | bigint
    | undefined;
  /** Low 64-bits of the base quantity traded. */
  volumeLo: bigint;
  /** High 64-bits of the base quantity traded. */
  volumeHi: bigint;
}

/**
 * A client and server heartbeat. The heartbeat reply, including the timestamp
 * value, comes from the market data service.
 */
export interface Heartbeat {
  /** A request ID that is echoed back on the Heartbeat */
  requestId: bigint;
  timestamp: bigint;
}

export interface MdMessages {
  messages: MdMessage[];
}

/** Every exchange message from `/tops` will be wrapped as an `AggMessage`. */
export interface AggMessage {
  /** Server heartbeat reply */
  heartbeat?:
    | Heartbeat
    | undefined;
  /** Top of books */
  topOfBooks?:
    | TopOfBooks
    | undefined;
  /** Rates for all assets */
  rateUpdates?: RateUpdates | undefined;
}

/** Top of book */
export interface TopOfBook {
  marketId: bigint;
  /**
   * The [transact time](./websocket-trade-api.md#transact-time) of the latest
   * book update on this market.
   */
  transactTime: bigint;
  /** The best bid price. */
  bidPrice?:
    | bigint
    | undefined;
  /** The total bid quantity at the best bid price. */
  bidQuantity?:
    | bigint
    | undefined;
  /** The best ask price. */
  askPrice?:
    | bigint
    | undefined;
  /** The total ask quantity at the best ask price. */
  askQuantity?:
    | bigint
    | undefined;
  /** The last trade price. */
  lastPrice?:
    | bigint
    | undefined;
  /** The 24h open price. */
  rolling24hPrice?: bigint | undefined;
}

/**
 * Top of books for all books that were updates since the last top-of-books
 * message.
 */
export interface TopOfBooks {
  tops: TopOfBook[];
}

/**
 * Rate update. Used in conjuction with another rate update to get the price of
 * that divisor. Rate's should not be used alone. For example, given a
 * RateUpdate for `assetId = BTC, updateSide = BASE` of `r1`, and `assetId =
 * EUR, updateSide = QUOTE` of `r2`, the BTC-EUR price estimate is `r1 * r2`.
 */
export interface RateUpdate {
  assetId: bigint;
  /** The nanosecond timestamp of the update. */
  timestamp: bigint;
  /** The asset rate at the given timestamp. */
  rate: bigint;
  side: RateUpdateSide;
}

/**
 * Rates for all assets. Published on connect and updates since the last
 * rate-updates message.
 */
export interface RateUpdates {
  updates: RateUpdate[];
}

/**
 * Client heartbeats and configs. This wrapper is used for both
 * `/book/:market_id` and `/tops`, but `config` messages are ignored on the
 * latter.
 */
export interface ClientMessage {
  heartbeat?: Heartbeat | undefined;
  config?: Config | undefined;
}

/**
 * Set the message subscriptions for `/book/:market_id`. At most one of `mbp`
 * and `mbo` can be set.
 */
export interface Config {
  /** Enable MBP feeds */
  mbp: boolean;
  /** Enable MBO feeds */
  mbo: boolean;
  /** Enable recent trades */
  trades: boolean;
  /** Enable 24h summary */
  summary: boolean;
  /** Enable price klines */
  klines: KlineInterval[];
}
