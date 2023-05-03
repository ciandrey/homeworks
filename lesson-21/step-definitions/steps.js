const { Given, When, Then } = require('@wdio/cucumber-framework');

const mainPage = require('../pageobjects/mainPage');
const searchElement = require('../pageobjects/components/searchElement');
const header = require('../pageobjects/components/header');
const versionsPage = require ('../pageobjects/versionsPage');
const baseUtils = require('../helpers/baseUtils');

Given('I navigate to home page webdriver.io', async () => {
    await mainPage.open();
});

When('I should see the main picture', async () => {
    await mainPage.logoPicture.isDisplayed();
});

Then('I have the right title {string}', async (expectedText) => {
    await expect(browser).toHaveTitle(expectedText);
});

When('I click tab "v8"', async () => {
    await baseUtils.toDoClick(header.versionsButton);
});

Then('I expect that page have contain right text {string}', async (expectedText) => {
    await versionsPage.versionsMainWrapper.waitForDisplayed();
    await expect(versionsPage.versionsMainWrapper).toHaveTextContaining(expectedText);
});

When('I click tab "github-link"', async () => {
    await baseUtils.toDoClick(header.gitHubButton);

});

Then('I expect that tab "github-link" navigate to {string}', async (expectedUrl) => {
    const handles = await browser.getWindowHandles()
    await browser.switchToWindow(handles[1])
    await expect(browser).toHaveUrl(expectedUrl);
    await browser.switchToWindow(handles[0])
});

When('I click search button', async () => {
    await baseUtils.toDoClick(searchElement.searchButton);
});

When('I enter the word {string} and click {int} link', async (searchText, linkNumber) => {
    await searchElement.getSearch(searchText, linkNumber-1);
});

Then('I expect that url have contain right text {string}', async (expectedText) => {
    await expect(browser).toHaveUrlContaining(expectedText);
});

Then('I expect that article have contain right text {string}', async (expectedText) => {
    await expect(searchElement.searchResultArticle).toHaveTextContaining(expectedText)
});