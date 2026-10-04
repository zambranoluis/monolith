---
name: Monolith v02 — Everyday Orbit
description: Room for your working world.
colors:
  chalk: "#F4F1E7"
  cobalt: "#2446DB"
  ink: "#192329"
  coral: "#D75565"
  citrus: "#D4DA67"
typography:
  display:
    fontFamily: '"Instrument Sans", sans-serif'
    fontSize: "clamp(3.2rem, 6.3vw, 6rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  display-mobile:
    fontFamily: '"Instrument Sans", sans-serif'
    fontSize: "clamp(3.2rem, 11vw, 5rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  headline:
    fontFamily: '"Instrument Sans", sans-serif'
    fontSize: "clamp(2.5rem, 4.3vw, 4.2rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  title:
    fontFamily: '"Instrument Sans", sans-serif'
    fontSize: "clamp(1.5rem, 2.3vw, 2rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  body:
    fontFamily: '"Instrument Sans", sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  lead:
    fontFamily: '"Instrument Sans", sans-serif'
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
  introduction:
    fontFamily: '"Instrument Sans", sans-serif'
    fontSize: "1.5rem"
    lineHeight: 1.35
  label:
    fontFamily: '"Instrument Sans", sans-serif'
    fontSize: "0.875rem"
    lineHeight: 1.55
  specimen:
    fontFamily: '"Instrument Sans", sans-serif'
    fontSize: "clamp(2rem, 3.5vw, 3.5rem)"
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  alphabet:
    fontFamily: '"Instrument Sans", sans-serif'
    fontSize: "1.25rem"
  expressive:
    fontFamily: '"Newsreader", Georgia, serif'
    fontWeight: 400
  footer-phrase:
    fontFamily: '"Newsreader", Georgia, serif'
    fontSize: "clamp(1.75rem, 3vw, 3rem)"
    fontWeight: 400
rounded:
  control: "2rem"
  selected-row: "4px"
spacing:
  gutter: "clamp(1.25rem, 4.5vw, 5rem)"
  section: "clamp(4rem, 8vw, 8rem)"
  prose: "1.2rem"
  control: "0.9rem 1.4rem"
  download-row: "1.5rem 0"
components:
  rebalance:
    backgroundColor: "{colors.citrus}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "{spacing.control}"
  rebalance-hover:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.ink}"
  workspace-selection:
    backgroundColor: "{colors.citrus}"
    textColor: "{colors.ink}"
    rounded: "{rounded.selected-row}"
    padding: "0.6rem 0.75rem"
---

# Everyday Orbit design system

## Overview

**Creative North Star: "Everyday Orbit"**

A welcoming working world held together by a useful center. Physical mobile structures connect different shapes without forcing them to become identical. This system is an independent proposal scoped to v02; it is not Monolith’s adopted identity and does not govern the hub or v01.

The presentation pairs large, direct typography and expansive clean vectors with flat fields of chalk, cobalt, and citrus. Expression comes from shape, balance, and italic phrases. The single authored interaction rearranges familiar parts.

## Colors

Chalk is the main canvas; cobalt owns the balance study and footer and draws the opening artwork. Ink carries ordinary text on chalk and citrus. Citrus supplies secondary weights, the Rebalance button, and the application field. Coral supplies decorative weights and a notebook stage.

**The Readable Ground Rule.** Use ink on chalk (14.14:1) or citrus (10.67:1), or chalk on cobalt (6.25:1) or ink (14.14:1). Ink on coral is 4.09:1, below the ordinary-text threshold. Coral’s swatch label is on chalk; Knowledge is labeled in chalk outside its coral form.

Separators use ink at 25% mixed with transparency. Selection reverses cobalt/chalk; inside cobalt sections it reverses chalk/cobalt. Focus is a 3px cobalt outline offset by 5px, changing to chalk on cobalt. The scrollbar uses cobalt on chalk without changing native scrolling.

## Typography

