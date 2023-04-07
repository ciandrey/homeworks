const {BasePage} = require('../BasePage')

class Footer extends BasePage {
    constructor(page){
        super(page);
        this.page = page;
    };

    get links() {
        return this.page.locator('.footer__link-item');
    };

}

module.exports = {Footer};