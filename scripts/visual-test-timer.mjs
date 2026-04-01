import { chromium } from 'playwright';

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 375, height: 812 },
  deviceScaleFactor: 2,
});
const page = await context.newPage();

import { mkdirSync } from 'fs';
mkdirSync('screenshots', { recursive: true });

await page.goto('http://localhost:5190');
await page.waitForTimeout(800);

// Start workout
await page.locator('.day-card-start').click();
await page.waitForTimeout(400);

// Tap Start button
await page.locator('.timer-screen-action').first().click();

// Wait for 3-2-1 countdown to finish + a bit into the exercise
await page.waitForTimeout(4500);
await page.screenshot({ path: 'screenshots/07-timer-ring.png', fullPage: false });
console.log('Screenshot: timer ring during exercise');

await browser.close();
