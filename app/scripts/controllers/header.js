'use strict';

/**
 * @ngdoc function
 * @name untitled1App.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the untitled1App
 */
angular.module('WMSWeb')
  .controller('HeaderCtrl', function ($scope,$location,UserAuthFactory) {
    $scope.isActive = function(route) {
      return route === $location.path();
    }
    $scope.logout = function () {
      UserAuthFactory.logout();
    }
  });
