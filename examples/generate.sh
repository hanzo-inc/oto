#!/usr/bin/env bash
# Generate Foley / sound effects with Oto — the smallest complete call.
#
#   HANZO_API_KEY=... ./examples/generate.sh "heavy leather boots walking across wet cobblestone"
set -euo pipefail

prompt=${1:?usage: generate.sh <prompt>}
: "${HANZO_API_KEY:?set HANZO_API_KEY (https://platform.hanzo.ai → API keys)}"

body=$(printf '{"model":"oto","prompt":%s}' \
  "$(printf '%s' "$prompt" | python3 -c 'import json,sys; print(json.dumps(sys.stdin.read()))')")

curl -sS https://api.hanzo.ai/v1/audio/foley \
  -H "Authorization: Bearer $HANZO_API_KEY" \
  -H "Content-Type: application/json" \
  -d "$body" \
  --output /tmp/oto.wav

file /tmp/oto.wav
