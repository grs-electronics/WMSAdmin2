'use strict';

describe('Controller: OperadorControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('untitled1App'));

  var OperadorControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OperadorControllerCtrl = $controller('OperadorControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OperadorControllerCtrl.awesomeThings.length).toBe(3);
  });
});
