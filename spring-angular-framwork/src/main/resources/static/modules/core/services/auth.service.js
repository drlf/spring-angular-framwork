(function () {
  'use strict';

  /*jshint sub:true*/
  /*jshint camelcase: false */

  angular
    .module('com.module.core')
    .service('AuthCoreSrv', function ($http, StorageService) {
        var self = this;
        this.credentials = {};

        this.login = function(credentials, cbSucc, cbFail){
          $http.post('/access/login', credentials)
              .success(function(data, status, headers, config){
                self.credentials = data;
                StorageService.setCredentials(self.credentials);
                cbSucc(data);
              })
              .error(function(data, status, headers, config) {
                cbFail(data);
              });
        };

        this.logout = function(cb){
          StorageService.removeCredentials();
          $http.post('/access/logout', self.credentials);
          cb();
        };

    });
})();
