'use strict';

/**
 * @ngdoc function
 * @name WMSWebApp.controller:OperadorCtrl
 * @description
 * # OperadorControllerCtrl
 * Controller of the WMSWeb
 */
angular.module('WMSWeb')
  .controller('OperadorCtrl', function ($scope,OperadorFactory) {
    $scope.listaOperador=[];
    OperadorFactory.getAll().success(function (data) {
      $scope.listaOperador=data;
    }).error(function (error) {
      console.log(error);
    });
  });
