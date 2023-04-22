const { BaseElement } = require('../helpers/baseelement');
const I = new BaseElement();
const { PageFactory } = require('../pageobjects/pageFactory');
const This = new PageFactory();

describe('Functionality check on product page', () => {
    before(async () => {
        await This.page.open('/');
        await I.clickElement(This.header.headerAuthButton);
        await This.loginPage.login('qaautomationtest333@gmail.com', 'NfL2jm');
    });

    after(async () => {
        await This.page.open('/checkout/');
        await This.cart.clearAllCart();
    });

    it('Check that title text contain product name ', async () => {
        await This.header.search('Древний. Предыстория. Книга пятая');
        const pageTitle = await browser.getTitle();
        const productName = await I.getElementText(This.product.productName);
        expect(pageTitle).toContain(productName);
    });

    it('Add product to cart and check that the button is change description', async () => {
        await This.product.addProductToCart();
        const elementText = await I.getElementText(This.product.afterAddButton);
        expect(elementText).toContain('Уже в корзине');
    });

    it('Check that comment form is visible after click button "Напишите отзыв"', async () => {
        await I.clickElement(This.product.addCommentButton);
        const element = await $(This.product.commentContainer).isDisplayed();
        expect(element).toBe(true);
    });

    it('Check that first product comment have a date', async () => {
        const commentsDate = await I.getElementsArray(This.product.commentsDate);
        const commentDate  = await I.getTextFromElementsArray(commentsDate, 0);
        expect(commentDate).toContain('17 марта 2020');
    });  
})