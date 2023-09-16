#!/usr/bin/env bash

set -e

# switch to script directory
cd "$(dirname "${BASH_SOURCE[0]}")"

echo 'Building Rust...'
./rust/build.sh

echo 'Building TypeScript...'
./js/build.sh

echo 'Building Markdown...'
./md/build.sh
