const axios = require('axios');
const { Validator } = require('jsonschema');
const addCartSchema = require('./data/oz.by.api-v-1.json')

const validator = new Validator();

describe(`API tests oz.by`, function() {
    let response;
    before(async () => {
        response = await axios({
            method: 'get',
            url: 'https://oz.by/goods/ajax/html_box.php',
            params: {
                idGoods: '10677903',
                type: 'html'
            },
        });
    });

    it(`should status code equal 200`, async () => {
        expect(response.status).toEqual(200)
    });

    it(`should be valid json schema`, async () => {
        let validationResult = await validator.validate(response.data, addCartSchema);
        expect(validationResult.valid).toEqual(true);
    });
    it('should response be write', async () => {
        expect(await response.data.message).toEqual('Товар успешно добавлен в корзину');
    });
});