const {Page} = require('./page');

class Cart extends Page {
    constructor() {
        super();
        this.CheckAllGoodsBox = '.i-checkbox__real.checkAll';
        this.removeButton  = '.i-button_small.remove';
        this.confirmRemoveButton  = '.i-button_small.remove-yes';
    };

    async clearAllCart() {
        await $(this.CheckAllGoodsBox).click();
        await $(this.removeButton).click();
        await $(this.confirmRemoveButton).click();
    };
}    

module.exports = { Cart };