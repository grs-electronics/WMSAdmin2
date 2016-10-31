'use strict';

/**
 * @ngdoc filter
 * @name untitled1App.filter:operador.filter
 * @function
 * @description
 * # operador.filter
 * Filter in the untitled1App.
 */
angular.module('WMSWeb')
  .filter('operador.filter', function () {
    return function (input) {
      return 'operador.filter filter: ' + input;
    };
  });
