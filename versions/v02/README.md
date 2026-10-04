# Monolith v02 — Everyday Orbit

An independent, code-first Impeccable brand presentation for **“Room for your working world.”** It is a proposed identity with illustrative applications; Monolith application functionality and OpenJM integration are outside this version.

Open [index.html](index.html) directly. No installation or build is needed. For HTTP, follow the [hub preview instructions](../../README.md#run-the-hub) and visit `versions/v02/` beneath the hub URL. All URLs are relative and support `/monolith/` hosting. Reuse only a healthy compatible preview; preserve other listeners.

## Files

- [PRODUCT.md](PRODUCT.md): approved scope, audience, purpose, and unresolved product decisions.
- [DESIGN.md](DESIGN.md): implemented Everyday Orbit tokens, visual language, states, and responsive behavior.
- `index.html`, `styles.css`, `script.js`: standalone presentation and interruptible Rebalance interaction.
- [Assets](assets/README.md): eight outlined logo/icon SVGs, two mobile patterns, and [local fonts with licenses and pinned provenance](assets/fonts/README.md).
- `.impeccable/config.json`: this version’s explicit `buildPath: code` choice. `.impeccable/surfaces/index-html.md` records its approved direction; `.impeccable/design.json` extends the design tokens with component and motion metadata.
- [VERIFICATION.md](VERIFICATION.md): actual browser checks and remaining limits. Ignored `.impeccable/review/` holds local captures, results, and authoring tools.

## Interaction

Rebalance cycles through three authored arrangements of the same Notes, Projects, and Knowledge forms. Each activation samples the current transforms, cancels the previous animations, and targets the newest arrangement for 450ms. Focus stays on the button; a polite status announces the number. Reduced motion settles immediately, including when the preference changes during animation. Without JavaScript the complete default composition remains and the button is hidden.

A classic deferred script provides the module’s local scope while supporting direct-file opening without module-loader CORS restrictions. Native links, scrolling, and downloads remain ordinary browser behavior.

## Optional asset authoring

The shipped assets are already prepared. To regenerate, use a separate Python virtual environment with `fonttools==4.66.1` and `brotli==1.2.0`, then run [scripts/build-assets.py](scripts/build-assets.py) with that environment’s Python. It reads the retained original TTFs and writes two WOFF2 fonts and ten SVGs. It makes no network requests and does not modify another version. The page does not depend on this tool or environment.
