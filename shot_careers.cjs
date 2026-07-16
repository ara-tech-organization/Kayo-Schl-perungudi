const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const url = "http://localhost:5185/careers";

  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await page.evaluate(() => {
    document.documentElement.style.scrollBehavior = "auto";
  });

  const height = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < height; y += 400) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await page.waitForTimeout(150);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);

  await page.screenshot({ path: "careers-desktop-full.png", fullPage: true });
  console.log("Console errors:", errors);

  const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobilePage.goto(url, { waitUntil: "networkidle" });
  await mobilePage.waitForTimeout(500);
  await mobilePage.evaluate(() => {
    document.documentElement.style.scrollBehavior = "auto";
  });
  const mheight = await mobilePage.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < mheight; y += 400) {
    await mobilePage.evaluate((yy) => window.scrollTo(0, yy), y);
    await mobilePage.waitForTimeout(150);
  }
  await mobilePage.evaluate(() => window.scrollTo(0, 0));
  await mobilePage.waitForTimeout(400);
  await mobilePage.screenshot({ path: "careers-mobile-full.png", fullPage: true });

  await browser.close();
  console.log("done");
})();
