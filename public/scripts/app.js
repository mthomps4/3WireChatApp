'use strict';

var app = angular.module('app',["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'templates/_main.html',
    controller: 'ChatController'
  })
  .when('/draw', {
    templateUrl: 'templates/_draw.html',
    controller: 'DrawController'
  })
  .when('/board', {
    templateUrl: 'templates/_board.html',
    controller: 'BoardController'
  })
  .otherwise({redirectTo: '/'});
});
