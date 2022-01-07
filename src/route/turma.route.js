const express = require('express');
let router = express.Router();
const turmaController = require('../controller/turma.controller');

router.post('/turma', turmaController.addTurma);

module.exports = router;