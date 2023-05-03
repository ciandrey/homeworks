const axios = require('axios');
const { Validator } = require('jsonschema');
const textTranslatorSchema = require('../data/textTranslator.api-v-1.json');

const validator = new Validator();

const encodedParams = new URLSearchParams();
encodedParams.append("source_language", "en");
encodedParams.append("target_language", "ru");
encodedParams.append("text", "What is your name?");

const optionsPOST = {
    method: 'POST',
    url: 'https://text-translator2.p.rapidapi.com/translate',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'b72e5767c4msh6b628d7e8243459p11bae8jsnf7ea43878e50',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    },
    data: encodedParams
};

const optionsGET = {
    method: 'GET',
    url: 'https://text-translator2.p.rapidapi.com/getLanguages',
    headers: {
        'X-RapidAPI-Key': 'b72e5767c4msh6b628d7e8243459p11bae8jsnf7ea43878e50',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    },
};

describe('Text Translator API tests', () => {
    it('Status code of GET /languages should be 200', async () => {
        const response = await axios.request(optionsGET);
        expect(response.status).toEqual(200);
    });

    it('Status code of POST /translate/v2 should be 200', async () => {
        const response = await axios.request(optionsPOST);
        expect(response.status).toEqual(200);
    });

    it('json schema should be valid', async () => {
        const response = await axios.request(optionsPOST);
        const result = await validator.validate(response.data, textTranslatorSchema);
        expect(result.valid).toEqual(true);
    });

    it('Translated text of en "What is your name?" should be ru "Как вас зовут?" ', async () => {
        const response = await axios.request(optionsPOST)
        expect(await response.data.data.translatedText).toEqual('Как вас зовут?');
    });

});