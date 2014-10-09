'use strict';

describe('Controller: SavePathCtrl', function () {

  // load the controller's module
  beforeEach(module('ridingApp'));

  var SavepathctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SavepathctrlCtrl = $controller('SavePathCtrl', {
      $scope: scope
    });
  }));

});
