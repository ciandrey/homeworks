const {Page} = require('../page');

class Header extends Page {
    constructor() {
        super();
        this.headerAuthButton = '.top-panel__userbar__auth';
        this.userName = '.top-panel__userbar__user__name';
        this.searchField = '#top-s[name]';
        this.dropDownMenu = '#mobile-userbar.top-panel__userbar__ppnav';
        this.dropDownOrders = '//*[span="Заказы"]';
        this.cart = 'a.top-panel__userbar__cart__item';
        this.logo = '.top-panel__logo';
    };

    async search(searchText) {
        await $(this.searchField).waitForClickable();
        await $(this.searchField).click();
        await $(this.searchField).waitForDisplayed();
        await $(this.searchField).addValue(searchText);
        await $(this.searchField).waitForDisplayed();
        await browser.keys("Enter"); 
    };   
}

module.exports = { Header };