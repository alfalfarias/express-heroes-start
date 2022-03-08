var express = require('express');
var router = express.Router();
const { service } = require('./service');

/* GET HEROES. */
router.get('/heroes', service.getAll);
router.get('/heroes/:id', service.getOne);

module.exports = router;
