const express = require('express');
const cursocadeiraController = require('../controller/cursocadeira.controller');
const isAuthenticated = require('../middlewares/isAuthenticate');
var router = express.Router();

router.post('/cursocadeira', cursocadeiraController.create);

module.exports = router;