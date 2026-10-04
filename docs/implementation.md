# Monolith identity implementation

Source of intent: the user-supplied “Monolith brand identity and showcase” plan, implemented in a fresh repository context. Delivery is local. No staging, commits, publication, access changes, or live integration was requested or performed.

## Decisions carried into the delivery

- Work Index direction, standalone Monolith identity, secondary By CrimsonTide endorsement, explicit OpenJM relationship.
- “Work, in context.” tagline; clear, grounded, resourceful, composed personality; international English.
- White, ink, violet and lilac; licensed self-hosted Archivo and Source Sans 3.
- An index symbol with three broad strokes, an offset centre, and a shared base. The generated ascending chart-like interpretation was reduced into fixed production geometry. All shipping applications use that geometry.
- Static HTML/CSS/JavaScript showcase with six native linked chapters, no runtime framework, no external requests or user-data persistence.
- One fictional Harbor Library project, consistently labelled. All four source combinations produce deterministic, source-bounded explanations.

## Image-first record

The installed Impeccable context command confirmed no visual implementation or settled design system existed. The concept seed ran with key `24bcf845`; the explicit user direction took precedence over its assignment. The plan already settled the concept, platform, palette, fonts, purpose, audience and delivery. It authorised implementation and review rather than another direction interview.

Brandkit and the built-in image-generation tool produced identity overview, logo construction, and product applications as separate images. All three were viewed before production SVG/font artwork or UI code. Exact prompts remain alongside the images under `assets/concepts/`. Observed inconsistencies (ascending bars, reversed bar order, speculative copy and dense generated UI) were treated as exploration limitations. The shipping symbol, type outlines, readable content and interface are authored assets, not crops of concept lettering.

The showcase is implemented from the pinned identity and reviewed references. No screenshot composition was submitted as an approved pixel specification; there is no claim of image-to-code fidelity measurement. The [showcase brief](../.impeccable/surfaces/route.md) records this boundary and the finished surface’s composition.

## Deliverable inventory

- Twelve editable outlined SVG logo variants and twelve transparent PNG exports.
- Favicon SVG, three-size ICO, ten app PNG sizes, and web manifest.
- Printable outlined SVG poster and index card.
- Original variable font files, compressed WOFF2 files, licences, upstream Archivo font log and font-source record.
- CSS primitives, downloadable JSON tokens, brand guide, four ZIP bundles and raster provenance.
- Responsive showcase, source-selection enhancement, light/dark workspace example, explicit keyboard tab stops, focus and reduced-motion support.
- Product, design, setup, surface strategy, implementation, verification and fallback-review documentation.

## Engineering boundary

`index.html` owns content, source data and no-JavaScript defaults. `scripts/showcase.js` owns deterministic example responses, theme state and optional chapter indication. It performs no network requests. Source changes update only the example text and citation anchors. Theme changes affect only the workspace example and its supplied logo variant. Neither interaction changes records or uses storage.

`styles/tokens.css` owns shared primitive values; `scripts/export-assets.mjs` derives the downloadable custom-property map from that file. The guide download is copied from `docs/brand-guide.md`. Regenerate exports after changing either source. SVG logo paths are generated from fixed geometry and licensed font outlines; PNG origin metadata is written before ZIP bundling.

The local preview server uses port 3210 because an existing user-owned listener was already on 3200. It exposes only index, styles, the showcase script, and assets. User-managed processes were preserved. Browser profiles and evidence created by the task stay in ignored repository-local run directories; no user browser was reconfigured.

## Review and known boundaries

The installed `AGENTS.md` routes to missing `AGENTS/` guides. README, PRODUCT and DESIGN were unconfigured starters. This task populated project-owned documents within the authorised scope and preserved the base instruction system and supplied reference material.

There is no subagent/reviewer capability in the active session. Impeccable’s documented degraded finish-reviewer and documenter workflows were used inline. The [finish review](../.impeccable/review/finish-review.md) identifies the scope, findings, corrections and final disposition. Browser and asset evidence is recorded in [verification](verification.md).

Live product implementation, launch decisions, integration contracts, security/privacy policy, trademark clearance, physical print production, real Safari/device testing and assistive-technology user testing remain outside this delivery. Product-owner unknowns are recorded in [PRODUCT.md](../PRODUCT.md).
