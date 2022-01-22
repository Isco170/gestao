const express = require('express');
var router = express.Router();
const planoanaliticoController = require('../controller/planoanalitico.controller');

router.post('/', planoanaliticoController.createPlano);
router.get('/', planoanaliticoController.readPlano);
router.delete('/:id', planoanaliticoController.deletePlano);

module.exports = router;