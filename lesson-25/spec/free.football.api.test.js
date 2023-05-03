const axios = require('axios');
const { Validator } = require('jsonschema');
const freeFootballSchema = require('../data/free.football.api-v-1.json')

const validator = new Validator();

describe(`API  tests free-football`, function() {
    let response;
    beforeAll(async () => {
        response = await axios({
            method: 'get',
            url: 'https://free-football-soccer-videos.p.rapidapi.com/',
            headers: {
                'X-RapidAPI-Key': '2c6bc9206fmshfb822495e9b307cp16dc8ejsn2bdb58912823',
                'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
            },
        });
    });

    it(`should status code equal 200`, async () => {
        expect(response.status).toEqual(200)
    });

    it(`should be valid json schema`, async () => {
        let validationResult = await validator.validate(response.data, freeFootballSchema);
        expect(validationResult.errors.length).toEqual(0);

    });

});