#!/usr/bin/env bash
#
# Uses `pyi_out` for typing information. Alternatively, one could install
# mypy(?) in a virtual environment...
#

set -e

# switch to script directory
cd "$(dirname "${BASH_SOURCE[0]}")"

mkdir -p src

SCHEMAS="../../schema"

protoc \
  --python_out=./src \
  --pyi_out=./src \
  --proto_path="$SCHEMAS" "$SCHEMAS"/market_data.proto

protoc \
  --python_out=./src \
  --pyi_out=./src \
  --proto_path="$SCHEMAS" "$SCHEMAS"/trade.proto
