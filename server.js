var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require("method-override");

var indexRouter = require('./routes/index');
var todosRouter = require('./routes/todos');    

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//follow along create a middleware function
app.use(function (req, res, next) {
  console.log("Hello Sei!");
  // need to pt next(); because the server will be waiting for a response, will see the loading constantly waiting for a response
  // add a time property to the res.locals object
  //the time poperty will then be accessible withintemplates
  res.locals.time = new Date().toLocaleTimeString(); 
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//
app.use(methodOverride("_method"));

//the first arg is the :starts with" path
//the paths within the route modules are appended to the starts paths
app.use('/', indexRouter);
app.use('/todos', todosRouter);

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
