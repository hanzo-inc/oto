# Oto — agent notes

Oto (`oto`, `oto-1`) is Hanzo's Foley and sound effects generation SKU. This repo is its **model card, API contract, and deployment spec**; inference serving runs in [`hanzo-inc/zen`](https://github.com/hanzo-inc/zen). Read this before changing anything that serves `oto`.

> **Separation of audio models**: Voice & dialogue is **Koe** ([`hanzo-inc/koe`](https://github.com/hanzo-inc/koe), `/v1/audio/voice`), Foley & sound effects is **Oto** ([`hanzo-inc/oto`](https://github.com/hanzo-inc/oto), `/v1/audio/foley`), and Music & score generation is **Uta** ([`hanzo-inc/uta`](https://github.com/hanzo-inc/uta), `/v1/audio/music`). Never conflate the three.

## Where Oto lives across the stack

| Layer | Repo / file | What it owns |
|---|---|---|
| The SKU, its price, its rungs | `hanzo/universe` → `charts/app/files/zen/catalog.yaml` | the `oto` entry (`mode: audio`, `zen-foley: *oto`, alias `oto-1: oto`) |
| The serving plane | [`hanzo-inc/zen`](https://github.com/hanzo-inc/zen) → `media.go` | `handleAudio` → `/v1/audio/foley` → `mediaProxy` |
| Cloud gateway & Studio | `hanzo-inc/cloud` → `apps/ai/media_rpc.go`, `apps/studio/exec.go` | `/v1/audio/foley` at `api.hanzo.ai` |
| 1-click K8s Stack | [`hanzo-inc/platform`](https://github.com/hanzo-inc/platform) → `src/lib/deploy/stacks.ts` | `oto` stack template (`ghcr.io/hanzoai/oto:latest`) |
| Product page | [`hanzo-inc/app`](https://github.com/hanzo-inc/app) → `lib/creative-models.ts` | `/oto` (`oto-1`, open foundation `zen-foley` / `zenlm/zen-foley`) |

## Verifying a deploy

```bash
# 1. Verify oto is in the live model catalog
curl -s https://api.hanzo.ai/v1/models | jq '.data[] | select(.id=="oto")'

# 2. Generate Foley audio with oto
curl -s https://api.hanzo.ai/v1/audio/foley \
  -H "Authorization: Bearer $HANZO_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"oto","prompt":"heavy leather boots walking across wet cobblestone"}' \
  --output /tmp/oto.wav
```
