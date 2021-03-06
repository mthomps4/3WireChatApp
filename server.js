var express = require('express');
var path = require('path');
var http = require('http');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

// var routes = require('./routes/index');
// var users = require('./routes/users');

var app = express();
var configDB = require('./passportConfig/database.js');

//For Socket Chat
app.io = require('socket.io')();

mongoose.connect(configDB.url); // connect to our database

require('./passportConfig/passport')(passport); // pass passport for configuration
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/images/', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', routes);
// app.use('/users', users);


// required for passport
app.use(session({
  secret: 'BuildChats',
  resave: true,
  saveUninitialized: true
})); // session

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./passportApp/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


//SOCKET.IO
var messages = mongoose.Schema({
  message: String
});

var Chat = mongoose.model('message', messages);

app.io.on('connection', function(socket){
  console.log('a user connected');

  Chat.find({}, function(err, messages){
    if (err) return console.error(err);
    console.log(messages);
    socket.emit('load old msgs', messages);
  });

  socket.on('chat message', function(msg){
     console.log('chat message: ' + msg);
     var newMsg = new Chat({message: "" + msg})
     console.log('attempt to save ' + msg);
        newMsg.save(function(err){
          if(err)throw err;
          console.log("echo back message " + msg);
          app.io.emit('chat message', msg);
        });
   });

   socket.on('disconnect', function(){
     console.log('user disconnected');
   });
});


module.exports = app;
