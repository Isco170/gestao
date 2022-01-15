const express = require('express');
const cursocadeiraController = require('../controller/cursocadeira.controller');
const isAuthenticated = require('../middlewares/isAuthenticate');
var router = express.Router();

router.post('/cursocadeira', cursocadeiraController.create);
router.get('/cursocadeira/:curso_id', cursocadeiraController.read);
router.delete('/cursocadeira', cursocadeiraController.removeCadeira);


module.exports = router;