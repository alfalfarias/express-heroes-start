var express = require('express');
var router = express.Router();
const { controller } = require('./controller');
const { request } = require('./request');

/* GET HEROES. */
router.get('/heroes', request.getAll, controller.getAll);
router.get('/heroes/:id', request.getOne, controller.getOne);

module.exports = router;