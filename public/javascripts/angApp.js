'use strict';

var app = angular.module('app',["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
  .when('/dashboard', {
    templateUrl: '../templates/_profile.html',
    controller: 'navController'
  })
  .when('/chat', {
    templateUrl: '../templates/_chat.html',
    controller: 'navController'
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
    templateUrl: '../templates/_profile.html',
    controller: 'navController'
  })
  .otherwise({redirectTo: '/dashboard'});
});



//******* CONTROLLERS **********

app.controller('navController', function(){
});

//******* DIRECTIVES**********

app.directive("test", function(){
return{
    templateUrl: "../templates/_test.html",
    };
});

app.directive("dashNav",function(){
  return{
    templateUrl: "../templates/_dashNav.html"
  }
})
