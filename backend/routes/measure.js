var express = require('express');
var router = express.Router();
// we import our measure controller
var measure = require('../controllers/measure.controller');


/* GET one measure */
router.get('/:measureId', measure.findOne);

/* DELETE  one measure */
router.delete('/:measureId', measure.delete);
/* update  one measure */
router.post('/:measureId', measure.update);

/* create  one measure */
router.put('/', measure.create);

module.exports = router;
