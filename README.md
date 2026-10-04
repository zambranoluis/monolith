# Monolith — Work, in context.

Monolith’s **Work Index** identity and browsable brand showcase. This is a local static HTML/CSS/JavaScript delivery with production vector artwork, transparent PNG exports, self-hosted fonts, downloadable bundles, and clearly labelled concept applications. It implements the user-supplied brand plan; it does not implement the live workspace or OpenJM integration.

## Preview

Use Node.js 22 or later. No service credentials or environment files are required.

```powershell
npm ci
npm run dev
```

Open **http://127.0.0.1:3210**. The server binds to localhost and exposes only the static showcase. It reports an occupied port and does not replace an existing process. Port 3200 was already occupied and was left alone. To choose a different port:

```powershell
npm run dev -- --port 3211
```

There is no build step or runtime package dependency. The committed assets are ready to preview. Keep the files together when copying this delivery; a local HTTP server provides reliable downloads and font loading.

## Structure and ownership

| Location | Owner / purpose |
| --- | --- |
| [index.html](index.html) | Six linked chapters and essential content, readable without JavaScript |
| [styles/tokens.css](styles/tokens.css) | Canonical CSS design primitives |
| [styles/showcase.css](styles/showcase.css) | Layout, states, typography, responsiveness, accessibility and motion |
| [scripts/showcase.js](scripts/showcase.js) | Deterministic source responses, theme example, chapter indication |
| [brand guide](docs/brand-guide.md) | Positioning, naming, story, voice, logo rules, applications and ownership |
| [asset provenance](assets/PROVENANCE.json) | Artwork/export origins; PNGs also embed their origin |
| [font sources](assets/fonts/SOURCES.json) | Original font URLs; upstream licences live beside the files |
| [surface index](.impeccable/surfaces.md) | Impeccable showcase brief |
| [finish review](.impeccable/review/finish-review.md) | Documented fallback design review and disposition |
| [finish verdict](.impeccable/review/finish-verdict.md) | Both material fixes scored resolved; ship at that fix-list scope |
| [verification](docs/verification.md) | Actual checks, evidence locations and remaining limits |

`assets/logo/` contains three variants of symbol, wordmark, plain lockup and endorsed lockup, in editable outlined SVG and transparent PNG. `assets/icons/` contains favicon SVG/ICO, app PNGs and manifest. `assets/applications/` contains printable SVG poster/card concepts. `assets/downloads/` contains four ZIPs, a brand guide and JSON tokens.

Three generated reference images were reviewed before production artwork or showcase code. They remain in `assets/concepts/` with exact prompt sidecars: [identity overview prompt](assets/concepts/identity-overview.prompt.json), [logo construction prompt](assets/concepts/logo-construction.prompt.json), [product applications prompt](assets/concepts/product-applications.prompt.json). Generation used the built-in `image_gen.imagegen` tool with Brandkit. These are labelled exploratory references; production art uses clean geometry and licensed font outlines, not image crops.

Brand assets were authored for Monolith/CrimsonTide. Fonts retain the authors’ SIL Open Font License 1.1 terms. Legal ownership confirmation, trademark clearance and physical print proof are not established by local artwork creation. No edits were made to the sibling projects or historical reference documents.

## Verification commands

Keep the preview running in a separate terminal for browser checks.

```powershell
npm run check
npx playwright install chromium firefox webkit
npm test
npm run test:zoom
npm audit
git diff --check
```

`npm run check` exercises local resources, anchors, documentation links, outlined SVGs, PNG transparency, ICO structure, font files, JSON and guide/token consistency. `npm test` executes 40 browser checks across Chromium, Firefox and WebKit: 1440 px desktop, 768 px tablet, 390 px mobile, 320 px compact, light/dark axe checks, all source-selection states and citations, downloads, keyboard focus, reduced motion, and content without JavaScript. The named tests and discovery loop live in [verify-browser.mjs](scripts/verify-browser.mjs).

`npm run test:zoom` uses a local test extension in an isolated Chromium profile to set **actual browser zoom to 200%**, verifies layout reflow from 1440 to 720 CSS px, then checks accessibility and interactions. It never installs into the user’s browser or modifies a user profile. It uses the [Playwright extension workflow](https://playwright.dev/docs/chrome-extensions) and [Chrome tabs zoom API](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-setZoom). The full-page evidence stitches native viewport captures at measured scroll offsets without rescaling; original tiles are retained. The normal full-page clip produced invalid truncated/duplicated output at true zoom and was replaced for evidence capture.

Browser outputs stay under ignored `playwright/runs/<timestamp>-<pid>/`; each run contains `report.json`, per-viewport screenshots and axe results. `playwright/last-run.txt` points to the latest completed standard run. Final Impeccable desktop/mobile screenshots are mirrored to ignored `.impeccable/review/`. Browser checks use only local fictional data; there is no authenticated lane or live service lane. `MONOLITH_URL` can target a compatible local preview. Do not infer live product acceptance from showcase checks.

## Regenerating assets

Committed assets require no Python to use. For optional vector/font regeneration, use Python 3.13 (verified here) or a compatible Python 3 environment:

```powershell
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r scripts/requirements-assets.txt
.\.venv\Scripts\python.exe scripts/build-vectors.py
npm run assets
npm run check
```

`build-vectors.py` outlines the supplied variable fonts and generates WOFF2, logo geometry, and printable applications. `npm run assets` exports PNG/ICO, embeds origin metadata, derives downloadable tokens from CSS, copies the guide, and rebuilds ZIPs. Run it after changing the guide or primitives so downloads stay consistent. `node scripts/design-sidecar.mjs` regenerates the Impeccable extensions and component examples after updating DESIGN. The optional `node scripts/fetch-fonts.mjs` fetches the original upstream font files and licences; it requires network access and is not a preview prerequisite.

## Documentation and conventions

[PRODUCT.md](PRODUCT.md) owns confirmed product intent and explicit unknowns. [DESIGN.md](DESIGN.md) and [.impeccable/design.json](.impeccable/design.json) describe the finished visual system. [docs/implementation.md](docs/implementation.md) records the implementation boundary and decisions. Code and documentation use international English; user-facing copy follows the brand guide. The source and server use LF UTF-8 files; Git may convert line endings under the existing attributes.

The supplied [AGENTS.md](AGENTS.md) routes to an `AGENTS/` directory that is absent in this checkout. Those links are pre-existing instruction-system debt; this implementation did not recreate or revise the base instruction system. Engineering and verification contracts for this delivery are recorded here and in the linked project documents.
