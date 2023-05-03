import { browser, $, expect, } from '@wdio/globals'
describe('webdriverIO page', () => {
  beforeEach(async () => {
    await browser.url('https://webdriver.io/');
  });

  it('should have the right title', async () => {
    expect(browser).toHaveTitle(
      'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO',
    );
  });

  it('tab "v8" should open documentation versions', async () => {
    await $("a[href='/versions']").click();
    const element = await $('.mainWrapper_z2l0');
    await element.waitForDisplayed()
    await expect(element).toHaveTextContaining('WebdriverIO documentation versions');
  });

  it('should click search button, than enter the word "waitForDisplayed" and click first link ', async () => {
    await $('.DocSearch-Button').click();
    await $('#docsearch-input').setValue('waitForDisplayed');
    await $('#docsearch-item-0').click();
    await expect(browser).toHaveUrl('https://webdriver.io/docs/api/element/waitForDisplayed/');
  });

  it('tab "github-link" should navigate to  github.com (usd mocha+chai)', async () => {
    const { expect } = require('chai');
    const gitHubLink = await $('.header-github-link').getAttribute('href');
    await expect(gitHubLink).to.contain('https://github.com/webdriverio/webdriverio');
  });
});
