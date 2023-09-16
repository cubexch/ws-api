---
title: Market Data API
pageTitle: Cube - Market Data API
description: Trade crypto at microsecond speeds, so your market maker code never miss a tick.
---

## market_data.proto
This schema defines the Protobuf messages used for communication with the
Cube Market Data Service (Mendelev, MD).

### Order Book Data

The market data service exposes a websocket endpoint for order book data for
a given market at `/book/:market_id`. The order book can be consumed by both
price level through the Market by Price (MBP) and order-by-order through the
Market by Order (MBO). In addition, clients can subscribe to the trade stream
and price candlesticks. Clients should submit a [`Config`](#config) and then
process [`MdMessage`'s](#md-message).

### Aggregate Book Tops Data

The market data service exposes a websocket endpoint for aggregated
tops-of-book for all markets at `/tops`. Client should process
[`AggMessage`](#agg-message).

### Heartbeats

Application-level heartbeats are expected every 30 seconds. If more than one
interval is missed, the market data service will disconnect the websocket.



## MdMessage
Every exchange message from `/book/:market_id` will be wrapped as an
[`MdMessages`](#md-messages) which contains multiple `MdMessage`'s.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| heartbeat | [Heartbeat](#heartbeat) |  | Server heartbeat reply |
| summary | [Summary](#summary) |  | 24h summary |
| trades | [Trades](#trades) |  | Recent trades |
| mboSnapshot | [MarketByOrder](#market-by-order) |  | Market by order snapshot |
| mboDiff | [MarketByOrderDiff](#market-by-order-diff) |  | Market by order diff |
| mbpSnapshot | [MarketByPrice](#market-by-price) |  | Market by price snapshot |
| mbpDiff | [MarketByPriceDiff](#market-by-price-diff) |  | Market by price diff |
| kline | [Kline](#kline) |  | Candlestick |







### MarketByPrice
Market by price snapshot message. This is chunked into `numChunks` and starts
with `chunk = 0`. A snapshot is sent on first connect. `Level`'s should be
concatened until `chunk = numChunks - 1`. Currently, the chunks and levels
are streamed from tightest price level outwards with interleaved Bid and Ask
levels, but no ordering is guaranteed.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| levels | [MarketByPrice.Level](#market-by-price-level) | repeated |  |
| chunk | [uint32](#uint32) |  |  |
| numChunks | [uint32](#uint32) |  |  |







### MarketByPrice.Level
Each price level is the aggregate total quantity of orders placed at that
price.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| price | [uint64](#uint64) |  |  |
| quantity | [uint64](#uint64) |  |  |
| side | [Side](#side) |  |  |







### MarketByPriceDiff
Market by price diff message. Book updates for the MBP feed are sent as diffs
after the initial snapshot. The number of total side levels are for
reconciliation.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| diffs | [MarketByPriceDiff.Diff](#market-by-price-diff-diff) | repeated |  |
| totalBidLevels | [uint32](#uint32) |  | Total number of bid levels after this diff is applied. |
| totalAskLevels | [uint32](#uint32) |  | Total number of ask levels after this diff is applied. |







### MarketByPriceDiff.Diff
A price level diff overwrites the existing price level.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| price | [uint64](#uint64) |  |  |
| quantity | [uint64](#uint64) |  |  |
| side | [Side](#side) |  |  |
| op | [MarketByPriceDiff.DiffOp](#market-by-price-diff-diff-op) |  |  |







### MarketByOrder
Market by order snapshot message. This is chunked into `numChunks` and starts
with `chunk = 0`. A snapshot is sent on first connect. `Level`'s should be
concatened until `chunk = numChunks - 1`. Orders are sent in order of FIFO
queue priority so the first order of a level should be the first order to be
matched when that level is aggressed.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| orders | [MarketByOrder.Order](#market-by-order-order) | repeated |  |
| chunk | [uint32](#uint32) |  |  |
| numChunks | [uint32](#uint32) |  |  |







### MarketByOrder.Order
A resting order.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| price | [uint64](#uint64) |  |  |
| quantity | [uint64](#uint64) |  |  |
| exchangeOrderId | [uint64](#uint64) |  | [Exchange order ID](/docs/api_reference/trade#exchange-order-id) |
| side | [Side](#side) |  |  |
| priority | [uint64](#uint64) |  | Order priority for execution. Valid within a price level and side. That is, orders must first be sorted by side and price (in descending order for bids and ascending for asks), and then the OrderPriority within the level. A lower value is a higher priority. |







### MarketByOrderDiff
Market by order diff message. Book updates for the MBO feed are sent as diffs
after the initial snapshot. The number of total side levels and orders are
for reconciliation.

Note that for orders that are cancel-replace'd (a modify that lost queue
priority), the new price and quantity will be reported as a `REPLACE` but the
exchange order ID will not change.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| diffs | [MarketByOrderDiff.Diff](#market-by-order-diff-diff) | repeated |  |
| totalBidLevels | [uint32](#uint32) |  | Total number of bid levels after this diff is applied. |
| totalAskLevels | [uint32](#uint32) |  | Total number of ask levels after this diff is applied. |
| totalBidOrders | [uint32](#uint32) |  | Total number of bid orders after this diff is applied. |
| totalAskOrders | [uint32](#uint32) |  | Total number of ask orders after this diff is applied. |







### MarketByOrderDiff.Diff
An order diff creates, updates, or deletes a resting order based on the
`exchangeOrderId`


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| price | [uint64](#uint64) |  |  |
| quantity | [uint64](#uint64) |  |  |
| exchangeOrderId | [uint64](#uint64) |  | [Exchange order ID](/docs/api_reference/trade#exchange-order-id) |
| side | [Side](#side) |  |  |
| op | [MarketByOrderDiff.DiffOp](#market-by-order-diff-diff-op) |  |  |
| priority | [uint64](#uint64) |  | See [`MarketByOrder.Order`](#market-by-order-order) |







### Trades
Trades since the latest `Trades` message. The result of the trades will also
appear in the MBP and MBO feeds independently as updates to the resting
orders and levels, respectively.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| trades | [Trades.Trade](#trades-trade) | repeated |  |







### Trades.Trade



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tradeId | [uint64](#uint64) |  | The ID assigned to this trade. All trades that occur from the same event will be assigned the same ID, and are considered to be an atomic batch. |
| price | [uint64](#uint64) |  | The price that this trade occurred at. |
| aggressingSide | [Side](#side) |  | The side of the aggressing order. |
| restingExchangeOrderId | [uint64](#uint64) |  | The [Exchange order ID](/docs/api_reference/trade#exchange-order-id) of the resting order. |
| fillQuantity | [uint64](#uint64) |  |  |
| transactTime | [uint64](#uint64) |  | The [transact time](/docs/api_reference/trade#transact-time) assigned by the matching engine for this trade. All trades that occur from the same event will be assigned the same transact time. |
| aggressingExchangeOrderId | [uint64](#uint64) |  | The [Exchange order ID](/docs/api_reference/trade#exchange-order-id) of the aggressing order. |







### Summary
Rolling 24h stats.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| open | [uint64](#uint64) |  | 24h open price |
| close | [uint64](#uint64) |  | Latest price |
| low | [uint64](#uint64) |  | 24h low price |
| high | [uint64](#uint64) |  | 24h high price |
| baseVolumeLo | [uint64](#uint64) |  | Low 64-bits of the base quantity traded |
| baseVolumeHi | [uint64](#uint64) |  | High 64-bits of the base quantity traded |
| quoteVolumeLo | [uint64](#uint64) |  | Low 64-bits of the quote quantity traded |
| quoteVolumeHi | [uint64](#uint64) |  | High 64-bits of the quote quantity traded |







### Kline
Candlestick bar.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| interval | [KlineInterval](#kline-interval) |  |  |
| startTime | [uint64](#uint64) |  | The unix nanosecond timestamp that this kline covers. |
| open | [uint64](#uint64) |  | Kline open price. |
| close | [uint64](#uint64) |  | Kline close price. |
| high | [uint64](#uint64) |  | Kline high price. |
| low | [uint64](#uint64) |  | Kline low price. |
| volumeLo | [uint64](#uint64) |  | Low 64-bits of the base quantity traded. |
| volumeHi | [uint64](#uint64) |  | High 64-bits of the base quantity traded. |







### Heartbeat
A client and server heartbeat. The heartbeat reply, including the timestamp
value, comes from the market data service.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| requestId | [uint64](#uint64) |  | A request ID that is echoed back on the Heartbeat |
| timestamp | [uint64](#uint64) |  |  |







### MdMessages



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| messages | [MdMessage](#md-message) | repeated |  |







## AggMessage
Every exchange message from `/tops` will be wrapped as an `AggMessage`.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| heartbeat | [Heartbeat](#heartbeat) |  | Server heartbeat reply |
| topOfBooks | [TopOfBooks](#top-of-books) |  | Top of books |
| rateUpdates | [RateUpdates](#rate-updates) |  | Rates for all assets |







### TopOfBook
Top of book


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| marketId | [uint64](#uint64) |  |  |
| transactTime | [uint64](#uint64) |  | The [transact time](/docs/api_reference/trade#transact-time) of the latest book update on this market. |
| bidPrice | [uint64](#uint64) |  | The best bid price. |
| bidQuantity | [uint64](#uint64) |  | The total bid quantity at the best bid price. |
| askPrice | [uint64](#uint64) |  | The best ask price. |
| askQuantity | [uint64](#uint64) |  | The total ask quantity at the best ask price. |
| lastPrice | [uint64](#uint64) |  | The last trade price. |
| rolling24hPrice | [uint64](#uint64) |  | The 24h open price. |







### TopOfBooks
Top of books for all books that were updates since the last top-of-books
message.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tops | [TopOfBook](#top-of-book) | repeated |  |







## RateUpdate
Rate update. Used in conjuction with another rate update to get the price of
that divisor. Rate's should not be used alone. For example, given a
RateUpdate for `assetId = BTC, updateSide = BASE` of `r1`, and `assetId =
EUR, updateSide = QUOTE` of `r2`, the BTC-EUR price estimate is `r1 * r2`.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assetId | [uint64](#uint64) |  |  |
| timestamp | [uint64](#uint64) |  | The nanosecond timestamp of the update. |
| rate | [uint64](#uint64) |  | The asset rate at the given timestamp. |
| side | [RateUpdateSide](#rate-update-side) |  |  |







## RateUpdates
Rates for all assets. Published on connect and updates since the last
rate-updates message.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| updates | [RateUpdate](#rate-update) | repeated |  |







## ClientMessage
Client heartbeats and configs. This wrapper is used for both
`/book/:market_id` and `/tops`, but `config` messages are ignored on the
latter.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| heartbeat | [Heartbeat](#heartbeat) |  |  |
| config | [Config](#config) |  |  |







### Config
Set the message subscriptions for `/book/:market_id`. At most one of `mbp`
and `mbo` can be set.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mbp | [bool](#bool) |  | Enable MBP feeds |
| mbo | [bool](#bool) |  | Enable MBO feeds |
| trades | [bool](#bool) |  | Enable recent trades |
| summary | [bool](#bool) |  | Enable 24h summary |
| klines | [KlineInterval](#kline-interval) | repeated | Enable price klines |







## Enums



### Side
Side specifies whether the level, order, or diff, is for buying or selling
the base asset.

| Name | Number | Description |
| ---- | ------ | ----------- |
| BID | 0 | Bids buy the base asset with the quote asset. |
| ASK | 1 | Asks (or offers) sell the base asset and get the quote asset. |




### KlineInterval
The candlestick interval.

| Name | Number | Description |
| ---- | ------ | ----------- |
| S1 | 0 | 1 second |
| M1 | 1 | 1 minute |
| M15 | 2 | 15 minutes |
| H1 | 3 | 1 hour |
| H4 | 4 | 4 hours |
| D1 | 5 | 1 day |




## RateUpdateSide
The side of the rate update. Given a `BASE` rate of `r`, the `QUOTE` rate is
`1 / r`, and vice versa.

| Name | Number | Description |
| ---- | ------ | ----------- |
| BASE | 0 | The asset serves as the base asset for the given rate. |
| QUOTE | 1 | The asset serves as the quote asset for the given rate. |




### MarketByPriceDiff.DiffOp
The operation to apply for this price level. Currently, new price levels
are created with `REPLACE`.

| Name | Number | Description |
| ---- | ------ | ----------- |
| ADD | 0 |  |
| REMOVE | 1 |  |
| REPLACE | 2 |  |




### MarketByOrderDiff.DiffOp
The operation to apply for this price level. For example, an resting order
that gets filled will be `REPLACE`'d with the new resting quantity. An
order is `REMOVE`'d when it is fully filled or canceled.

| Name | Number | Description |
| ---- | ------ | ----------- |
| ADD | 0 |  |
| REMOVE | 1 |  |
| REPLACE | 2 |  |








## Scalar Value Types

| .proto Type | Notes | Rust | C++ | Python | Go |
| ----------- | ----- | ---- | --- | ------ | -- |
| double |  | f64 | double | float | float64 |
| float |  | f32 | float | float | float32 |
| int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | i32 | int32 | int | int32 |
| int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | i64 | int64 | int/long | int64 |
| uint32 | Uses variable-length encoding. | u32 | uint32 | int/long | uint32 |
| uint64 | Uses variable-length encoding. | u64 | uint64 | int/long | uint64 |
| sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | i32 | int32 | int | int32 |
| sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | i64 | int64 | int/long | int64 |
| fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | u64 | uint32 | int | uint32 |
| fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | u64 | uint64 | int/long | uint64 |
| sfixed32 | Always four bytes. | i32 | int32 | int | int32 |
| sfixed64 | Always eight bytes. | i64 | int64 | int/long | int64 |
| bool |  | bool | bool | boolean | bool |
| string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | String | string | str/unicode | string |
| bytes | May contain any arbitrary sequence of bytes. | Vec<u8> | string | str | []byte |

