'use strict';

/**
 * @ngdoc function
 * @name ridingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ridingApp
 */
angular.module('ridingApp')
  .controller('MainCtrl', function ($scope, $modal, util) {

    $scope.startPoint = false;
    $scope.map = new BMap.Map('map');
    $scope.locationList = [];
    $scope.polyline = null;

    $scope.savePolyline = function () {
      if($scope.polyline == null) {
        alert('请编辑路线!');
        return;
      }
      var modalInstance = $modal.open({
        templateUrl: '/views/savepath.html',
        controller: 'SavePathCtrl',
        resolve: {
          pointList: function () {
            return $scope.polyline.getPath();
          }
        }
      });

      modalInstance.result.then(function () {
        alert('保存成功');
      }, function () {
      });
    }

    function getLocation () {
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(function (location) {
        var zoomControl= new BMap.NavigationControl();
        $scope.map.addControl(new BMap.NavigationControl()); //添加缩放控件

        showCurrentPosition(location);
      });
    }

    // @todo 在地图中查看
    recoverPolyline = function (path) {
      var path = JSON.parse(localStorage.getItem('pathList'));
      var pointList = path.pointList;
      if(pointList.length > 1) {
        util.createAndAddPolyline(pointList, $scope.map);
      } else {
        var location = {
          point: pointList[0]
        }
        showCurrentPosition(location);
      }
    }

    function showCurrentPosition (location) {
      var latitude = location.point.lat;
      var longitude = location.point.lng;

      var point = new BMap.Point(longitude, latitude); // 创建点坐标
      $scope.map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
      var marker = new BMap.Marker(point);
      $scope.map.addOverlay(marker);
    }

    function locationToPoint () {
      var pointList = [];
      for(var locationListIndex = 0; locationListIndex < $scope.locationList.length; locationListIndex++) {
        var lng = $scope.locationList[locationListIndex].point.lng;
        var lat = $scope.locationList[locationListIndex].point.lat;
        pointList.push(new BMap.Point(lng, lat));
      }
      return pointList;
    }

    function drawPolyline () {
      var pointList = locationToPoint($scope.locationList);
      $scope.polyline = util.createAndAddPolyline(pointList, $scope.map);
    }

    //单击获取点击的经纬度
    $scope.map.addEventListener("click",function(location){
      if(!$scope.startPoint) {
        $scope.startPoint = true;
      }
      $scope.locationList.push(location);
      showCurrentPosition(location);
      drawPolyline($scope.locationList);
    });

    var init = (function () {
      getLocation();
    })();
  });
