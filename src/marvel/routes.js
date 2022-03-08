var express = require('express');
var router = express.Router();
const {controller} = require('./controller');

/* GET HEROES. */
router.get('/heroes', controller.getAll);
router.get('/heroes/:id', controller.getOne);

module.exports = router;