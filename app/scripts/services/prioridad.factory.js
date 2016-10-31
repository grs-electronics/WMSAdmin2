'use strict';

/**
 * @ngdoc service
 * @name untitled1App.prioridad.factory
 * @description
 * # prioridad.factory
 * Factory in the untitled1App.
 */
angular.module('WMSWeb')
  .factory('PrioridadFactory', function ($http) {
    var urlBase='http://localhost:8080/api/v1/prioridad';
    var _prioridadFactory={};
    _prioridadFactory.getAll=function () {
      return $http.post(urlBase);
    };
    return _prioridadFactory;
  });
