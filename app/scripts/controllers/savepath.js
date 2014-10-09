'use strict';

/**
 * @ngdoc function
 * @name ridingApp.controller:SavepathctrlCtrl
 * @description
 * # SavepathctrlCtrl
 * Controller of the ridingApp
 */
angular.module('ridingApp')
  .controller('SavePathCtrl', function ($scope, $modalInstance, $cookies, pointList) {
    var date = moment().toISOString();
    $scope.path = {
      title: '',
      content: '',
      pointList: pointList,
      date: date
    }

    $scope.ok = function () {
      var userId = $cookies.userId;
      var pathList = JSON.parse(localStorage.getItem('pathList'));
      if(pathList == null) {
        pathList = []
      }
      pathList.push($scope.path);
      localStorage.setItem('pathList', JSON.stringify(pathList));
      $modalInstance.close('ok');
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
