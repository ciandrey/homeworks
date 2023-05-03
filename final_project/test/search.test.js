const { BaseElement } = require('../helpers/baseelement');

const I = new BaseElement();
const { PageFactory } = require('../pageobjects/pageFactory');

const This = new PageFactory();
const { Help } = require('../helpers/helpers');

describe('Functionality check on search page', () => {
  it('Should correct search for text "тармашев"', async () => {
    await This.page.open('/');
    await This.header.search('тармашев');
    const searchResult = await I.getElementText(This.searchList.searchListItem);
    expect(searchResult.toLowerCase()).toContain('тармашев');
  });

  it('Should sort goods by rating', async () => {
    const { expect } = require('chai');
    const firstSorting = await I.getElementText(This.searchList.sorting);
    await This.searchList.sortingBy('Рейтинг');
    const secondSorting = await I.getElementText(This.searchList.sorting);
    expect(firstSorting).to.not.equal(secondSorting);
  });

  it('Should filter search limits prices and check that the quantity of products has decreased', async () => {
    await This.searchList.setLimitsPriceFrame(60, 80);
    const searchResult = await I.getElementText(This.searchList.searchListItem);
    expect(searchResult.toLowerCase()).toContain('тармашев' && '4');
  });

  it('Should prices of filtered products is in right range ', async () => {
    const searchPrices = await Help.getPriceWithoutCurrencySymbols(This.searchList.searchListPrices);
    const checkResult = await Help.isDataInTheGivenRange(searchPrices, 60, 80);
    expect(checkResult).toBe(true);
  });

  it('Should first result from search list contain text "тармашев"', async () => {
    const search = await I.getElementsArray(This.searchList.searchResults);
    await I.clickElementFromArray(search, 0);
    const productTitle = await I.getElementText(This.product.productTitle);
    expect(productTitle.toLowerCase()).toContain('тармашев');
  });
});
