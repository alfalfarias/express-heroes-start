const { ThumbnailDTO } = require('./thumbnail.dto');

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

module.exports = {
    ResultDTO,
};