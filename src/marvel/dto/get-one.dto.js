const { ResultDTO } = require('./result.dto');

const GetOneDTO = ({offset, limit, total, count, results}) => {    
    const dto = {
        offset: offset, 
        limit: limit, 
        total: total, 
        count: count, 
        results: results.map(result => {
            const resultDTO = ResultDTO(result);
            return resultDTO;
        }),
    };
    return dto;
};

module.exports = {
    GetOneDTO,
};