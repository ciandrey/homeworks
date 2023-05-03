const { Page } = require('./page');
const { BaseElement } = require('../helpers/baseelement');

const I = new BaseElement();

class SearchList extends Page {
  constructor() {
    super();
    this.searchListItem = '.breadcrumbs__list__li.active';
    this.searchResults = '.viewer-type-card__li';
    this.searchListPrices = '.item-type-card__btn';
    this.filterSearchByPriceStart = '#inp1_r_cost';
    this.filterSearchByPriceFinish = '#inp2_r_cost';
    this.filterButtom = '.filters__searchbtn__btn';
    this.sorting = '.top-filters__eselect.top-filters__eselect_alltypes';
    this.sortingAll = '.top-filters__eselect.top-filters__eselect_alltypes .filters__chkslist__li';
  }

  async setLimitsPriceFrame(minPrice, maxPrice) {
    await I.inputText(this.filterSearchByPriceStart, minPrice);
    await I.inputText(this.filterSearchByPriceFinish, maxPrice);
    await I.clickElement(this.filterButtom);
  }

  async sortingBy(string) {
    await I.clickElement(this.sorting);
    const sortingElementsArray = await I.getElementsArray(this.sortingAll);
    if (string === 'Релевантность') {
      await I.clickElementFromArray(sortingElementsArray, 0);
    } else if (string === 'Популярность') {
      await I.clickElementFromArray(sortingElementsArray, 1);
    } else if (string === 'Дата поступления') {
      await I.clickElementFromArray(sortingElementsArray, 2);
    } else if (string === 'Сначало дешевые') {
      await I.clickElementFromArray(sortingElementsArray, 3);
    } else if (string === 'Сначало дорогие') {
      await I.clickElementFromArray(sortingElementsArray, 4);
    } else if (string === 'Рейтинг') {
      await I.clickElementFromArray(sortingElementsArray, 5);
    } else if (string === 'Алфавит') {
      await I.clickElementFromArray(sortingElementsArray, 6);
    }
    await $(this.sorting).waitForClickable();
  }
}

module.exports = { SearchList };
