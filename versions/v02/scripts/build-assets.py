"""Optional authoring only: fonttools + brotli in an isolated environment.

Run after acquiring the original fonts documented in assets/fonts/README.md.
The delivered page uses generated local assets without installation or a build.
"""
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.transformPen import TransformPen
from fontTools import subset

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"
FONTS = ASSETS / "fonts"
CHALK, COBALT, INK, CORAL, CITRUS = "#F4F1E7", "#2446DB", "#192329", "#D75565", "#D4DA67"


def symbol(color, small=False):
    stroke = 12 if small else 8
    return (
        f'<g fill="{color}" stroke="{color}" stroke-width="{stroke}">'
        '<path d="M108 20V176M24 80H196M60 80V112M156 80V64" fill="none"/>'
        '<path d="M24 112H96A36 36 0 0 1 24 112Z" stroke="none"/>'
        '<path d="M120 64A36 36 0 0 1 192 64Z" stroke="none"/>'
        '</g>'
    )


def svg(name, box, title, content):
    (ASSETS / name).write_text(
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{box}" role="img" aria-labelledby="title">'
        f'<title id="title">{title}</title>{content}</svg>\n', encoding="utf-8"
    )


def make_lettering():
    font = instantiateVariableFont(TTFont(FONTS / "InstrumentSans-Variable.ttf"), {"wght": 600, "wdth": 100})
    glyphs, cmap = font.getGlyphSet(), font.getBestCmap()
    pen, bounds, cursor = SVGPathPen(glyphs), BoundsPen(glyphs), 0
    for letter in "monolith":
        glyph = glyphs[cmap[ord(letter)]]
        transform = (1, 0, 0, 1, cursor, 0)
        glyph.draw(TransformPen(pen, transform))
        glyph.draw(TransformPen(bounds, transform))
        cursor += glyph.width - 12
    x0, y0, x1, y1 = bounds.bounds
    scale = 996 / (x1 - x0)
    height = (y1 - y0) * scale + 4

    def lettering(color):
        return f'<path fill="{color}" transform="translate({2-x0*scale:.5f} {2+y1*scale:.5f}) scale({scale:.8f} {-scale:.8f})" d="{pen.getCommands()}"/>'

    for variant, color in [("primary", INK), ("reversed", CHALK)]:
        svg(f"wordmark-{variant}.svg", f"0 0 1000 {height:.5f}", f"Monolith wordmark — {variant}, outlined Instrument Sans", lettering(color))
        word_scale = .7
        svg(f"lockup-{variant}.svg", "0 0 1000 220", f"Monolith Everyday Orbit lockup — {variant}",
            f'<g transform="translate(4 12)">{symbol(color)}</g><g transform="translate(272 {(220-height*word_scale)/2:.5f}) scale({word_scale})">{lettering(color)}</g>')


def main():
    for source, target in [("InstrumentSans-Variable.ttf", "instrument-sans-latin.woff2"), ("Newsreader-Italic-Variable.ttf", "newsreader-italic-latin.woff2")]:
        font = TTFont(FONTS / source)
        options = subset.Options()
        options.flavor = "woff2"
        subsetter = subset.Subsetter(options=options)
        subsetter.populate(unicodes=list(range(0x20, 0x100)) + list(range(0x2000, 0x2070)) + [0x2192, 0x2190])
        subsetter.subset(font)
        font.flavor = "woff2"
        font.save(FONTS / target)
    make_lettering()
    for variant, color in [("primary", INK), ("reversed", CHALK)]:
        svg(f"symbol-{variant}.svg", "0 0 220 196", f"Monolith balance symbol — {variant}", symbol(color))
    svg("symbol-small.svg", "0 0 220 220", "Monolith simplified small-size balance symbol", f'<g transform="translate(0 12)">{symbol(INK, True)}</g>')
    svg("app-icon.svg", "0 0 256 256", "Monolith cobalt app icon", f'<rect width="256" height="256" rx="56" fill="{COBALT}"/><g transform="translate(32 43) scale(.87)">{symbol(CHALK, True)}</g>')
    svg("mobile-pattern-chalk.svg", "0 0 800 640", "Everyday Orbit — suspended weights on chalk", f'<rect width="800" height="640" fill="{CHALK}"/><g fill="none" stroke="{COBALT}" stroke-width="3"><path d="M450 0V110M130 200L640 80M210 182V320M580 94V250M210 430V480M90 480H400M120 480V535M380 480V565"/></g><path d="M90 320H330A120 120 0 0 1 90 320Z" fill="{COBALT}"/><circle cx="580" cy="310" r="60" fill="{CORAL}"/><path d="M45 535A75 75 0 0 1 195 535Z" fill="{CITRUS}"/><rect x="330" y="565" width="100" height="60" rx="30" fill="{COBALT}"/>')
    svg("mobile-pattern-cobalt.svg", "0 0 800 640", "Everyday Orbit — suspended weights on cobalt", f'<rect width="800" height="640" fill="{COBALT}"/><g fill="none" stroke="{CHALK}" stroke-width="3"><path d="M380 0V130M100 100L700 170M160 107V240M580 156V390M160 360V450M60 450L330 480M90 453V535M300 477V555"/></g><circle cx="160" cy="300" r="60" fill="{CITRUS}"/><path d="M450 390A130 130 0 0 1 710 390Z" fill="{CHALK}"/><path d="M25 535H155A65 65 0 0 1 25 535Z" fill="{CORAL}"/><rect x="260" y="555" width="80" height="60" rx="30" fill="{CHALK}"/>')
    print("Generated two local WOFF2 fonts, eight outlined identity SVGs, and two mobile patterns.")


if __name__ == "__main__":
    main()
