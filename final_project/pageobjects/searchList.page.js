const {Page} = require('./page');

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
    };

    async setLimitsPriceFrame(minPrice, maxPrice) {
        await $(this.filterSearchByPriceStart).setValue(minPrice);
        await $(this.filterSearchByPriceFinish).setValue(maxPrice);
        await $(this.filterButtom).click();
    };
    async sortingBy(string) {
        await $(this.sorting).waitForClickable();
        await $(this.sorting).click();
               if (string === 'Релевантность') {
            await $$(this.sortingAll)[0].click();
        } else if (string === 'Популярность') {
            await $$(this.sortingAll)[1].click();
        } else if (string === 'Дата поступления') {
            await $$(this.sortingAll)[2].click();
        } else if (string === 'Сначало дешевые') {
            await $$(this.sortingAll)[3].click();
        } else if (string === 'Сначало дорогие') {
            await $$(this.sortingAll)[4].click();
        } else if (string === 'Рейтинг') {
            await $$(this.sortingAll)[5].click();
        } else if (string === 'Алфавит') {
            await $$(this.sortingAll)[6].click();
        }
        await $(this.sorting).waitForClickable();
    }
}

module.exports =  { SearchList };