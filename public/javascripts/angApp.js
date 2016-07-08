'use strict';

var app = angular.module('app',["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '../templates/_welcome.html',
    controller: 'navController'
  })
  .when('/chat', {
    templateUrl: '../templates/_chat.html',
    controller: 'chatController'
  })
  .when('/draw', {
    templateUrl: '../templates/_draw.html',
    controller: 'navController'
  })
  .when('/calc', {
    templateUrl: '../templates/_calc.html',
    controller: 'navController'
  })
  .when('/profile', {
    templateUrl: '../templates/_profile.ejs',
    controller: 'navController'
  })
  .otherwise({redirectTo: '/'});
});
