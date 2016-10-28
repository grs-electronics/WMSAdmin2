'use strict';

describe('Service: entrada.factory', function () {

  // load the service's module
  beforeEach(module('untitled1App'));

  // instantiate service
  var entrada.factory;
  beforeEach(inject(function (_entrada.factory_) {
    entrada.factory = _entrada.factory_;
  }));

  it('should do something', function () {
    expect(!!entrada.factory).toBe(true);
  });

});
