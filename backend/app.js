var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require('morgan');
const mongoose =require('mongoose');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userRouter = require('./routes/user');
var measureRouter = require('./routes/measure')
var measuresRouter = require('./routes/measures')
var sensorRouter = require('./routes/sensor')
var sensorsRouter = require('./routes/sensors')

mongoose.connect('mongodb://localhost/DashboardProject', { useNewUrlParser: true });
const app = express();

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once("open", function() {
  console.log("connexion à la base ok");
});



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/users', usersRouter);
app.use('/measure',measureRouter);
app.use('/measures',measuresRouter);
app.use('/sensor',sensorRouter);
app.use('/sensors',sensorsRouter);

module.exports = app;
