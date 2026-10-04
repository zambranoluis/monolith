# Monolith verification record

Local delivery completed on 3 October 2026 in America/Caracas; evidence timestamps are UTC on 4 October. These results apply to this static identity/showcase and its demonstration data.

## Browser acceptance

The standard suite completed **40/40 checks with zero errors** in `playwright/runs/2026-10-04T02-14-17-875Z-27584/report.json`.

| Coverage | Actual result |
| --- | --- |
| Chromium, Firefox, WebKit at 1440 × 1000, 768 × 1024, 390 × 844 and 320 × 800 | All layouts fit the viewport; local images and fonts loaded; no external runtime requests or page errors |
| Light and dark states | Axe WCAG 2/2.1/2.2 AA tags: zero violations in all 15 standard audits |
| Both, brief-only, records-only and no sources | Correct fixed responses and citations; page-only excludes recorded due dates, records-only excludes the page’s opening date |
| Citations | Native links reach the source page/records |
| Downloads | Six resource links return nonempty content; downloaded brand kit matches the local bundle byte-for-byte |
| Keyboard | Skip link activates, all six chapters are tab-reachable, checkbox Space toggles sources, visible focus survives |
| Reduced motion | No index animation; native scrolling uses auto behaviour |
| No JavaScript, all three engines | Six chapters, document, records, explanation, citations and downloads remain readable; source inputs are disabled with explanatory copy |
| Small-size logos | Retained proof at symbol widths 16/24/48/96 px, lockup 120 px, endorsed lockup 200 px, in primary/mono/reversed variants |

The first run exposed compact overflow from intrinsic print-artwork widths. Zero minimum grid widths and constrained artwork fixed it. Windows WebKit skipped ordinary links until explicit zero tab stops were supplied; static and generated links now retain those stops. Firefox’s no-JavaScript asynchronous evaluation and a disabled-fieldset inspection also caused test-runner failures; tests now inspect the real input and use native scrolling. Interrupted/failed runs are preserved; they are not counted as successful evidence.

## Actual 200% zoom

`playwright/runs/2026-10-04T02-19-05-499Z-zoom/report.json` records a real `chrome.tabs.setZoom(2)` in an isolated Chromium profile. The viewport changes from **1440 to 720 CSS px**, device-pixel ratio from 1 to 2, with page scroll width 720. Source selection and light/dark controls work, and axe finds zero violations.

The initial zoom full-page screenshot methods produced truncated, repeated or blank output. These were rejected as invalid visual evidence. The final valid `chromium-200-percent.png` combines CDP native viewport captures at measured scroll offsets, without scaling or content alteration. It measures 1440 × 25078 physical px and was viewed from document top to footer; original tiles and offsets are retained in that run. This is a capture-method limitation, distinct from the passing layout/interactions.

## Finish-review corrections

The focused suite completed **6/6 cross-browser checks** in `playwright/runs/2026-10-04T02-26-10-828Z-finish/report.json`, covering desktop and mobile in all three engines after the final corrections:

- The index illustration has an explicit image role and descriptive accessible name. The earlier axe `aria-prohibited-attr` manual result is gone.
- Dark workspace index-row hover uses light accent text. All six light and dark-hover audits have zero violations; computed hover colour is `rgb(194, 179, 255)`.
- Final affected layouts still fit their viewports. Desktop/mobile full-page and dark-hover captures are retained and were viewed.

The standard suite now includes dark-hover audit coverage for future reruns. Use `node scripts/verify-final.mjs` to repeat only the final affected checks.

## Contrast and manual findings

| Text / ground | Measured ratio |
| --- | --- |
| Ink / paper | 17.45:1 |
| Muted / paper | 5.74:1 |
| White / index violet | 6.51:1 |
| Deep violet / lilac | 8.00:1 |
| Dark secondary / ink | 10.48:1 |
| Dark active / ink | 9.29:1 |
| Construction-grid labels / surface | 16.32:1 |

Axe still requests manual colour inspection for SVG construction labels and overlapped graphic text; their fixed colours and rendered backgrounds were inspected. Automated zero violations does not certify complete WCAG conformance. Screen-reader/user testing and real device/browser testing are separate remaining work.

Impeccable’s detector ran **once** on the finished HTML/CSS/JS. Its eight findings are retained in ignored `.impeccable/review/detector.json`. The dark-hover warning was a real issue and was fixed. The remaining findings concern misinferred light backgrounds for dark text, intentional display leading, segmented-control framing, table wrapper padding already provided by cells, and the explicit index grid. Their source/computed treatments and final captures were reviewed; none was silently treated as a detector pass. The detector was not rerun.

The documented [fallback finish review](../.impeccable/review/finish-review.md) identified two material fixes. The [verdict](../.impeccable/review/finish-verdict.md) scored both resolved and ended with **disposition: ship**, at that fix-list scope. Independent reviewers were unavailable; this is the installed in-thread fallback, not independent validation.

## Asset and delivery checks

- Twelve logo SVGs contain outlined editable paths with no live-text/font dependency. Twelve logo PNGs contain both visible artwork and genuine transparent regions; reversed logos retain white ink.
- Ten app PNGs use an intentional solid violet ground. SVG favicon, three-size ICO and web manifest are present.
- Four ZIP archives were opened with Python’s standard `zipfile` reader; every entry passed its CRC check. The final rebuilt bundles are checked again after documentation and token changes.
- Impeccable provenance scan inspected 25 rasters: **zero missing provenance**. Three concepts carry exact built-in generation prompts; production PNGs carry authored-vector origins. `assets/PROVENANCE.json` and font licences are included.
- `npm run check` verifies resources, anchors, documentation links, outline/transparency and guide/token consistency. JavaScript syntax, archive integrity, dependency audit and diff hygiene are final delivery gates.

Final delivery gates passed: 34 local HTML resources and anchors; new documentation links; twelve transparent logo PNGs; outlined SVGs; JSON/ICO/font structure; copied-guide and generated-token consistency; all four rebuilt ZIP CRC checks (complete brand bundle: 53 entries); JavaScript syntax; `npm audit` with zero vulnerabilities; `git diff --check` with no whitespace errors. Git emitted only the existing LF/CRLF conversion notices. A fresh browser download of the rebuilt brand bundle matched its local bytes. The preview returns 404 for private repository documents and encoded traversal attempts while serving the showcase and public assets normally.

## Remaining boundaries

No database, authentication, live OpenJM service, record writing, synchronisation, production hosting or commercial launch was implemented or verified. No tests used real customer information. No physical print proof, trademark clearance, real Safari-on-Apple-device check, or assistive-technology user study was performed. These do not prevent the requested local identity delivery.

The pre-existing `AGENTS.md` links target an absent `AGENTS/` directory. That instruction-system debt was left untouched and is explicitly recorded in README; new project-owned documentation links are checked independently.
