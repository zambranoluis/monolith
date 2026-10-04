"""Build editable, font-independent wordmark outlines and compressed self-hosted fonts."""
from pathlib import Path
import json
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.boundsPen import BoundsPen

root = Path(__file__).resolve().parents[1]
for name in ('Archivo', 'SourceSans3'):
    font = TTFont(root / 'assets/fonts' / (name + '.ttf'))
    font.flavor = 'woff2'
    font.save(root / 'assets/fonts' / (name + '.woff2'))

def outline(name, text, weight, size):
    font = TTFont(root / 'assets/fonts' / (name + '.ttf'))
    axes = {'wght': weight}
    if name == 'Archivo': axes['wdth'] = 100
    font = instantiateVariableFont(font, axes)
    glyphs = font.getGlyphSet()
    cmap = font.getBestCmap()
    scale = size / font['head'].unitsPerEm
    x = 0
    paths = []
    bounds = []
    for ch in text:
        glyph = glyphs[cmap[ord(ch)]]
        pen = SVGPathPen(glyphs)
        glyph.draw(pen)
        bp = BoundsPen(glyphs)
        glyph.draw(bp)
        if bp.bounds: bounds.append(bp.bounds[3] * scale)
        paths.append(f'<path transform="translate({x:.3f} 0) scale({scale:.6f} {-scale:.6f})" d="{pen.getCommands()}"/>')
        x += glyph.width * scale
        x -= size * .025 if name == 'Archivo' else 0
    return ''.join(paths), x, max(bounds)

word, width, cap = outline('Archivo', 'Monolith', 700, 88)
endorsement, ew, ec = outline('SourceSans3', 'By CrimsonTide', 400, 21)
symbol = '<path d="M0 8H12V40H20V20H32V40H40V0H52V48H0Z"/>'
logo = root / 'assets/logo'
logo.mkdir(parents=True, exist_ok=True)
def svg(w,h,body,label):
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w:.3f} {h:.3f}" role="img" aria-label="{label}"><title>{label}</title>{body}</svg>\n'
for variant, ink, accent in [('primary','#191922','#6038E8'),('mono','#191922','#191922'),('reversed','#FFFFFF','#FFFFFF')]:
    (logo / f'monolith-symbol-{variant}.svg').write_text(svg(52,48,f'<g fill="{accent}">{symbol}</g>','Monolith indexed symbol'),encoding='utf-8')
    (logo / f'monolith-wordmark-{variant}.svg').write_text(svg(width+2,cap+2,f'<g fill="{ink}" transform="translate(0 {cap+1})">{word}</g>','Monolith'),encoding='utf-8')
    body = f'<g fill="{accent}" transform="translate(0 0) scale(1.5)">{symbol}</g><g fill="{ink}" transform="translate(102 {cap+1})">{word}</g>'
    (logo / f'monolith-lockup-{variant}.svg').write_text(svg(102+width+2,74,body,'Monolith'),encoding='utf-8')
    body += f'<g fill="{ink}" transform="translate(104 101)">{endorsement}</g>'
    (logo / f'monolith-endorsed-{variant}.svg').write_text(svg(102+width+2,108,body,'Monolith. By CrimsonTide.'),encoding='utf-8')
# Production stationery, flat printable vectors rather than generated screenshots.
poster = f'<rect width="720" height="960" fill="#6038E8"/><g fill="#FFFFFF" transform="translate(64 60) scale(1.4)">{symbol}</g><g fill="#FFFFFF" transform="translate(64 180) scale(.8)">{word}</g><path d="M64 270H656M64 820H656" stroke="#FFFFFF" stroke-width="1"/><text x="64" y="400" fill="#FFFFFF" font-family="Archivo, sans-serif" font-size="70" font-weight="700">Work,</text><text x="64" y="480" fill="#FFFFFF" font-family="Archivo, sans-serif" font-size="70" font-weight="700">in context.</text><text x="64" y="865" fill="#FFFFFF" font-family="Source Sans 3, sans-serif" font-size="22">Pages. Records. A clearer next step.</text><text x="64" y="905" fill="#FFFFFF" font-family="Source Sans 3, sans-serif" font-size="18">By CrimsonTide</text>'
# Outline stationery copy too, ensuring portable editable artwork.
def replace_text(body, text, x, y, size, family, weight=400, color='#FFFFFF'):
    paths, _, _ = outline(family, text, weight, size)
    import re
    body = re.sub(r'<text[^>]*>'+re.escape(text)+r'</text>',f'<g fill="{color}" transform="translate({x} {y})">{paths}</g>',body)
    return body
for text,x,y,size,family,weight in [('Work,',64,400,70,'Archivo',700),('in context.',64,480,70,'Archivo',700),('Pages. Records. A clearer next step.',64,865,22,'SourceSans3',400),('By CrimsonTide',64,905,18,'SourceSans3',400)]:
    poster=replace_text(poster,text,x,y,size,family,weight)
applications=root/'assets/applications'
applications.mkdir(exist_ok=True)
(applications/'monolith-poster.svg').write_text(svg(720,960,poster,'Monolith Work, in context poster'),encoding='utf-8')
card='<rect width="640" height="400" fill="#FFFFFF"/><rect x="0" y="0" width="640" height="16" fill="#6038E8"/><g fill="#6038E8" transform="translate(40 48)">'+symbol+'</g><g fill="#191922" transform="translate(40 175) scale(.68)">'+word+'</g><path d="M40 215H600" stroke="#DCDCE5"/><text x="40" y="262">Harbor Library / Opening brief</text><text x="40" y="304">Work, in context.</text><text x="40" y="353">By CrimsonTide</text>'
for text,x,y,size in [('Harbor Library / Opening brief',40,262,22),('Work, in context.',40,304,24),('By CrimsonTide',40,353,18)]:
    card=replace_text(card,text,x,y,size,'SourceSans3',400,'#191922')
(applications/'monolith-index-card.svg').write_text(svg(640,400,card,'Monolith fictional Harbor Library index card'),encoding='utf-8')
(logo/'geometry.json').write_text(json.dumps({'viewBox':[0,0,52,48],'strokeWidth':12,'gap':8,'base':8,'tops':[8,20,0],'clearSpace':12,'minimumSymbolDigital':16,'minimumLockupDigital':120,'minimumEndorsedDigital':200,'minimumSymbolPrintMm':5,'minimumLockupPrintMm':30,'minimumEndorsedPrintMm':50,'wordmark':'Archivo variable at wght 700, wdth 100; glyph outlines; -0.025em optical spacing'},indent=2)+'\n',encoding='utf-8')
print('Built outlined logos, stationery, and WOFF2 fonts.')
