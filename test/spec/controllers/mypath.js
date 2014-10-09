'use strict';

describe('Controller: MypathCtrl', function () {

  // load the controller's module
  beforeEach(module('ridingApp'));

  var MypathCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MypathCtrl = $controller('MypathCtrl', {
      $scope: scope
    });
  }));

  scope.pathList = [
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
});
