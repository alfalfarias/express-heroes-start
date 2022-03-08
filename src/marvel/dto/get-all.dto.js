const { ResultDTO } = require('./result.dto');

const GetAllDTO = ({offset, limit, total, count, results}) => {    
    const dto = {
        offset: offset, 
        limit: limit, 
        total: total, 
        count: count, 
        results: results.map(result => ResultDTO(result)),
    };
    return dto;
};

module.exports = {
    GetAllDTO,
};