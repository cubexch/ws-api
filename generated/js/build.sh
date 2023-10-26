#!/usr/bin/env bash

set -e

# switch to script directory
cd "$(dirname "${BASH_SOURCE[0]}")"

# intall deps
yarn --silent
mkdir -p src/methods

SCHEMAS="../../schema"

function cleanupMethods () {
  # Separate files for easy debugging
  BUILD_FILE="build.ts"
  CLEANED_FILE="cleaned.ts"

  # import all the types
  echo 'import {' > "$BUILD_FILE"
  grep -E '^export (enum|interface)' "$2" | sed -E 's/^export (enum|interface) (.*) {/  \2,/' >> "$BUILD_FILE"
  echo "} from '../$3';" >> "$BUILD_FILE"

  # grab the lines that are not present in the types file
  git diff --no-index "$1" "$2" | grep -E '^-' | grep -vE '^---' | sed 's/^-//' >> "$BUILD_FILE"

  # relabel all the const exports so that we don't run into declaration merging
  # conflicts...
  # https://www.typescriptlang.org/docs/handbook/declaration-merging.html
  #
  # the second `sed` tries to find calls on objects in this file only... (so not
  # e.g `_m0.Reader`)
  cat "$BUILD_FILE" \
    | sed -E 's/^export const (.*) = {$/export const \1Methods = {/' \
    | sed -E 's/([^.])([A-Z][A-Za-z_]+)\.(create|encode|decode|fromJSON|toJSON)/\1\2Methods.\3/g' \
    > "$CLEANED_FILE"

  # Replace originally generated methods file with doctored version
  rm "$BUILD_FILE"
  mv "$CLEANED_FILE" "$1"
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
