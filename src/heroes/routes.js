var express = require('express');
var router = express.Router();
const { controller } = require('./controller');

/* GET HEROES. */
router.post('/heroes', controller.create);
router.get('/heroes', controller.getAll);
router.get('/heroes/:id', controller.getOne);
router.put('/heroes/:id', controller.update);
router.put('/heroes/:id/color', controller.updateColor);
router.delete('/heroes/:id', controller.destroy);

module.exports = router;
