const { service } = require('./service');

const create = async (req, res) => {
    const { body } = req;
    const data = await service.create(body);
    return res.status(201).send(data);
}
const getAll = async (req, res) => {
    const page = Number(req.query.page);
    const perPage = Number(req.query.perPage);
    const data = await service.getAll({page: page, perPage: perPage});
    return res.send(data);
}
const getOne = async (req, res) => {
    const id = req.params.id;
    const data = await service.getOne({id: id});
    return res.send(data);
}
const update = async (req, res) => {
    const id = req.params.id;
    const { body } = req;
    const data = await service.update({id: id, data: body});
    return res.send(data);
}
const saveColor = async (req, res) => {
    const id = req.params.id;
    const { body } = req;
    const { team, color } = body;
    const data = await service.saveColor({id: id, team: team, color: color});
    return res.send(data);
}
const destroy = async (req, res) => {
    const id = req.params.id;
    const data = await service.destroy({id: id});
    return res.status(204).send(data);
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