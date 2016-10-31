'use strict';

/**
 * @ngdoc function
 * @name WMSWeb.controller:EntradaproductoCtrl
 * @description
 * # EntradaproductoCtrl
 * Controller of the untitled1App
 */
angular.module('WMSWeb')
  .controller('EntradaProductoCtrl', function ($scope,EntradaProductoFactory,OperadorFactory,PrioridadFactory) {
    $scope.listaEntrega=[];
    EntradaProductoFactory.getAll().success(function (data) {
      $scope.listaEntrega=data;
    }).error(function (error) {
      console.log(error);
    });
    $scope.listaOperador=[];
    OperadorFactory.getAll().success(function (data) {
      $scope.listaOperador=data;
    }).error(function (error) {
      console.log(error);
    });
    $scope.listaPrioridad=[];
    PrioridadFactory.getAll().success(function (data) {
      $scope.listaPrioridad=data;
    }).error(function (err) {
      console.log(err);
    })
  });
