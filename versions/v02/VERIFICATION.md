# v02 verification

Verified locally on 2026-10-04. This records the proposed identity presentation, not an application, integration, brand adoption, or deployment.

## Browser evidence

One combined desktop/mobile inspection, one correction batch, and one confirmation pass. Ignored `.impeccable/review/` contains the browser runner, initial and final results, captures, detector output, finish review, and scored verdict. Browser dependencies were reused read-only from an existing workspace; none were added to this project.

| Check | Observed result |
| --- | --- |
| Chromium 153, widths 320, 390, 768, 1440, 1920 | Six sections, both local fonts loaded, all images loaded, no document or measured HTML overflow, canvas at most 84rem. |
| 1440px desktop and 390px mobile | Opening, product idea, balance study, toolkit, applications, downloads, and full-page captures inspected together. Native flow and stacked mobile composition preserved. |
| 200% root text at 390 and 1440 | After correction, text reflows and document width stays within viewport. Long display/specimen words can wrap; mobile palette collapses further. This checks text enlargement, not browser zoom. |
| Axe WCAG 2 A/AA and WCAG 2.1 AA tags | Zero automated violations at all five Chromium widths; not a complete accessibility certification. |
| Keyboard | Skip link is first; Enter focuses main and the balance destination. All native links and Rebalance expose visible focus. Space cycles arrangements and retains button focus. |
| Three arrangements | Cycle 1 → 2 → 3 → 1 targets the authored transforms. Three 450ms animations are observed per ordinary activation; polite atomic status reports the arrangement. |
| Rapid interruption | Seven rapid activations during an in-flight transition retain the sampled visual frame, leave only three latest animations, and settle to the latest arrangement. |
| Reduced motion | No animation on activation, immediately correct transforms (numeric tolerance 0.000001). Changing the preference during animation cancels it after the browser’s change event. |
| Disabled JavaScript | Complete default three-form composition, all six sections, hidden Rebalance button, and native balance navigation. |
| Downloads | Eight identity SVGs and two mobile patterns each produce a nonempty successful HTTP download. All contain no font-dependent lettering or external resources. |
| HTTP and `/monolith/` paths | Referenced assets and native return target resolve beneath the prefix. Hub → v02 → hub verified after directory registration. |
| Direct-file opening | Both local fonts and all images load, Rebalance works, native return reaches root `index.html`. Downloads were exercised over HTTP. |
| Firefox 155 at 390px | Both fonts load, no horizontal overflow, Rebalance reaches arrangement 2. Focused check, not a full Firefox visual audit. |
| Runtime/network | No page errors or HTTP error responses observed. |
| Text contrast | Ink/chalk 14.14:1; ink/citrus 10.67:1; chalk/cobalt 6.25:1. Ink/coral 4.09:1; ordinary text is kept off coral. |

## Corrections and Impeccable findings

The initial pass found a 437px document at 390px with 200% text: intrinsic swatch tracks and a long italic specimen caused overflow. The correction adds bounded auto-fit swatches and wrapping for long headings/specimen words. The final pass measures a 390px document with no overflowing measured HTML content. Initial reduced-motion assertions compared rounded computed matrices with full-precision matrices and checked preference changes before event delivery. Numerical tolerance and event-aware checks corrected those verification assertions; the implemented reduced-motion mechanism passed without a product-code change.

Impeccable’s detector ran once on the finished HTML/CSS/script. It reported 11 cramped-padding warnings, 2 overused-font warnings, 1 cream-palette warning, and 34 hub-design color/type advisories. The explicit approved brief owns Instrument Sans and chalk. The design advisories used the root hub’s fallback before v02’s own post-review DESIGN.md existed. Padding findings were checked against rendered insets: the colored sections contain a padded centered canvas; download link children own 24px vertical padding; the hero foot has 32px desktop/24px mobile vertical padding. No rule was disabled and no clean second detector result is claimed.

Finish review and documentation used Impeccable’s in-thread fallback because the active harness exposes no subagent capability. The final disposition is **ship for the two scored fixes**, with no open items in that fix list. This is not an independent external design review.

## Preview, static checks, and limits

The user-managed Python service on `127.0.0.1:3301` was healthy and served the GitHub parent directory, so `/monolith/versions/v02/` was reused. The existing port-3300 service returned empty responses and was left intact. No preview process was created or stopped.

Relative local paths, document targets, SVG structure, original font hashes, metadata JSON, new-file whitespace, and `git diff --check` were reviewed. The final static check covers 32 shipping files, 74 local references, and 10 SVGs. Newly added files are checked separately because ordinary Git diff omits untracked content. Upstream font licenses retain their original bytes, including existing whitespace; authored files pass the whitespace check. v01, hub styles, and the existing `.codex/config.toml` change are preserved.

The routed `AGENTS/` guides remain absent as already recorded by the root README. Safari, manual screen-reader testing, physical print output, browser zoom, and live hosting were not verified. Application functionality, integration, publishing, and permanent brand adoption are outside this version.
