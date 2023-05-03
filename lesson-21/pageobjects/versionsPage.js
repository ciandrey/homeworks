const BasePage = require ('./basePage');

class VersionsPage extends BasePage {
    async open(){
        return await super.navigate('https://webdriver.io/versions');
    }

    get versionsMainWrapper() {
        return $(".mainWrapper_z2l0");
    }
}

module.exports = new VersionsPage