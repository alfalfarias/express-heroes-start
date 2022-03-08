const update = async function (req, res) {
    const id = req.params.id;
    res.send('USER ID: '+id);
}

const service = {
    update,
};

module.exports = {
    service
};