'use strict';

/**
 * @ngdoc directive
 * @name ridingApp.directive:autoHeight
 * @description
 * # autoHeight
 */
angular.module('ridingApp')
  .directive('autoHeight', ['$window', function (window) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var windowHeight = $(window).height();
        element.height(windowHeight);
      }
    };
  }]);
