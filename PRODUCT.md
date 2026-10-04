# Monolith concept hub

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

The hub uses plain HTML and CSS, with plain JavaScript only if behavior requires it. The initial static hub requires no JavaScript, dependencies, or build step. This stack decision applies to the hub; each future concept's stack is decided and documented separately.

## Product Purpose

The repository root introduces Monolith's independent concept versions and provides a directory for visiting them. Monolith is a planned workspace/database for individuals and small teams to organize work information that OpenJM can use to assist with real work. CrimsonTide AI is the parent company, with OpenJM and Sentinel as its first products. These facts come from the user's project purpose and approved v01 plan.

The hub and concept presentations do not implement the Monolith application or the OpenJM integration.

## Operating Context

Visitors read a short introduction, find the concept directory, and follow an ordinary link to a completed concept. Each concept provides a return link to the hub. The first entry is [v01 — Common Thread](versions/v01/index.html): an orange-led brand proposal with a woven M, Sora lettering, illustrative applications, and downloadable SVG assets.

## Capabilities and Constraints

- Keep the hub and concepts independent; create further concepts individually when requested.
- List a concept only after its real page exists. Every entry includes the version number, concept name, short description, and page link.
- Store each concept in `versions/v01/`, `versions/v02/`, and subsequent numbered folders, with its own entry point, styles, scripts, assets, `PRODUCT.md`, and `DESIGN.md`.
- Start each concept from scratch. Do not copy another concept, the hub's visual system, or existing reference work.
- Confirm each concept's brief, identity, and build method independently when that version is requested.
- Use relative URLs and real directory entry points, without client-side routing, compatible with a GitHub Pages project path such as `/monolith/`.
- Publishing is separate from preparing local files. Live hosting has not been verified in this implementation.

## Open Decisions

Detailed workspace functionality, database model, permissions, integration behavior, release plans, pricing, and final product-wide identity remain unresolved. The user owns these decisions. The Notion/AppFlowy comparison establishes a product category, not feature parity. Further concept names, descriptions, identities, stacks, and build methods remain open until their individual requests.

The line “Your work, woven together.”, woven M, orange palette, and Sora typography are proposals scoped to v01; they establish no permanent identity for the product or later versions. [v01 PRODUCT.md](versions/v01/PRODUCT.md) owns that concept's scope.

The hub's neutral styling is preserved. It establishes no brand commitment for concepts. Documents under `references/` describe other products and the parent company; they supply family context, not Monolith requirements or visual templates.
