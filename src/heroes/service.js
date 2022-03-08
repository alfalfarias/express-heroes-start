const update = async function ({id, values}) {
    return {
        id: id, 
        ...values
    };
}

const updateColor = async function ({id, color=null}) {
    return {
        id: id, 
        color: color
    };
}

const service = {
    update,
    updateColor,
};

module.exports = {
    service
};