const express = require('express');
const cursoController = require('../controller/curso.controller');
const isAuthenticated = require('../middlewares/isAuthenticate');
var router = express.Router();

router.post('/curso',  cursoController.createCurso);
router.get('/curso',  cursoController.readCurso);
router.put('/curso',  cursoController.updateCurso);
router.delete('/curso/:id', cursoController.deleteCurso);

module.exports = router;