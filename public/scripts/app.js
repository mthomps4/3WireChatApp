'use strict';

var app = angular.module('app',["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'templates/_main.html',
    controller: 'LoginController'
  })
  .when('/login', {
    templateUrl: 'templates/_login.html',
    controller: 'signupController'
  })
  .when('/signup', {
    templateUrl: 'templates/_signup.html',
    controller: 'signupController'
  })
  .when('/dashboard', {
    templateUrl: 'templates/_dashboard.html',
    controller: 'dashController'
  })
  .otherwise({redirectTo: '/'});
});
