# v01 verification

Verified locally on 2026-10-04. This records the presentation, not a working Monolith application or a published deployment.

## Browser evidence

The review used one combined desktop/mobile inspection, a batch of corrections, and one confirmation pass. Local captures and detailed results are ignored under `.impeccable/review/`; hub captures and the one-off browser runner are under the root `.impeccable/review/`.

| Check | Observed result |
| --- | --- |
| Chromium 153: widths 320, 390, 768, 1440, 1920 | Six sections present, all images loaded, local Sora loaded, no horizontal overflow. |
| 1440px desktop and 390px mobile screenshots | Inspected opening, all sections, full-page composition, logo legibility, application captions, and wrapping. |
| 200% text size at 390px | Document width stays at 390px; content reflows. |
| Axe WCAG 2 A/AA and WCAG 2.1 AA tags | Zero automated violations at all five Chromium widths; not a complete accessibility certification. |
| Keyboard | Skip link is first, visible focus is present, Enter focuses main and each of the five section destinations. |
| Eight download links | Each produced a nonempty SVG download with no font-dependent text elements and no download failure. |
| No JavaScript + reduced motion | Six sections and eight downloads present; native section navigation and hub return work. No authored animation exists. |
| `/monolith/` prefix | All referenced local assets return HTTP 200; the hub links to v01 and v01 returns to the hub. |
| Direct `file://` opening | Opening artwork and local font load. Downloads were verified over HTTP. |
| Browser runtime/network errors | None observed. |
| Firefox 155 at 390px | Font loads and no horizontal overflow; this was a focused check, not a full Firefox visual audit. |
| Hub at 1440px and 390px | Neutral styling preserved, v01 listed, no horizontal overflow. |
| Text contrast | Charcoal/orange 6.14975:1; charcoal/cool-white 15.07483:1. |

## Corrections and Impeccable findings

The initial pass found intrinsic grid overflow at 320px and 200% text size, mobile application captions colliding with the next stage, undersized labels, and a misaligned band overlap. One correction batch addressed these. Confirmation found no overflow, labels below 12px, or caption collisions in the measured viewport matrix. The cool-white contrast label was corrected to 15.07:1.

Impeccable's detector ran once against the v01 HTML and stylesheet. Small-text findings were corrected. Its static cramped-padding and flat-hierarchy findings were checked against browser rendering: the 1440px canvas has 65px outer gutters, swatches have 36px padding, the graphic section has 115.2px vertical padding, the app-icon stage has 32px padding, and the workspace stage has 72px padding. Section headings use the fluid heading scale, distinct from body copy. These static findings do not describe the rendered layout. No detector rules were disabled, and no clean second detector result is claimed.

Impeccable finish review and documentation used the in-thread fallback because the harness has no subagent capability. The final verdict is **ship for the five scored corrections**, with no open items in that fix list. This is not an independent external design review.

## Static checks and limits

Local asset, SVG structure, relative-link, metadata JSON, documentation target, and whitespace checks accompany `git diff --check`. The new folder's whitespace is checked separately because ordinary Git diff omits untracked files. The user's existing AGENTS.md and `.codex/config.toml` changes were preserved.

The routed `AGENTS/` instruction documents remain absent, as the root README already records. Those pre-existing links were not recreated. Safari, assistive-technology manual testing, physical print output, live hosting, backend behavior, and OpenJM integration were not verified; the latter three are outside this concept's implementation scope.
