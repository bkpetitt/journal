console.log('journal - app.js');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var moment = require('moment');
moment().format();
require('dotenv').config();

var mongoose = require('mongoose');
mongoose.connect('mongodb://'+process.env.DB_USER+':'+process.env.DB_PASSWORD+'@ds161194.mlab.com:61194/diaryevents');
// mongodb://<dbuser>:<dbpassword>@ds161194.mlab.com:61194/diaryevents

var index = require('./routes/index');
var journals = require('./routes/journals');
// var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Change the HTTP 'method' of the request to handle PUT and DELETE requests if they are sent in the _method property of a form
app.use(methodOverride(function (req, res) {
  console.log('apps.js using methodOverride');
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    console.log('apps.js using methodOverride -body/object/method');
    console.log('req: ', req.body._method);
    var method = req.body._method;
    console.log('meth: ', method);
    delete req.body._method;
    return method;
  }
}));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/journals', journals);
// app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log('app.js using 404 error');
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  console.log('app.js using general error');
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
