import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import path from 'node:path';
import sharp from 'sharp';
const url=process.env.MONOLITH_URL||'http://127.0.0.1:3210';
const dir=`playwright/runs/${new Date().toISOString().replace(/[:.]/g,'-')}-zoom`;
await mkdir(dir,{recursive:true});
const extension=path.resolve('tests/zoom-extension');
const context=await chromium.launchPersistentContext(path.resolve(`${dir}/profile`),{channel:'chromium',headless:true,viewport:{width:1440,height:1000},reducedMotion:'reduce',args:[`--disable-extensions-except=${extension}`,`--load-extension=${extension}`]});
try {
  let [worker]=context.serviceWorkers();if(!worker)worker=await context.waitForEvent('serviceworker',{timeout:10000});
  const page=await context.newPage();await page.goto(url,{waitUntil:'networkidle'});
  const before=await page.evaluate(()=>({width:innerWidth,dpr:devicePixelRatio}));
  const zoom=await worker.evaluate(async url=>{const [tab]=await chrome.tabs.query({url:`${url}/*`});if(!tab)throw new Error('No local showcase tab');await chrome.tabs.setZoom(tab.id,2);return chrome.tabs.getZoom(tab.id);},url);
  assert.equal(zoom,2);
  await page.waitForFunction(old=>innerWidth<old*.6,before.width);
  await page.evaluate(async()=>{for(const img of document.images)img.loading='eager';await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})));});
  const after=await page.evaluate(()=>({width:innerWidth,dpr:devicePixelRatio,scroll:document.documentElement.scrollWidth}));
  assert(after.width<=before.width/2+1,'Browser zoom did not reflow');assert(after.scroll<=after.width+1,'Overflow at 200%');
  const axe=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();assert.deepEqual(axe.violations.map(v=>v.id),[]);
  await page.locator('input[value=brief]').uncheck();assert((await page.locator('#response-meta').innerText()).includes('Project tasks'));
  await page.getByRole('button',{name:'Dark',exact:true}).click();assert.equal(await page.locator('#workspace-preview').getAttribute('data-theme'),'dark');await page.getByRole('button',{name:'Light',exact:true}).click();await page.locator('input[value=brief]').check();
  await page.evaluate(()=>scrollTo(0,0));
  // Browser zoom breaks the normal fullPage clip. Retain real viewport tiles
  // and stitch them at measured native scroll offsets without scaling.
  const extent=await page.evaluate(()=>({height:document.documentElement.scrollHeight,viewport:innerHeight,width:innerWidth}));
  const composites=[],tiles=[];await mkdir(`${dir}/zoom-tiles`);const cdp=await context.newCDPSession(page);
  for(let target=0,index=0;target<extent.height;target+=extent.viewport,index++){
    await page.evaluate(y=>scrollTo(0,y),target);
    await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
    const actual=await page.evaluate(()=>scrollY);
    const file=`${dir}/zoom-tiles/${String(index).padStart(2,'0')}.png`;
    const shot=await cdp.send('Page.captureScreenshot',{format:'png',fromSurface:true,captureBeyondViewport:false});
    const bytes=Buffer.from(shot.data,'base64');await writeFile(file,bytes);
    composites.push({input:bytes,top:Math.round(actual*2),left:0});tiles.push({file,scrollY:actual});
  }
  const physicalContentMetrics={width:extent.width*2,height:extent.height*2};
  await sharp({create:{width:physicalContentMetrics.width,height:physicalContentMetrics.height,channels:3,background:'#FFFFFF'}}).composite(composites).png().toFile(`${dir}/chromium-200-percent.png`);
  await page.evaluate(()=>scrollTo(0,0));
  await page.screenshot({path:`${dir}/zoom-first-viewport.png`,fullPage:false,animations:'disabled'});
  await writeFile(`${dir}/report.json`,JSON.stringify({result:'pass',zoom,before,after,axeViolations:axe.violations.length,axeIncomplete:axe.incomplete.length,method:'Actual chrome.tabs.setZoom(2) in isolated extension profile; no CSS zoom or viewport-only approximation',captureMethod:'Native viewport screenshot tiles, stitched without rescaling at measured scroll offsets; originals retained',physicalContentMetrics,tiles,capture:`${dir}/chromium-200-percent.png`},null,2)+'\n');
  console.log(`PASS 200% actual browser zoom: ${before.width} -> ${after.width} CSS px; 0 axe violations. Evidence: ${dir}`);
}finally{await context.close();}
