---
name: Monolith
description: The Work Index — Work, in context.
colors:
  primary: "#6038E8"
  primary-deep: "#4825BC"
  context: "#F0ECFD"
  paper: "#FFFFFF"
  ink: "#191922"
  muted: "#656572"
  line: "#DCDCE5"
  surface: "#F7F7FA"
  dark-muted: "#CAC6DB"
  dark-line: "#494550"
  dark-accent: "#C2B3FF"
  dark-surface: "#25232F"
  dark-context: "#30264E"
  positive: "#256348"
  positive-surface: "#E9F4ED"
typography:
  display:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(64px, 7.5vw, 96px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(38px, 5vw, 64px)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Archivo, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "4px"
  md: "8px"
spacing:
  base: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  group: "24px"
  component: "32px"
  section-sm: "48px"
  section: "64px"
  section-lg: "96px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "15px 24px"
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.paper}"
  context-panel:
    backgroundColor: "{colors.context}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "32px"
  status:
    backgroundColor: "{colors.context}"
    textColor: "{colors.primary-deep}"
    rounded: "{rounded.sm}"
    padding: "4px 9px"
---

# Design System: Monolith

## Overview

**Creative North Star: "The Work Index"**

Monolith makes separate information read as a coherent whole. Bright white surfaces, dark ink and violet indexing put meaning before decoration. Broad geometry, straight rules and readable type keep the system clear, grounded, resourceful and composed.

The same index language carries an expressive identity and quiet work information. Production artwork is flat outlined vector geometry; interfaces are semantic, readable text. Generated reference boards informed the identity but are not shipping screenshots or artwork crops. The showcase composition belongs to its [surface brief](.impeccable/surfaces/route.md), while this document records the reusable built system.

**Key Characteristics:**

- Bright white, dark ink, violet indexing.
- Large grounded headings and humanist reading type.
- Shared rules, broad strokes and measured negative space.
- Flat surfaces, visible sources and restrained state changes.

## Colors

One vivid accent organises an otherwise neutral reading environment. Normative values appear in the frontmatter; the shipping custom properties live in [tokens.css](styles/tokens.css), and the [downloadable JSON](assets/downloads/monolith-tokens.json) is generated from them.

### Primary

Index violet marks the identity, selected information and primary action. Violet deep supplies hover and readable text on lilac. Lilac gives selected context a calm field.

### Neutral

Paper is the primary reading surface. Ink is primary text and the dark brand ground. Muted is secondary text on white. Surface and line separate interface regions without shadows. Dark surfaces use white text, dark-muted secondary text and dark-accent selection/hover text. Positive status uses a labelled green-on-pale treatment; colour never carries the status alone.

**The Context Rule.** Accent means selection, relationship or action; a selected source retains a visible name and a source link.

Body contrast is at least 4.5:1; large text and meaningful graphics at least 3:1. Verified pairs: ink/paper 17.45:1, muted/paper 5.74:1, white/violet 6.51:1, deep violet/lilac 8.00:1, dark secondary/ink 10.48:1, dark active/ink 9.29:1. Do not inherit default violet link hover on dark ink.

## Typography

**Display Font:** Archivo, with sans-serif fallback.
**Body Font:** Source Sans 3, with sans-serif fallback.

**Character:** Archivo gives the identity a broad, confident structure. Source Sans 3 makes explanatory copy and structured information comfortable to read. Both are self-hosted variable fonts with upstream licences and sources in [assets/fonts](assets/fonts/SOURCES.json).

### Hierarchy

- **Display:** 700 weight, frontmatter scale, used for the leading phrase. At widths at or below 760 px it uses `clamp(60px, 12vw, 84px)`.
- **Headline:** 600 weight, frontmatter scale, used for section ideas.
- **Title:** 600 weight, 24 px, used for component titles; project titles are 28–36 px and document titles 28–32 px.
- **Body:** 400 weight, 18 px, 1.5 line-height; long document copy uses 17 px and 1.7 line-height.
- **Label:** 12–15 px, concise source, status and interface names. Table dates use tabular numerals.

