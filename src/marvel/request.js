const Joi = require('joi');

const getAll = async function (req, res, next) {
    const schema = Joi.object().options({abortEarly: false}).keys({
        page: Joi.number().min(0).required(),
        perPage: Joi.number().min(1).max(100).required(),
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
    next();
};

const request = {
    getAll,
    getOne,
};

module.exports = {
    request
};