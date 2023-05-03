const {BasePage} = require('../BasePage')

class Navbar extends BasePage {
    constructor(page){
        super(page);
        this.changeModeButton = '.toggleButton_gllP';
        this.searchField = '.DocSearch-Button-Placeholder';
        this.searchInput = '.DocSearch-Input';
        this.searchResult = '.theme-doc-markdown.markdown';
        this.searchContent = '.DocSearch-Hit-content-wrapper'
    };

    async switchMode(){
        await this.page.click(this.changeModeButton)      
    };

    async search(searchText){
        await this.page.click(this.searchField);
        await this.page.fill(this.searchInput, searchText);
        await this.page.waitForSelector(this.searchContent, { state: 'visible' });
        await this.page.keyboard.press('Enter');      
    };
}

module.exports = {Navbar}; 