'use strict';

describe('Controller: EntradaproductoCtrl', function () {

  // load the controller's module
  beforeEach(module('untitled1App'));

  var EntradaproductoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EntradaproductoCtrl = $controller('EntradaproductoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EntradaproductoCtrl.awesomeThings.length).toBe(3);
  });
});
