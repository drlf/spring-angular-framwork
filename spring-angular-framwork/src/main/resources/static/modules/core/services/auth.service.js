(function () {
  'use strict';

  /*jshint sub:true*/
  /*jshint camelcase: false */

  angular
    .module('com.module.core')
    .service('AuthCoreSrv', function ($http, StorageService) {

          var self = {};
          self.credentials = {};
          this.getCredentials = function(){
              return self.credentials;
          };
          this.setCredentials = function(credentials){
              return self.credentials = credentials;
          };
          this.login = function(credentials, cbSucc, cbFail){
              $http.post('/api/access/login', credentials)
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
              $http.post('/api/access/logout', self.credentials);
              cb();
          };

          this.refereshToken = function(cbSucc, cbFail){
              $http.post('/api/access/referesh', self.credentials)
              .success(function(data, status, headers, config){
                  self.credentials = data;
                  StorageService.setCredentials(self.credentials);
                  cbSucc(data);
              })
              .error(function(data, status, headers, config) {
                  cbFail(data);
              });

          };

    });
})();
