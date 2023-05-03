const BasePage = require ('./basePage')

class MainPage extends BasePage {
    async open(){
        return await super.navigate('https://webdriver.io/')
    }
}

module.exports = new MainPage
