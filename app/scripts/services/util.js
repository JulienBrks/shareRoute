'use strict';

/**
 * @ngdoc service
 * @name ridingApp.util
 * @description
 * # util
 * Service in the ridingApp.
 */
angular.module('ridingApp')
  .service('util', function util() {
    this.createAndAddPolyline = function (pointList, map) {
      var polyline = new BMap.Polyline(pointList, {strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5}); //创建折线
      map.addOverlay(polyline); //增加折线
      polyline.enableEditing();
      return polyline;
    };
  });
