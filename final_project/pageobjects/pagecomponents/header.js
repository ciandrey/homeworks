const { Page } = require('../page');
const { BaseElement } = require('../../helpers/baseelement');

const I = new BaseElement();

class Header extends Page {
  constructor() {
    super();
    this.headerAuthButton = '.top-panel__userbar__auth';
    this.userName = '.top-panel__userbar__user__name';
    this.searchField = '#top-s[name]';
    this.dropDownMenu = '#mobile-userbar.top-panel__userbar__ppnav';
    this.dropDownOrders = '//*[span="Заказы"]';
    this.cart = 'a.top-panel__userbar__cart__item';
    this.logo = '.top-panel__logo';
  }

  async search(searchText) {
    await I.clickElement(this.searchField);
    await I.inputText(this.searchField, searchText);
    await browser.keys('Enter');
  }
}

module.exports = { Header };
