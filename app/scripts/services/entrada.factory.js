'use strict';

/**
 * @ngdoc service
 * @name WMSWeb.entrada.factory
 * @description
 * # entrada.factory
 * Factory in the WMSWeb.
 */
angular.module('WMSWeb')
  .factory('EntradaProductoFactory', function ($http) {
    var urlBase='http://localhost:8080/api/v1/entrega';
    var _entradaFactory={};
    _entradaFactory.getAll=function () {
      return $http.post(urlBase);
    };
    return _entradaFactory;
  });
