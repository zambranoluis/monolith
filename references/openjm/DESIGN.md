---
name: "OpenJM Landing"
description: "The established dark green landing with Roboto copy, framed surfaces and illustrative conversation stages."
colors:
  bg: "#080b0a"
  bg-deep: "#050706"
  surface: "#151a19"
  surface-2: "#101514"
  surface-3: "#1b211f"
  surface-soft: "rgba(21, 26, 25, 0.72)"
  line: "rgba(230, 245, 238, 0.12)"
  line-strong: "rgba(82, 181, 131, 0.46)"
  text: "#f2f6f4"
  muted: "#a7b2ad"
  muted-2: "#7f8b86"
  green: "#52b583"
  green-strong: "#2fc58b"
  green-dark: "#1d6559"
  green-soft: "rgba(47, 197, 139, 0.12)"
  danger: "#ff5c68"
  button-ink: "#032315"
  white: "#ffffff"
  black: "#000000"
  tone-d9ad48: "#d9ad48"
typography:
  display:
    fontFamily: "\"Roboto\", ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif"
    fontSize: "clamp(3rem, 6.2vw, 6.15rem)"
    lineHeight: 0.95
    letterSpacing: "-0.065em"
  sectionTitle:
    fontFamily: "\"Roboto\", ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 4.25rem)"
    lineHeight: 1.02
    letterSpacing: "-0.048em"
  body:
    fontFamily: "\"Roboto\", ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif"
    fontSize: "clamp(1rem, 1.4vw, 1.15rem)"
    lineHeight: 1.5
  mobileCopy:
    fontFamily: "\"Roboto\", ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif"
    fontSize: "1rem"
    lineHeight: 1.55
  label:
    fontFamily: "\"Roboto\", ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif"
    fontSize: "0.92rem"
    fontWeight: 800
  demoUi:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif"
rounded:
  control: "12px"
  small: "14px"
  medium: "22px"
  large: "32px"
  stage: "18px"
  stage-mobile: "12px"
spacing:
  content: "1240px"
  content-compact: "1120px"
  content-tablet: "920px"
  header: "78px"
  header-compact: "66px"
  header-mobile: "68px"
  section-tablet: "88px"
  section-mobile: "64px"
  button-inline: "20px"
  target-min: "44px"
components:
  button-primary:
    textColor: "{colors.button-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 20px"
  button-secondary:
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 20px"
---

# Design System: OpenJM Landing

## Overview

**Creative North Star: "Practical conversations in a green-lit frame"**

A near-black green canvas gives practical explanations and examples a consistent home. Large Roboto headings, restrained green emphasis and framed surfaces carry the identity. This documentation adopts the current implementation as the baseline; section geometry, copy and interaction remain the settled decisions described by the surface briefs.

Soft glows and grid texture support tilted illustrative conversation stages and linked groups of cards. Motion expresses entrance, progress and relationships while keeping reading and keyboard access available. This records the existing system; dated browser evidence belongs in the browser guide and incomplete local acceptance belongs in the surface briefs.

**Key Characteristics:**

- Dark green canvas and pale readable copy.
- Tightly tracked Roboto headlines with green emphasis.
- Framed cards, rounded controls and thin green connectors.
- Authored conversation illustrations with retained tilt and depth.
- Responsive content flow and immediate reduced-motion readability.

**The Shared Identity Rule.** Preserve the incumbent palette, typography, assets and framing when correcting an existing surface; section-specific composition belongs to its brief.

