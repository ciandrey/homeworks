class BaseElement{
        async clickElement(selector) {
        await $(selector).waitForClickable();
        await $(selector).click();
    };
    async clickElementFromArray(selectors, number) {
        await selectors[number].click();
    };
    async getTextFromElementsArray(selectors, number) {
        return  selectors[number].getText();
    };
    async getElementText(selector) {
        await $(selector).waitForDisplayed();
        return $(selector).getText();
    };
    async inputText(selector, text) {
        await $(selector).waitForClickable();
        await $(selector).setValue(text);
    };
    async getElementsArray(selector) {
        return $$(selector);        
    };
    async getAttribute(selector, attr){
        return $(selector).getAttribute(attr);
    };
    async getProperty(selector, property){
        return $(selector).getCSSProperty(property);
    };
    async getDropDown(selector, selectorDrop) {
        await $(selector).moveTo();
        await $(selectorDrop).waitForDisplayed();
    };
    async scrollTo(selector) {
        await $(selector).scrollIntoView();
        await $(selector).waitForDisplayed();
    };

}

module.exports = {BaseElement};