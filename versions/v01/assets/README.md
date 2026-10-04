# Common Thread assets

All logo and graphic SVGs are original code-authored artwork for the approved Monolith v01 plan. The wordmark uses Sora SemiBold (weight 600), converted to paths. SVGs have no linked fonts, raster images, scripts, or remote resources.

| Asset | Use |
| --- | --- |
| [lockup-charcoal.svg](lockup-charcoal.svg) | Primary horizontal logo on orange or cool white. |
| [lockup-white.svg](lockup-white.svg) | Reversed logo on charcoal. |
| [wordmark-charcoal.svg](wordmark-charcoal.svg) | Standalone lowercase outlined wordmark. |
| [wordmark-white.svg](wordmark-white.svg) | Reversed outlined wordmark. |
| [symbol-charcoal.svg](symbol-charcoal.svg) | Master woven symbol on orange or cool white. |
| [symbol-white.svg](symbol-white.svg) | Reversed woven symbol. |
| [symbol-small.svg](symbol-small.svg) | Simplified symbol without weave cuts; use below 48px high, minimum 16px. |
| [app-icon.svg](app-icon.svg) | Simplified symbol on a rounded orange square. |
| [bands-cross.svg](bands-cross.svg) | Over-and-under band composition. |
| [bands-repeat.svg](bands-repeat.svg) | Repeating modular M pattern. |
| [bands-crop.svg](bands-crop.svg) | Large cropped symbol and orange band. |

Standalone logos have transparent backgrounds. The app icon and graphic compositions contain palette backgrounds by design. Keep aspect ratios unchanged, give logos one band-width of external clear space, and use the full lockup at 160px wide or larger. White assets need a dark preview background.

## Sora provenance

Downloaded on 2026-10-04 from the [Google Fonts Sora directory](https://github.com/google/fonts/tree/main/ofl/sora):

- Source: [Sora variable TTF](https://raw.githubusercontent.com/google/fonts/main/ofl/sora/Sora%5Bwght%5D.ttf), checked in as `fonts/Sora-Variable.ttf`.
- License: [SIL Open Font License 1.1](fonts/OFL.txt), copied unchanged from the same directory. Copyright attribution remains in that file.
- Source SHA-256: `84ff7096ae3ec6c8be47d906d1a0ba4de7f2ce78c615275c77301964a316e16c`.
- Web derivative: `fonts/sora-latin-variable.woff2`, a 27,960-byte Latin and punctuation subset retaining the 100–800 weight axis. The presentation declares normal style only.

The font is bundled locally and is not fetched from a font service at runtime. The source font and license are retained for reproducibility.

## Rebuild optional assets

The checked-in files are ready to use; this is an authoring step, not a site build requirement. In a Python environment with `fonttools` and `brotli`, run:

```powershell
python versions/v01/scripts/build-assets.py
```

The script resolves paths from its own location, writes the WOFF2 derivative, converts Sora 600 glyph outlines, and regenerates all eleven SVGs. It does not alter the upstream TTF or license. All brand assets remain v01 proposals; the presentation does not establish final product-wide branding.
