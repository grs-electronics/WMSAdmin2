'use strict';

/**
 * @ngdoc overview
 * @name untitled1App
 * @description
 * # WMSWebApp
 *
 * Main module of the application.
 */
angular.module('WMSWeb', [
    'ngAnimate',
    'angular-md5',
    'base64',
    'ngRoute'
  ])
  .config(function ($routeProvider,$httpProvider) {
    $httpProvider.interceptors.push('TokenInterceptor');
    $routeProvider
      .when('/login',{
        templateUrl:'views/main.html',
        controller:'LoginCtrl',
        access:{
          requiredLogin:false
        }
      }).when('/',{
        templateUrl:'views/home.html',
        controller:'HomeCtrl',
        access:{
          requiredLogin:true
        }
    }).when('/entrada',{
      templateUrl:'views/entrada.html',
      controller:'EntradaProductoCtrl',
      access:{
        requiredLogin:true
      }
    }).otherwise({
      redirectTo:'/login'
    });
}).run(function ($rootScope,$window,$location,AuthenticationFactory) {
    AuthenticationFactory.check();
    $rootScope.$on('$routeChangeStart',function (event,nextRoute,currentRoute) {
      if((nextRoute.access && nextRoute.access.requiredLogin) && !AuthenticationFactory.isLogged){
        $location.path('/login');
      }else{
        if(!AuthenticationFactory.user) AuthenticationFactory.user=$window.sessionStorage.user;
      }

    });
    $rootScope.$on('$routeChangeSuccess',function (event,nextRoute,currentRoute) {
      $rootScope.showMenu=AuthenticationFactory.isLogged;
      $rootScope.usuario=AuthenticationFactory.user;
      if (AuthenticationFactory.isLogged == true && $location.path() == '/login') {
        $location.path('/');
      }
    })
});
