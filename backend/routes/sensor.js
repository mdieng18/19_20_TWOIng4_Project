var express = require('express');
var router = express.Router();
// we import our sensor controller
var sensor = require('../controllers/sensor.controller');


/* GET one sensor */
router.get('/:sensorId', sensor.findOne);

/* DELETE  one sensor */
router.delete('/:sensorId', sensor.delete);
/* update  one sensor */
router.post('/:sensorId', sensor.update);

/* create  one sensor */
router.put('/', sensor.create);

module.exports = router;