The [surface index](.impeccable/surfaces.md) routes composition and section behavior. The retained source is the implemented baseline; unavailable historical provenance is not a prerequisite or a competing visual specification. [Dated browser evidence](tests/e2e/README.md#dated-verification) preserves observed scope and limits; each brief owns its remaining acceptance observations.

The [design sidecar](.impeccable/design.json) carries implementation-derived motion, shadow, breakpoint and component-preview extensions. Its synthesized eight-step tonal ramps are preview metadata, not additional application palette values or authorization to change colors.

## Colors

### Primary

The green family carries emphasis, conversion, connections and selected state. Use the frontmatter's green and green-strong roles for shared controls and emphasis, green-dark for deeper illumination and green-soft for quiet state feedback. Subtle grids and radial glows remain part of the canvas; preserve their low visual weight.

### Secondary

Warm amber (tone-d9ad48) identifies the existing Current Plan badge; danger belongs to the retained status/illustration vocabulary. Neither becomes a second conversion accent. Do not expand these into new marketing semantics.

### Neutral

bg/bg-deep provide the canvas; surface, surface-2, surface-3 and surface-soft layer framed content. text carries primary reading, muted/muted-2 secondary copy, line/line-strong boundaries and connections. button-ink provides dark text on the primary green gradient. The authoritative declarations are in [globals.css](src/app/globals.css); additional exact tone variables preserve local illustration/artwork values and are not a second shared palette. A documented token does not establish every combination's contrast; verify the affected state.

## Typography

Roboto variable fonts, normal and italic (weights 100–900, width axis 75%–100%), are self-hosted under [public/fonts](public/fonts/) with their OFL license. The body uses the exact Roboto/system stack in frontmatter; headings inherit it. No Arial or Inter fallback is inserted into that body stack.

The two illustrative stages explicitly declare the demoUi stack, starting with Inter. There is no bundled Inter face or import; the actual fallback depends on the device. Preserve this declared distinction without claiming Inter was observed rendering. Demo labels have individual fixed pixel sizes within a scaled 1910×932 illustration, not a reusable body-size range. Those values stay with the illustration owner.

Display and section titles use tight tracking and fluid clamps. Section copy uses muted text; mobile copy uses its established size/line-height. Hero paragraph and section-specific compact title formulas remain in their local stylesheets and briefs. Keep explicit line breaks and highlighted spans; typography documentation does not authorize rewriting retained headings. Font availability, zoom and content wrapping need browser evidence when affected.

## Layout

The shared shell is centred at min(calc(100% - 40px), content). The 1280–1919px profile uses min(80vw, content-compact); at ≤1050px the content cap is content-tablet. At ≤720px, two gutters of clamp(24px, 6vw, 40px) replace the shell's base subtraction. The fixed header uses the base, compact and mobile heights in frontmatter. Anchor offset is header height plus 24px.

Shared section padding uses clamp(92px, 11vw, 164px), or clamp(74px, 8.8vw, 131px) in the compact desktop profile. Section owners override it: after the hero, ≤1200px uses section-tablet block padding and ≤720px uses section-mobile. The hero retains its own top/bottom spacing. These formulas and conditional overrides are explanatory layout rules, not fabricated fixed scale tokens.

Section widths, deliberate capability bleed, desktop diagrams, pinning eligibility and illustration containment belong to their [briefs](.impeccable/surfaces.md). Do not infer a shared fixed grid from one section. Reflow to content-based document reading when pinning cannot fit, keep mobile card descriptions complete, and preserve source/DOM reading order. The body minimum width is 320px; test boundary and short-height states appropriate to a change.

## Elevation & Depth

Depth combines tonal surfaces, fine borders, diffuse green illumination and structural shadows beneath illustrations. The shared shadow declaration is recorded in the sidecar. Illustrations retain their perspective, projected border/depth and fixed reduced-motion tilt; a stopped illustration is still dimensional. Connectors explain relationships rather than adding another shadow treatment. Keep the current depth vocabulary and inspect projected bounds when layout changes.

## Shapes

Shared controls use the control radius; the root small/medium/large radii are exact existing declarations rather than a range to interpolate. Illustration frames use stage radius with local mobile overrides. Circular hummingbird/radar/orbit geometry and section-specific card radii remain owned by those components. The root radius declarations are not evidence that every card references them.

## Components

### Buttons and focus

Shared buttons are inline-flex, centred, bold label text, a 10px internal gap, 48px minimum height and the documented inline padding/radius. Primary fill is a 135deg gradient from green-strong to green with button-ink text; secondary fill uses the existing dark translucent tone and line-strong border. Normal hover lifts by 2px; primary hover also scales to 1.04 and briefly glows. Reduced motion removes lift/glow. Shared button focus is a solid 3px green-strong outline with 3px offset. Header/footer link outlines are 2px with their local offsets. Preserve each control's local sizing override and at least 44px interactive targets.

### Framed surfaces and connectors

Cards combine existing surface tones, rounded framing and local padding. Thin SVG lines/nodes connect capability examples, use cases, request steps, journey and benefits; they are decorative and preserve reading order. Each brief owns geometry and entrance/progression; no shared autoplay is inferred.

### Illustrative stages

Hero image generation and request/file analysis are authored fixed stages scaled to their containers. [useDemoStage](src/features/landing/hooks/useDemoStage.ts) shares fit, activity gating and fine-pointer tilt; [demoParticles](src/features/landing/lib/demoParticles.ts) shares decorative drawing. Activity requires at least 10% intersection, a visible document and normal motion. Active timeline time pauses on inactivity; reduction uses settled frames and fixed tilt. Hidden DemoFrame media has separate synchronization and unresolved playback recovery, owned by the [request-demo brief](.impeccable/surfaces/src-features-landing-components-demosection-tsx.md#interactions).

### Reveal and responsive interaction

Independent reveals start at 8% intersection with the visible viewport and reset on complete exit. Entry captures scroll direction (initial entry defaults downward); authored entrance delays run forward downward and reverse upward. Direction stays fixed until complete exit, including a reversal during the entrance. Compact benefits, journey fallback cards and footer content retain their reading-position triggers; simultaneous entrants follow directional reading order. Delays apply to entrance properties, leaving hover, borders, backgrounds and exits responsive.

Desktop Benefits (>=1280px) owns a section-local automatic sequence, separate from shared reveals. At 8% composition-stage intersection below the measured navbar, downward entry reveals title/text, hummingbird/rings, all connector paths/nodes, then all four cards; upward entry reverses the groups. Every member starts together and each group finishes before the next, driven by actual browser animation completion (850/820/450/450ms; card opacity finishes in 390ms). Directional text/card movement preserves the existing treatments. Groups remain visible without further scrolling; reversal does not reorder playback. Complete section exit cancels/resets, document hiding pauses time, same-mode reflow preserves state and breakpoint crossing disposes the previous owner. Focus, reduction and missing APIs settle all content; desktop normal-motion restoration waits for complete exit/re-entry. Its default CSS and no-JS path expose the complete composition.

The FAQ list is a coordinated group: its first intersection starts all eight questions, including those below the viewport. Downward entry runs first to last; upward entry runs last to first. The first starts after 80ms, with 100ms between questions and existing 620ms opacity/700ms transform durations (about 1.5s total). Only complete list exit resets it. Focus immediately settles the entire list; disclosure state survives exits and re-entry. Direct entry into the middle also starts the list.

Live reduction shows all reveals; shared normal restoration restarts observation. Global CSS settles opacity/transforms and removes delays on the first reduced frame; the layout's noscript fallback exposes essential text/list/button descendants. Missing IntersectionObserver leaves content visible. Desktop Benefits adds immediate SVG settlement and retains its completed state on restoration until full exit. The desktop goals diagram uses a section-local, clockwise one-shot reveal that resets on complete exit; its independent radar motion continues. Other desktop scroll-driven sequences retain their own forward/reverse phases. Listeners, observers and scheduled frames must clean up on teardown.

**The Readable Motion Rule.** Motion must leave essential copy and controls readable and reachable, including initial/live reduction and no-JavaScript reading.

Shared title/copy/accent/button selectors are literal global class names; section and shell are CSS Module exports. Scoped descendants targeting the shared literals use :global(...). Local illustration accents remain module-scoped. The [page brief](.impeccable/surfaces/src-app-page-tsx.md) maps shared source; a matching selector alone does not establish visible behavior.

### Navigation and disclosure

Keep native navigation, named menu/selection/pulse controls and FAQ details/summary semantics. The header remains nonmodal; section briefs own focus transfer and exclusive disclosure. Illustrative upload/search/settings chrome remains inert. No operative product input is introduced by this shared system.

## Do's and Don'ts

### Do:

- Do preserve the current identity, copy, assets and destination decisions within the authorized scope.
- Do use the implemented semantic tokens and source-backed section overrides.
- Do measure transformed card/depth bounds as well as document overflow when validating containment.
- Do retain visible focus, the 44px target minimum and immediate initial/live reduced-motion reading.

### Don't:

- Don't treat an illustration or retained plan/FAQ statement as verified product behavior.
- Don't replace Roboto with an assumed loaded Inter font; illustration fallback is intentional current source.
- Don't infer complete acceptance from static selectors, a screenshot, discovery or a passing unrelated check.
- Don't introduce a new palette, asset, motion system or page composition during a focused correction.
