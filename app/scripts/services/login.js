'use strict';
/**
 * @ngdoc service
 * @name untitled1App.login
 * @description
 * # login
 * Service in the untitled1App.
 */
var URL_TOKEN="http://localhost:8080/api/oauth/token";
var auth = "acme:acmesecret";

angular.module('WMSWeb')
  .factory('tokenService',function (localStorageService) {
    var self =this;
    self.saveData=function (data) {
      localStorageService.set("access_token",data.access_token);
      localStorageService.set("token_type",data.token_type);
      localStorageService.set("refresh_token",data.refresh_token);
      localStorageService.set("expires_in",data.expires_in);
      localStorageService.set("scope",data.scope);
      localStorageService.set("jti",data.jti);
    };
    return self;
  })
  .factory('loginService', function ($http,$base64) {
    var self=this;
    auth=$base64.encode(auth);
    self.signin=function (usuario) {
      return $http({
        method: "post",
        url: URL_TOKEN,
        data:  "username="+usuario.nick+"&password="+usuario.contrasena+"&grant_type=password&scope=openid&client_secret=acmesecret&client_id=acme",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
          "Access-Control-Allow-Origin": "*",
          'Authorization': 'Basic ' + auth
        }
      });
    };
    self.singout=function () {
      console.log("Logout");
    };
    return self;
  });
