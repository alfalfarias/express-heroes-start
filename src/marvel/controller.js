const { service } = require('./service');

const getAll = async (req, res) => {
    const page = Number(req.query.page);
    const perPage = Number(req.query.perPage);
    const search = req.query.search;
    const data = await service.getAll({
        page: page, 
        perPage: perPage, 
        search: search,
    });
    res.send(data);
}

const getOne = async function (req, res) {
    const id = req.params.id;
    const data = await service.getOne({id: id});
    res.send(data);
}

const controller = {
    getAll,
    getOne,
};

module.exports = {
    controller
};