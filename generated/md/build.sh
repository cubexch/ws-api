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
# WebSocket: Trade API' ./src/trade.md

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
  FixedPointDecimal
  AssetPosition
  RawUnits
  MassCancelAck
  # bootstrap
  Done
  RestingOrders
  RestingOrder
  AssetPositions
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
# WebSocket: Market Data API' ./src/market_data.md

ONCE=(
  # md messages
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
  RateUpdate
  RateUpdates
  # client message
  Config
)

for STRUCT in "${ONCE[@]}"; do
  sed -i '' "s/^\\(#*\\) $STRUCT\$/\\1# $STRUCT/" ./src/market_data.md
done

echo 'Success!'
