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
const saveColor = async function (req, res) {
    const id = req.params.id;
    const { body } = req;
    const { team, color } = body;
    const data = await service.saveColor({id: id, team: team, color: color});
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
    saveColor,
    destroy,
};

module.exports = {
    controller
};