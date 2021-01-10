// Database
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/profileDB", {useUnifiedTopology: true, useNewUrlParser: true}, ()=>{
  console.log("Server is up");
});




var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public/build/')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Creating a schema for personal information.
const profileSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  e_mail: String
});

const Profile = mongoose.model("Profile", profileSchema);

app.post("/", function (req, res) {
  //console.log(req.body);
  const fir_name = req.body.user.firstName;
  const last_name = req.body.user.lastName;
  const e_mail_addr = req.body.user.email;

  const new_client = new Profile(
    {
      fname: fir_name,
      lname: last_name,
      e_mail: e_mail_addr
    }
  );
  new_client.save();
  // console.log(req.body.firstName);
  // res.send(req.body.lastName + req.body.emailAddress);
  res.send("<h1>Thankyou for registering with us!</h1>");
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/build/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
