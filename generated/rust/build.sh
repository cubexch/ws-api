#!/usr/bin/env bash

set -e

# switch to script directory
cd "$(dirname "${BASH_SOURCE[0]}")"

cargo build -q

echo 'Success!'
