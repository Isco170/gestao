const express = require('express');
let router = express.Router();
const turmaController = require('../controller/turma.controller');

router.post('/turma', turmaController.addTurma);
router.get('/turma', turmaController.readTurmas);
router.get('/turma/:id', turmaController.readOneTurma);

module.exports = router;