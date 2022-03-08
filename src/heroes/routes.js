var express = require('express');
var router = express.Router();
const { service } = require('./service');

/* GET HEROES. */
router.put('/heroes/:id', service.update);

module.exports = router;
