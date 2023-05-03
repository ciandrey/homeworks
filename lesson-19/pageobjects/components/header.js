const BasePage = require('../BasePage');

class Header extends BasePage {
    constructor() {
        super();
    }
    get versionsButton() {
        return $(".navbar__link[href='/versions']");
    }
    get gitHubButton() {
        return $(".header-github-link");
    }
}
module.exports = new Header();