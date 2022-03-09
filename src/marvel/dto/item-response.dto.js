const ItemResponseDTO = ({ id, name, description, modified, thumbnailURI, color, team }) => {    
    const dto = {
        id: id,
        name: name,
        description: description,
        modified: modified,
        thumbnailURI: thumbnailURI,
        color: color,
        team: team,
    };
    return dto;
};

module.exports = {
    ItemResponseDTO,
};