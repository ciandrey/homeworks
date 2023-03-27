const BasePage = require('../BasePage');

class SearchElement extends BasePage {
    constructor() {
        super();
    }

    get searchButton() {
        return $(".DocSearch-Button");
    }

    get searchField() {
        return $("#docsearch-input");
    }

    get searchResults() {
        return $$("//*[contains(@id,'docsearch-item')]");
    }

    get searchWindow() {
        return $("#docsearch-list");
    }
    get searchResultArticle() {
        return $(".col.docItemCol_VOVn")
    }

    async getSearch(request, numberOfSearchPage) {
        await this.searchField.setValue(request);
        await this.searchWindow.waitForDisplayed();
        await this.searchResults[numberOfSearchPage].click();
        return this.searchResultArticle.getText()
    }
}

module.exports = new SearchElement;

