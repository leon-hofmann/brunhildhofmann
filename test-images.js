const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    // Test about page
    console.log('Testing about page...');
    await page.goto('http://localhost:8000/about');
    await page.waitForTimeout(2000);

    const aboutImages = await page.locator('img').count();
    const aboutGatsbyImages = await page.locator('[data-gatsby-image-wrapper]').count();
    console.log(`About page: ${aboutImages} images, ${aboutGatsbyImages} GatsbyImage components`);

    // Test literature page
    console.log('Testing literature page...');
    await page.goto('http://localhost:8000/literatur');
    await page.waitForTimeout(2000);

    const litImages = await page.locator('img').count();
    const litGatsbyImages = await page.locator('[data-gatsby-image-wrapper]').count();
    console.log(`Literature page: ${litImages} images, ${litGatsbyImages} GatsbyImage components`);

    // Test malerei page
    console.log('Testing malerei page...');
    await page.goto('http://localhost:8000/malerei');
    await page.waitForTimeout(2000);

    const malImages = await page.locator('img').count();
    const malGatsbyImages = await page.locator('[data-gatsby-image-wrapper]').count();
    console.log(`Malerei page: ${malImages} images, ${malGatsbyImages} GatsbyImage components`);

    // Check for console errors
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.waitForTimeout(1000);
    if (errors.length > 0) {
      console.log('Console errors:', errors);
    } else {
      console.log('No console errors found');
    }

    console.log('All pages tested successfully!');

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
})();