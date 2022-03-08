const {service} = require('./service');

const update = async function (req, res) {
    const id = req.params.id;
    const values = { };
    const data = await service.updateColor({id: id, values});
    res.send(data);
}
const updateColor = async function (req, res) {
    const id = req.params.id;
    const color = 'blue';
    const data = await service.updateColor({id: id, color: color});
    res.send(data);
}


const controller = {
    update,
    updateColor,
};

module.exports = {
    controller
};