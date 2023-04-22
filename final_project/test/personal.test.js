const { BaseElement } = require('../helpers/baseelement');
const I = new BaseElement();
const { PageFactory } = require('../pageobjects/pageFactory');
const This = new PageFactory();


describe('Login and functionality check on personal page', () => {
    it('Check login on the page', async () => {
        await This.page.open('/');
        await I.clickElement(This.header.headerAuthButton);
        await This.loginPage.login('qaautomationtest333@gmail.com', 'NfL2jm')
        const username = await I.getElementText(This.header.userName);
        expect(username).toEqual('oz31114711');
    });

    it('Check username dropdown menu', async () => {
        await I.getDropDown(This.header.userName, This.header.dropDownMenu);
        const text = await I.getElementText(This.header.dropDownMenu);
        expect(text).toContain('Заказы' && 'Купленные товары');
    });

    it('Check highlighting color of dropdown menu', async () => {
        const color = await I.getProperty(This.header.dropDownOrders, 'color');
        expect(color.value).toEqual('rgba(2,51,154,1)');
    });

    it('Go to personal page and check number of purchases', async () => {
        await I.clickElement(This.header.userName);
        const numPurchases = await I.getElementText(This.personal.purchases);
        expect(numPurchases).toEqual('0 покупок');  
    });

    it('Check cash back item', async () => {
        const account = await I.getElementText(This.personal.cashback);
        expect(account).toContain('5%');
    });

    it('Check state of an account', async () => {
        const account = await I.getElementText(This.personal.personalAccount);
        expect(account).toEqual('0,00 руб.');  
    });

    it('Check the favorites is empty', async () => {
        const count = await I.getElementText(This.personal.favoritesCount);
        expect(count).toContain('0');
    });
})