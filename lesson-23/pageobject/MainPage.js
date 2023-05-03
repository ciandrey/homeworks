const {BasePage} = require('../pageobject/BasePage')

class MainPage extends BasePage{
    constructor(page) {
        super(page)
        this.document = '.plugin-pages.plugin-id-default';
        this.highlightPlayright = '.highlight_gXVj';

    };
}

module.exports = {MainPage}; 