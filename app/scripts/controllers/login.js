'use strict';

/**
 * @ngdoc function
 * @name untitled1App.controller:LoginctrlCtrl
 * @description
 * # LoginctrlCtrl
 * Controller of the WMSWebApp
 */
angular.module('WMSWeb')
  .controller('LoginCtrl', function ($scope,md5,$window,$location,UserAuthFactory,AuthenticationFactory) {
    $scope.usuario={
      nick:'',
      contrasena:''
    };
    $scope.login=function(){
      $scope.usuario.contrasena=  md5.createHash($scope.usuario.contrasena || '');
      if ($scope.usuario.nick !== undefined && $scope.usuario.contrasena!== undefined) {
        UserAuthFactory.login($scope.usuario.nick, $scope.usuario.contrasena).success(function(data) {

          AuthenticationFactory.isLogged = true;

          $window.sessionStorage.access_token= data.access_token;
          $window.sessionStorage.refresh_token = data.refresh_token; // to fetch the user details on refresh
          $window.sessionStorage.token_type = data.token_type; // to fetch the user details on refresh
          $window.sessionStorage.expires_in = data.expires_in; // to fetch the user details on refresh
          $window.sessionStorage.scope = data.scope; // to fetch the user details on refresh
          $window.sessionStorage.jti= data.jti; // to fetch the user details on refresh

          $location.path("/");

        }).error(function(status) {
          alert('Oops something went wrong!');
          console.log(status);
        });
      } else {
        alert('Invalid credentials');
      }
    };
  });
