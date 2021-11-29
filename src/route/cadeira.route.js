const express = require('express');
const cadeiraController = require('../controller/cadeira.controller');
const isAuthenticated = require('../middlewares/isAuthenticate');
var router = express.Router();

router.post('/cadeira', cadeiraController.createCadeira);
router.get('/cadeira', cadeiraController.readCadeira);
router.put('/cadeira', cadeiraController.updateCadeira);
router.delete('/cadeira/:id', cadeiraController.deleteCadeira);

module.exports = router;