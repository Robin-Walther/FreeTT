#!/bin/bash
# FreeTT starter for macOS/Linux
# Clears ELECTRON_RUN_AS_NODE so Electron opens GUI windows instead of running as Node
unset ELECTRON_RUN_AS_NODE
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
exec "$SCRIPT_DIR/node_modules/.bin/electron" "$SCRIPT_DIR"
