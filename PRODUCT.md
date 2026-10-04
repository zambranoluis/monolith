# Monolith concept hub

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

The hub uses plain HTML and CSS, with plain JavaScript only if behavior requires it. The initial static hub requires no JavaScript, dependencies, or build step. This stack decision applies to the hub; each future concept's stack is decided and documented separately.

## Product Purpose

The repository root introduces Monolith's independent concept versions and provides a directory for visiting them. This is a concept hub, not a description or implementation of an unspecified Monolith application.

## Operating Context

Visitors read a short introduction, find the concept directory, and follow an ordinary link to a completed concept. Each concept provides a return link to the hub. The initial directory is empty because no concept has been built.

## Capabilities and Constraints

- Build only the hub in this iteration; create concepts individually when requested.
- List a concept only after its real page exists. Every entry includes the version number, concept name, short description, and page link.
- Store each concept in `versions/v01/`, `versions/v02/`, and subsequent numbered folders, with its own entry point, styles, scripts, assets, `PRODUCT.md`, and `DESIGN.md`.
- Start each concept from scratch. Do not copy another concept, the hub's visual system, or existing reference work.
- Confirm each concept's brief, identity, and build method independently when that version is requested.
- Use relative URLs and real directory entry points, without client-side routing, compatible with a GitHub Pages project path such as `/monolith/`.
- Publishing is separate from preparing local files. Live hosting has not been verified in this implementation.

## Open Decisions

Monolith's application purpose, audience, journeys, and functionality remain unspecified. The user owns those decisions; they must be resolved before implementing a concept that depends on them. Concept names, descriptions, identities, stacks, and build methods remain open until their individual requests.

The hub's neutral styling is delegated by the approved implementation plan. It establishes no brand commitment for future concepts. Documents under `references/` describe other projects and do not settle Monolith's purpose or identity.
