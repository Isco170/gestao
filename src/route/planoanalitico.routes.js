const express = require('express');
var router = express.Router();
const planoanaliticoController = require('../controller/planoanalitico.controller');

router.post('/', planoanaliticoController.createPlano);
router.get('/', planoanaliticoController.readPlano);

module.exports = router;