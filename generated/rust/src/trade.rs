/// A fixed-point decimal number.
/// Matches the representation preferred by the FIX protocol,
/// except that the exponent is int32 since Protobuf does not have an int8 type.
/// The value is computed as `mantissa * 10^exponent`;
/// for example, `mantissa = 1234` and `exponent = -2` is `12.34`.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct FixedPointDecimal {
    #[prost(int64, tag="1")]
    pub mantissa: i64,
    #[prost(int32, tag="2")]
    pub exponent: i32,
}
/// Sent by client on websocket initialization. Once the websocket has been
/// connected, the client is expected to send this credentials message
/// immediately. The API key (UUID) and secret access key (hex-encoded 32-byte
/// array) should be generated on the settings page with the write access. The
/// signature should be calculated as the concatenation of the byte string
/// `cube.xyz` and the current unix epoch in seconds interpreted at a
/// little-endian 64-bit number.
///
/// Implementation notes:
/// - The signature is base-64 encoded with the 'standard' alphabet and
///    padding.
///
///    ```
///    ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
///    ```
/// - The timestamp should be encoded as 8-byte little-endian (array of bytes)
/// - The secret key should be decoded from a hex string into a 32-byte array of
///    bytes
///
///
/// #### Rust
///
/// ```rust compile_fail
/// use base64::Engine;
/// use hmac::{Hmac, Mac, NewMac};
/// use std::time::SystemTime;
///
/// let secret_key = \[...\];
///
/// let timestamp: u64 = SystemTime::now().duration_since(SystemTime::UNIX_EPOCH).unwrap().as_secs();
///
/// let mut mac = Hmac::<sha2::Sha256>::new_from_slice(
///      secret_key
/// ).expect("new HMAC error");
/// mac.update(b"cube.xyz");
/// mac.update(&timestamp.to_le_bytes());
/// let signature_bytes = <[u8; 32]>::from(mac.finalize().into_bytes());
/// let signature = base64::general_purpose::STANDARD.encode(signature_bytes);
/// ```
///
/// #### Typescript
/// ```
/// import { createHmac } from 'crypto';
/// const secretKey = "cafecafecafecafecafecafecafecafecafecafecafecafecafecafecafecafe";
/// const timestampSecs = Math.floor(Date.now() / 1000);
/// const timestampBytes = Buffer.alloc(8);
/// timestampBytes.writeBigInt64LE(BigInt(timestampSecs));
///
/// const signature = createHmac('sha256', Buffer.from(secretKey, 'hex'))
///    .update(`cube.xyz`)
///    .update(timestampBytes)
///    .digest('base64');
/// ```
///
///
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Credentials {
    /// Public API key
    #[prost(string, tag="1")]
    pub access_key_id: ::prost::alloc::string::String,
    /// HMAC signature, base-64 encoded
    #[prost(string, tag="2")]
    pub signature: ::prost::alloc::string::String,
    /// Timestamp in seconds
    #[prost(uint64, tag="3")]
    pub timestamp: u64,
}
/// Every client message, aside from Credentials, must be wrapped as an
/// OrderRequest.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct OrderRequest {
    #[prost(oneof="order_request::Inner", tags="1, 2, 3, 4, 5")]
    pub inner: ::core::option::Option<order_request::Inner>,
}
/// Nested message and enum types in `OrderRequest`.
pub mod order_request {
    #[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Oneof)]
    pub enum Inner {
        #[prost(message, tag="1")]
        New(super::NewOrder),
        #[prost(message, tag="2")]
        Cancel(super::CancelOrder),
        #[prost(message, tag="3")]
        Modify(super::ModifyOrder),
        #[prost(message, tag="4")]
        Heartbeat(super::Heartbeat),
        #[prost(message, tag="5")]
        Mc(super::MassCancel),
    }
}
/// Place a new order.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct NewOrder {
    /// A unique order ID assigned by the client for this order. The ID must be
    /// unique among open orders by this subaccount.
    #[prost(uint64, tag="1")]
    pub client_order_id: u64,
    /// A request ID that is echoed back on the NewOrderAck or NewOrderReject
    #[prost(uint64, tag="2")]
    pub request_id: u64,
    #[prost(uint64, tag="3")]
    pub market_id: u64,
    #[prost(uint64, optional, tag="4")]
    pub price: ::core::option::Option<u64>,
    #[prost(uint64, tag="5")]
    pub quantity: u64,
    #[prost(enumeration="Side", tag="6")]
    pub side: i32,
    #[prost(enumeration="TimeInForce", tag="7")]
    pub time_in_force: i32,
    #[prost(enumeration="OrderType", tag="8")]
    pub order_type: i32,
    /// The subaccount to place this order on. This subaccount must be writable by
    /// the API key specified in the Credentials message.
    #[prost(uint64, tag="9")]
    pub subaccount_id: u64,
    #[prost(enumeration="SelfTradePrevention", optional, tag="10")]
    pub self_trade_prevention: ::core::option::Option<i32>,
    #[prost(enumeration="PostOnly", tag="11")]
    pub post_only: i32,
    /// If true, this order will be automatically cancelled
    /// after the closure of the network connection
    /// between Cube's servers and the client that placed the order.
    ///
    /// If the client initiates the disconnect or network instability drops the connection,
    /// the order will be cancelled when Cube's servers recognize the disconnection.
    ///
    /// In the event of a server-side disconnect that causes a halt in trading,
    /// such as scheduled downtime, the order will be cancelled before trading resumes.
    #[prost(bool, tag="12")]
    pub cancel_on_disconnect: bool,
}
/// Cancel a resting order.
/// Note that this can be done before the order is acknowledged (an aggressive
/// cancel) since the identifying field is the `client_order_id`.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CancelOrder {
    #[prost(uint64, tag="1")]
    pub market_id: u64,
    /// The order ID specified by the client on the NewOrder request.
    #[prost(uint64, tag="2")]
    pub client_order_id: u64,
    /// A request ID that is echoed back on the CancelOrderAck or CancelOrderReject
    #[prost(uint64, tag="3")]
    pub request_id: u64,
    /// The subaccount that the NewOrder was placed on.
    #[prost(uint64, tag="4")]
    pub subaccount_id: u64,
}
/// Modify a resting order.
/// - If the `newPrice` and the current resting order's price is the same, and
/// `newQuantity` is not greater, then the modify is considered a modify down,
/// and the FIFO queue priority is maintained. Otherwise, the modify-order
/// request is treated as an atomic cancel-replace and the replacement order is
/// placed at the end of the FIFO queue for the new price level.
/// - If post-only is specified and the replacement order would trade, then the
/// request is rejected and the current resting order remains resting.
///
/// Currently, in-flight-mitigation (IFM) is always enabled. That is, the
/// cumulative fill qty is subtracted from `newQuantity` to calculate the new
/// resting quantity. For example:
///
/// ```text
///           | Resting | Filled
/// ---------+---------+--------
/// New 5    | 5       | 0
/// Fill 2   | 3       | 2
/// Modify 4 | 2       | 2
/// ```
///
/// The post-modify quantity will be `newQuantity - filled = 4 - 2 = 2`.
///
/// Regardless of IFM, the invariant for order quantity is that `quantity =
/// remaining_quantity + cumulative_quantity`.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ModifyOrder {
    #[prost(uint64, tag="1")]
    pub market_id: u64,
    /// The order ID specified by the client on the NewOrder request.
    #[prost(uint64, tag="2")]
    pub client_order_id: u64,
    /// A request ID that is echoed back on the ModifyOrderAck or ModifyOrderReject
    #[prost(uint64, tag="3")]
    pub request_id: u64,
    #[prost(uint64, tag="4")]
    pub new_price: u64,
    #[prost(uint64, tag="5")]
    pub new_quantity: u64,
    /// The subaccount that the NewOrder was placed on.
    #[prost(uint64, tag="6")]
    pub subaccount_id: u64,
    #[prost(enumeration="SelfTradePrevention", optional, tag="7")]
    pub self_trade_prevention: ::core::option::Option<i32>,
    #[prost(enumeration="PostOnly", tag="8")]
    pub post_only: i32,
}
/// Cancel all resting orders, optionally limiting to a particular market and /
/// or order book side.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MassCancel {
    /// The subaccount to cancel orders for.
    #[prost(uint64, tag="1")]
    pub subaccount_id: u64,
    /// A request ID that is echoed back on the MassCancelAck and individual
    /// CancelOrderAck's.
    #[prost(uint64, tag="2")]
    pub request_id: u64,
    /// If specified, only orders on the corresponding market will be canceled.
    #[prost(uint64, optional, tag="3")]
    pub market_id: ::core::option::Option<u64>,
    /// If specified, only orders with this side will be canceled.
    #[prost(enumeration="Side", optional, tag="4")]
    pub side: ::core::option::Option<i32>,
}
/// A client and server heartbeat. The heartbeat reply, including the timestamp
/// value, comes from the order service and not the matching engine. Matching
/// engine timestamps can be extracted from `transact_time` (below).
///
/// Latency can be estimated from this, but only the relative difference between
/// successive server messages should be used. In particular, the client and
/// server clock should not be expected to be synchronized.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Heartbeat {
    /// A request ID that is echoed back on the Heartbeat
    #[prost(uint64, tag="1")]
    pub request_id: u64,
    #[prost(uint64, tag="2")]
    pub timestamp: u64,
}
/// Every exchange message after the initial bootstrap will be wrapped as an
/// OrderResponse.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct OrderResponse {
    #[prost(oneof="order_response::Inner", tags="1, 2, 3, 4, 5, 6, 7, 8, 9, 10")]
    pub inner: ::core::option::Option<order_response::Inner>,
}
/// Nested message and enum types in `OrderResponse`.
pub mod order_response {
    #[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Oneof)]
    pub enum Inner {
        #[prost(message, tag="1")]
        NewAck(super::NewOrderAck),
        #[prost(message, tag="2")]
        CancelAck(super::CancelOrderAck),
        #[prost(message, tag="3")]
        ModifyAck(super::ModifyOrderAck),
        #[prost(message, tag="4")]
        NewReject(super::NewOrderReject),
        #[prost(message, tag="5")]
        CancelReject(super::CancelOrderReject),
        #[prost(message, tag="6")]
        ModifyReject(super::ModifyOrderReject),
        #[prost(message, tag="7")]
        Fill(super::Fill),
        #[prost(message, tag="8")]
        Heartbeat(super::Heartbeat),
        #[prost(message, tag="9")]
        Position(super::AssetPosition),
        #[prost(message, tag="10")]
        MassCancelAck(super::MassCancelAck),
    }
}
/// New-order-ack confirms a new-order request. The ack will be ordered before
/// any fills for this order.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct NewOrderAck {
    #[prost(uint64, tag="1")]
    pub msg_seq_num: u64,
    /// The client order ID specified in the new-order request.
    #[prost(uint64, tag="2")]
    pub client_order_id: u64,
    /// The request ID specified in the new-order request.
    #[prost(uint64, tag="3")]
    pub request_id: u64,
    /// [Exchange order ID](#exchange-order-id)
    #[prost(uint64, tag="4")]
    pub exchange_order_id: u64,
    #[prost(uint64, tag="5")]
    pub market_id: u64,
    /// If the order ultimately rests, the `price` field will include the resting
    /// price.
    #[prost(uint64, optional, tag="6")]
    pub price: ::core::option::Option<u64>,
    /// The quantity submitted in the new-order request.
    #[prost(uint64, tag="7")]
    pub quantity: u64,
    #[prost(enumeration="Side", tag="8")]
    pub side: i32,
    #[prost(enumeration="TimeInForce", tag="9")]
    pub time_in_force: i32,
    #[prost(enumeration="OrderType", tag="10")]
    pub order_type: i32,
    /// [Transact time](#transact-time)
    #[prost(uint64, tag="11")]
    pub transact_time: u64,
    #[prost(uint64, tag="12")]
    pub subaccount_id: u64,
    #[prost(bool, tag="13")]
    pub cancel_on_disconnect: bool,
}
/// Cancel-order-ack confirms a cancel request, or that an order has been
/// canceled as the result of a different user-initiated reason.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CancelOrderAck {
    #[prost(uint64, tag="1")]
    pub msg_seq_num: u64,
    #[prost(uint64, tag="2")]
    pub client_order_id: u64,
    /// If the Reason is `DISCONNECT`, `IOC`, `STP_RESTING`, or `STP_AGGRESSING`,
    /// this request ID will be `u64::MAX`. Otherwise, it will be the request ID of
    /// the initiated cancel action. For a mass cancel, each cancel order ack will
    /// have the MassCancel's request_id.
    #[prost(uint64, tag="3")]
    pub request_id: u64,
    /// [Transact time](#transact-time)
    #[prost(uint64, tag="4")]
    pub transact_time: u64,
    #[prost(uint64, tag="5")]
    pub subaccount_id: u64,
    #[prost(enumeration="cancel_order_ack::Reason", tag="6")]
    pub reason: i32,
    #[prost(uint64, tag="7")]
    pub market_id: u64,
    /// [Exchange order ID](#exchange-order-id)
    #[prost(uint64, tag="8")]
    pub exchange_order_id: u64,
}
/// Nested message and enum types in `CancelOrderAck`.
pub mod cancel_order_ack {
    #[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
    #[repr(i32)]
    pub enum Reason {
        Unclassified = 0,
        Disconnect = 1,
        /// This order was specified in a cancel request.
        Requested = 2,
        /// This was an IOC new-order that does not get fully filled.
        Ioc = 3,
        /// A resting order was STP canceled.
        StpResting = 4,
        /// An aggressing order was STP canceled.
        StpAggressing = 5,
        /// This order was covered by a mass-cancel request.
        MassCancel = 6,
        /// This order was canceled because asset position limits would be otherwise
        /// breached.
        PositionLimit = 7,
    }
    impl Reason {
        /// String value of the enum field names used in the ProtoBuf definition.
        ///
        /// The values are not transformed in any way and thus are considered stable
        /// (if the ProtoBuf definition does not change) and safe for programmatic use.
        pub fn as_str_name(&self) -> &'static str {
            match self {
                Reason::Unclassified => "UNCLASSIFIED",
                Reason::Disconnect => "DISCONNECT",
                Reason::Requested => "REQUESTED",
                Reason::Ioc => "IOC",
                Reason::StpResting => "STP_RESTING",
                Reason::StpAggressing => "STP_AGGRESSING",
                Reason::MassCancel => "MASS_CANCEL",
                Reason::PositionLimit => "POSITION_LIMIT",
            }
        }
        /// Creates an enum from field names used in the ProtoBuf definition.
        pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
            match value {
                "UNCLASSIFIED" => Some(Self::Unclassified),
                "DISCONNECT" => Some(Self::Disconnect),
                "REQUESTED" => Some(Self::Requested),
                "IOC" => Some(Self::Ioc),
                "STP_RESTING" => Some(Self::StpResting),
                "STP_AGGRESSING" => Some(Self::StpAggressing),
                "MASS_CANCEL" => Some(Self::MassCancel),
                "POSITION_LIMIT" => Some(Self::PositionLimit),
                _ => None,
            }
        }
    }
}
/// Modify-order-ack confirms a modify-order request. If the modify resulted in
/// an aggressing cancel-replace, the ack will be ordered before any fills for
/// this order.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ModifyOrderAck {
    #[prost(uint64, tag="1")]
    pub msg_seq_num: u64,
    #[prost(uint64, tag="2")]
    pub client_order_id: u64,
    /// The request ID specified in the modify request.
    #[prost(uint64, tag="3")]
    pub request_id: u64,
    /// [Transact time](#transact-time)
    #[prost(uint64, tag="4")]
    pub transact_time: u64,
    /// The quantity remaining on the book after applying the modify request.
    #[prost(uint64, tag="5")]
    pub remaining_quantity: u64,
    #[prost(uint64, tag="6")]
    pub subaccount_id: u64,
    #[prost(uint64, tag="7")]
    pub market_id: u64,
    #[prost(uint64, tag="8")]
    pub price: u64,
    /// The quantity submitted in the modify request.
    #[prost(uint64, tag="9")]
    pub quantity: u64,
    /// The cumulative filled quantity for this order.
    #[prost(uint64, tag="10")]
    pub cumulative_quantity: u64,
    /// [Exchange order ID](#exchange-order-id)
    #[prost(uint64, tag="11")]
    pub exchange_order_id: u64,
}
/// Mass-cancel-ack confirms a mass-cancel request. If `reason` is set, the mass
/// cancel was not applied and there are no affected orders. Individual
/// CancelOrderAck's will be sent for each order that was affected.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MassCancelAck {
    #[prost(uint64, tag="1")]
    pub msg_seq_num: u64,
    #[prost(uint64, tag="2")]
    pub subaccount_id: u64,
    /// The request ID specified in the mass-cancel request.
    #[prost(uint64, tag="3")]
    pub request_id: u64,
    /// [Transact time](#transact-time)
    #[prost(uint64, tag="4")]
    pub transact_time: u64,
    #[prost(enumeration="mass_cancel_ack::Reason", optional, tag="6")]
    pub reason: ::core::option::Option<i32>,
    /// The total number of orders that were canceled.
    #[prost(uint32, tag="7")]
    pub total_affected_orders: u32,
}
/// Nested message and enum types in `MassCancelAck`.
pub mod mass_cancel_ack {
    #[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
    #[repr(i32)]
    pub enum Reason {
        Unclassified = 0,
        InvalidMarketId = 1,
        InvalidSide = 2,
    }
    impl Reason {
        /// String value of the enum field names used in the ProtoBuf definition.
        ///
        /// The values are not transformed in any way and thus are considered stable
        /// (if the ProtoBuf definition does not change) and safe for programmatic use.
        pub fn as_str_name(&self) -> &'static str {
            match self {
                Reason::Unclassified => "UNCLASSIFIED",
                Reason::InvalidMarketId => "INVALID_MARKET_ID",
                Reason::InvalidSide => "INVALID_SIDE",
            }
        }
        /// Creates an enum from field names used in the ProtoBuf definition.
        pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
            match value {
                "UNCLASSIFIED" => Some(Self::Unclassified),
                "INVALID_MARKET_ID" => Some(Self::InvalidMarketId),
                "INVALID_SIDE" => Some(Self::InvalidSide),
                _ => None,
            }
        }
    }
}
/// New-order-reject indicates that a new-order request was not applied.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct NewOrderReject {
    #[prost(uint64, tag="1")]
    pub msg_seq_num: u64,
    /// The client order ID specified in the new-order request.
    #[prost(uint64, tag="2")]
    pub client_order_id: u64,
    /// The request ID specified in the new-order request.
    #[prost(uint64, tag="3")]
    pub request_id: u64,
    /// [Transact time](#transact-time)
    #[prost(uint64, tag="4")]
    pub transact_time: u64,
    #[prost(uint64, tag="5")]
    pub subaccount_id: u64,
    #[prost(enumeration="new_order_reject::Reason", tag="6")]
    pub reason: i32,
    #[prost(uint64, tag="7")]
    pub market_id: u64,
    #[prost(uint64, optional, tag="8")]
    pub price: ::core::option::Option<u64>,
    #[prost(uint64, tag="9")]
    pub quantity: u64,
    #[prost(enumeration="Side", tag="10")]
    pub side: i32,
    #[prost(enumeration="TimeInForce", tag="11")]
    pub time_in_force: i32,
    #[prost(enumeration="OrderType", tag="12")]
    pub order_type: i32,
}
/// Nested message and enum types in `NewOrderReject`.
pub mod new_order_reject {
    /// Reasons that are prefixed with `INVALID_` normally indicate that the
    /// corresponding field did not take a valid value.
    #[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
    #[repr(i32)]
    pub enum Reason {
        Unclassified = 0,
        /// Quantity was zero.
        InvalidQuantity = 1,
        /// The specified market ID does not exist.
        InvalidMarketId = 2,
        /// The specified client order ID was not unique among open orders for this
        /// subaccount.
        DuplicateOrderId = 3,
        InvalidSide = 4,
        InvalidTimeInForce = 5,
        InvalidOrderType = 6,
        InvalidPostOnly = 7,
        InvalidSelfTradePrevention = 8,
        /// Internal error: the matching engine could not find this subaccounts
        /// positions.
        UnknownTrader = 9,
        PriceWithMarketLimitOrder = 10,
        PostOnlyWithMarketOrder = 11,
        PostOnlyWithInvalidTif = 12,
        /// The sum of open orders and this new-order would exceed the subaccounts
        /// spot limits.
        ExceededSpotPosition = 13,
        /// There are no opposing resting orders to trade against.
        NoOpposingRestingOrder = 14,
        /// The post-only order would have crossed and traded.
        PostOnlyWouldTrade = 15,
        /// A FOK was not fully fillable against resting orders at the requested
        /// price and quantity.
        DidNotFullyFill = 16,
        /// An exchange accepts no now orders at this time
        OnlyOrderCancelAccepted = 17,
        /// A more specific error code for market-with-protection orders that could
        /// trade but have a protection price that is too tight.
        ProtectionPriceWouldNotTrade = 18,
    }
    impl Reason {
        /// String value of the enum field names used in the ProtoBuf definition.
        ///
        /// The values are not transformed in any way and thus are considered stable
        /// (if the ProtoBuf definition does not change) and safe for programmatic use.
        pub fn as_str_name(&self) -> &'static str {
            match self {
                Reason::Unclassified => "UNCLASSIFIED",
                Reason::InvalidQuantity => "INVALID_QUANTITY",
                Reason::InvalidMarketId => "INVALID_MARKET_ID",
                Reason::DuplicateOrderId => "DUPLICATE_ORDER_ID",
                Reason::InvalidSide => "INVALID_SIDE",
                Reason::InvalidTimeInForce => "INVALID_TIME_IN_FORCE",
                Reason::InvalidOrderType => "INVALID_ORDER_TYPE",
                Reason::InvalidPostOnly => "INVALID_POST_ONLY",
                Reason::InvalidSelfTradePrevention => "INVALID_SELF_TRADE_PREVENTION",
                Reason::UnknownTrader => "UNKNOWN_TRADER",
                Reason::PriceWithMarketLimitOrder => "PRICE_WITH_MARKET_LIMIT_ORDER",
                Reason::PostOnlyWithMarketOrder => "POST_ONLY_WITH_MARKET_ORDER",
                Reason::PostOnlyWithInvalidTif => "POST_ONLY_WITH_INVALID_TIF",
                Reason::ExceededSpotPosition => "EXCEEDED_SPOT_POSITION",
                Reason::NoOpposingRestingOrder => "NO_OPPOSING_RESTING_ORDER",
                Reason::PostOnlyWouldTrade => "POST_ONLY_WOULD_TRADE",
                Reason::DidNotFullyFill => "DID_NOT_FULLY_FILL",
                Reason::OnlyOrderCancelAccepted => "ONLY_ORDER_CANCEL_ACCEPTED",
                Reason::ProtectionPriceWouldNotTrade => "PROTECTION_PRICE_WOULD_NOT_TRADE",
            }
        }
        /// Creates an enum from field names used in the ProtoBuf definition.
        pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
            match value {
                "UNCLASSIFIED" => Some(Self::Unclassified),
                "INVALID_QUANTITY" => Some(Self::InvalidQuantity),
                "INVALID_MARKET_ID" => Some(Self::InvalidMarketId),
                "DUPLICATE_ORDER_ID" => Some(Self::DuplicateOrderId),
                "INVALID_SIDE" => Some(Self::InvalidSide),
                "INVALID_TIME_IN_FORCE" => Some(Self::InvalidTimeInForce),
                "INVALID_ORDER_TYPE" => Some(Self::InvalidOrderType),
                "INVALID_POST_ONLY" => Some(Self::InvalidPostOnly),
                "INVALID_SELF_TRADE_PREVENTION" => Some(Self::InvalidSelfTradePrevention),
                "UNKNOWN_TRADER" => Some(Self::UnknownTrader),
                "PRICE_WITH_MARKET_LIMIT_ORDER" => Some(Self::PriceWithMarketLimitOrder),
                "POST_ONLY_WITH_MARKET_ORDER" => Some(Self::PostOnlyWithMarketOrder),
                "POST_ONLY_WITH_INVALID_TIF" => Some(Self::PostOnlyWithInvalidTif),
                "EXCEEDED_SPOT_POSITION" => Some(Self::ExceededSpotPosition),
                "NO_OPPOSING_RESTING_ORDER" => Some(Self::NoOpposingRestingOrder),
                "POST_ONLY_WOULD_TRADE" => Some(Self::PostOnlyWouldTrade),
                "DID_NOT_FULLY_FILL" => Some(Self::DidNotFullyFill),
                "ONLY_ORDER_CANCEL_ACCEPTED" => Some(Self::OnlyOrderCancelAccepted),
                "PROTECTION_PRICE_WOULD_NOT_TRADE" => Some(Self::ProtectionPriceWouldNotTrade),
                _ => None,
            }
        }
    }
}
/// Cancel-order-reject indicates that a cancel-order request was not applied.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CancelOrderReject {
    #[prost(uint64, tag="1")]
    pub msg_seq_num: u64,
    /// The client order ID specified in the cancel-order request.
    #[prost(uint64, tag="2")]
    pub client_order_id: u64,
    /// The request ID specified in the cancel-order request.
    #[prost(uint64, tag="3")]
    pub request_id: u64,
    /// [Transact time](#transact-time)
    #[prost(uint64, tag="4")]
    pub transact_time: u64,
    #[prost(uint64, tag="5")]
    pub subaccount_id: u64,
    #[prost(enumeration="cancel_order_reject::Reason", tag="6")]
    pub reason: i32,
    #[prost(uint64, tag="7")]
    pub market_id: u64,
}
/// Nested message and enum types in `CancelOrderReject`.
pub mod cancel_order_reject {
    #[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
    #[repr(i32)]
    pub enum Reason {
        Unclassified = 0,
        /// The specified market ID does not exist.
        InvalidMarketId = 1,
        /// The specified client order ID does not exist for the corresponding market
        /// ID and subaccount ID.
        OrderNotFound = 2,
    }
    impl Reason {
        /// String value of the enum field names used in the ProtoBuf definition.
        ///
        /// The values are not transformed in any way and thus are considered stable
        /// (if the ProtoBuf definition does not change) and safe for programmatic use.
        pub fn as_str_name(&self) -> &'static str {
            match self {
                Reason::Unclassified => "UNCLASSIFIED",
                Reason::InvalidMarketId => "INVALID_MARKET_ID",
                Reason::OrderNotFound => "ORDER_NOT_FOUND",
            }
        }
        /// Creates an enum from field names used in the ProtoBuf definition.
        pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
            match value {
                "UNCLASSIFIED" => Some(Self::Unclassified),
                "INVALID_MARKET_ID" => Some(Self::InvalidMarketId),
                "ORDER_NOT_FOUND" => Some(Self::OrderNotFound),
                _ => None,
            }
        }
    }
}
/// Modify-order-reject indicates that a modify-order request was not applied.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ModifyOrderReject {
    #[prost(uint64, tag="1")]
    pub msg_seq_num: u64,
    /// The client order ID specified in the modify-order request.
    #[prost(uint64, tag="2")]
    pub client_order_id: u64,
    /// The request ID specified in the modify-order request.
    #[prost(uint64, tag="3")]
    pub request_id: u64,
    /// [Transact time](#transact-time)
    #[prost(uint64, tag="4")]
    pub transact_time: u64,
    #[prost(uint64, tag="5")]
    pub subaccount_id: u64,
    #[prost(enumeration="modify_order_reject::Reason", tag="6")]
    pub reason: i32,
    #[prost(uint64, tag="7")]
    pub market_id: u64,
}
/// Nested message and enum types in `ModifyOrderReject`.
pub mod modify_order_reject {
    /// Reasons that are prefixed with `INVALID_` normally indicate that the
    /// corresponding field did not take a valid value.
    #[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
    #[repr(i32)]
    pub enum Reason {
        Unclassified = 0,
        /// Quantity was zero.
        InvalidQuantity = 1,
        /// The specified market ID does not exist.
        InvalidMarketId = 2,
        /// The specified client order ID does not exist for the corresponding market
        /// ID and subaccount ID.
        OrderNotFound = 3,
        InvalidIfm = 4,
        InvalidPostOnly = 5,
        InvalidSelfTradePrevention = 6,
        /// Internal error: the matching engine could not find this subaccounts
        /// positions.
        UnknownTrader = 7,
        /// If the modify-order would cause a cancel-replace, the sum of open orders
        /// and this replacement order would exceed the subaccounts spot limits.
        ExceededSpotPosition = 8,
        /// If the modify-order would cause a cancel-replace, the post-only
        /// replacement would have crossed and traded.
        PostOnlyWouldTrade = 9,
        /// An exchange accepts no order modifications at this time
        OnlyOrderCancelAccepted = 17,
    }
    impl Reason {
        /// String value of the enum field names used in the ProtoBuf definition.
        ///
        /// The values are not transformed in any way and thus are considered stable
        /// (if the ProtoBuf definition does not change) and safe for programmatic use.
        pub fn as_str_name(&self) -> &'static str {
            match self {
                Reason::Unclassified => "UNCLASSIFIED",
                Reason::InvalidQuantity => "INVALID_QUANTITY",
                Reason::InvalidMarketId => "INVALID_MARKET_ID",
                Reason::OrderNotFound => "ORDER_NOT_FOUND",
                Reason::InvalidIfm => "INVALID_IFM",
                Reason::InvalidPostOnly => "INVALID_POST_ONLY",
                Reason::InvalidSelfTradePrevention => "INVALID_SELF_TRADE_PREVENTION",
                Reason::UnknownTrader => "UNKNOWN_TRADER",
                Reason::ExceededSpotPosition => "EXCEEDED_SPOT_POSITION",
                Reason::PostOnlyWouldTrade => "POST_ONLY_WOULD_TRADE",
                Reason::OnlyOrderCancelAccepted => "ONLY_ORDER_CANCEL_ACCEPTED",
            }
        }
        /// Creates an enum from field names used in the ProtoBuf definition.
        pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
            match value {
                "UNCLASSIFIED" => Some(Self::Unclassified),
                "INVALID_QUANTITY" => Some(Self::InvalidQuantity),
                "INVALID_MARKET_ID" => Some(Self::InvalidMarketId),
                "ORDER_NOT_FOUND" => Some(Self::OrderNotFound),
                "INVALID_IFM" => Some(Self::InvalidIfm),
                "INVALID_POST_ONLY" => Some(Self::InvalidPostOnly),
                "INVALID_SELF_TRADE_PREVENTION" => Some(Self::InvalidSelfTradePrevention),
                "UNKNOWN_TRADER" => Some(Self::UnknownTrader),
                "EXCEEDED_SPOT_POSITION" => Some(Self::ExceededSpotPosition),
                "POST_ONLY_WOULD_TRADE" => Some(Self::PostOnlyWouldTrade),
                "ONLY_ORDER_CANCEL_ACCEPTED" => Some(Self::OnlyOrderCancelAccepted),
                _ => None,
            }
        }
    }
}
/// A fill for an order.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Fill {
    #[prost(uint64, tag="1")]
    pub msg_seq_num: u64,
    #[prost(uint64, tag="2")]
    pub market_id: u64,
    /// The client order ID specified in the new-order request.
    #[prost(uint64, tag="3")]
    pub client_order_id: u64,
    /// [Exchange order ID](#exchange-order-id)
    #[prost(uint64, tag="4")]
    pub exchange_order_id: u64,
    /// The price that this trade occured at.
    #[prost(uint64, tag="5")]
    pub fill_price: u64,
    /// The quantity that was traded in this fill.
    #[prost(uint64, tag="6")]
    pub fill_quantity: u64,
    /// The remaining quantity for this order after the fill is applied.
    #[prost(uint64, tag="7")]
    pub leaves_quantity: u64,
    /// [Transact time](#transact-time)
    #[prost(uint64, tag="8")]
    pub transact_time: u64,
    #[prost(uint64, tag="9")]
    pub subaccount_id: u64,
    /// The cumulative filled quantity for this order after the fill is applied.
    #[prost(uint64, tag="10")]
    pub cumulative_quantity: u64,
    #[prost(enumeration="Side", tag="11")]
    pub side: i32,
    #[prost(bool, tag="12")]
    pub aggressor_indicator: bool,
    /// Indicates the fee charged on this trade.
    /// See \[Fees\](#fees) for details.
    #[prost(message, optional, tag="13")]
    pub fee_ratio: ::core::option::Option<FixedPointDecimal>,
}
/// The user's underlying asset position. These are sent asynchronously as
/// positions are updated and broadcast through internal position channels. They
/// can also be tracked by applying other OrderResponse messages individually.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AssetPosition {
    #[prost(uint64, tag="1")]
    pub subaccount_id: u64,
    #[prost(uint64, tag="2")]
    pub asset_id: u64,
    #[prost(message, optional, tag="3")]
    pub total: ::core::option::Option<RawUnits>,
    /// The available amount after open orders are subtracted.
    #[prost(message, optional, tag="4")]
    pub available: ::core::option::Option<RawUnits>,
}
/// Raw-units is a 256-bit number for the amount of an asset. The precision is
/// based on the underlying asset. For example, ETH is specified as if in
/// fixed-point 10^18, while BTC is specified as if in fixed-point 10^8.
///
/// The number is interpreted in 'little-endian' as `[word0, word1, word2,
/// word3]`.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RawUnits {
    #[prost(uint64, tag="1")]
    pub word0: u64,
    #[prost(uint64, tag="2")]
    pub word1: u64,
    #[prost(uint64, tag="3")]
    pub word2: u64,
    #[prost(uint64, tag="4")]
    pub word3: u64,
}
/// A bootstrap message sent after Credentials authentication.
/// Client resting and pending orders used to bootstrap state. Sent as the first
/// message(s) after initialization. Bootstrap is complete after a message tagged
/// `Done` is received and every message after that will be an `OrderResponse`.
/// Multiple messages may be received for `RestingOrders` and `AssetPositions`
/// and these should be concatenated.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Bootstrap {
    #[prost(oneof="bootstrap::Inner", tags="1, 2, 3")]
    pub inner: ::core::option::Option<bootstrap::Inner>,
}
/// Nested message and enum types in `Bootstrap`.
pub mod bootstrap {
    #[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Oneof)]
    pub enum Inner {
        #[prost(message, tag="1")]
        Done(super::Done),
        #[prost(message, tag="2")]
        Resting(super::RestingOrders),
        #[prost(message, tag="3")]
        Position(super::AssetPositions),
    }
}
/// A chunk of resting orders. Sent on bootstrap.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RestingOrders {
    #[prost(message, repeated, tag="1")]
    pub orders: ::prost::alloc::vec::Vec<RestingOrder>,
}
/// A chunk of asset positions. Sent on bootstrap.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AssetPositions {
    #[prost(message, repeated, tag="1")]
    pub positions: ::prost::alloc::vec::Vec<AssetPosition>,
}
/// An indication that bootstrap is complete.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Done {
    /// [Transact time](#transact-time)
    #[prost(uint64, tag="1")]
    pub latest_transact_time: u64,
    #[prost(bool, tag="2")]
    pub read_only: bool,
}
/// A resting order. Sent on bootstrap in `RestingOrders`.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RestingOrder {
    /// The client order ID specified in the new-order request.
    #[prost(uint64, tag="1")]
    pub client_order_id: u64,
    /// [Exchange order ID](#exchange-order-id)
    #[prost(uint64, tag="2")]
    pub exchange_order_id: u64,
    #[prost(uint64, tag="3")]
    pub market_id: u64,
    #[prost(uint64, tag="4")]
    pub price: u64,
    /// The quantity submitted in the latest quantity-modifying request. If the
    /// order has not been modified, then it is the quantity on the new-order-ack.
    /// If it has been modified, then it is the quantity of the latest
    /// modify-order-ack.
    #[prost(uint64, tag="5")]
    pub order_quantity: u64,
    #[prost(enumeration="Side", tag="6")]
    pub side: i32,
    #[prost(enumeration="TimeInForce", tag="7")]
    pub time_in_force: i32,
    #[prost(enumeration="OrderType", tag="8")]
    pub order_type: i32,
    /// The current remaining quantity on the book.
    #[prost(uint64, tag="9")]
    pub remaining_quantity: u64,
    /// [Transact time](#transact-time) of the NewOrderAck
    #[prost(uint64, tag="10")]
    pub rest_time: u64,
    #[prost(uint64, tag="11")]
    pub subaccount_id: u64,
    /// The cumulative filled quantity for this order.
    #[prost(uint64, tag="12")]
    pub cumulative_quantity: u64,
}
/// Side specifies whether the order is buying or selling the base asset. A trade
/// is matched when a buyer (BID) and a seller (ASK) agree on a price (cross).
/// The bid-ask spread is the gap between the highest bid price and lowest ask
/// price on the orderbook.
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum Side {
    /// A bid order buys the base asset with the quote asset.
    Bid = 0,
    /// An ask (or offer) order sells the base asset and gets the quote asset.
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
/// Time-in-force (TIF) specifies how long the order remains in effect.
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum TimeInForce {
    /// Immediate-or-cancel (IOC), also known as fill-and-kill (FAK), orders are
    /// immediately executed against resting orders. If the order cannot be fully
    /// filled, the remaining balance will be canceled, and an additional
    /// CancelOrderAck with the IOC reason will be sent.
    ImmediateOrCancel = 0,
    /// Good-for-session (GFS) orders are active until they are completely
    /// executed, canceled, or when the session expires.
    GoodForSession = 1,
    /// Fill-or-kill (FOK), also known as all-or-none (AON), orders must be filled
    /// immediately against resting orders or the entire order is canceled.
    FillOrKill = 2,
}
impl TimeInForce {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            TimeInForce::ImmediateOrCancel => "IMMEDIATE_OR_CANCEL",
            TimeInForce::GoodForSession => "GOOD_FOR_SESSION",
            TimeInForce::FillOrKill => "FILL_OR_KILL",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "IMMEDIATE_OR_CANCEL" => Some(Self::ImmediateOrCancel),
            "GOOD_FOR_SESSION" => Some(Self::GoodForSession),
            "FILL_OR_KILL" => Some(Self::FillOrKill),
            _ => None,
        }
    }
}
/// Order-type specifies how the order will be placed into the order book.
///
/// - Note that for LIMIT orders, there is a pre-flight check that there is
///    sufficient available balance to place this order at the price and quantity
///    specified. Otherwise, the order will be rejected with the
///    EXCEEDED_SPOT_POSITION reason.
/// - For MARKET_LIMIT and MARKET_WITH_PROTECTION orders, there is no such
///    pre-flight check and a submitted order will be partially filled up until
///    the subaccount's position limit. The remaining quantity will be canceled
///    with the POSITION_LIMIT reason.
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum OrderType {
    /// A limit order is accompanied with a price (inclusive) that specifies the
    /// upper limit to buy and the lower limit to sell. If the price is not
    /// immediately available and the TIF allows resting orders, the limit order
    /// will rest until filled or canceled.
    Limit = 0,
    /// A market limit order crosses the bid-ask spread and, if not fully filled,
    /// becomes a limit order at the best available market price.
    /// - If there is no opposing market, the order is rejected with the
    ///    NO_OPPOSING_RESTING_ORDER reason.
    /// - The price must be null.
    MarketLimit = 1,
    /// A market with protection order crosses the bid-ask spread and continues to
    /// cross until the order is fully filled or the protection price is reached.
    /// - The protection price is defined as:
    ///    - If the price is provided, this price is used as the protection price.
    ///    - If the price is null, the best market price widened by a
    ///      market-specific protection point count.
    /// - If the protection price would not cross the resting market, the order is
    ///    rejected with the NO_OPPOSING_RESTING_ORDER reason instead of resting at
    ///    that level.
    MarketWithProtection = 2,
}
impl OrderType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            OrderType::Limit => "LIMIT",
            OrderType::MarketLimit => "MARKET_LIMIT",
            OrderType::MarketWithProtection => "MARKET_WITH_PROTECTION",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "LIMIT" => Some(Self::Limit),
            "MARKET_LIMIT" => Some(Self::MarketLimit),
            "MARKET_WITH_PROTECTION" => Some(Self::MarketWithProtection),
            _ => None,
        }
    }
}
/// Self-trade-prevention (STP) allows market participants to prevent the matching
/// of orders for accounts with common ownership. Currently, STP only applies for
/// orders with the same subaccount_id. STP will only be applied when a match is
/// about to occur between the two orders. That is, if the aggressing order is
/// fully filled before reaching the resting order in FIFO order, no STP cancels
/// will happen.
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum SelfTradePrevention {
    /// Cancel-resting specifies that if a self-trade is about to occur, the
    /// resting order should be canceled instead and further order book processing
    /// should occur as normal.
    CancelResting = 0,
    /// Cancel-aggressing specifies that if a self-trade is about to occur, the
    /// aggressing order should be canceled instead and no further action should be
    /// taken.
    CancelAggressing = 1,
    /// Allow-self-trade disables STP functionality.
    AllowSelfTrade = 2,
}
impl SelfTradePrevention {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            SelfTradePrevention::CancelResting => "CANCEL_RESTING",
            SelfTradePrevention::CancelAggressing => "CANCEL_AGGRESSING",
            SelfTradePrevention::AllowSelfTrade => "ALLOW_SELF_TRADE",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "CANCEL_RESTING" => Some(Self::CancelResting),
            "CANCEL_AGGRESSING" => Some(Self::CancelAggressing),
            "ALLOW_SELF_TRADE" => Some(Self::AllowSelfTrade),
            _ => None,
        }
    }
}
/// Post-only specifies whether a new order is allowed to immediately execute.
/// Post-only cannot be enabled with market orders or with a TIF that does not
/// allow resting orders.
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum PostOnly {
    Disabled = 0,
    Enabled = 1,
}
impl PostOnly {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            PostOnly::Disabled => "DISABLED",
            PostOnly::Enabled => "ENABLED",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "DISABLED" => Some(Self::Disabled),
            "ENABLED" => Some(Self::Enabled),
            _ => None,
        }
    }
}
