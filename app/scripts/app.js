'use strict';

/**
 * @ngdoc overview
 * @name ridingApp
 * @description
 * # ridingApp
 *
 * Main module of the application.
 */
angular
  .module('ridingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/myPath', {
        templateUrl: 'views/mypath.html',
        controller: 'MypathCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
