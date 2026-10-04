import assert from 'node:assert/strict';
import { readFile, stat, readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
const html=await readFile('index.html','utf8');
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
assert.equal(ids.length,new Set(ids).size,'Duplicate HTML IDs');
let localLinks=0;
for(const [,value] of html.matchAll(/\b(?:src|href)="([^"]+)"/g)) {
  if(value.startsWith('#')) assert(ids.includes(value.slice(1)),`Missing anchor ${value}`);
  else if(!/^(https?:|data:)/.test(value)){assert((await stat(value)).isFile(),`Missing asset ${value}`);localLinks++;}
}
for(const cssFile of ['styles/tokens.css','styles/showcase.css']){
  const css=await readFile(cssFile,'utf8');
  for(const [,file] of css.matchAll(/url\(['"]?([^'")]+)['"]?\)/g)) assert((await stat(path.join(path.dirname(cssFile),file))).isFile(),`Missing CSS resource ${file}`);
}
const css=await readFile('styles/tokens.css','utf8');
const expected=Object.fromEntries([...css.matchAll(/--([a-z0-9-]+):\s*([^;]+);/g)].map(m=>[m[1],m[2].trim()]));
const tokens=JSON.parse(await readFile('assets/downloads/monolith-tokens.json','utf8'));
assert.deepEqual(tokens.cssCustomProperties,expected,'Download tokens drifted');
let pngCount=0;
for(const file of (await readdir('assets/logo')).filter(f=>f.endsWith('.svg'))){const svg=await readFile(`assets/logo/${file}`,'utf8');assert(!svg.includes('<text'),'Logo contains live text instead of portable outlines');}
for(const file of (await readdir('assets/logo')).filter(f=>f.endsWith('.png'))){
  const {data,info}=await sharp(`assets/logo/${file}`).ensureAlpha().raw().toBuffer({resolveWithObject:true});
  let clear=0,solid=0;for(let p=3;p<data.length;p+=4){if(data[p]===0)clear++;if(data[p]===255)solid++;}
  assert(clear>info.width*info.height*.1,`Missing transparency ${file}`);assert(solid>100,`Empty artwork ${file}`);pngCount++;
}
const icon=await readFile('assets/icons/favicon.ico');assert.equal(icon.readUInt16LE(2),1);assert.equal(icon.readUInt16LE(4),3);
for(const dir of ['assets/downloads','assets/icons','.impeccable'])for(const file of (await readdir(dir)).filter(n=>n.endsWith('.json')||n.endsWith('.webmanifest')))JSON.parse(await readFile(`${dir}/${file}`,'utf8'));
for(const name of ['Archivo','SourceSans3']){assert((await stat(`assets/fonts/${name}.woff2`)).size>10000);}
const guide=await readFile('docs/brand-guide.md');assert.deepEqual(await readFile('assets/downloads/monolith-brand-guide.md'),guide,'Download guide drifted');
const provenance=JSON.parse(await readFile('assets/PROVENANCE.json','utf8'));
for(const item of provenance.rasterProvenance)assert((await stat(`assets/${item.file}`)).isFile());
for(const doc of ['README.md','PRODUCT.md','DESIGN.md','docs/verification.md','.impeccable/surfaces.md']){
  const md=await readFile(doc,'utf8');
  for(const [,link] of md.matchAll(/\]\(([^)]+)\)/g)){
    if(/^(https?:|#)/.test(link))continue;
    const file=link.split('#')[0];assert((await stat(path.resolve(path.dirname(doc),file))).isFile(),`Broken documentation link in ${doc}: ${link}`);
  }
}
console.log(`PASS: ${localLinks} local HTML resources, anchors, fonts, ${pngCount} transparent PNGs, outlined SVGs, ICO, JSON, documentation links, guide and token consistency.`);
