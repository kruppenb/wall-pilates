import { chromium } from 'playwright';

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 375, height: 812 },
  deviceScaleFactor: 2,
});
const page = await context.newPage();

const screenshotDir = 'screenshots';
import { mkdirSync } from 'fs';
mkdirSync(screenshotDir, { recursive: true });

// 1. Home screen
await page.goto('http://localhost:5190');
await page.waitForTimeout(1000);
await page.screenshot({ path: `${screenshotDir}/01-home.png`, fullPage: false });
console.log('Screenshot: home screen');

// 2. Tap on an exercise to see the detail overlay
const firstExercise = page.locator('.exercise-card').first();
if (await firstExercise.isVisible()) {
  await firstExercise.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${screenshotDir}/02-exercise-detail.png`, fullPage: false });
  console.log('Screenshot: exercise detail');

  // Close the overlay
  const gotIt = page.locator('.exercise-detail-got-it');
  if (await gotIt.isVisible()) {
    await gotIt.click();
    await page.waitForTimeout(300);
  }
} else {
  console.log('No exercise card found');
}

// 3. Tap "Start Workout" to see the timer idle screen
const startBtn = page.locator('.day-card-start');
if (await startBtn.isVisible()) {
  await startBtn.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${screenshotDir}/03-timer-idle.png`, fullPage: false });
  console.log('Screenshot: timer idle');

  // Tap "Start" to begin the countdown
  const startAction = page.locator('.timer-screen-action').first();
  if (await startAction.isVisible()) {
    await startAction.click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: `${screenshotDir}/04-timer-exercise.png`, fullPage: false });
    console.log('Screenshot: timer exercise');
  }

  // Close timer
  const closeBtn = page.locator('.timer-screen-close');
  if (await closeBtn.isVisible()) {
    await closeBtn.click();
    await page.waitForTimeout(300);
  }
} else {
  console.log('No start workout button found');
}

// 4. Toggle to Progress view
const toggleBtn = page.locator('.app-header-toggle');
if (await toggleBtn.isVisible()) {
  await toggleBtn.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${screenshotDir}/05-progress.png`, fullPage: false });
  console.log('Screenshot: progress view');
}

// 5. Scroll through day strip - select day 15
await toggleBtn.click(); // back to home
await page.waitForTimeout(300);
const day15 = page.locator('.day-strip-item').nth(14);
if (await day15.isVisible()) {
  await day15.click();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${screenshotDir}/06-day15.png`, fullPage: false });
  console.log('Screenshot: day 15 selected');
}

await browser.close();
console.log('All screenshots saved to screenshots/');
