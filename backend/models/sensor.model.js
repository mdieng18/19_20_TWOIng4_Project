const mongoose = require('mongoose');

const sensor = new mongoose.Schema(
    {
        creationDate:Date,
        location:String,
        userId:Number
            
    }
)
module.exports = mongoose.model('Sensor', sensor);