// @ts-check
const { test, expect } = require('@playwright/test');

test('user profile', async ({ page }) => {
  test.setTimeout(120000);
  const url = process.env.TEST_URL || '';
  await expect(url).not.toBe('');

  //test.beforeEach(async ({ page }) => {

  await page.goto(url);
  await page.waitForURL(`${url}/home`);
  await page.waitForLoadState('domcontentloaded');
  //})

  //test('user profile', async ({ page }) => {
  const homepageTitle = page.getByRole('link', { name: 'VanCityPropertyPulse' });
  const menuButton = page.getByLabel('Open settings');
  const profileButton = page.getByRole('link', { name: 'Profile' });
  const userProfile = page.getByText('First Name: JohnLast Name: DoeEmail: johndoe@gmail.comPhone Number: (534) 534-53');

  await expect(homepageTitle).toBeVisible();
  await menuButton.click();
  await profileButton.click();
  await expect(page.getByText('John', { exact: true })).toBeVisible();
  await expect(userProfile).toBeVisible();
})
//})
