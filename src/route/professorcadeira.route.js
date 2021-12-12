const express = require('express');
let router = express.Router();
const profCadeira = require('../controller/professorcadeira.controller');

router.post('/profcadeira', profCadeira.addCadeira);

module.exports = router;