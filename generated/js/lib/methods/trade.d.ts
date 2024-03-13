import { Side, TimeInForce, OrderType, SelfTradePrevention, PostOnly, Credentials, OrderRequest, NewOrder, CancelOrder, ModifyOrder, MassCancel, Heartbeat, OrderResponse, NewOrderAck, CancelOrderAck, CancelOrderAck_Reason, ModifyOrderAck, MassCancelAck, MassCancelAck_Reason, NewOrderReject, NewOrderReject_Reason, CancelOrderReject, CancelOrderReject_Reason, ModifyOrderReject, ModifyOrderReject_Reason, Fill, FixedPointDecimal, AssetPosition, RawUnits, Bootstrap, RestingOrders, AssetPositions, Done, RestingOrder } from '../trade';
import * as _m0 from "protobufjs/minimal";
export declare function sideFromJSON(object: any): Side;
export declare function sideToJSON(object: Side): string;
export declare function timeInForceFromJSON(object: any): TimeInForce;
export declare function timeInForceToJSON(object: TimeInForce): string;
export declare function orderTypeFromJSON(object: any): OrderType;
export declare function orderTypeToJSON(object: OrderType): string;
export declare function selfTradePreventionFromJSON(object: any): SelfTradePrevention;
export declare function selfTradePreventionToJSON(object: SelfTradePrevention): string;
export declare function postOnlyFromJSON(object: any): PostOnly;
export declare function postOnlyToJSON(object: PostOnly): string;
export declare function cancelOrderAck_ReasonFromJSON(object: any): CancelOrderAck_Reason;
export declare function cancelOrderAck_ReasonToJSON(object: CancelOrderAck_Reason): string;
export declare function massCancelAck_ReasonFromJSON(object: any): MassCancelAck_Reason;
export declare function massCancelAck_ReasonToJSON(object: MassCancelAck_Reason): string;
export declare function newOrderReject_ReasonFromJSON(object: any): NewOrderReject_Reason;
export declare function newOrderReject_ReasonToJSON(object: NewOrderReject_Reason): string;
export declare function cancelOrderReject_ReasonFromJSON(object: any): CancelOrderReject_Reason;
export declare function cancelOrderReject_ReasonToJSON(object: CancelOrderReject_Reason): string;
export declare function modifyOrderReject_ReasonFromJSON(object: any): ModifyOrderReject_Reason;
export declare function modifyOrderReject_ReasonToJSON(object: ModifyOrderReject_Reason): string;
export declare const CredentialsMethods: {
    encode(message: Credentials, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Credentials;
    fromJSON(object: any): Credentials;
    toJSON(message: Credentials): unknown;
};
export declare const OrderRequestMethods: {
    encode(message: OrderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderRequest;
    fromJSON(object: any): OrderRequest;
    toJSON(message: OrderRequest): unknown;
};
export declare const NewOrderMethods: {
    encode(message: NewOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NewOrder;
    fromJSON(object: any): NewOrder;
    toJSON(message: NewOrder): unknown;
};
export declare const CancelOrderMethods: {
    encode(message: CancelOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CancelOrder;
    fromJSON(object: any): CancelOrder;
    toJSON(message: CancelOrder): unknown;
};
export declare const ModifyOrderMethods: {
    encode(message: ModifyOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModifyOrder;
    fromJSON(object: any): ModifyOrder;
    toJSON(message: ModifyOrder): unknown;
};
export declare const MassCancelMethods: {
    encode(message: MassCancel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MassCancel;
    fromJSON(object: any): MassCancel;
    toJSON(message: MassCancel): unknown;
};
export declare const HeartbeatMethods: {
    encode(message: Heartbeat, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Heartbeat;
    fromJSON(object: any): Heartbeat;
    toJSON(message: Heartbeat): unknown;
};
export declare const OrderResponseMethods: {
    encode(message: OrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderResponse;
    fromJSON(object: any): OrderResponse;
    toJSON(message: OrderResponse): unknown;
};
export declare const NewOrderAckMethods: {
    encode(message: NewOrderAck, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NewOrderAck;
    fromJSON(object: any): NewOrderAck;
    toJSON(message: NewOrderAck): unknown;
};
export declare const CancelOrderAckMethods: {
    encode(message: CancelOrderAck, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CancelOrderAck;
    fromJSON(object: any): CancelOrderAck;
    toJSON(message: CancelOrderAck): unknown;
};
export declare const ModifyOrderAckMethods: {
    encode(message: ModifyOrderAck, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModifyOrderAck;
    fromJSON(object: any): ModifyOrderAck;
    toJSON(message: ModifyOrderAck): unknown;
};
export declare const MassCancelAckMethods: {
    encode(message: MassCancelAck, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MassCancelAck;
    fromJSON(object: any): MassCancelAck;
    toJSON(message: MassCancelAck): unknown;
};
export declare const NewOrderRejectMethods: {
    encode(message: NewOrderReject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NewOrderReject;
    fromJSON(object: any): NewOrderReject;
    toJSON(message: NewOrderReject): unknown;
};
export declare const CancelOrderRejectMethods: {
    encode(message: CancelOrderReject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CancelOrderReject;
    fromJSON(object: any): CancelOrderReject;
    toJSON(message: CancelOrderReject): unknown;
};
export declare const ModifyOrderRejectMethods: {
    encode(message: ModifyOrderReject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModifyOrderReject;
    fromJSON(object: any): ModifyOrderReject;
    toJSON(message: ModifyOrderReject): unknown;
};
export declare const FillMethods: {
    encode(message: Fill, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Fill;
    fromJSON(object: any): Fill;
    toJSON(message: Fill): unknown;
};
export declare const FixedPointDecimalMethods: {
    encode(message: FixedPointDecimal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FixedPointDecimal;
    fromJSON(object: any): FixedPointDecimal;
    toJSON(message: FixedPointDecimal): unknown;
};
export declare const AssetPositionMethods: {
    encode(message: AssetPosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetPosition;
    fromJSON(object: any): AssetPosition;
    toJSON(message: AssetPosition): unknown;
};
export declare const RawUnitsMethods: {
    encode(message: RawUnits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RawUnits;
    fromJSON(object: any): RawUnits;
    toJSON(message: RawUnits): unknown;
};
export declare const BootstrapMethods: {
    encode(message: Bootstrap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Bootstrap;
    fromJSON(object: any): Bootstrap;
    toJSON(message: Bootstrap): unknown;
};
export declare const RestingOrdersMethods: {
    encode(message: RestingOrders, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RestingOrders;
    fromJSON(object: any): RestingOrders;
    toJSON(message: RestingOrders): unknown;
};
export declare const AssetPositionsMethods: {
    encode(message: AssetPositions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetPositions;
    fromJSON(object: any): AssetPositions;
    toJSON(message: AssetPositions): unknown;
};
export declare const DoneMethods: {
    encode(message: Done, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Done;
    fromJSON(object: any): Done;
    toJSON(message: Done): unknown;
};
export declare const RestingOrderMethods: {
    encode(message: RestingOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RestingOrder;
    fromJSON(object: any): RestingOrder;
    toJSON(message: RestingOrder): unknown;
};
