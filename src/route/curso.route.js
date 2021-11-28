const express = require('express');
const cursoController = require('../controller/curso.controller');
var router = express.Router();

router.post('/curso', cursoController.createCurso);

module.exports = router;