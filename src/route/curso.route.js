const express = require('express');
const cursoController = require('../controller/curso.controller');
const isAuthenticated = require('../middlewares/isAuthenticate');
var router = express.Router();

router.post('/curso', isAuthenticated, cursoController.createCurso);

module.exports = router;