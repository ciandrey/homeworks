const { test, expect, chromium } = require('@playwright/test');
const { MainPage } = require('../pageobject/MainPage');
const { BaseUtils } = require('../helpers/baseUtils');
const { Navbar } = require('../pageobject/pagecomponents/Navbar')
const { Footer } = require('../pageobject/pagecomponents/Footer');


test.describe("Automation tests with playwright", () => {
  let browser, page, main, context, base, navbar, footer;

   test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext({
        viewport: {width: 1920, height: 1080}
    });
    page = await context.newPage();
    main = new MainPage(page);
    base = new BaseUtils(page);
    navbar = new Navbar(page);
    footer = new Footer(page);
  });

  test.beforeEach(async () => {
    await main.navigate('https://playwright.dev');
  });

  test("Checks the title of the page", async () => {
    await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
  });

  test('Switch to dark mode, check that dark mode is enabled ', async () => {
    await navbar.switchMode();
    const theme = await base.getAttribute(main.document, 'data-theme');
    await expect(theme).toContain('dark');
  });

  test('Checks color of highlighting Playwright', async () => {
    const locator = await base.findLocator(main.highlightPlayright);
    const color = await locator.evaluate((e) => {
      return window.getComputedStyle(e).getPropertyValue("color");
    });
    await expect(color).toContain('rgb(69, 186, 75)');
  });

  test('Checks search for text "browser", check search results for contain', async () => {
    await navbar.search('browser');
    const searchText = await base.getText(navbar.searchResult);
    await expect(searchText).toContain('browser');
  });

  test('Checks gitHub link', async () => {
    await footer.links.nth(5).click();
    await page.waitForEvent('popup');
    let pages = context.pages();
    await expect(pages[1]).toHaveURL('https://github.com/microsoft/playwright');
  });
});