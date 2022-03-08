const GetAllDTO = ({offset, limit, total, count, results}) => {    
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

const ResultDTO = ({id, name, description, modified, thumbnail}) => {
    const dto = {
        id: id, 
        name: name, 
        description: description, 
        modified: modified, 
        thumbnail: ThumbnailDTO(thumbnail),
    };
    return dto;
};

const ThumbnailDTO = ({path, extension}) => {
    const dto = {
        path: path,
        extension: extension,
    };
    return dto;
};

module.exports = {
    GetAllDTO,
    ResultDTO,
    ThumbnailDTO,
};