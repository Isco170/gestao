var express = require('express');
var usuarioController = require('../controller/usuario.controller');
var router = express.Router();

router.post('/usuario', usuarioController.createAdmin);
router.post('/newUser', usuarioController.createUser);

module.exports = router;