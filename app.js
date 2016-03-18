'use strict';

angular.module('myApp', [
  'ngRoute',
  'ngTable',
  'ui.select',
  'ngSanitize',

  'myApp.container',
  'myApp.image',
  'myApp.network',
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);