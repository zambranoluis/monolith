import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
const crcTable=Array.from({length:256},(_,n)=>{for(let k=0;k<8;k++)n=(n&1)?0xEDB88320^(n>>>1):n>>>1;return n>>>0;});
function crc32(bytes){let crc=0xFFFFFFFF;for(const b of bytes)crc=crcTable[(crc^b)&255]^(crc>>>8);return (crc^0xFFFFFFFF)>>>0;}
async function embedOrigin(file,origin){
  const png=await readFile(file),text=Buffer.from(`impeccable:prompt\0Origin: ${origin}`,'utf8'),type=Buffer.from('tEXt'),length=Buffer.alloc(4),crc=Buffer.alloc(4);
  length.writeUInt32BE(text.length);crc.writeUInt32BE(crc32(Buffer.concat([type,text])));
  await writeFile(file,Buffer.concat([png.subarray(0,png.length-12),length,type,text,crc,png.subarray(png.length-12)]));
}
const logoDir='assets/logo', iconDir='assets/icons', outDir='assets/downloads';
await Promise.all([mkdir(iconDir,{recursive:true}),mkdir(outDir,{recursive:true})]);
const symbolPath='M0 8H12V40H20V20H32V40H40V0H52V48H0Z';
const iconSvg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><title>Monolith</title><rect width="64" height="64" rx="12" fill="#6038E8"/><path d="${symbolPath}" transform="translate(11.2 12.8) scale(.8)" fill="#FFFFFF"/></svg>`;
await writeFile(`${iconDir}/favicon.svg`,iconSvg+'\n');
const rasterProvenance=[];
for (const file of (await readdir(logoDir)).filter(n=>n.endsWith('.svg')).sort()) {
  const png=file.replace('.svg','.png');
  const svg=await readFile(`${logoDir}/${file}`);
  const meta=await sharp(svg).metadata();
  const width=file.includes('symbol') ? 1040 : file.includes('wordmark') ? 1500 : 1800;
  await sharp(svg).resize({width}).png().toFile(`${logoDir}/${png}`);
  await embedOrigin(`${logoDir}/${png}`,`Rasterised from authored outlined vector assets/logo/${file}; scripts/build-vectors.py; fonts credited in assets/fonts/SOURCES.json.`);
  rasterProvenance.push({file:`logo/${png}`,origin:`Rasterised from authored outlined vector logo/${file}; font outline provenance assets/fonts/SOURCES.json`,width,height:Math.round(width*meta.height/meta.width),alpha:true});
}
for (const size of [16,24,32,48,64,128,180,192,256,512]) {
  const file=size===180 ? 'apple-touch-icon.png' : `monolith-app-${size}.png`;
  await sharp(Buffer.from(iconSvg)).resize(size,size).flatten({background:'#6038E8'}).png().toFile(`${iconDir}/${file}`);
  await embedOrigin(`${iconDir}/${file}`,'Rasterised from authored assets/icons/favicon.svg; fixed Work Index geometry; opaque Index violet app-icon ground.');
  rasterProvenance.push({file:`icons/${file}`,origin:'Rasterised from authored icons/favicon.svg; opaque app icon on Index violet',width:size,height:size,alpha:false});
}
// ICO containing the three native-size PNG representations.
const entries=await Promise.all([16,32,48].map(size=>readFile(`${iconDir}/monolith-app-${size}.png`).then(buffer=>({size,buffer}))));
const header=Buffer.alloc(6+16*entries.length);header.writeUInt16LE(1,2);header.writeUInt16LE(entries.length,4);
let offset=header.length;
entries.forEach(({size,buffer},i)=>{const p=6+16*i;header[p]=size;header[p+1]=size;header.writeUInt16LE(1,p+4);header.writeUInt16LE(32,p+6);header.writeUInt32LE(buffer.length,p+8);header.writeUInt32LE(offset,p+12);offset+=buffer.length;});
await writeFile(`${iconDir}/favicon.ico`,Buffer.concat([header,...entries.map(x=>x.buffer)]));
await writeFile(`${iconDir}/site.webmanifest`,JSON.stringify({name:'Monolith brand showcase',short_name:'Monolith',description:'Local identity showcase and concept applications',start_url:'../../',display:'standalone',background_color:'#FFFFFF',theme_color:'#6038E8',icons:[192,512].map(size=>({src:`monolith-app-${size}.png`,sizes:`${size}x${size}`,type:'image/png',purpose:'any'}))},null,2)+'\n');
const css=await readFile('styles/tokens.css','utf8');
const cssTokens=Object.fromEntries([...css.matchAll(/--([a-z0-9-]+):\s*([^;]+);/g)].map(m=>[m[1],m[2].trim()]));
const tokens={name:'Monolith / The Work Index',version:'1.0.0',source:'styles/tokens.css',cssCustomProperties:cssTokens,typography:{display:{family:'Archivo',weight:700,size:'clamp(64px,7.5vw,96px)',lineHeight:1.02,letterSpacing:'-.04em'},headline:{family:'Archivo',weight:600,size:'clamp(38px,5vw,64px)',lineHeight:1.08},body:{family:'Source Sans 3',weight:400,size:'18px',lineHeight:1.5}},breakpoints:{compact:'760px',medium:'1100px',wide:'1600px'},contrastPairs:[['#191922','#FFFFFF'],['#656572','#FFFFFF'],['#FFFFFF','#6038E8'],['#4825BC','#F0ECFD'],['#CAC6DB','#191922']],logo:JSON.parse(await readFile('assets/logo/geometry.json','utf8'))};
await writeFile(`${outDir}/monolith-tokens.json`,JSON.stringify(tokens,null,2)+'\n');
await writeFile(`${outDir}/monolith-brand-guide.md`,await readFile('docs/brand-guide.md'));
await writeFile('assets/PROVENANCE.json',JSON.stringify({version:1,owner:'Monolith / CrimsonTide',created:'2026-10-03',rasterProvenance,concepts:['identity-overview','logo-construction','product-applications'].map(n=>({file:`concepts/${n}.png`,prompt:`concepts/${n}.prompt.json`,tool:'image_gen.imagegen (built-in)',role:'Reviewed exploration reference; not production artwork or live screenshots'})),fonts:'fonts/SOURCES.json',svg:'Authored geometry and licensed font outlines; scripts/build-vectors.py'},null,2)+'\n');
// Portable uncompressed ZIP writer. No runtime or ZIP dependency in the showcase.
async function filesIn(dir){const list=[];for(const ent of await readdir(dir,{withFileTypes:true})){const p=`${dir}/${ent.name}`;if(ent.isDirectory())list.push(...await filesIn(p));else list.push(p);}return list.sort();}
async function zip(name,files){const bodies=[],central=[];let offset=0;for(const file of files){const bytes=await readFile(file),filename=Buffer.from(file.replace(/^assets\//,''));const crc=crc32(bytes);const local=Buffer.alloc(30);local.writeUInt32LE(0x04034B50);local.writeUInt16LE(20,4);local.writeUInt16LE(0x800,6);local.writeUInt16LE(0x5D43,12);local.writeUInt32LE(crc,14);local.writeUInt32LE(bytes.length,18);local.writeUInt32LE(bytes.length,22);local.writeUInt16LE(filename.length,26);bodies.push(local,filename,bytes);const c=Buffer.alloc(46);c.writeUInt32LE(0x02014B50);c.writeUInt16LE(20,4);c.writeUInt16LE(20,6);c.writeUInt16LE(0x800,8);c.writeUInt16LE(0x5D43,14);c.writeUInt32LE(crc,16);c.writeUInt32LE(bytes.length,20);c.writeUInt32LE(bytes.length,24);c.writeUInt16LE(filename.length,28);c.writeUInt32LE(offset,42);central.push(c,filename);offset+=local.length+filename.length+bytes.length;}const cb=Buffer.concat(central),end=Buffer.alloc(22);end.writeUInt32LE(0x06054B50);end.writeUInt16LE(files.length,8);end.writeUInt16LE(files.length,10);end.writeUInt32LE(cb.length,12);end.writeUInt32LE(offset,16);await writeFile(`${outDir}/${name}`,Buffer.concat([...bodies,cb,end]));}
const logos=await filesIn(logoDir),icons=await filesIn(iconDir),fonts=await filesIn('assets/fonts'),apps=await filesIn('assets/applications');
await zip('monolith-logos.zip',logos);
await zip('monolith-icons.zip',icons);
await zip('monolith-fonts.zip',fonts);
await zip('monolith-brand-kit.zip',[...logos,...icons,...fonts,...apps,'assets/PROVENANCE.json',`${outDir}/monolith-tokens.json`,`${outDir}/monolith-brand-guide.md`]);
console.log(`Exported ${rasterProvenance.length} PNGs, ICO, manifest, tokens, guide, and four ZIP bundles.`);
