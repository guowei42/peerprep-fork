const {Builder} = require("selenium-webdriver");

module.exports.getWebDriver = async () => {
    let browser = process.env.BROWSER;
    let driver = await new Builder().forBrowser(browser).build();
    console.log(driver)
    return driver;
}

module.exports.scrollTo = async (driver, element) => {
    driver.executeScript("arguments[0].scrollIntoView(false)", element);
    driver.sleep(300);
}