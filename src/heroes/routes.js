var express = require('express');
var router = express.Router();
const { controller } = require('./controller');

/* GET HEROES. */
router.post('/heroes', controller.create);
router.get('/heroes', controller.getAll);
router.get('/heroes/:id', controller.getOne);
router.put('/heroes/:id', controller.update);
router.post('/heroes/:id/color', controller.saveColor);
router.delete('/heroes/:id', controller.destroy);

module.exports = router;
