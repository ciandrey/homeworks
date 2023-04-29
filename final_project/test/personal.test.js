const { BaseElement } = require('../helpers/baseelement');

const I = new BaseElement();
const { PageFactory } = require('../pageobjects/pageFactory');

const This = new PageFactory();

describe('Login and functionality check on personal page', () => {
  it('Should login on the page with correct data', async () => {
    await This.page.open('/');
    await I.clickElement(This.header.headerAuthButton);
    await This.loginPage.login('qaautomationtest333@gmail.com', 'NfL2jm');
    const username = await I.getElementText(This.header.userName);
    expect(username).toEqual('oz31114711');
  });

  it('Should username dropdown menu show correct tabs', async () => {
    await I.getDropDown(This.header.userName, This.header.dropDownMenu);
    const text = await I.getElementText(This.header.dropDownMenu);
    expect(text).toContain('Заказы' && 'Купленные товары');
  });

  it('Should highlighting color of dropdown menu "Заказы" be blue', async () => {
    const color = await I.getProperty(This.header.dropDownOrders, 'color');
    expect(color.value).toEqual('rgba(2,51,154,1)');
  });

  it('Should navigate to personal page and check number of purchases', async () => {
    await I.clickElement(This.header.userName);
    const numPurchases = await I.getElementText(This.personal.purchases);
    expect(numPurchases).toEqual('0 покупок');
  });

  it('Should cash back item be visible', async () => {
    const account = await I.getElementText(This.personal.cashback);
    expect(account).toContain('5%');
  });

  it('Should state of an account be visible', async () => {
    const account = await I.getElementText(This.personal.personalAccount);
    expect(account).toEqual('0,00 руб.');
  });

  it('Should open the favorites tab and it is empty', async () => {
    await I.clickElement(This.personal.favoritesTab);
    const count = await I.getElementText(This.personal.favoritesWrapper);
    expect(count).toContain('нет товаров');
  });
});
