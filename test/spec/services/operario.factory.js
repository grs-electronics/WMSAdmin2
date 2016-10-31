'use strict';

describe('Service: operario.factory', function () {

  // load the service's module
  beforeEach(module('untitled1App'));

  // instantiate service
  var operario.factory;
  beforeEach(inject(function (_operario.factory_) {
    operario.factory = _operario.factory_;
  }));

  it('should do something', function () {
    expect(!!operario.factory).toBe(true);
  });

});
