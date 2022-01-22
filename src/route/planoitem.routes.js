const express = require('express');
var router = express.Router();
const itemController = require('../controller/planoitem.controller');

router.post('/', itemController.createItem);
router.get('/:id', itemController.readItens);
router.delete('/:id', itemController.deleteitem);
router.put('/:id', itemController.concluiritem);

module.exports = router;