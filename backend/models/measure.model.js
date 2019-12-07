const mongoose = require('mongoose');

const measure = new mongoose.Schema(
    {
        type: String,
        creationDate:Date,
        sensorId:String,
        value:Number
            
    }
)
module.exports = mongoose.model('Measure', measure);