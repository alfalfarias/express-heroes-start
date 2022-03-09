const axios = require('axios').default;
const { GetAllDTO, GetAllResponseDTO, ItemResponseDTO, GetOneDTO, GetOneResponseDTO } = require('./dto');
const { HeroModel } = require('../heroes/schema');
const { query } = require('../../database');
const marvelApi = require('../../config/marvel-api');

const API_URL = marvelApi.URL;
const API_PUBLIC_KEY = marvelApi.PUBIC_KEY;
const API_TS = marvelApi.TS;
const API_HASH = marvelApi.HASH;

const getAll = async ({ page=0, perPage=20, search=null }) => {
    const offset = page * perPage;
    const nameStartsWith = search ? ('&nameStartsWith=' + search) : '';

    const url = `${API_URL}/characters?apikey=${API_PUBLIC_KEY}&ts=${API_TS}&hash=${API_HASH}&offset=${offset}${nameStartsWith}`;
    const response = await axios.get(url);
    const { data } = response.data;
    const getAllDTO = GetAllDTO(data);
    const { results } = getAllDTO;
    const items = await Promise.all(
        results.map(async (result) => {
            const heroModel = await query(() => HeroModel.findOne({id: result.id}));
            const dto = ItemResponseDTO({
                id: result.id, 
                name: result.name, 
                description: result.description, 
                modified: result.modified, 
                thumbnailURI: `${result.thumbnail.path}.${result.thumbnail.extension}`,
                color: heroModel ? heroModel.color : null, 
                team: heroModel ? heroModel.team : null, 
            }); 
            return dto;
        })
    );
    const getAllResponseDTO = GetAllResponseDTO({
        page: page, 
        perPage: perPage, 
        totalPages: getAllDTO.total, 
        items: items,
    });
    
    return getAllResponseDTO;
}

const getOne = async function ({ id }) {
    const url = `${API_URL}/characters/${id}?apikey=${API_PUBLIC_KEY}&ts=${API_TS}&hash=${API_HASH}`;
    const response = await axios.get(url);
    const { data } = response.data;
    const getOneDTO = GetOneDTO(data);
    const [ result ] = getOneDTO.results;
    const heroModel = await query(() => HeroModel.findOne({id: result.id}));
    const getOneResponseDTO = GetOneResponseDTO({
        id: result.id,
        name: result.name,
        description: result.description,
        modified: result.modified,
        thumbnailURI: `${result.thumbnail.path}.${result.thumbnail.extension}`,
        color: heroModel ? heroModel.color : null, 
        team: heroModel ? heroModel.team : null, 
    });
    return getOneResponseDTO;
}

const service = {
    getAll,
    getOne,
};

module.exports = {
    service
};