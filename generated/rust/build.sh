#!/usr/bin/env bash

set -e

# switch to script directory
cd "$(dirname "${BASH_SOURCE[0]}")"

if ! command -v protoc; then
  echo "Did not find protoc. Please update"
  exit 1
fi

cargo build -q

echo 'Success!'
