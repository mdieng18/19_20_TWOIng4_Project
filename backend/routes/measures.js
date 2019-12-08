var express = require('express');
var router = express.Router();
var measure = require ('../controllers/measure.controller')
/* GET measures listing. */
router.get('/:type', measure.findAll);


module.exports = router;