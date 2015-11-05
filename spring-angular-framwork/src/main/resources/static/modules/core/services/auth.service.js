(function () {
  'use strict';

  /*jshint sub:true*/
  /*jshint camelcase: false */

  angular
    .module('com.module.core')
    .service('AuthCoreSrv', function ($http, StorageService, $rootScope) {

          var self = {};
          self.credentials = {};
          this.getCredentials = function(){
              return self.credentials;
          };
          this.setCredentials = function(credentials){
              self.credentials = credentials;
          };
          this.getPerms = function(permissions){
              return self.perms;
          };
          this.getAuthoriedmenu = function(){
            return self.authoriedmenu;
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

          this.refereshToken = function(credentials, cbSucc, cbFail){
              $http.post('/api/access/referesh', credentials.refereshToken)
              .success(function(data, status, headers, config){
                  /*self.credentials = data;
                  StorageService.setCredentials(self.credentials);*/
                  self.credentials = credentials;
                  self.credentials.accessToken = data.accessToken;
                  self.perms = formatPerms(data.perms);
                  self.authoriedmenu = authoriedMenu($rootScope.menu, self.perms);
                  cbSucc(data);
              })
              .error(function(data, status, headers, config) {
                  cbFail(data);
              });

          };

          var authoriedMenu = this.authoriedMenu = function(allMenus, perms){
              var menu = [];

              angular.forEach(allMenus, function(data,index,array){
                  if(isAuthoried(data, perms))menu.push(data);
                  else if(!data.isLeaf){
                      var subMenu = data.subMenu;
                      var tmpMenu = authoriedMenu(subMenu, perms);
                      if(tmpMenu.length > 0){
                          data.subMenu = tmpMenu;
                          menu.push(data);
                      }
                  }
              });
              return menu;
          };

          var isAuthoried = function(menu, perms){
              for(var i in perms){
                  if(perms[i] == menu.sref){
                      return true;
                  }
              }
              return false;
          };
            //prems is string type like "users:list, users:add, home"
          var formatPerms = this.formatPerms = function(permstr){
              var perms = permstr.split(',');
              for(var i in perms)perms[i] = trim(perms[i]);
              var permissions = [];
              var prefix = 'app.';
              angular.forEach(perms, function(perm,index,array){
                  permissions.push(prefix + perm.replace(':','.'));
              });
              return permissions;
          };

          var trim = function(str){
              return str.replace(/^\s+|\s+$/g, '');
          }



    });
})();
