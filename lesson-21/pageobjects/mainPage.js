const BasePage = require ('./basePage')

class MainPage extends BasePage {
    async open(){
        return await super.navigate('https://webdriver.io/')
    }
    get logoPicture() {
        return $(".svg_Eu_K");
    }
}

module.exports = new MainPage