'use strict';

var app = angular.module('app',["ngRoute"]);


app.config(function($routeProvider){
  $routeProvider
  .when('/dashboard', {
    templateUrl: '../templates/_dashboard.html',
  })
  .otherwise({redirectTo: '/dashboard'});
});

app.directive("test", function(){
return{
    templateUrl: "../templates/_test.html",
    };
});
