// Focused verification of finish-review fixes: artwork semantics and dark hover.
import {chromium,firefox,webkit} from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
const dir=`playwright/runs/${new Date().toISOString().replace(/[:.]/g,'-')}-finish`;
await mkdir(dir,{recursive:true});
const report={checks:[],captures:[]};
for(const [name,type] of Object.entries({chromium,firefox,webkit})){
  const browser=await type.launch();
  try{
    for(const [label,viewport] of Object.entries({desktop:{width:1440,height:1000},mobile:{width:390,height:844}})){
      const context=await browser.newContext({viewport,reducedMotion:'reduce'}),p=await context.newPage();await p.goto('http://127.0.0.1:3210',{waitUntil:'networkidle'});
      await p.evaluate(()=>{for(const img of document.images)img.loading='eager';});
      await p.waitForFunction(()=>document.fonts.status==='loaded'&&[...document.images].every(i=>i.complete&&i.naturalWidth>0),null,{timeout:10000});
      const light=await new AxeBuilder({page:p}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();assert.deepEqual(light.violations.map(v=>v.id),[]);assert(!light.incomplete.some(v=>v.id==='aria-prohibited-attr'));
      assert.equal(await p.locator('.index-art').getAttribute('role'),'img');assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
      await p.getByRole('button',{name:'Dark',exact:true}).click();await p.locator('.overview-index a').first().hover();
      const colour=await p.locator('.overview-index a').first().evaluate(e=>getComputedStyle(e).color);assert.equal(colour,'rgb(194, 179, 255)','Dark hover must use the light accent');
      const dark=await new AxeBuilder({page:p}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();assert.deepEqual(dark.violations.map(v=>v.id),[]);
      await writeFile(`${dir}/${name}-${label}-axe.json`,JSON.stringify({light,dark},null,2));
      await p.locator('#workspace-preview').screenshot({path:`${dir}/${name}-${label}-dark-hover.png`});report.captures.push(`${dir}/${name}-${label}-dark-hover.png`);
      await p.getByRole('button',{name:'Light',exact:true}).click();await p.evaluate(()=>scrollTo(0,0));
      if(name==='chromium'){await p.screenshot({path:`${dir}/${label}.png`,fullPage:true,animations:'disabled'});await p.screenshot({path:`.impeccable/review/${label}.png`,fullPage:true,animations:'disabled'});report.captures.push(`${dir}/${label}.png`);}
      report.checks.push({name:`${name}/${label}`,result:'pass',lightViolations:0,darkHoverViolations:0,incomplete:light.incomplete.map(v=>v.id),hoverColor:colour});await context.close();console.log(`PASS ${name}/${label} artwork semantics, layout, light and dark-hover accessibility`);
    }
  }finally{await browser.close();}
}
await writeFile(`${dir}/report.json`,JSON.stringify(report,null,2)+'\n');console.log(`6/6 focused checks passed. Evidence: ${dir}`);
