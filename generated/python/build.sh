#!/usr/bin/env bash
#
# Uses `pyi_out` for typing information. Alternatively, one could install
# mypy(?) in a virtual environment...
#

set -e

# switch to script directory
cd "$(dirname "${BASH_SOURCE[0]}")"

mkdir -p cube_ws_api

SCHEMAS="../../schema"

protoc \
  --python_out=./cube_ws_api \
  --pyi_out=./cube_ws_api \
  --proto_path="$SCHEMAS" "$SCHEMAS"/market_data.proto

protoc \
  --python_out=./cube_ws_api \
  --pyi_out=./cube_ws_api \
  --proto_path="$SCHEMAS" "$SCHEMAS"/trade.proto
