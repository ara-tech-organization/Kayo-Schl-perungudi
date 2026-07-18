const { chromium } = require("playwright"); const path=require("path");
const OUT=path.join(__dirname,"_shots");
const URL="http://localhost:5210/perungudi/contact-us";
const widths=[320,576,992,1440];
(async()=>{
  const b=await chromium.launch(); const errs=[];
  for(const w of widths){
    const page=await b.newPage({viewport:{width:w,height:900},deviceScaleFactor: w<=576?2:1});
    page.on("console",m=>{if(m.type()==="error")errs.push(w+": "+m.text());});
    await page.goto(URL,{waitUntil:"load",timeout:60000}); await page.waitForTimeout(1000);
    const h=await page.evaluate(()=>document.body.scrollHeight);
    for(let y=0;y<h;y+=280){await page.evaluate(yy=>scrollTo(0,yy),y);await page.waitForTimeout(70);}
    await page.evaluate(()=>scrollTo(0,0)); await page.waitForTimeout(400);
    // detect horizontal overflow
    const ov=await page.evaluate(()=>({sw:document.documentElement.scrollWidth, cw:document.documentElement.clientWidth}));
    await page.screenshot({path:path.join(OUT,`w${w}.png`), fullPage:true});
    console.log(`w${w} scrollW=${ov.sw} clientW=${ov.cw} overflow=${ov.sw>ov.cw+1}`);
    await page.close();
  }
  console.log("errors:", errs);
  await b.close();
})().catch(e=>{console.error("FAIL",e);process.exit(1);});
