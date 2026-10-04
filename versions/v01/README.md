# Monolith v01 — Common Thread

A responsive static brand presentation for “Your work, woven together.” Open [index.html](index.html) directly, or use the [repository's HTTP command](../../README.md#run-the-hub) and visit `/versions/v01/`. There are no runtime dependencies, scripts, or build steps.

## Deliverables

- Six sections: opening, brand idea, logo system, color and typography, graphic system, and applications.
- Eight downloadable logo/icon SVGs and three reusable graphic compositions in [assets](assets/README.md).
- Local Sora variable font, original source, and OFL license.
- [PRODUCT.md](PRODUCT.md): scope, audience, direction, and open decisions.
- [DESIGN.md](DESIGN.md): implemented tokens, geometry, components, accessibility, and responsive behavior.
- [.impeccable/design.json](.impeccable/design.json): design metadata and component specimens.
- [.impeccable/surfaces/index-html.md](.impeccable/surfaces/index-html.md): presentation contract; `.impeccable/config.json` records `buildPath: code`.
- [VERIFICATION.md](VERIFICATION.md): observed checks and remaining limits.

The concept line, logo, and palette are v01 proposals. Workspace imagery is illustrative with sample data. No backend, authentication, integration with OpenJM, publishing, or permanent identity decision is included.

## Preview under a project prefix

From the repository root, when port 3300 is available:

```powershell
python -m http.server 3300 --bind 127.0.0.1 --directory ..
```

Visit `http://127.0.0.1:3300/monolith/versions/v01/`. This parent-directory preview exercises the relative paths required by a `/monolith/` deployment. Reuse compatible existing servers and preserve other processes. It is a local preview, not publishing.

The return link is `../../index.html`. Assets and styles are relative to this directory. The complete page works with JavaScript disabled.
