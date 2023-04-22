const {Page} = require('./page');

class Personal extends Page {
    constructor() {
        super();
        this.purchases = '.uc-purchase';
        this.personalAccount = '.uc-nav.uc-nav-last [href="/personal/account.phtml"]+sup';
        this.cashback = '.uc-allprops';
        this.cart = '.uc-nav [href="/checkout/"]';
        this.favoritesCount = '.menu-fav__count'
    };
}

module.exports =  { Personal };
