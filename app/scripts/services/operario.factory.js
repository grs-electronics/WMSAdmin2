'use strict';

/**
 * @ngdoc service
 * @name WMSWebApp.operario.factory
 * @description
 * # operario.factory
 * Factory in the WMSWeb.
 */
angular.module('WMSWeb')
  .factory('OperadorFactory', function ($http,$rootScope) {
    var urlBase='http://localhost:8080/api/v1/operario';
    var _operarioFactory={};
    _operarioFactory.getAll=function () {
      return $http.post(urlBase);
    };
    return _operarioFactory;
  });
