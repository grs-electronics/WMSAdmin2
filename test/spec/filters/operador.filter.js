'use strict';

describe('Filter: operador.filter', function () {

  // load the filter's module
  beforeEach(module('untitled1App'));

  // initialize a new instance of the filter before each test
  var operador.filter;
  beforeEach(inject(function ($filter) {
    operador.filter = $filter('operador.filter');
  }));

  it('should return the input prefixed with "operador.filter filter:"', function () {
    var text = 'angularjs';
    expect(operador.filter(text)).toBe('operador.filter filter: ' + text);
  });

});
