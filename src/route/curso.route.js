const express = require('express');
const cursoController = require('../controller/curso.controller');
const isAuthenticated = require('../middlewares/isAuthenticate');
var router = express.Router();

router.post('/curso', isAuthenticated, cursoController.createCurso);
router.get('/curso', isAuthenticated, cursoController.readCurso);
router.put('/curso', isAuthenticated, cursoController.updateCurso);
router.delete('/curso/:id', isAuthenticated, cursoController.deleteCurso);

module.exports = router;