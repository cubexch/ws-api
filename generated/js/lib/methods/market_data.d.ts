import { Side, KlineInterval, MarketState, AggressingSide, RateUpdateSide, MdMessage, MarketByPrice, MarketByPrice_Level, MarketByPriceDiff, MarketByPriceDiff_DiffOp, MarketByPriceDiff_Diff, MarketByOrder, MarketByOrder_Order, MarketByOrderDiff, MarketByOrderDiff_DiffOp, MarketByOrderDiff_Diff, ImpliedMarketByPrice, ImpliedMarketByPrice_ImpliedLevels, ImpliedMarketByPrice_Level, MarketStatus, Trades, Trades_Trade, Summary, Kline, Heartbeat, MdMessages, AggMessage, TopOfBook, TopOfBooks, RateUpdate, RateUpdates, ClientMessage, Config } from '../market_data';
import * as _m0 from "protobufjs/minimal";
export declare function sideFromJSON(object: any): Side;
export declare function sideToJSON(object: Side): string;
export declare function klineIntervalFromJSON(object: any): KlineInterval;
export declare function klineIntervalToJSON(object: KlineInterval): string;
export declare function marketStateFromJSON(object: any): MarketState;
export declare function marketStateToJSON(object: MarketState): string;
export declare function aggressingSideFromJSON(object: any): AggressingSide;
export declare function aggressingSideToJSON(object: AggressingSide): string;
export declare function rateUpdateSideFromJSON(object: any): RateUpdateSide;
export declare function rateUpdateSideToJSON(object: RateUpdateSide): string;
export declare function marketByPriceDiff_DiffOpFromJSON(object: any): MarketByPriceDiff_DiffOp;
export declare function marketByPriceDiff_DiffOpToJSON(object: MarketByPriceDiff_DiffOp): string;
export declare function marketByOrderDiff_DiffOpFromJSON(object: any): MarketByOrderDiff_DiffOp;
export declare function marketByOrderDiff_DiffOpToJSON(object: MarketByOrderDiff_DiffOp): string;
export declare const MdMessageMethods: {
    encode(message: MdMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MdMessage;
    fromJSON(object: any): MdMessage;
    toJSON(message: MdMessage): unknown;
};
export declare const MarketByPriceMethods: {
    encode(message: MarketByPrice, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketByPrice;
    fromJSON(object: any): MarketByPrice;
    toJSON(message: MarketByPrice): unknown;
};
export declare const MarketByPrice_LevelMethods: {
    encode(message: MarketByPrice_Level, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketByPrice_Level;
    fromJSON(object: any): MarketByPrice_Level;
    toJSON(message: MarketByPrice_Level): unknown;
};
export declare const MarketByPriceDiffMethods: {
    encode(message: MarketByPriceDiff, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketByPriceDiff;
    fromJSON(object: any): MarketByPriceDiff;
    toJSON(message: MarketByPriceDiff): unknown;
};
export declare const MarketByPriceDiff_DiffMethods: {
    encode(message: MarketByPriceDiff_Diff, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketByPriceDiff_Diff;
    fromJSON(object: any): MarketByPriceDiff_Diff;
    toJSON(message: MarketByPriceDiff_Diff): unknown;
};
export declare const MarketByOrderMethods: {
    encode(message: MarketByOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketByOrder;
    fromJSON(object: any): MarketByOrder;
    toJSON(message: MarketByOrder): unknown;
};
export declare const MarketByOrder_OrderMethods: {
    encode(message: MarketByOrder_Order, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketByOrder_Order;
    fromJSON(object: any): MarketByOrder_Order;
    toJSON(message: MarketByOrder_Order): unknown;
};
export declare const MarketByOrderDiffMethods: {
    encode(message: MarketByOrderDiff, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketByOrderDiff;
    fromJSON(object: any): MarketByOrderDiff;
    toJSON(message: MarketByOrderDiff): unknown;
};
export declare const MarketByOrderDiff_DiffMethods: {
    encode(message: MarketByOrderDiff_Diff, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketByOrderDiff_Diff;
    fromJSON(object: any): MarketByOrderDiff_Diff;
    toJSON(message: MarketByOrderDiff_Diff): unknown;
};
export declare const ImpliedMarketByPriceMethods: {
    encode(message: ImpliedMarketByPrice, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImpliedMarketByPrice;
    fromJSON(object: any): ImpliedMarketByPrice;
    toJSON(message: ImpliedMarketByPrice): unknown;
};
export declare const ImpliedMarketByPrice_ImpliedLevelsMethods: {
    encode(message: ImpliedMarketByPrice_ImpliedLevels, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImpliedMarketByPrice_ImpliedLevels;
    fromJSON(object: any): ImpliedMarketByPrice_ImpliedLevels;
    toJSON(message: ImpliedMarketByPrice_ImpliedLevels): unknown;
};
export declare const ImpliedMarketByPrice_LevelMethods: {
    encode(message: ImpliedMarketByPrice_Level, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImpliedMarketByPrice_Level;
    fromJSON(object: any): ImpliedMarketByPrice_Level;
    toJSON(message: ImpliedMarketByPrice_Level): unknown;
};
export declare const MarketStatusMethods: {
    encode(message: MarketStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketStatus;
    fromJSON(object: any): MarketStatus;
    toJSON(message: MarketStatus): unknown;
};
export declare const TradesMethods: {
    encode(message: Trades, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Trades;
    fromJSON(object: any): Trades;
    toJSON(message: Trades): unknown;
};
export declare const Trades_TradeMethods: {
    encode(message: Trades_Trade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Trades_Trade;
    fromJSON(object: any): Trades_Trade;
    toJSON(message: Trades_Trade): unknown;
};
export declare const SummaryMethods: {
    encode(message: Summary, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Summary;
    fromJSON(object: any): Summary;
    toJSON(message: Summary): unknown;
};
export declare const KlineMethods: {
    encode(message: Kline, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Kline;
    fromJSON(object: any): Kline;
    toJSON(message: Kline): unknown;
};
export declare const HeartbeatMethods: {
    encode(message: Heartbeat, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Heartbeat;
    fromJSON(object: any): Heartbeat;
    toJSON(message: Heartbeat): unknown;
};
export declare const MdMessagesMethods: {
    encode(message: MdMessages, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MdMessages;
    fromJSON(object: any): MdMessages;
    toJSON(message: MdMessages): unknown;
};
export declare const AggMessageMethods: {
    encode(message: AggMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AggMessage;
    fromJSON(object: any): AggMessage;
    toJSON(message: AggMessage): unknown;
};
export declare const TopOfBookMethods: {
    encode(message: TopOfBook, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TopOfBook;
    fromJSON(object: any): TopOfBook;
    toJSON(message: TopOfBook): unknown;
};
export declare const TopOfBooksMethods: {
    encode(message: TopOfBooks, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TopOfBooks;
    fromJSON(object: any): TopOfBooks;
    toJSON(message: TopOfBooks): unknown;
};
export declare const RateUpdateMethods: {
    encode(message: RateUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RateUpdate;
    fromJSON(object: any): RateUpdate;
    toJSON(message: RateUpdate): unknown;
};
export declare const RateUpdatesMethods: {
    encode(message: RateUpdates, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RateUpdates;
    fromJSON(object: any): RateUpdates;
    toJSON(message: RateUpdates): unknown;
};
export declare const ClientMessageMethods: {
    encode(message: ClientMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClientMessage;
    fromJSON(object: any): ClientMessage;
    toJSON(message: ClientMessage): unknown;
};
export declare const ConfigMethods: {
    encode(message: Config, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Config;
    fromJSON(object: any): Config;
    toJSON(message: Config): unknown;
};
