const {Builder, By, Key, until} = require('selenium-webdriver');
 const path = require('path');

(async function example() {
  if (process.platform === 'win32') {
    process.env['PATH'] = process.env.PATH + ";" + path.resolve('./node_modules','.bin');
  } else {
    process.env['PATH'] = process.env.PATH + ":" + path.resolve('./node_modules','.bin');
  }
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.expense.familynetworx.com');
    await driver.manage().window().maximize(); 
  } finally {
    // await driver.quit();
  }
})();