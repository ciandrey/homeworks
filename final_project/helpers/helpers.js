class Help {
     static async getPriceWithoutCurrencySymbols (webElements) {
         return $$(webElements).map(async (element) => {
             const priceWithCurrency = await (element.getText());
             return priceWithCurrency.replace(' руб.', '').replace(',', '.',);
         });
    };

    static async isDataInTheGivenRange (dataArray, minValue, maxValue) {
        dataArray.map(async (data) => {
            if(data < minValue || data > maxValue) {
                return false;
            }
        });
        return true;
    };
}

module.exports = { Help };