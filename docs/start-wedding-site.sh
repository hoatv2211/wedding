#!/bin/bash

# Kill any existing server
pkill -f "npx serve" || true

# Start the server
npx serve -s . -l 8080

