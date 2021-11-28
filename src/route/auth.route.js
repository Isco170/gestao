var express = require('express');
var authController = require('../controller/auth.controller');
var router = express.Router();

router.post('/login', authController.login);

module.exports = router;