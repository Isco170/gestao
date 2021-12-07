const express = require('express');
let router = express.Router();
const cordController = require('../controller/coodernador.controller');

router.get('/', cordController.read);

module.exports = router;