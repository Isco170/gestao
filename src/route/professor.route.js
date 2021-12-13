const express = require('express');
let router = express.Router();
const profController = require('../controller/professor.controller');

router.get('/professor', profController.readProf);
router.get('/professor/:id', profController.oneProf);
router.delete('/professor/:id', profController.deleteProf);

module.exports = router;