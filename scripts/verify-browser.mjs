import { chromium, firefox, webkit } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile, copyFile, readFile } from 'node:fs/promises';
import path from 'node:path';
const url=process.env.MONOLITH_URL || 'http://127.0.0.1:3210';
const run=`${new Date().toISOString().replace(/[:.]/g,'-')}-${process.pid}`;
const dir=`playwright/runs/${run}`;
await mkdir(dir,{recursive:true});await mkdir('.impeccable/review',{recursive:true});
const report={run,url,startedAt:new Date().toISOString(),checks:[],errors:[],captures:[]};
const only=process.argv.find(a=>a.startsWith('--browser='))?.split('=')[1];
async function check(name,fn){try{const detail=await fn();report.checks.push({name,result:'pass',detail});console.log(`PASS ${name}`);}catch(e){report.checks.push({name,result:'fail',error:e.message});report.errors.push(`${name}: ${e.message}`);console.error(`FAIL ${name}: ${e.message}`);}}
async function settle(page){await page.evaluate(()=>{for(const img of document.images)img.loading='eager';});await page.waitForFunction(()=>document.fonts.status==='loaded'&&[...document.images].every(i=>i.complete&&i.naturalWidth>0),null,{timeout:10000});await page.emulateMedia({reducedMotion:'reduce'});}
async function overflow(page){const result=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,missing:[...document.images].filter(i=>!i.complete||i.naturalWidth===0).map(i=>i.src),fontArchivo:document.fonts.check('700 48px Archivo'),fontSource:document.fonts.check('400 18px "Source Sans 3"')}));assert(result.scroll<=result.width+1,`Horizontal page overflow: ${JSON.stringify(result)}`);assert.deepEqual(result.missing,[]);assert(result.fontArchivo&&result.fontSource,'Fonts did not load');return result;}
async function audit(page,name){const result=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();await writeFile(`${dir}/${name}-axe.json`,JSON.stringify(result,null,2));assert.deepEqual(result.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)})),[],'Axe violations');return {violations:result.violations.length,incomplete:result.incomplete.length};}
async function capture(page,name,fullPage=true){await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:`${dir}/${name}.png`,fullPage,animations:'disabled'});report.captures.push(`${dir}/${name}.png`);}
for(const [name,type] of Object.entries({chromium,firefox,webkit})){
  if(only&&only!==name)continue;
  let browser;
  try{
    browser=await type.launch();
    for(const [label,size] of Object.entries({desktop:{width:1440,height:1000},tablet:{width:768,height:1024},mobile:{width:390,height:844},compact:{width:320,height:800}})){
      const context=await browser.newContext({viewport:size,reducedMotion:'reduce'}),page=await context.newPage();
      const errors=[],badResponses=[],external=[];
      page.on('pageerror',error=>errors.push(error.message));page.on('response',r=>{if(r.status()>=400)badResponses.push(`${r.status()} ${r.url()}`);});page.on('request',r=>{if(!r.url().startsWith(url))external.push(r.url());});
      await page.goto(url,{waitUntil:'networkidle'});await settle(page);
      await check(`${name}/${label} responsive assets`,async()=>{assert.deepEqual(errors,[]);assert.deepEqual(badResponses,[]);assert.deepEqual(external,[],'External runtime requests');return overflow(page);});
      await check(`${name}/${label} WCAG axe`,()=>audit(page,`${name}-${label}`));
      await capture(page,`${name}-${label}`);
      if(name==='chromium'&&['desktop','mobile'].includes(label)){await page.screenshot({path:`${dir}/${label}-first-viewport.png`,fullPage:false,animations:'disabled'});report.captures.push(`${dir}/${label}-first-viewport.png`);}
      if(name==='chromium'&&['desktop','mobile'].includes(label))await copyFile(`${dir}/${name}-${label}.png`,`.impeccable/review/${label}.png`);
      if(label==='desktop'){
        await check(`${name} source combinations and citations`,async()=>{
          const brief=page.locator('input[value=brief]'),records=page.locator('input[value=records]');
          assert((await page.locator('#response-text').innerText()).includes('18 November'));
          assert.equal(await page.locator('#response-sources a').count(),2);
          await brief.uncheck();assert((await page.locator('#response-meta').innerText()).includes('Project tasks'));
          assert(!(await page.locator('#response-text').innerText()).includes('18 November'),'Records-only response invented page opening date');
          assert.deepEqual(await page.locator('#response-sources a').evaluateAll(a=>a.map(l=>l.getAttribute('href'))),['#project-records']);
          await records.uncheck();assert.equal(await page.locator('#response-meta').innerText(),'No sources selected');assert.equal(await page.locator('#response-sources a').count(),0);
          await brief.check();assert(!(await page.locator('#response-text').innerText()).includes('12 October'),'Brief-only response invented records due date');
          assert.deepEqual(await page.locator('#response-sources a').evaluateAll(a=>a.map(l=>l.getAttribute('href'))),['#opening-brief']);
          await records.check();assert.equal(await page.locator('#response-meta').innerText(),'Based on 2 selected sources');
          await page.locator('#response-sources a').first().click();assert(page.url().endsWith('#opening-brief'));
          return 'All four states cite only selected sources; citations navigate.';
        });
        await check(`${name} dark theme and accessibility`,async()=>{await page.getByRole('button',{name:'Dark',exact:true}).click();assert.equal(await page.locator('#workspace-preview').getAttribute('data-theme'),'dark');assert.equal(await page.getByRole('button',{name:'Dark',exact:true}).getAttribute('aria-pressed'),'true');await page.locator('.overview-index a').first().hover();await audit(page,`${name}-dark`);await page.locator('#workspace-preview').screenshot({path:`${dir}/${name}-dark.png`});report.captures.push(`${dir}/${name}-dark.png`);await page.getByRole('button',{name:'Light',exact:true}).click();});
        await check(`${name} keyboard focus and reduced motion`,async()=>{
          await page.goto(url);await settle(page);await page.keyboard.press('Tab');assert.equal(await page.locator(':focus').innerText(),'Skip to content');await page.keyboard.press('Enter');assert.equal(await page.evaluate(()=>location.hash),'#main');
          await page.locator('.brand-home').focus();for(const link of await page.locator('.site-header nav a').all()){await page.keyboard.press('Tab');assert(await link.evaluate(el=>el===document.activeElement),'Chapter link skipped by keyboard');}
          await page.locator('input[value=brief]').focus();const focus=await page.locator('input[value=brief]').evaluate(el=>({outline:getComputedStyle(el).outlineStyle,width:getComputedStyle(el).outlineWidth}));assert.equal(focus.outline,'solid');assert(parseFloat(focus.width)>=2,'Focus indicator is too thin');await page.keyboard.press('Space');assert((await page.locator('#response-meta').innerText()).includes('Project tasks'));await page.keyboard.press('Space');
          const motion=await page.locator('.label-one').evaluate(el=>({animation:getComputedStyle(el).animationName,scroll:getComputedStyle(document.documentElement).scrollBehavior}));assert.equal(motion.animation,'none');assert.equal(motion.scroll,'auto');return {focus,motion};
        });
        await check(`${name} downloads`,async()=>{
          const links=await page.locator('a[download]').evaluateAll(a=>a.map(l=>l.getAttribute('href')));
          for(const href of links){const r=await page.request.get(`${url}/${href}`);assert(r.ok(),href);assert((await r.body()).length>100,`Empty ${href}`);}
          const event=page.waitForEvent('download');await page.getByRole('link',{name:'Download the brand kit'}).click();const download=await event;assert.equal(download.suggestedFilename(),'monolith-brand-kit.zip');await download.saveAs(`${dir}/downloaded-brand-kit.zip`);assert.deepEqual(await readFile(`${dir}/downloaded-brand-kit.zip`),await readFile('assets/downloads/monolith-brand-kit.zip'));return `${links.length} downloads; delivered bundle matches local bytes`;
        });
      }
      await context.close();
    }
    await check(`${name} essential content without JavaScript`,async()=>{
      const c=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}}),p=await c.newPage();await p.goto(url,{waitUntil:'networkidle'});
      await p.locator('footer').scrollIntoViewIfNeeded();await p.waitForLoadState('networkidle');await p.locator('h1').scrollIntoViewIfNeeded();
      assert.equal(await p.locator('main>.chapter').count(),6);assert((await p.locator('#response-text').innerText()).includes('18 November'));assert(await p.locator('input[value=brief]').isDisabled());assert((await p.locator('noscript').innerText()).includes('static example'));assert.equal(await p.locator('a[download]').count(),6);assert.equal(await p.locator('tbody tr').count(),3);await overflow(p);await capture(p,`${name}-no-js`);await c.close();return 'Six chapters, page, records, explanation, citations and downloads readable.';
    });
    if(name==='chromium'){
      await check('chromium logo reproduction',async()=>{
        const p=await browser.newPage({viewport:{width:1000,height:800}});await p.goto(url);await p.setContent(`<html lang="en"><head><title>Monolith logo proof</title></head><body style="margin:0;padding:40px;background:white;font-family:Arial;color:#191922"><h1>Monolith logo reproduction proof</h1>${['primary','mono','reversed'].map(v=>`<section style="background:${v==='reversed'?'#191922':'#F7F7FA'};color:${v==='reversed'?'white':'#191922'};padding:32px;margin:16px 0"><h2>${v}</h2><div style="display:flex;align-items:end;gap:32px">${[16,24,48,96].map(s=>`<div><img src="${url}/assets/logo/monolith-symbol-${v}.svg" width="${s}" alt="${s} px"><p>${s} px</p></div>`).join('')}</div><div style="display:flex;align-items:start;gap:40px;margin-top:24px"><img src="${url}/assets/logo/monolith-lockup-${v}.svg" width="120" alt="120 px lockup"><img src="${url}/assets/logo/monolith-endorsed-${v}.svg" width="200" alt="200 px endorsed lockup"></div></section>`).join('')}</body></html>`);await settle(p);await p.screenshot({path:`${dir}/logo-proof.png`,fullPage:true});report.captures.push(`${dir}/logo-proof.png`);await p.close();return 'Symbol at 16/24/48/96; lockup 120; endorsed 200; all variants.';
      });
    }
  }catch(error){report.errors.push(`${name}: ${error.message}`);console.error(error.message);}finally{await browser?.close();}
}
report.finishedAt=new Date().toISOString();await writeFile(`${dir}/report.json`,JSON.stringify(report,null,2)+'\n');await writeFile('playwright/last-run.txt',dir+'\n');
console.log(`Evidence: ${dir}`);console.log(`${report.checks.filter(c=>c.result==='pass').length}/${report.checks.length} checks passed; ${report.errors.length} errors.`);
if(report.errors.length)process.exitCode=1;
