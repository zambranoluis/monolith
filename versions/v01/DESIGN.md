---
name: Monolith v01 — Common Thread
description: A geometric identity for work, woven together.
colors:
  orange: "#ff7900"
  charcoal: "#20211f"
  white: "#f6f7f8"
typography:
  display:
    fontFamily: 'Sora, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "clamp(2.25rem, 4.4vw, 4.75rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  heading:
    fontFamily: 'Sora, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "clamp(2rem, 3.7vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.13
    letterSpacing: "-0.04em"
  title:
    fontFamily: 'Sora, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  body:
    fontFamily: 'Sora, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  caption:
    fontFamily: 'Sora, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.6
spacing:
  gutter: "clamp(1.25rem, 4.5vw, 5rem)"
  section: "clamp(4.5rem, 8vw, 8rem)"
  content-width: "90rem"
  text-gap: "1.25rem"
  composition-gap: "2rem"
components:
  download-link:
    textColor: "{colors.charcoal}"
    padding: "0.8rem 0.25rem"
  orange-panel:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.charcoal}"
  reversed-panel:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.white}"
---

# Design System: Common Thread

## Overview

**Creative North Star: "Your work, woven together."**

Common Thread gives connected work a visible structure: two upright bands and a joining center form a geometric M. Its bands extend into intersections, repeating modules, and enlarged crops. Orange carries the identity, charcoal provides structure, and cool white makes room for explanation.

This system belongs only to `versions/v01/`. The concept line and logo are proposals, not permanent Monolith commitments. The hub retains its independent system. The approved presentation contract lives in the [surface brief](.impeccable/surfaces/index-html.md).

**Key Characteristics:**

- Substantial orange fields.
- Broad bands, deliberate gaps, and flat geometry.
- A lowercase outlined Sora SemiBold wordmark.
- Native navigation and completely visible static content.

## Colors

Thread orange owns the opening, closing, palette anchor, and application surfaces. Charcoal is the primary text and symbol color on orange and cool white. Cool white reverses the identity on charcoal and provides the reading ground.

**The Readable Pairing Rule.** Use charcoal text on orange (6.15:1) and cool white (15.07:1), or cool white text on charcoal (15.07:1). Orange on light backgrounds is decorative only. Ratios use sRGB relative luminance, rounded to two decimals.

Selection uses charcoal and cool white; reversed sections invert that selection. Native scrollbar colors use charcoal on cool white.

## Typography

Sora is locally hosted as variable WOFF2 with `font-display: swap`. Regular carries prose; SemiBold carries headings and the wordmark. The system stack is the fallback. The browser requests no font service. Provenance, license, and outline generation are in [assets/README.md](assets/README.md).

Section headings balance their lines. Body copy generally sits within 43–65 characters per line depending on role. Figure captions and format labels use the caption role; none is smaller than 12px at the default root size. Sizes use rem units and allow text enlargement.

The wordmark is an outlined vector asset scaled with the composition, not an ordinary heading-size token. The closing line scales from 2.25rem to 5.5rem, with a 2.125rem narrow-screen adaptation. Through 520px the concept line uses `clamp(2rem, 8vw, 2.75rem)`.

## Layout

The centered canvas is capped at the content-width token. Section introductions use two equal columns; below 760px they stack. Sections alternate orange, cool white, and charcoal fields. The logo system combines a primary lockup stage, three monochrome stages, clear-space and size specimens, and a native list of downloads.

Through 520px, the opening, logo examples, graphic studies, and applications stack. Palette swatches use responsive minimum tracks, allowing one column when text is enlarged. Flex and grid children permit shrinking; small-size samples wrap. Application captions stay in normal flow beneath their stages.

No scroll locking, fixed overlays, client routing, or hidden mobile content is used. The desktop's secondary decorative colophon line is omitted on narrow screens. All substantive copy remains available.

## Elevation & Depth

All surfaces are flat. There are no shadows, gradients, glass layers, photographic mockups, or simulated lighting. One-pixel rules divide type, downloads, and logo specimens. The notebook is a flat illustrative cover with a single binding rule.

## Shapes

The master symbol uses a 192 × 160 coordinate system, 40-unit upright bands, and 45-degree center joins. Two transparent 7-unit overlap cuts suggest the weave. The simplified symbol omits these cuts and is framed within a 192 × 192 square; use it below 48px high, starting at 16px.

Minimum clear space is one band-width around visible artwork. Apply this to the outer edges of the lockup as well. The lockup's minimum presentation width is 160px. Keep SVG aspect ratios intact.

Panels are square-edged. The app icon is the exception: its 256 × 256 canvas uses a 56-unit corner radius, an orange field, and the simplified charcoal mark. App icons include a colored background; standalone logos remain transparent.

## Components

**Section navigation.** Wrapping ordinary underlined fragment links. Each has at least a 44px-high target, and all five destination sections accept focus. The skip link becomes visible on keyboard focus and focuses main content.

**Downloads.** Eight descriptive anchors with the `download` attribute, no dialog or scripting. Hover thickens the underline; keyboard focus uses a two-pixel current-color outline with five-pixel offset. Lettering is outlined, so exports do not depend on fonts.

**Logo specimens.** Transparent symbols and lockups sit on approved palette surfaces. Small specimens display their actual target sizes. Download variants retain the same geometry.

**Graphic studies.** Self-contained SVGs express intersect, repeat, and expand. The crossing uses a mask to show one band passing over and then under.

**Illustrative applications.** An app icon, notebook cover, and static workspace header demonstrate the identity. Workspace rows are sample content, not controls. The caption explicitly identifies a nonfunctional app design.

There is no animation. Native scrolling, focus, and links are the interaction grammar; no-JavaScript and reduced-motion modes keep the complete presentation.

## Do's and Don'ts

- Do use substantial orange surfaces with charcoal text.
- Do preserve the mark's proportions and minimum clear space.
- Do use the simplified symbol at small sizes.
- Do keep navigation, downloads, and substantive content available without JavaScript.
- Don't use orange body text on a light background.
- Don't stretch the mark or add gradients and shadows to its flat geometry.
- Don't present illustrative content as an implemented integration.
- Don't apply this identity to the hub or other products without an explicit decision.
