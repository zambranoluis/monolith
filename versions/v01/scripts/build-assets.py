"""Optional asset authoring tool; the presentation needs no build step.

Requires fonttools and brotli. Run from any directory. Generates the local
WOFF2 font and self-contained SVG artwork from the checked-in Sora source.
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
FONT = ASSETS / "fonts" / "Sora-Variable.ttf"
CHARCOAL, ORANGE, WHITE = "#20211f", "#ff7900", "#f6f7f8"

# 40-unit upright ribbons; the center descends at 45 degrees.
MARK = "M0 160V0H40L96 56L152 0H192V160H152V56L96 112L40 56V160Z"
# Two narrow transparent cuts leave the silhouette intact while separating
# the crossing band from the uprights. No background-colored patches.
CUTS = "M30 36L58 64M134 28L162 0"


def symbol(color, small=False):
    if small:
        return f'<path fill="{color}" d="{MARK}"/>'
    return (
        '<defs><mask id="weave" maskUnits="userSpaceOnUse" x="0" y="0" width="192" height="160">'
        '<rect width="192" height="160" fill="white"/>'
        f'<path d="{CUTS}" fill="none" stroke="black" stroke-width="7"/>'
        '</mask></defs>'
        f'<path fill="{color}" d="{MARK}" mask="url(#weave)"/>'
    )


def svg(name, box, title, content):
    (ASSETS / name).write_text(
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{box}" role="img" aria-labelledby="title">'
        f'<title id="title">{title}</title>{content}</svg>\n', encoding="utf-8"
    )


def make_wordmark():
    font = instantiateVariableFont(TTFont(FONT), {"wght": 600})
    glyphs = font.getGlyphSet()
    cmap = font.getBestCmap()
    pen, bounds = SVGPathPen(glyphs), BoundsPen(glyphs)
    cursor = 0
    for letter in "monolith":
        glyph = glyphs[cmap[ord(letter)]]
        transform = (1, 0, 0, 1, cursor, 0)
        glyph.draw(TransformPen(pen, transform))
        glyph.draw(TransformPen(bounds, transform))
        cursor += glyph.width
    x0, y0, x1, y1 = bounds.bounds
    scale = 996 / (x1 - x0)
    height = (y1 - y0) * scale + 4
    path = pen.getCommands()

    def lettering(color):
        return f'<path fill="{color}" transform="translate({2 - x0 * scale:.5f} {2 + y1 * scale:.5f}) scale({scale:.8f} {-scale:.8f})" d="{path}"/>'

    for name, color in [("charcoal", CHARCOAL), ("white", WHITE)]:
        svg(f"wordmark-{name}.svg", f"0 0 1000 {height:.5f}", "monolith — Sora SemiBold wordmark", lettering(color))
        # Optically align lettering with a 160-unit mark, with a band-width gap.
        word_scale = 700 / 1000
        word_height = height * word_scale
        lockup = f'<g transform="translate(8 25)">{symbol(color)}</g><g transform="translate(248 {(210 - word_height) / 2:.5f}) scale({word_scale})">{lettering(color)}</g>'
        svg(f"lockup-{name}.svg", "0 0 956 210", "monolith — Common Thread primary lockup", lockup)


def main():
    font = TTFont(FONT)
    options = subset.Options()
    options.flavor = "woff2"
    subsetter = subset.Subsetter(options=options)
    subsetter.populate(unicodes=list(range(0x20, 0x100)) + list(range(0x2000, 0x2070)))
    subsetter.subset(font)
    font.flavor = "woff2"
    font.save(ASSETS / "fonts" / "sora-latin-variable.woff2")
    make_wordmark()
    svg("symbol-charcoal.svg", "0 0 192 160", "Monolith woven M — charcoal", symbol(CHARCOAL))
    svg("symbol-white.svg", "0 0 192 160", "Monolith woven M — cool white", symbol(WHITE))
    svg("symbol-small.svg", "0 0 192 192", "Monolith simplified small-size M", f'<g transform="translate(0 16)">{symbol(CHARCOAL, True)}</g>')
    svg("app-icon.svg", "0 0 256 256", "Monolith app icon", f'<rect width="256" height="256" rx="56" fill="{ORANGE}"/><g transform="translate(48 61.333) scale(0.833333)">{symbol(CHARCOAL, True)}</g>')
    svg("bands-cross.svg", "0 0 800 640", "Common Thread — intersecting bands", f'<defs><mask id="crossing"><rect width="800" height="640" fill="white"/><path d="M200 760L920 40" stroke="black" stroke-width="180"/></mask></defs><rect width="800" height="640" fill="{CHARCOAL}"/><path d="M-120 600L600-120M200 760L920 40" stroke="{ORANGE}" stroke-width="140"/><g mask="url(#crossing)"><path d="M-120 40L720 880" stroke="{CHARCOAL}" stroke-width="180"/><path d="M-120 40L720 880" stroke="{WHITE}" stroke-width="140"/></g>')
    svg("bands-repeat.svg", "0 0 640 640", "Common Thread — modular repeating M", f'<defs><pattern id="repeat" width="224" height="200" patternUnits="userSpaceOnUse"><path transform="translate(16 20)" fill="{CHARCOAL}" d="{MARK}"/></pattern></defs><rect width="640" height="640" fill="{ORANGE}"/><rect width="640" height="640" fill="url(#repeat)"/>')
    svg("bands-crop.svg", "0 0 1200 420", "Common Thread — expanded M geometry", f'<rect width="1200" height="420" fill="{WHITE}"/><path transform="translate(120 -240) scale(5)" fill="{CHARCOAL}" d="{MARK}"/><path d="M0 356H1200" stroke="{ORANGE}" stroke-width="64"/>')
    print("Generated local Sora WOFF2 and 11 SVG assets.")


if __name__ == "__main__":
    main()