Instrument Sans is locally hosted for wordmark, headings, and body. The wordmark exports outlines from weight 600, width 100, with a 12-font-unit spacing adjustment. Newsreader Italic supplies selected phrases, not the ordinary body voice. Both original fonts, licenses, metadata, pinned URLs, and generated Latin WOFF2 subsets are retained in [assets/fonts](assets/fonts/README.md).

Display, headline, and title use weight 500, 1.08 line height, and −0.035em tracking. Heading sizes follow the frontmatter’s fluid roles. Labels are 0.875rem; ordinary body is 1rem and introductory copy is 1.125rem. The product idea’s leading thought is 1.5rem. Typeface specimens use their separate fluid scale and 1.25rem alphabets. The illustrated workspace heading uses 2rem, reduced to 1.75rem on mobile.

**The Expressive Phrase Rule.** Italic phrases inherit the surrounding size and use Newsreader at weight 400. Headings are balanced and can break long words when text is enlarged; type specimens also allow word wrapping. Body measure is capped at 65ch, with shorter measures beside artwork. Root text size follows browser preferences.

## Layout

The centered canvas is capped at 84rem with gutters `clamp(1.25rem, 4.5vw, 5rem)`. Section spacing is `clamp(4rem, 8vw, 8rem)`. Desktop uses paired text/art regions, a three-part symbol study, five adjacent swatches, and paired type/application specimens. Full-width cobalt and citrus fields contain the same inset canvas.

Below 1050px, the symbol study uses two columns and the small-size specimens form a separate row. Below 760px, the major compositions stack, the workspace sidebar becomes a top strip, and downloads become one column. Mobile swatches use auto-fit tracks with a 9rem minimum bounded by available width; they collapse further with enlarged text. Native document flow and scrolling remain intact; there are no fixed-height text containers.

## Elevation & Depth

Flat by design. No shadows, gradients, glow, or fabricated textures. Color fields separate applications and identity examples. The notebook is a clearly illustrative cover with an asymmetric corner treatment and a thin binding edge.

## Shapes

The primary symbol uses a vertical stem, offset crossbar, and opposed filled semicircles. Its simplified version thickens structural strokes from 8 to 12 units for small sizes. Clear space is at least x, the 36-unit radius of a semicircle. The app icon places the chalk simplified mark on a 256-unit cobalt square with a 56-unit radius.

Mobile graphics suspend discs, semicircles, and rounded weights on slender supports. Controls use a 2rem rounded shape; the illustrative workspace selection has a 4px radius. Identity specimens remain rectangular. Do not read the mobile metaphor as literal space imagery.

## Components

**Rebalance.** One native button, citrus/ink at rest, chalk/ink on hover, dark border on activation, chalk keyboard focus on its cobalt ground. The control appears only after successful script initialization. Its polite atomic status shows “Arrangement n of 3”.

**Balance study.** Three authored Notes/Projects/Knowledge arrangements, animated with 450ms transforms and `cubic-bezier(0.16, 1, 0.3, 1)`. Each activation samples the in-flight frame, cancels the earlier animation, and sets the latest target. Focus remains on the button. Reduced motion settles immediately; preference changes cancel running transitions. Without JavaScript, the complete default composition and first status remain visible while the button is hidden.

**Native navigation.** Underlined links, visible focus, a skip link, native section destinations, and native returns to `../../index.html`. No client routing or scrolling controller.

**Download row.** Native download link with the asset name, SVG label, and outlined arrow. Top separator, 1.5rem vertical padding, underline on hover, cobalt focus. Pattern links live alongside the graphic study.

**Workspace illustration.** Explicitly labeled static concept with sample content. A semantic table contains three illustrative items. Sidebar labels have no controls; the example does not imply an implemented application or integration.

## Do's and Don'ts

- Do keep different weights visibly connected through a light structure.
- Do use the tested text/ground combinations and visible keyboard focus.
- Do preserve native links, downloads, scrolling, reduced motion, and the complete default arrangement.
- Do label illustrative applications and describe OpenJM assistance as a proposed purpose.
- Don't put ordinary text on coral or make the symbol depend on a font.
- Don't turn this version’s identity into a permanent product decision or a template for other versions.
