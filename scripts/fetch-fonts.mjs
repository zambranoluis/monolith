import { mkdir, writeFile } from 'node:fs/promises';
const files = [
  ['Archivo.ttf', 'https://raw.githubusercontent.com/Omnibus-Type/Archivo/master/fonts/variable/Archivo%5Bwdth%2Cwght%5D.ttf'],
  ['Archivo-OFL.txt', 'https://raw.githubusercontent.com/Omnibus-Type/Archivo/master/OFL.txt'],
  ['Archivo-README.md', 'https://raw.githubusercontent.com/Omnibus-Type/Archivo/master/README.md'],
  ['SourceSans3.ttf', 'https://raw.githubusercontent.com/adobe-fonts/source-sans/release/VF/SourceSans3VF-Upright.ttf'],
  ['SourceSans3-OFL.md', 'https://raw.githubusercontent.com/adobe-fonts/source-sans/release/LICENSE.md']
];
await mkdir('assets/fonts', {recursive:true});
for (const [name,url] of files) {
  const r = await fetch(url); if (!r.ok) throw new Error(`${r.status}: ${url}`);
  await writeFile(`assets/fonts/${name}`, Buffer.from(await r.arrayBuffer()));
}
await writeFile('assets/fonts/SOURCES.json', JSON.stringify({retrieved:'2026-10-03',files:files.map(([file,url])=>({file,url})),upstream:['https://github.com/Omnibus-Type/Archivo','https://github.com/adobe-fonts/source-sans'],license:'SIL Open Font License 1.1'},null,2)+'\n');
console.log('Downloaded both font families, upstream licences, and Archivo font log.');
