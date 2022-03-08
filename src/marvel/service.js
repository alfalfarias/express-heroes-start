const axios = require('axios').default;
const marvelApi = require('../../config/marvel-api');

const API_URL = marvelApi.URL;
const API_PUBLIC_KEY = marvelApi.PUBIC_KEY;
const API_TS = marvelApi.TS;
const API_HASH = marvelApi.HASH;

const getAll = async ({page=0, perPage=20, search=null}) => {
    const offset = page * perPage;
    const nameStartsWith = search ? ('&nameStartsWith=' + search) : '';

    const url = `${API_URL}/characters?apikey=${API_PUBLIC_KEY}&ts=${API_TS}&hash=${API_HASH}&offset=${offset}${nameStartsWith}`;
    const response = await axios.get(url);
    const {data} = response.data;
    return data;
}

const getOne = async function ({id}) {
    const url = `${API_URL}/characters/${id}?apikey=${API_PUBLIC_KEY}&ts=${API_TS}&hash=${API_HASH}`;
    const response = await axios.get(url);
    const {data} = response.data;
    return data;
}

const service = {
    getAll,
    getOne,
};

module.exports = {
    service
};