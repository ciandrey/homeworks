class BasePage {
    constructor() {}

    async navigate(path){
        await browser.url(path)
    }
}

module.exports = BasePage;