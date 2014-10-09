'use strict';

/**
 * @ngdoc function
 * @name ridingApp.controller:MypathCtrl
 * @description
 * # MypathCtrl
 * Controller of the ridingApp
 */
angular.module('ridingApp')
  .controller('MypathCtrl', function ($scope, util) {
    $scope.pathList = [
      {
        "pathList": [
          {
            "lng": 122.000000,
            "lat": 33.000000
          },
          {
            "lng": 140.000000,
            "lat": 20.000000
          }
        ],
        "date": "2014-10-09T08:40:07.593Z",
        "content": "content",
        "title": "title"
      }
    ]

    $scope.pathList = JSON.parse(localStorage.getItem('pathList'));
  });
