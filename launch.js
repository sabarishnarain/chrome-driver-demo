const {Builder, By, Key, until} = require('selenium-webdriver');
 const path = require('path');

(async function example() {
  process.env['PATH'] = process.env.PATH + ":" + path.join('node_modules','.bin');
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.expense.familynetworx.com');
    await driver.manage().window().maximize(); 
  } finally {
    // await driver.quit();
  }
})();