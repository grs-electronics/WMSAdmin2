'use strict';

/**
 * @ngdoc service
 * @name WMSWebApp.auth.factory
 * @description
 * # auth.factory
 * Factory in the WMSWeb.
 */
var URL_BASE="http://localhost:8080";
var URL_TOKEN=URL_BASE+"/api/oauth/token";
var URL_USER=URL_BASE+"/api/user";
var auth = "acme:acmesecret";
angular.module('WMSWeb')
  .factory('AuthenticationFactory', function ($window) {
    var authStatus={
      isLogged: false,
      check: function() {
        if ($window.sessionStorage.access_token && $window.sessionStorage.refresh_token) {
          this.isLogged = true;
        } else {
          this.isLogged = false;
          delete this.user;
        }
      }
    }
    return authStatus;
  })
  .factory('UserAuthFactory',function ($window,$location,$http,$base64,$route,AuthenticationFactory) {
    return{
      login:function (username,password) {
        auth=$base64.encode(auth);
        return $http({
          method: "post",
          url: URL_TOKEN,
          data:  "username="+username+"&password="+password+"&grant_type=password&scope=openid&client_secret=acmesecret&client_id=acme",
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            "Access-Control-Allow-Origin": "*",
            'Authorization': 'Basic ' + $base64.encode('acme:acmesecret')
          }
        });
      },
      logout:function () {
        if (AuthenticationFactory.isLogged) {

          AuthenticationFactory.isLogged = false;
          delete AuthenticationFactory.user;

          delete $window.sessionStorage.user;

          delete $window.sessionStorage.access_token;
          delete $window.sessionStorage.refresh_token ; // to fetch the user details on refresh
          delete $window.sessionStorage.token_type ; // to fetch the user details on refresh
          delete $window.sessionStorage.expires_in ; // to fetch the user details on refresh
          delete $window.sessionStorage.scope ; // to fetch the user details on refresh
          delete $window.sessionStorage.jti;
          delete $window.sessionStorage.username;
          delete $window.sessionStorage.rol;

          $window.location.href = '/#/login';
          $window.location.reload();
          //$location.path("/login");
        }
      }
    }
  })
  .factory('UserDetailsFactory',function ($http,$base64) {
    return{
      info:function () {
        return $http({
          method: "post",
          url: URL_USER,
          headers: {
            'Accept': 'application/json',
            "Access-Control-Allow-Origin": "*",
            'Authorization': 'Basic ' + auth
          }
        });
      }
    }
  })
  .factory('TokenInterceptor',function ($q,$window,$base64) {
    //auth=$base64.encode(auth);
    return {
      request: function(config) {
        config.headers = config.headers || {};
        if ($window.sessionStorage.access_token) {
          config.headers['X-Access-Token'] = $window.sessionStorage.access_token;
          config.headers['Authorization'] = 'Bearer '+$window.sessionStorage.access_token;
          config.headers['X-Key'] = $window.sessionStorage.user;
          config.headers['Content-Type'] = "application/json";
        }
        return config || $q.when(config);
      },
      response: function(response) {
        return response || $q.when(response);
      }
    };
  });

