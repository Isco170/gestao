const express = require('express');
const cordcurso = require('../controller/cordcurso.controller');
let router = express.Router();

router.post('/cordcurso', cordcurso.addCurso);
router.get('/cordcurso/:id', cordcurso.readCurso);
router.delete('/cordcurso/:id', cordcurso.deleteCurso);

module.exports = router;