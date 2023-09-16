#!/usr/bin/env bash

set -e

# switch to script directory
cd "$(dirname "${BASH_SOURCE[0]}")"

# intall deps
yarn --silent
mkdir -p src/methods

SCHEMAS="../../schema"

function cleanupMethods () {
  # grab the lines that are not present in the types file
  diff "$1" "$2" | grep '^< ' | sed 's/^< //' > ./cleanup-methods.tmp
  rm "$1" && touch "$1"

  # import all the types
  echo 'import {' >> "$1"
  grep -E '^export (enum|interface)' "$2" | sed -E 's/^export (enum|interface) (.*) {/  \2,/' >> "$1"
  echo "} from '../$3';" >> "$1"

  # relabel all the const exports so that we don't run into declaration merging
  # conflicts...
  # https://www.typescriptlang.org/docs/handbook/declaration-merging.html
  #
  # the second `sed` tries to find calls on objects in this file only... (so not
  # e.g `_m0.Reader`)
  cat ./cleanup-methods.tmp \
    | sed -E 's/^export const (.*) = {$/export const \1Methods = {/' \
    | sed -E 's/([^.])([A-Z][A-Za-z_]+)\.(create|encode|decode|fromJSON|toJSON)/\1\2Methods.\3/g' \
    >> "$1"
  rm ./cleanup-methods.tmp
}

echo 'Generating js for Market Data API...'
protoc \
  --plugin=./node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_opt=forceLong=bigint \
  --ts_proto_opt=unrecognizedEnum=false \
  --ts_proto_opt=onlyTypes=true \
  --ts_proto_out=./src \
  --proto_path="$SCHEMAS" "$SCHEMAS"/market_data.proto
protoc \
  --plugin=./node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_opt=forceLong=bigint \
  --ts_proto_opt=unrecognizedEnum=false \
  --ts_proto_opt=outputPartialMethods=false \
  --ts_proto_out=./src/methods \
  --proto_path="$SCHEMAS" "$SCHEMAS"/market_data.proto

cleanupMethods ./src/methods/market_data.ts ./src/market_data.ts market_data

echo 'Generating js for Trade API...'
protoc \
  --plugin=./node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_opt=forceLong=bigint \
  --ts_proto_opt=unrecognizedEnum=false \
  --ts_proto_opt=onlyTypes=true \
  --ts_proto_out=./src \
  --proto_path="$SCHEMAS" "$SCHEMAS"/trade.proto
protoc \
  --plugin=./node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_opt=forceLong=bigint \
  --ts_proto_opt=unrecognizedEnum=false \
  --ts_proto_opt=outputPartialMethods=false \
  --ts_proto_out=./src/methods \
  --proto_path="$SCHEMAS" "$SCHEMAS"/trade.proto

cleanupMethods ./src/methods/trade.ts ./src/trade.ts trade

echo 'Generating js for codes...'
protoc \
  --plugin=./node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_opt=forceLong=bigint \
  --ts_proto_opt=unrecognizedEnum=false \
  --ts_proto_opt=onlyTypes=true \
  --ts_proto_out=./src \
  --proto_path="$SCHEMAS" "$SCHEMAS"/codes.proto
protoc \
  --plugin=./node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_opt=forceLong=bigint \
  --ts_proto_opt=unrecognizedEnum=false \
  --ts_proto_opt=outputPartialMethods=false \
  --ts_proto_out=./src/methods \
  --proto_path="$SCHEMAS" "$SCHEMAS"/codes.proto

cleanupMethods ./src/methods/codes.ts ./src/codes.ts codes
