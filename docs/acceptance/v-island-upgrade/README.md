# V-Island upgrade evidence

Latest update: **not visually or acoustically accepted; original-quality performance below target**. Full typecheck, 36 logic tests and production build passed. `ecology/checks.json`, five-view `browser/smoke.json` and `weather/checks.json` now report no page/shader errors. Eight audio recordings loaded and contexts ran; this does not verify human listening. Eleven rigged models were exported and rendered for review. Latest measured original-quality run was about 16.29 FPS, P95 90.5 ms (Intel, 1920×1200), before final small ecology/audio additions. See [current detailed development record](../../scene-ecology-upgrade.md). Below is the retained earlier attempt, superseded by these reruns.

See [implementation and actual checks](../../scene-v-island-upgrade.md).

- `browser/smoke.json`: latest successful **pre-weather** single creek view, WebGPU drawing with no shader/page errors. This does not cover later source changes.
- `browser/creek.png`: actual browser screenshot from that single-view check, interface hidden, 1600×900. It is not a generated reference image.
- Other four PNGs: earlier draft views captured while animal batching errors were present. They are retained as imperfect intermediate evidence, not final delivery images.
- CPU checks after weather: `node scripts/weather-logic-check.cjs`, six groups passed; finite geometry/state checks only. Actual result: `weather-cpu.json`.
- Full-project typecheck later failed after an external A update: `src/attention/test-page.ts:187`, missing `Mapping.coverage`. The scene task does not modify that A file. `scene-typecheck.cjs` checks only the scene/game reachable graph.
- Final browser/weather/audio/performance: **not run**. Automatic approval review could not complete because of a usage limit. No FPS, visual or audio pass is claimed.

Do not reuse old scene performance measurements for this renderer or count simulated/scripted mouse input as camera acceptance.
