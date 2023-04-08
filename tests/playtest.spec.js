//import { test, expect } from '@playwright/test';
const {playtest, expect} = require('@playwright/playtest')

playtest('playtest', async ({ page }) => {
  await page.goto('https://playwright-todomvc.antonzimaiev.repl.co/#/');
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').fill('hi man');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'hi man' }).getByRole('checkbox').check();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.screenshot({path: 'img/test.jpg'})
});