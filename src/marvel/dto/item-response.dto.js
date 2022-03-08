const ItemResponseDTO = ({ id, name, description, modified, thumbnailURI, color }) => {    
    const dto = {
        id: id,
        name: name,
        description: description,
        modified: modified,
        thumbnailURI: thumbnailURI,
        color: color,
    };
    return dto;
};

module.exports = {
    ItemResponseDTO,
};