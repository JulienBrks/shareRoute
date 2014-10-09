'use strict';

/**
 * @ngdoc function
 * @name ridingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ridingApp
 */
angular.module('ridingApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
