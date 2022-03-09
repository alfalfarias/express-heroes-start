var express = require('express');
var router = express.Router();
const { controller } = require('./controller');
const { request } = require('./request');

/* GET HEROES. */
router.post('/heroes', request.create, controller.create);
router.get('/heroes', request.getAll, controller.getAll);
router.get('/heroes/:id', request.getOne, controller.getOne);
router.put('/heroes/:id', request.update, controller.update);
router.post('/heroes/:id/color', request.saveColor, controller.saveColor);
router.delete('/heroes/:id', request.destroy, controller.destroy);

module.exports = router;
