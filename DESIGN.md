---
name: Monolith concept hub
description: A quiet, readable directory for independently designed concepts.
colors:
  background: "#fafafa"
  surface: "#ffffff"
  text: "#202020"
  muted: "#595959"
  border: "#d9d9d9"
typography:
  display:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "clamp(2rem, 5vw, 3rem)"
    fontWeight: 650
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  title:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "1.5rem"
    fontWeight: 650
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  body:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "1rem"
    lineHeight: 1.6
spacing:
  text-gap: "0.5rem"
  section-heading-gap: "1.25rem"
  header-padding: "1.5rem"
  empty-state-padding: "clamp(1.25rem, 4vw, 2rem)"
  footer-gap: "4rem"
components:
  empty-state:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    padding: "{spacing.empty-state-padding}"
---

# Hub design

## Overview

**Creative North Star: "A quiet directory"**

The hub uses simple system typography, neutral colors, and a single responsive column to introduce and organize concepts. The directory is the focus; the initial empty state states plainly that no concepts exist.

**Scope rule.** This document and the root stylesheet apply only to the hub. Every future concept gets an independent `DESIGN.md`, identity, and build method. The hub is not a visual starter for those concepts.

## Colors

Use the frontmatter's background for the page, surface for the empty-state panel, text for headings and links, muted for supporting copy, and border for thin separators. Text contrast against both backgrounds exceeds 4.5:1. Selection reverses the text and surface colors.

## Typography

Use the system stack throughout the hub. The main heading scales from 2rem to 3rem with balanced wrapping. Section headings use the title role. Introduction copy is 1.125rem; ordinary text is 1rem and footer copy is 0.875rem. Supporting prose is limited to 65 characters per line where space permits. Body text inherits the browser's default size, preserving user font preferences.

## Layout

Header, main, and footer share a centered container capped at 58rem. Gutters grow fluidly from 1.25rem to 3rem. The header wraps when necessary. The introduction has generous fluid block spacing, followed by the concept directory and a quiet footer. No fixed-height content regions or breakpoint-specific layout switches are needed.

The empty-state inset grows from 1.25rem to 2rem; it measured 20px at a 390px viewport and 32px at 1440px. Native scrolling and normal document flow remain in place.

## Elevation & Depth

Use flat surfaces and one-pixel neutral borders. The hub has no shadows, gradients, imagery, or decorative layers.

## Shapes

Panels are rectangular with square corners. Borders delineate the empty state and the header and footer edges.

## Components

- Introduction: one `h1` and a short description of the independent concepts.
- Concept directory: a labeled section with an honest empty state. When concepts exist, replace the empty panel with a semantic list of version number, name, description, and ordinary page link; do not add placeholder entries.
- Navigation: an underlined native link to the directory, with a thicker underline on hover and a two-pixel outline offset by five pixels on keyboard focus.
- Skip link: hidden above the viewport until focused; activation moves focus to the main content. Fragment navigation to the directory also moves focus to its section.
- Footer: supporting text separated by a thin border.

The hub is entirely static. No animation or JavaScript is required; its content and navigation work with scripting disabled.

## Do's and Don'ts

- Do keep the introduction short and the directory easy to find.
- Do preserve visible keyboard focus, semantic headings, and readable text contrast.
- Do add concept links only after their real pages exist.
- Don't apply this hub's design tokens or components to concept versions.
- Don't invent Monolith application claims or present unfinished concepts as available.
