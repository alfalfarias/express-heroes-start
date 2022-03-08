const { service } = require('./service');

const create = async function (req, res) {
    const { body } = req;
    const data = await service.create(body);
    res.status(201).send(data);
}
const getAll = async function (req, res) {
    const page = Number(req.query.page);
    const perPage = Number(req.query.perPage);
    const data = await service.getAll({page: page, perPage: perPage});
    res.send(data);
}
const getOne = async function (req, res) {
    const id = req.params.id;
    const data = await service.getOne({id: id});
    res.send(data);
}
const update = async function (req, res) {
    const id = req.params.id;
    const { body } = req;
    const data = await service.update({id: id, data: body});
    res.send(data);
}
const updateColor = async function (req, res) {
    const id = req.params.id;
    const color = 'blue';
    const data = await service.updateColor({id: id, color: color});
    res.send(data);
}
const destroy = async function (req, res) {
    const id = req.params.id;
    const data = await service.destroy({id: id});
    res.status(204);
}

const controller = {
    create,
    getAll,
    getOne,
    update,
    updateColor,
    destroy,
};

module.exports = {
    controller
};