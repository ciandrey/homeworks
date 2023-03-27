const mainPage = require('../pageobjects/mainPage');
const searchElement = require('../pageobjects/components/searchElement');
const header = require('../pageobjects/components/header');
const versionsPage = require ('../pageobjects/versionsPage');
const baseUtils = require('../helpers/baseUtils');

describe('webdriverIO page', () => {
  beforeEach(async () => {
    await mainPage.open();
  });

  it('should have the right title', async () => {
    expect(browser).toHaveTitle(
      'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
  });

  it('tab "v8" should open documentation versions', async () => {
    await baseUtils.toDoClick(header.versionsButton);
    await versionsPage.versionsMainWrapper.waitForDisplayed();
    await expect(versionsPage.versionsMainWrapper).toHaveTextContaining('WebdriverIO documentation versions');
  });

  it('should click search button, than enter the word "waitForDisplayed" and click first link ', async () => {
    await baseUtils.toDoClick(searchElement.searchButton);
    await searchElement.getSearch('browser', 0)
    await expect(browser).toHaveUrlContaining('browser');
    await expect(searchElement.searchResultArticle).toHaveTextContaining('browser')
  });

  it('tab "github-link" should navigate to github.com/webdriverio', async () => {
    await expect(header.gitHubButton).toHaveAttributeContaining('href', 'github.com/webdriverio');
  });
});
