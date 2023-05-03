class BaseUtils {
    constructor(page, newPage) {
        this.page = page;
        this.newPage = newPage;
    }
    async getTitle(){
        return this.page.title();
    };
    async getAttribute(selector, attributeName){
        return this.page.getAttribute(selector, attributeName)
    };
    async getText(selector){
        return this.page.textContent(selector); 
    };
   
    async findLocator(selector){
        return this.page.locator(selector)
    }
    async getUrl(){
        return this.page.url();
    }       
}

module.exports = {BaseUtils};


   