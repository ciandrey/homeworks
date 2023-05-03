const { Page } = require('./page');
const { BaseElement } = require('../helpers/baseelement');

const I = new BaseElement();

class Cart extends Page {
  constructor() {
    super();
    this.checkAllGoodsBox = '.i-checkbox__real.checkAll';
    this.removeButton = '.i-button_small.remove';
    this.confirmRemoveButton = '.i-button_small.remove-yes';
  }

  async clearAllCart() {
    await I.checkBox(this.checkAllGoodsBox);
    await I.clickElement(this.removeButton);
    await I.clickElement(this.confirmRemoveButton);
  }
}

module.exports = { Cart };
