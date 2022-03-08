var express = require('express');
var router = express.Router();
const { controller } = require('./controller');

/* GET HEROES. */
router.put('/heroes/:id', controller.update);
router.put('/heroes/:id/color', controller.update);

module.exports = router;
