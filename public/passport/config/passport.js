var LocalStrategy   = require('passport-local').Strategy;
var passport = require('passport');
var mongoose = require('mongoose');
// load up the user model
var User = require('../app/models/user.js');

// expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
           // by default, local strategy uses username and password, we will override with email
           usernameField : 'email',
           passwordField : 'password',
           passReqToCallback : true // allows us to pass back the entire request to the callback
       },
       function(req, email, password, done) { // callback with email and password from our form

               process.nextTick(function() {

               User.findOne({ 'local.email' :  email }, function(err, user) {
                   // if there are any errors, return the error
                   if (err)
                       return done(err);
                   // check to see if theres already a user with that email
                   if (user) {
                       return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                   } else {
                       var newUser            = new User();
                       // set the user's local credentials
                       newUser.local.email    = email;
                       newUser.local.password = newUser.generateHash(password);

                       // save the user
                       newUser.save(function(err) {
                           if (err)
                               throw err;
                           return done(null, newUser);
                       });
                   }

               }); //User.findOne

             });//process.nextTick

           }));//function(req ...)

       };//Export
