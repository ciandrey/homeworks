const {Page} = require('./page');
const { Header } = require('./pagecomponents/header');
const { LoginPage } = require('./login.page');
const { Personal } = require('./personal.page');
const { Cart } = require('./cart.page');
const { SearchList } = require('./searchList.page');
const { Product } = require('./product.page');
const { MainPage } = require('./main.page');
const { Footer } = require('./pagecomponents/footer');


class PageFactory {
    constructor() {
        this.page = new Page();
        this.header = new Header();
        this.loginPage = new LoginPage();
        this.searchList = new SearchList();
        this.personal = new Personal();
        this.cart = new Cart();
        this.product = new Product();
        this.mainPage = new MainPage();
        this.footer = new Footer();
    };
}

module.exports = { PageFactory };
