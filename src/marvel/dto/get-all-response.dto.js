const { ItemResponseDTO } = require('./item-response.dto');

const GetAllResponseDTO = ({ page, perPage, totalPages, items }) => {    
    const dto = {
        page: page, 
        perPage: perPage, 
        totalPages: totalPages, 
        items: items.map(item => ItemResponseDTO(item)),
    };
    return dto;
};

module.exports = {
    GetAllResponseDTO,
};