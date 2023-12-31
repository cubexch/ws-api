/// Every exchange message from `/book/:market_id` will be wrapped as an
/// \[`MdMessages`\](#md-messages) which contains multiple `MdMessage`'s.
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde", serde(rename_all = "camelCase"))]
#[cfg_attr(feature = "schemars", derive(schemars::JsonSchema))]
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MdMessage {
    #[prost(oneof="md_message::Inner", tags="1, 2, 3, 4, 5, 6, 7, 8")]
    pub inner: ::core::option::Option<md_message::Inner>,
}
/// Nested message and enum types in `MdMessage`.
pub mod md_message {
    #[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde", serde(rename_all = "camelCase"))]
#[cfg_attr(feature = "schemars", derive(schemars::JsonSchema))]
    #[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Oneof)]
    pub enum Inner {
        /// Server heartbeat reply
        #[prost(message, tag="1")]
        Heartbeat(super::Heartbeat),
        /// 24h summary
        #[prost(message, tag="2")]
        Summary(super::Summary),
        /// Recent trades
        #[prost(message, tag="3")]
        Trades(super::Trades),
        /// Market by order snapshot
        #[prost(message, tag="4")]
        MboSnapshot(super::MarketByOrder),
        /// Market by order diff
        #[prost(message, tag="5")]
        MboDiff(super::MarketByOrderDiff),
        /// Market by price snapshot
        #[prost(message, tag="6")]
        MbpSnapshot(super::MarketByPrice),
        /// Market by price diff
        #[prost(message, tag="7")]
        MbpDiff(super::MarketByPriceDiff),
        /// Candlestick
        #[prost(message, tag="8")]
        Kline(super::Kline),
    }
}
/// Market by price snapshot message. This is chunked into `num_chunks` and starts
/// with `chunk = 0`. A snapshot is sent on first connect. `Level`'s should be
/// concatened until `chunk = num_chunks - 1`. Currently, the chunks and levels
/// are streamed from tightest price level outwards with interleaved Bid and Ask
/// levels, but no ordering is guaranteed.
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde", serde(rename_all = "camelCase"))]
#[cfg_attr(feature = "schemars", derive(schemars::JsonSchema))]
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MarketByPrice {
    #[prost(message, repeated, tag="1")]
    pub levels: ::prost::alloc::vec::Vec<market_by_price::Level>,
    #[prost(uint32, tag="2")]
    pub chunk: u32,
    #[prost(uint32, tag="3")]
    pub num_chunks: u32,
}
/// Nested message and enum types in `MarketByPrice`.
pub mod market_by_price {
    /// Each price level is the aggregate total quantity of orders placed at that
    /// price.
    #[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde", serde(rename_all = "camelCase"))]
#[cfg_attr(feature = "schemars", derive(schemars::JsonSchema))]
    #[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
    pub struct Level {
        #[prost(uint64, tag="1")]
        pub price: u64,
        #[prost(uint64, tag="2")]
        pub quantity: u64,
        #[prost(enumeration="super::Side", tag="3")]
        pub side: i32,
    }
}
/// Market by price diff message. Book updates for the MBP feed are sent as diffs
/// after the initial snapshot. The number of total side levels are for
/// reconciliation.
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde", serde(rename_all = "camelCase"))]
#[cfg_attr(feature = "schemars", derive(schemars::JsonSchema))]
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MarketByPriceDiff {
    #[prost(message, repeated, tag="1")]
    pub diffs: ::prost::alloc::vec::Vec<market_by_price_diff::Diff>,
    /// Total number of bid levels after this diff is applied.
    #[prost(uint32, tag="2")]
    pub total_bid_levels: u32,
    /// Total number of ask levels after this diff is applied.
    #[prost(uint32, tag="3")]
    pub total_ask_levels: u32,
}
/// Nested message and enum types in `MarketByPriceDiff`.
pub mod market_by_price_diff {
    /// A price level diff overwrites the existing price level.
    #[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde", serde(rename_all = "camelCase"))]
#[cfg_attr(feature = "schemars", derive(schemars::JsonSchema))]
    #[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
    pub struct Diff {
        #[prost(uint64, tag="1")]
        pub price: u64,
        #[prost(uint64, tag="2")]
        pub quantity: u64,
        #[prost(enumeration="super::Side", tag="3")]
        pub side: i32,
        #[prost(enumeration="DiffOp", tag="4")]
        pub op: i32,
    }
    /// The operation to apply for this price level. Currently, new price levels
    /// are created with `REPLACE`.
    #[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde", serde(rename_all = "camelCase"))]
#[cfg_attr(feature = "schemars", derive(schemars::JsonSchema))]
    #[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
    #[repr(i32)]
    pub enum DiffOp {
        Add = 0,
        Remove = 1,
        Replace = 2,
    }
    impl DiffOp {
        /// String value of the enum field names used in the ProtoBuf definition.
        ///
        /// The values are not transformed in any way and thus are considered stable
        /// (if the ProtoBuf definition does not change) and safe for programmatic use.
        pub fn as_str_name(&self) -> &'static str {
            match self {
                DiffOp::Add => "ADD",
                DiffOp::Remove => "REMOVE",
                DiffOp::Replace => "REPLACE",
            }
        }
        /// Creates an enum from field names used in the ProtoBuf definition.
        pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
            match value {
                "ADD" => Some(Self::Add),
                "REMOVE" => Some(Self::Remove),
                "REPLACE" => Some(Self::Replace),
                _ => None,
            }
        }
    }
}
/// Market by order snapshot message. This is chunked into `num_chunks` and starts
/// with `chunk = 0`. A snapshot is sent on first connect. `Level`'s should be
/// concatened until `chunk = num_chunks - 1`. Orders are sent in order of FIFO
/// queue priority so the first order of a level should be the first order to be
/// matched when that level is aggressed.
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde", serde(rename_all = "camelCase"))]
#[cfg_attr(feature = "schemars", derive(schemars::JsonSchema))]
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MarketByOrder {
    #[prost(message, repeated, tag="1")]
    pub orders: ::prost::alloc::vec::Vec<market_by_order::Order>,
    #[prost(uint32, tag="2")]
    pub chunk: u32,
    #[prost(uint32, tag="3")]
    pub num_chunks: u32,
}
/// Nested message and enum types in `MarketByOrder`.
pub mod market_by_order {
    /// A resting order.
    #[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde", serde(rename_all = "camelCase"))]
#[cfg_attr(feature = "schemars", derive(schemars::JsonSchema))]
    #[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
    pub struct Order {
        #[prost(uint64, tag="1")]
        pub price: u64,
        #[prost(uint64, tag="2")]
        pub quantity: u64,
        /// [Exchange order ID](/docs/api_reference/trade#exchange-order-id)
        #[prost(uint64, tag="3")]
        pub exchange_order_id: u64,
        #[prost(enumeration="super::Side", tag="4")]
        pub side: i32,
        /// Order priority for execution. Valid within a price level and side. That
        /// is, orders must first be sorted by side and price (in descending order
        /// for bids and ascending for asks), and then the OrderPriority within the
        /// level. A lower value is a higher priority.
        #[prost(uint64, tag="5")]
        pub priority: u64,
    }
}
/// Market by order diff message. Book updates for the MBO feed are sent as diffs
/// after the initial snapshot. The number of total side levels and orders are
/// for reconciliation.
///
/// Note that for orders that are cancel-replace'd (a modify that lost queue
/// priority), the new price and quantity will be reported as a `REPLACE` but the
/// exchange order ID will not change.
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde", serde(rename_all = "camelCase"))]
#[cfg_attr(feature = "schemars", derive(schemars::JsonSchema))]
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MarketByOrderDiff {
    #[prost(message, repeated, tag="1")]
    pub diffs: ::prost::alloc::vec::Vec<market_by_order_diff::Diff>,
    /// Total number of bid levels after this diff is applied.
    #[prost(uint32, tag="2")]
    pub total_bid_levels: u32,
    /// Total number of ask levels after this diff is applied.
    #[prost(uint32, tag="3")]
    pub total_ask_levels: u32,
    /// Total number of bid orders after this diff is applied.
    #[prost(uint32, tag="4")]
    pub total_bid_orders: u32,
    /// Total number of ask orders after this diff is applied.
    #[prost(uint32, tag="5")]
    pub total_ask_orders: u32,
}
/// Nested message and enum types in `MarketByOrderDiff`.
pub mod market_by_order_diff {
    /// An order diff creates, updates, or deletes a resting order based on the
    /// `exchange_order_id`
    #[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde", serde(rename_all = "camelCase"))]
#[cfg_attr(feature = "schemars", derive(schemars::JsonSchema))]
    #[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
    pub struct Diff {
        #[prost(uint64, tag="1")]
        pub price: u64,
        #[prost(uint64, tag="2")]
        pub quantity: u64,
        /// [Exchange order ID](/docs/api_reference/trade#exchange-order-id)
        #[prost(uint64, tag="3")]
        pub exchange_order_id: u64,
        #[prost(enumeration="super::Side", tag="4")]
        pub side: i32,
        #[prost(enumeration="DiffOp", tag="5")]
        pub op: i32,
        /// See \[`MarketByOrder.Order`\](#market-by-order-order)
        #[prost(uint64, tag="6")]
        pub priority: u64,
    }
    /// The operation to apply for this price level. For example, an resting order
    /// that gets filled will be `REPLACE`'d with the new resting quantity. An
    /// order is `REMOVE`'d when it is fully filled or canceled.
    #[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde", serde(rename_all = "camelCase"))]
#[cfg_attr(feature = "schemars", derive(schemars::JsonSchema))]
    #[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
    #[repr(i32)]
    pub enum DiffOp {
        Add = 0,
        Remove = 1,
        Replace = 2,
    }
    impl DiffOp {
        /// String value of the enum field names used in the ProtoBuf definition.
        ///
        /// The values are not transformed in any way and thus are considered stable
        /// (if the ProtoBuf definition does not change) and safe for programmatic use.
        pub fn as_str_name(&self) -> &'static str {
            match self {
                DiffOp::Add => "ADD",
                DiffOp::Remove => "REMOVE",
                DiffOp::Replace => "REPLACE",
            }
        }
        /// Creates an enum from field names used in the ProtoBuf definition.
        pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
            match value {
                "ADD" => Some(Self::Add),
                "REMOVE" => Some(Self::Remove),
                "REPLACE" => Some(Self::Replace),
                _ => None,
            }
        }
    }
}
/// Trades since the latest `Trades` message. The result of the trades will also
/// appear in the MBP and MBO feeds independently as updates to the resting
/// orders and levels, respectively.
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde", serde(rename_all = "camelCase"))]
#[cfg_attr(feature = "schemars", derive(schemars::JsonSchema))]
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Trades {
    #[prost(message, repeated, tag="1")]
    pub trades: ::prost::alloc::vec::Vec<trades::Trade>,
}
/// Nested message and enum types in `Trades`.
pub mod trades {
    #[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde", serde(rename_all = "camelCase"))]
#[cfg_attr(feature = "schemars", derive(schemars::JsonSchema))]
    #[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
    pub struct Trade {
        /// The ID assigned to this trade. All trades that occur from the same event
        /// will be assigned the same ID, and are considered to be an atomic batch.
        #[prost(uint64, tag="1")]
        pub trade_id: u64,
        /// The price that this trade occurred at.
        #[prost(uint64, tag="2")]
        pub price: u64,
        /// The side of the aggressing order.
        #[prost(enumeration="super::Side", tag="3")]
        pub aggressing_side: i32,
        /// The [Exchange order ID](/docs/api_reference/trade#exchange-order-id) of
        /// the resting order.
        #[prost(uint64, tag="4")]
        pub resting_exchange_order_id: u64,
        #[prost(uint64, tag="5")]
        pub fill_quantity: u64,
        /// The [transact time](/docs/api_reference/trade#transact-time) assigned by
        /// the matching engine for this trade. All trades that occur from the same
        /// event will be assigned the same transact time.
        #[prost(uint64, tag="6")]
        pub transact_time: u64,
        /// The [Exchange order ID](/docs/api_reference/trade#exchange-order-id) of
        /// the aggressing order.
        #[prost(uint64, tag="7")]
        pub aggressing_exchange_order_id: u64,
    }
}
/// Rolling 24h stats.
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde", serde(rename_all = "camelCase"))]
#[cfg_attr(feature = "schemars", derive(schemars::JsonSchema))]
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Summary {
    /// 24h open price
    #[prost(uint64, tag="1")]
    pub open: u64,
    /// Latest price
    #[prost(uint64, tag="2")]
    pub close: u64,
    /// 24h low price
    #[prost(uint64, tag="3")]
    pub low: u64,
    /// 24h high price
    #[prost(uint64, tag="4")]
    pub high: u64,
    /// Low 64-bits of the base quantity traded
    #[prost(uint64, tag="5")]
    pub base_volume_lo: u64,
    /// High 64-bits of the base quantity traded
    #[prost(uint64, tag="6")]
    pub base_volume_hi: u64,
    /// Low 64-bits of the quote quantity traded
    #[prost(uint64, tag="7")]
    pub quote_volume_lo: u64,
    /// High 64-bits of the quote quantity traded
    #[prost(uint64, tag="8")]
    pub quote_volume_hi: u64,
}
/// Candlestick bar.
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde", serde(rename_all = "camelCase"))]
#[cfg_attr(feature = "schemars", derive(schemars::JsonSchema))]
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Kline {
    #[prost(enumeration="KlineInterval", tag="1")]
    pub interval: i32,
    /// The unix nanosecond timestamp that this kline covers.
    #[prost(uint64, tag="2")]
    pub start_time: u64,
    /// Kline open price.
    #[prost(uint64, tag="3")]
    pub open: u64,
    /// Kline close price.
    #[prost(uint64, tag="4")]
    pub close: u64,
    /// Kline high price.
    #[prost(uint64, tag="5")]
    pub high: u64,
    /// Kline low price.
    #[prost(uint64, tag="6")]
    pub low: u64,
    /// Low 64-bits of the base quantity traded.
    #[prost(uint64, tag="7")]
    pub volume_lo: u64,
    /// High 64-bits of the base quantity traded.
    #[prost(uint64, tag="8")]
    pub volume_hi: u64,
}
/// A client and server heartbeat. The heartbeat reply, including the timestamp
/// value, comes from the market data service.
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde", serde(rename_all = "camelCase"))]
#[cfg_attr(feature = "schemars", derive(schemars::JsonSchema))]
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Heartbeat {
    /// A request ID that is echoed back on the Heartbeat
    #[prost(uint64, tag="1")]
    pub request_id: u64,
    #[prost(uint64, tag="2")]
    pub timestamp: u64,
}
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde", serde(rename_all = "camelCase"))]
#[cfg_attr(feature = "schemars", derive(schemars::JsonSchema))]
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MdMessages {
    #[prost(message, repeated, tag="1")]
    pub messages: ::prost::alloc::vec::Vec<MdMessage>,
}
/// Every exchange message from `/tops` will be wrapped as an `AggMessage`.
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde", serde(rename_all = "camelCase"))]
#[cfg_attr(feature = "schemars", derive(schemars::JsonSchema))]
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AggMessage {
    #[prost(oneof="agg_message::Inner", tags="1, 2, 3")]
    pub inner: ::core::option::Option<agg_message::Inner>,
}
/// Nested message and enum types in `AggMessage`.
pub mod agg_message {
    #[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde", serde(rename_all = "camelCase"))]
#[cfg_attr(feature = "schemars", derive(schemars::JsonSchema))]
    #[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Oneof)]
    pub enum Inner {
        /// Server heartbeat reply
        #[prost(message, tag="1")]
        Heartbeat(super::Heartbeat),
        /// Top of books
        #[prost(message, tag="2")]
        TopOfBooks(super::TopOfBooks),
        /// Rates for all assets
        #[prost(message, tag="3")]
        RateUpdates(super::RateUpdates),
    }
}
/// Top of book
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde", serde(rename_all = "camelCase"))]
#[cfg_attr(feature = "schemars", derive(schemars::JsonSchema))]
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TopOfBook {
    #[prost(uint64, tag="1")]
    pub market_id: u64,
    /// The [transact time](/docs/api_reference/trade#transact-time) of the latest
    /// book update on this market.
    #[prost(uint64, tag="2")]
    pub transact_time: u64,
    /// The best bid price.
    #[prost(uint64, tag="3")]
    pub bid_price: u64,
    /// The total bid quantity at the best bid price.
    #[prost(uint64, tag="4")]
    pub bid_quantity: u64,
    /// The best ask price.
    #[prost(uint64, tag="5")]
    pub ask_price: u64,
    /// The total ask quantity at the best ask price.
    #[prost(uint64, tag="6")]
    pub ask_quantity: u64,
    /// The last trade price.
    #[prost(uint64, tag="7")]
    pub last_price: u64,
    /// The 24h open price.
    #[prost(uint64, tag="8")]
    pub rolling24h_price: u64,
}
/// Top of books for all books that were updates since the last top-of-books
/// message.
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde", serde(rename_all = "camelCase"))]
#[cfg_attr(feature = "schemars", derive(schemars::JsonSchema))]
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TopOfBooks {
    #[prost(message, repeated, tag="1")]
    pub tops: ::prost::alloc::vec::Vec<TopOfBook>,
}
/// Rate update. Used in conjuction with another rate update to get the price of
/// that divisor. Rate's should not be used alone. For example, given a
/// RateUpdate for `assetId = BTC, updateSide = BASE` of `r1`, and `assetId =
/// EUR, updateSide = QUOTE` of `r2`, the BTC-EUR price estimate is `r1 * r2`.
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde", serde(rename_all = "camelCase"))]
#[cfg_attr(feature = "schemars", derive(schemars::JsonSchema))]
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RateUpdate {
    #[prost(uint64, tag="1")]
    pub asset_id: u64,
    /// The nanosecond timestamp of the update.
    #[prost(uint64, tag="2")]
    pub timestamp: u64,
    /// The asset rate at the given timestamp.
    #[prost(uint64, tag="3")]
    pub rate: u64,
    #[prost(enumeration="RateUpdateSide", tag="4")]
    pub side: i32,
}
/// Rates for all assets. Published on connect and updates since the last
/// rate-updates message.
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde", serde(rename_all = "camelCase"))]
#[cfg_attr(feature = "schemars", derive(schemars::JsonSchema))]
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RateUpdates {
    #[prost(message, repeated, tag="1")]
    pub updates: ::prost::alloc::vec::Vec<RateUpdate>,
}
/// Client heartbeats and configs. This wrapper is used for both
/// `/book/:market_id` and `/tops`, but `config` messages are ignored on the
/// latter.
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde", serde(rename_all = "camelCase"))]
#[cfg_attr(feature = "schemars", derive(schemars::JsonSchema))]
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ClientMessage {
    #[prost(oneof="client_message::Inner", tags="1, 2")]
    pub inner: ::core::option::Option<client_message::Inner>,
}
/// Nested message and enum types in `ClientMessage`.
pub mod client_message {
    #[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde", serde(rename_all = "camelCase"))]
#[cfg_attr(feature = "schemars", derive(schemars::JsonSchema))]
    #[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Oneof)]
    pub enum Inner {
        #[prost(message, tag="1")]
        Heartbeat(super::Heartbeat),
        #[prost(message, tag="2")]
        Config(super::Config),
    }
}
/// Set the message subscriptions for `/book/:market_id`. At most one of `mbp`
/// and `mbo` can be set.
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde", serde(rename_all = "camelCase"))]
#[cfg_attr(feature = "schemars", derive(schemars::JsonSchema))]
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Config {
    /// Enable MBP feeds
    #[prost(bool, tag="1")]
    pub mbp: bool,
    /// Enable MBO feeds
    #[prost(bool, tag="2")]
    pub mbo: bool,
    /// Enable recent trades
    #[prost(bool, tag="3")]
    pub trades: bool,
    /// Enable 24h summary
    #[prost(bool, tag="4")]
    pub summary: bool,
    /// Enable price klines
    #[prost(enumeration="KlineInterval", repeated, tag="5")]
    pub klines: ::prost::alloc::vec::Vec<i32>,
}
/// Side specifies whether the level, order, or diff, is for buying or selling
/// the base asset.
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde", serde(rename_all = "camelCase"))]
#[cfg_attr(feature = "schemars", derive(schemars::JsonSchema))]
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum Side {
    /// Bids buy the base asset with the quote asset.
    Bid = 0,
    /// Asks (or offers) sell the base asset and get the quote asset.
    Ask = 1,
}
impl Side {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            Side::Bid => "BID",
            Side::Ask => "ASK",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "BID" => Some(Self::Bid),
            "ASK" => Some(Self::Ask),
            _ => None,
        }
    }
}
/// The candlestick interval.
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde", serde(rename_all = "camelCase"))]
#[cfg_attr(feature = "schemars", derive(schemars::JsonSchema))]
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum KlineInterval {
    /// 1 second
    S1 = 0,
    /// 1 minute
    M1 = 1,
    /// 15 minutes
    M15 = 2,
    /// 1 hour
    H1 = 3,
    /// 4 hours
    H4 = 4,
    /// 1 day
    D1 = 5,
}
impl KlineInterval {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            KlineInterval::S1 => "S1",
            KlineInterval::M1 => "M1",
            KlineInterval::M15 => "M15",
            KlineInterval::H1 => "H1",
            KlineInterval::H4 => "H4",
            KlineInterval::D1 => "D1",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "S1" => Some(Self::S1),
            "M1" => Some(Self::M1),
            "M15" => Some(Self::M15),
            "H1" => Some(Self::H1),
            "H4" => Some(Self::H4),
            "D1" => Some(Self::D1),
            _ => None,
        }
    }
}
/// The side of the rate update. Given a `BASE` rate of `r`, the `QUOTE` rate is
/// `1 / r`, and vice versa.
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(feature = "serde", serde(rename_all = "camelCase"))]
#[cfg_attr(feature = "schemars", derive(schemars::JsonSchema))]
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum RateUpdateSide {
    /// The asset serves as the base asset for the given rate.
    Base = 0,
    /// The asset serves as the quote asset for the given rate.
    Quote = 1,
}
impl RateUpdateSide {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            RateUpdateSide::Base => "BASE",
            RateUpdateSide::Quote => "QUOTE",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "BASE" => Some(Self::Base),
            "QUOTE" => Some(Self::Quote),
            _ => None,
        }
    }
}
