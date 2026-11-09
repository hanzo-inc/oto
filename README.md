<p align="center"><b>oto (音)</b><br><i>Hanzo's Foley & sound effects model</i></p>

# Oto

Oto (`oto`, `oto-1`) is Hanzo's Foley and sound effects generation model, served from Hanzo's inference fabric at `api.hanzo.ai` under the canonical id **`oto`** (open foundation: **`zen-foley`** / [`zenlm/zen-foley`](https://github.com/zenlm/zen-foley)). It synthesizes timeline-synchronized Foley, physical impact transients, acoustic room impulse environments, and layered multi-stem ambience.

```bash
curl https://api.hanzo.ai/v1/audio/foley \
  -H "Authorization: Bearer $HANZO_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"oto","prompt":"heavy leather boots walking across wet cobblestone in a narrow stone alley"}' \
  --output foley.wav
```

## Capabilities

| | |
|---|---|
| Modes | text → Foley / SFX, video + text → synchronized Foley (`/v1/audio/foley`) |
| Model IDs | `oto`, `oto-1` (open foundation: `zen-foley`) |
| Controls | Prompt, duration, acoustic space / impulse response, stem isolation |

- **Timeline-synchronized Foley** — aligns transient sound impacts, footsteps, collisions, and cloth rustle to video frames down to millisecond precision.
- **Acoustic room impulse modeling** — matches early reflections, reverberation decay, and high-frequency absorption to physical scene geometry.
- **Layered multi-stem ambience** — generates isolated multichannel bed tracks (wind, urban traffic, foliage movement, room tone).
- **Dynamic mechanical & impact sound** — synthesizes complex physical audio (vehicle engine load, glass stress fractures, metallic resonance).

## Creative AI Lineup

Each creative modality in Hanzo has its own dedicated model and repository:

| Model | Modality | Endpoint | Repository | Open Foundation |
|---|---|---|---|---|
| **Iro** (`iro`) | Image generation & editing | `POST /v1/images/generations` | [`hanzo-inc/iro`](https://github.com/hanzo-inc/iro) | `zen3-image` (`zenlm/zen-artist`) |
| **Koma** (`koma`) | Video generation & motion | `POST /v1/videos/generations` | [`hanzo-inc/koma`](https://github.com/hanzo-inc/koma) | `zen-director` (`zenlm/zen-director`) |
| **Koe** (`koe`) | Voice & dialogue synthesis | `POST /v1/audio/voice` | [`hanzo-inc/koe`](https://github.com/hanzo-inc/koe) | `zen3-tts` (`zenlm/zen-dub`) |
| **Oto** (`oto`) | Foley & sound effects | `POST /v1/audio/foley` | [`hanzo-inc/oto`](https://github.com/hanzo-inc/oto) | `zen-foley` (`zenlm/zen-foley`) |
| **Uta** (`uta`) | Music & score generation | `POST /v1/audio/music` | [`hanzo-inc/uta`](https://github.com/hanzo-inc/uta) | `zen-musician` (`zenlm/zen-musician`) |
| **Mori** (`mori`) | 3D assets, meshes & scenes | `POST /v1/videos/generations` | [`hanzo-inc/mori`](https://github.com/hanzo-inc/mori) | `zen-3d` (`zenlm/zen-3d`) |

## Surfaces

Oto is served by [`hanzo-inc/zen`](https://github.com/hanzo-inc/zen) and declared in `hanzo/universe` (`charts/app/files/zen/catalog.yaml`), with first-party Studio integration in [`hanzo-inc/studio`](https://github.com/hanzo-inc/studio).

- Product page: <https://hanzo.ai/oto>
- API and docs: <https://api.hanzo.ai/v1>, <https://docs.hanzo.ai>
- Studio & Dashboard: <https://hanzo.ai/studio>, <https://platform.hanzo.ai>
- Agent notes for this repo: [LLM.md](./LLM.md)

## License

The contents of this repository are licensed under Apache-2.0. The proprietary `oto-1` weights are served through the Hanzo API under the [Hanzo Terms](https://hanzo.ai/terms); the open foundation `zen-foley` is available under Apache-2.0 at [`huggingface.co/zenlm/zen-foley`](https://huggingface.co/zenlm/zen-foley).
