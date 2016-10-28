'use strict';

/**
 * @ngdoc function
 * @name WMSWeb.controller:EntradaproductoCtrl
 * @description
 * # EntradaproductoCtrl
 * Controller of the untitled1App
 */
angular.module('WMSWeb')
  .controller('EntradaProductoCtrl', function ($scope,EntradaProductoFactory) {
    $scope.listaEntrega=[];
    EntradaProductoFactory.getAll().success(function (data) {
      $scope.listaEntrega=data;
    }).error(function (error) {
      console.log(error);
    });
  });
