import { PlaywrightTestConfig, devices, test, expect } from '@playwright/test';
import { chromium } from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';
import { BASE_URL, USER_EMAIL, USER_PASSWORD } from '../src/config';
const userLogin = USER_EMAIL || '';
const userPass = USER_PASS || '';
chromium.use(stealth);



async function globalSetup(): Promise<void> {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Open log in page on tested site
  await page.goto(`${baseURL}/auth/login/google`);
  await page.getByText('Google').click();
  // Click redirects page to Google auth form,
  // parse https://accounts.google.com/ page
  const html = await page.locator('body').innerHTML();

  // Determine type of Google sign in form
  if (html.includes('aria-label="Google"')) {
    // Old Google sign in form
    await page.fill('#Email', userLogin);
    await page.locator('#next').click();
    await page.fill('#password', userPass);
    await page.locator('#submit').click();
  } else {
    // New Google sign in form
    await page.fill('input[type="email"]', userLogin);
    await page.locator('#identifierNext >> button').click();
    await page.fill('#password >> input[type="password"]', userPass);
    await page.locator('button >> nth=1').click();
  }

  // Wait for redirect back to tested site after authentication
  await page.waitForURL(baseURL);
  // Save signed in state
  await page.context().storageState({ path: './setup/storage-state.json' });

  await browser.close();
}

export default globalSetup;
