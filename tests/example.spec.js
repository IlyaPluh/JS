const {test, expect} = require('@playwright/test')

test('New test grinfer', async({ page }) => {
   await page.goto('https://grinfer.com/') 
   await page.locator('.sc-2aalce-2').click()
})