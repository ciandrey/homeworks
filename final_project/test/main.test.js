const { BaseElement } = require('../helpers/baseelement');
const I = new BaseElement();
const { PageFactory } = require('../pageobjects/pageFactory');
const This = new PageFactory();


describe('Functionality check on main page', () => {
    it('Navigate and check that page title should contain OZ.by', async () => {
        await This.page.open('/');
        const title = await browser.getTitle();
        expect(title).toContain('OZ.by');
    });

    it('Check highlighting color of cart button', async () => {
        const color = await I.getProperty(This.header.cart, 'color');
        expect(color.value).toEqual('rgba(205,69,0,1)'); 
    });

    it('Check shopLocations dropdown menu', async () => {
        await I.getDropDown(This.mainPage.shopLocations, This.mainPage.mapPopupShops);
        const text = await I.getElementText(This.mainPage.mapPopupTitle);
        expect(text).toBe('Минск');
    });

    it('Check button "Наверх"', async () => {
        await I.scrollTo(This.mainPage.upButton);
        await I.clickElement(This.mainPage.upButton);
        const element = await $(This.header.logo).isDisplayed();
        expect(element).toBe(true);
    });

    it('Check footer link TikTok', async () => {
        await I.scrollTo(This.footer.socialLinks);
        await This.footer.goToSocialLinks('vk');
        const url = await browser.getUrl();  
        expect(url).toContain('tiktok')
    });
})