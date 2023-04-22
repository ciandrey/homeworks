const {Page} = require('./page');

class MainPage extends Page {
    constructor() {
        super();
        this.shopLocations = '.main-nav__list__ul_last';
        this.mapPopupShops = '#navigationMap .b-map__cell.b-map__cell_menu';
        this.mapPopupTitle = '#navigationMap .b-map-select__title';
        this.upButton = '.up-btn.up-btn_visible';
    };    
}

module.exports = { MainPage };