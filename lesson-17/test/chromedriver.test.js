const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe(`ChromeDriver page test`, function() {
    let driver
    before(async () =>{
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
        await driver.get('https://chromedriver.chromium.org/home');
    });

    after(async () => await driver.quit());

    async function getElementText(elementByXpath){
        return driver.findElement(By.xpath(elementByXpath)).getText();
    }

    it('should first tab title is ChromeDriver', async() => {
        expect(await getElementText('//h1/span')).to.equal('ChromeDriver');
    });

    it('should next tab title is Chrome Extensions', async() => {
        await driver.actions().click(driver.findElement(By.xpath('//a[contains(@class,"jgXgSe")][text()="Chrome Extensions"]'))).perform();
        await driver.wait(until.urlContains('/extensions'), 10000);
        driver.executeScript("arguments[0].style.backgroundColor = 'red'", driver.findElement(By.xpath("//h1/span")));
        await driver.wait(until.elementLocated(By.xpath('//h1/span')), 10000);
        expect(await getElementText('//h1/span')).to.equal('Chrome Extensions');
    });

    it(`should the first link in search page contains word 'driver'`, async () => {
        await driver.actions().click(driver.findElement(By.css('.tCHXDc,Y'))).perform();
        const searchField = await driver.findElement(By.css('.whsOnd'));
        await driver.wait(until.elementIsVisible(searchField), 10000);
        await searchField.sendKeys('driver');
        await driver.actions().sendKeys(Key.ENTER).perform();
        await driver.wait(until.elementLocated(By.xpath('//*[@class="gtazFe"][1]')), 10000);
        expect((await getElementText('//*[@class="gtazFe"][1]')).toLowerCase()).to.contain('driver');
    });

    it('should URL of tab "Mobile Emulation" contain "/mobile-emulation"', async() => {
        await driver.get('https://chromedriver.chromium.org/home');
        await driver.actions().click(driver.findElement(By.xpath('//a[contains(@class,"jgXgSe")][text()="Дополнительно"]'))).perform();
        await driver.actions().click(driver.findElement(By.xpath('//a[@class="aJHbb hDrhEe HlqNPb"][@href="/mobile-emulation"]'))).perform();
        await driver.wait(until.urlContains('/mobile-emulation'), 10000);
        expect(await driver.getCurrentUrl()).to.contain('/mobile-emulation');
    });

});