#!/usr/bin/env bash
#
# Rebuilds doc files from proto files.
#
# Expects protoc-gen-doc with local changes.
#
#   https://github.com/pseudomuto/protoc-gen-doc.git
#

set -e

# switch to script directory
cd "$(dirname "${BASH_SOURCE[0]}")"

rm -rf ./src
mkdir src

if ! command -v protoc-gen-doc; then
  echo "Did not find protoc-gen-doc. Please update"
  exit 1
fi

PLUGIN="$(command -v protoc-gen-doc)"
SCHEMAS="../../schema"

echo 'Generating markdown for Trade API...'
protoc \
  --plugin=protoc-gen-doc="$PLUGIN" \
  --doc_out=./src \
  --doc_opt=markdown,trade.md \
  --proto_path="$SCHEMAS" "$SCHEMAS"/trade.proto

sed -i '' '1i\
---\
title: Trade API\
pageTitle: Cube - Trade API\
description: Trade crypto at microsecond speeds, so your market maker code never miss a tick.\
---' ./src/trade.md

ONCE=(
  # order request
  NewOrder
  CancelOrder
  ModifyOrder
  Heartbeat
  MassCancel
  # order response
  NewOrderAck
  CancelOrderAck
  ModifyOrderAck
  NewOrderReject
  CancelOrderReject
  ModifyOrderReject
  Fill
  AssetPosition
  RawUnits
  MassCancelAck
  # bootstrap
  Done
  RestingOrders
  RestingOrder
  AssetPositions
  # enums
  Side
  TimeInForce
  OrderType
  SelfTradePrevention
  PostOnly
  CancelOrderAck.Reason
  MassCancelAck.Reason
  NewOrderReject.Reason
  CancelOrderReject.Reason
  ModifyOrderReject.Reason
)

for STRUCT in "${ONCE[@]}"; do
  sed -i '' "s/^\\(#*\\) $STRUCT\$/\\1# $STRUCT/" ./src/trade.md
done

echo 'Generating markdown for Market Data API...'
protoc \
  --plugin=protoc-gen-doc="$PLUGIN" \
  --doc_out=./src \
  --doc_opt=markdown,market_data.md \
  --proto_path="$SCHEMAS" "$SCHEMAS"/market_data.proto

sed -i '' '1i\
---\
title: Market Data API\
pageTitle: Cube - Market Data API\
description: Trade crypto at microsecond speeds, so your market maker code never miss a tick.\
---' ./src/market_data.md

ONCE=(
  # md message
  MarketByPrice
  MarketByPrice.Level
  MarketByPriceDiff
  MarketByPriceDiff.Diff
  MarketByOrder
  MarketByOrder.Order
  MarketByOrderDiff
  MarketByOrderDiff.Diff
  Trades
  Trades.Trade
  Summary
  Kline
  Heartbeat
  MdMessages
  # agg message
  TopOfBook
  TopOfBooks
  # client message
  Config
  # enums
  Side
  KlineInterval
  MarketByPriceDiff.DiffOp
  MarketByOrderDiff.DiffOp
)

for STRUCT in "${ONCE[@]}"; do
  sed -i '' "s/^\\(#*\\) $STRUCT\$/\\1# $STRUCT/" ./src/market_data.md
done

echo 'Success!'
