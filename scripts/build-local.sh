#!/bin/zsh
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
export PATH="$ROOT_DIR/.tools/node-v24.14.1-darwin-arm64/bin:$PATH"

cd "$ROOT_DIR"
npm run build
