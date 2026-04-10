const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Listen for console messages
  const consoleMessages = [];
  page.on('console', msg => {
    consoleMessages.push(`${msg.type()}: ${msg.text()}`);
  });

  await page.goto('http://localhost:8000/about');

  // Wait for images to load
  await page.waitForTimeout(5000);

  console.log('Console messages:');
  consoleMessages.forEach(msg => console.log(msg));

  // Check if GatsbyImage components are rendered
  const gatsbyImages = await page.$$eval('[data-gatsby-image-wrapper]', wrappers => wrappers.length);
  console.log('GatsbyImage wrappers found:', gatsbyImages);

  // Check if images exist in DOM
  const images = await page.$$eval('img', imgs => imgs.length);
  console.log('Total img elements:', images);

  await browser.close();
})();