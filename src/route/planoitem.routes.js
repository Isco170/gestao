const express = require('express');
var router = express.Router();
const itemController = require('../controller/planoitem.controller');

router.post('/', itemController.createItem);

module.exports = router;