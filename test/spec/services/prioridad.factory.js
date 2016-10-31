'use strict';

describe('Service: prioridad.factory', function () {

  // load the service's module
  beforeEach(module('untitled1App'));

  // instantiate service
  var prioridad.factory;
  beforeEach(inject(function (_prioridad.factory_) {
    prioridad.factory = _prioridad.factory_;
  }));

  it('should do something', function () {
    expect(!!prioridad.factory).toBe(true);
  });

});
