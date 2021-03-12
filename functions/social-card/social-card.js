const playwright = require('playwright-aws-lambda');
const fs = require('fs');
const path = require('path');
const indexHTML = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');

exports.handler = async function (event, ctx) {
  const browser = await playwright.launchChromium();
  const page = await browser.newPage();
  page.setViewportSize({
    width: 1200,
    height: 630,
  });
  await page.setContent(indexHTML);
  const screenshotBuffer = await page.screenshot();
  await browser.close();
  return {
    isBase64Encoded: true,
    statusCode: 200,
    headers: {
      'Content-Type': 'image/png',
      'Content-Length': screenshotBuffer.length.toString(),
    },
    body: screenshotBuffer.toString('base64'),
  };
};
