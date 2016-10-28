'use strict';

describe('Service: auth.factory', function () {

  // load the service's module
  beforeEach(module('untitled1App'));

  // instantiate service
  var auth.factory;
  beforeEach(inject(function (_auth.factory_) {
    auth.factory = _auth.factory_;
  }));

  it('should do something', function () {
    expect(!!auth.factory).toBe(true);
  });

});
