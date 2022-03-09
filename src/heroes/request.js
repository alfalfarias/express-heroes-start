const { query } = require('../../database');
const { HeroModel } = require('./schema');
const Joi = require('joi');

const create = async function (req, res, next) {
    const teams = ['azul', 'violeta', 'naranjo', 'verde'];
    const colors = ['#1f8ff7', '#a43de3', '#df5c0f', '#0ea521'];
    const schema = Joi.object().options({abortEarly: false}).keys({
        id: Joi.number().required(),
        name: Joi.string().required(),
        description: Joi.string().required(),
        modified: Joi.string().required(),
        thumbnailURI: Joi.string().required(),
        team: Joi.string().valid(...teams).required(),
        color: Joi.string().valid(...colors).required(),
    });
    
    const { body } = req;
    const { id } = body;

    const { error } = schema.validate(body);
    if (error) {
        return res.status(422).json(error.details);
    }

    const item = await query(() => HeroModel.findOne({id: id}));
    if (item) {
        return res.status(422).send([{message: 'id already exists'}]);
    }

    next();
};

const getAll = async function (req, res, next) {
    const schema = Joi.object().options({abortEarly: false}).keys({
        page: Joi.number().min(0).required(),
        perPage: Joi.number().min(1).required(),
        search: Joi.string().empty(),
    });

    const { page, perPage } = req.query;
    const body = {
        page: page,
        perPage: perPage,
    };

    const { error } = schema.validate(body);
    if (error) {
        return res.status(422).json(error.details);
    }

    next();
};

const getOne = async function (req, res, next) {
    const { id } = req.params;

    const item = await query(() => HeroModel.findOne({id: id}));
    if (!item) {
        return res.status(404).send('HERO NOT FOUND');
    }

    next();
};

const update = async function (req, res, next) {
    const teams = ['azul', 'violeta', 'naranjo', 'verde'];
    const colors = ['#1f8ff7', '#a43de3', '#df5c0f', '#0ea521'];
    const schema = Joi.object().options({abortEarly: false}).keys({
        id: Joi.number().required(),
        name: Joi.string().required(),
        description: Joi.string().required(),
        modified: Joi.string().required(),
        thumbnailURI: Joi.string().required(),
        team: Joi.string().valid(...teams).required(),
        color: Joi.string().valid(...colors).required(),
    });
    
    const { id } = req.params;
    const body = { ...req.body, id: id };
    
    const { error } = schema.validate(body);
    if (error) {
        return res.status(422).json(error.details);
    }

    const checkIdExists = await query(() => HeroModel.findOne({id: id}));
    if (!checkIdExists) {
        return res.status(404).send('HERO NOT FOUND');
    }

    next();
};

const saveColor = async function (req, res, next) {
    const teams = ['azul', 'violeta', 'naranjo', 'verde'];
    const colors = ['#1f8ff7', '#a43de3', '#df5c0f', '#0ea521'];
    const schema = Joi.object().options({abortEarly: false}).keys({
        id: Joi.number().required(),
        team: Joi.string().valid(...teams).required(),
        color: Joi.string().valid(...colors).required(),
    });
    
    const { id } = req.params;
    const { team, color } = req.body;
    const body = {
        id: id,
        team: team,
        color: color,
    };

    const { error } = schema.validate(body);
    if (error) {
        return res.status(422).json(error.details);
    }

    const item = await query(() => HeroModel.findOne({id: id}));
    if (!item) {
        return res.status(404).send('HERO NOT FOUND');
    }

    next();
};

const destroy = async function (req, res, next) {
    const { id } = req.params;

    const item = await query(() => HeroModel.findOne({id: id}));
    if (!item) {
        return res.status(404).send('HERO NOT FOUND');
    }

    next();
};

const request = {
    create,
    getAll,
    getOne,
    update,
    saveColor,
    destroy,
};

module.exports = {
    request
};