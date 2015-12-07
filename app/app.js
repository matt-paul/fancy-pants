'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('fancyPants', [
  'ngRoute'
]).
config(['$routeProvider',
function($routeProvider) {
  $routeProvider.
  when('/step-1', {
    templateUrl: 'partials/size.html'
  }).
  when('/step-2', {
    templateUrl: 'partials/material.html'
  }).
  when('/step-3', {
    templateUrl: 'partials/colour.html'
  }).
  when('/step-4', {
    templateUrl: 'partials/pattern.html'
  }).
  when('/step-5', {
    templateUrl: 'partials/extras.html'
  }).
  otherwise({redirectTo: '/size'});
}]);