Use balanced headings and a 65–75 character reading measure where available. Tracking never tightens beyond -0.04em. Logo lettering is outlined Archivo at weight 700 and width 100; the endorsement is outlined Source Sans 3.

## Layout

The content frame is at most 1280 px, with 48 px default gutters, 32 px medium gutters, and 24 px compact gutters. The spacing rhythm follows the frontmatter’s 4 px foundation. Keep related details close and leave 48–96 px between ideas.

Major breakpoints are 1100 px, 760 px and 1600 px. Compact layouts stack in reading order. Navigation wraps visibly. Grid items have zero automatic minimum width where intrinsic artwork could overflow. Tables keep their width inside a labelled horizontal scroll region. Real 200% browser zoom reflows the 1440 px preview to 720 CSS px without page overflow.

## Elevation & Depth

No decorative shadows. White, neutral and lilac surfaces, thin rules and spacing provide depth. Physical applications are flat printable vector examples, not simulated embossing or device photography.

## Shapes

The symbol’s fixed 52 × 48 frame uses three broad strokes and a shared base. Artwork is square. Interface controls and contextual containers use restrained small corners from the frontmatter. App icons have a rounded container while the symbol retains square geometry. Use the supplied primary, monochrome and reversed logo variants; clear-space and size rules belong to the [brand guide](docs/brand-guide.md).

## Components

### Buttons

Primary buttons use violet and white, with deep-violet hover, 15 × 24 px padding and a minimum 48 px height. Focus is a visible 3 px outline with 5 px offset. State transitions use 180 ms exponential ease-out. Dark surfaces use a light focus colour. Controls retain text labels and sufficient target size.

### Chips

Status and source chips use context-coloured grounds and readable deep-violet text. Status is written in words and includes a supplementary dot. Source chips are native links. No status or selected source is conveyed by colour alone.

### Cards / Containers

Document examples have a thin neutral rule and small corners. Context examples use lilac and white tonal layers. Typical internal padding is 24–32 px. The reusable structure is a content region with hierarchy, not nested decorative cards.

### Inputs / Fields

Source selection uses native checkboxes inside labelled rows with visible page/record names and descriptions. Checkboxes are 18 px with the native outline retained. The fieldset is disabled in HTML for the no-JavaScript static example, then enabled by the enhancement. No sources produces a specific recovery message rather than an unsupported explanation. Responses announce changes politely and replace citations with links to the selected sources only.

### Navigation

Native anchors, explicit zero tab indices for Windows WebKit keyboard access, 32 px minimum chapter targets, readable 14–15 px text, and a violet active rule. The skip link reveals on focus. Chapter indication is optional; content and navigation work without script. Inline dynamic citations also receive zero tab indices.

### Work Index

The index uses shared baselines, broad geometry and restrained alignment grids. The main illustration is a named image role; decorative artwork inside it is hidden from accessibility APIs. Functional icons are 24 px viewBox SVGs with 1.5 px stroke, round caps/joins, no fill, and adjacent meaningful labels.

Hero labels gather once over 850 ms with 0/100/200 ms offsets. They remain visible throughout. Reduced motion removes both that movement and smooth scrolling. Native scroll ownership is preserved; there are no scroll-triggered effects or continuous loops. Print hides navigation/enhancement controls and retains the reading content.

## Do's and Don'ts

### Do:

- **Do** keep source names and relationships visible.
- **Do** use supplied fixed logo geometry and outlined artwork.
- **Do** use measured spacing, flat surfaces and readable contrast.
- **Do** retain native scrolling, keyboard access and no-JavaScript content.
- **Do** label all concept applications and demonstration information.

### Don't:

- **Don't** stretch, rotate, redraw or add effects to the logo.
- **Don't** use default violet text hover on dark ink.
- **Don't** turn generated concept lettering into shipping image crops.
- **Don't** use colour, motion or icons as the sole carrier of meaning.
- **Don't** present illustrative explanations as live OpenJM output or authority to change records.
