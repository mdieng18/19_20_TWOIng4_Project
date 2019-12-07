const mongoose = require('mongoose');

const user = new mongoose.Schema(
    {
        location: String,
        personsInHouse:Number,
        houseSize:String,
            
    }
)
module.exports = mongoose.model('User', user);