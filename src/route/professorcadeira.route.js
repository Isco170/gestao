const express = require('express');
let router = express.Router();
const profCadeira = require('../controller/professorcadeira.controller');

router.post('/profcadeira', profCadeira.addCadeira);
router.get('/profcadeira/:usuario_id', profCadeira.readCadeiras);
router.delete('/profcadeira', profCadeira.removeCadeira);

module.exports = router;