var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var port     = process.env.PORT || 3000;

// var routes = require('./routes/index');
// var users = require('./routes/users');

var app = express();

var mongoose = require('mongoose');
var passport = require('passport');
var Strategy = require('passport-local').Srategy;
var flash = require('connect-flash');
var session = require('express-session');


//configuration
mongoose.connect('mongodb://localhost/3WireChatLogin'); //Connect to login database
require('./public/passport/config/passport.js')(passport); // pass passport for configuration

// // view engine setup
// app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));


// Initialize Passport and restore authentication state, if any, from the session.
app.use(session({secret:"BuildChats"}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./public/passport/app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// app.use('/', routes);
// app.use('/users', users);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
// // error handlers
//
// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }
//
// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });

console.log('The gate to Gondor is open on ' + port);

module.exports = app;
