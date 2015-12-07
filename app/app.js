'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('fancyPants', [
  'ngRoute',
  'app.size',
  'myApp.view2',
  'app.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/size'});
}]);
