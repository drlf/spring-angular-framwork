(function () {
  'use strict';
  /**
   * @ngdoc function
   * @name com.module.core.controller:RouteCtrl
   * @description Redirect for acess
   * @requires $q
   * @requires $scope
   * @requires $state
   * @requires $location
   * @requires AppAuth
   **/
  angular
    .module('com.module.core')
    .controller('RouteCtrl', function (ApiService, AppAuth, $location, AuthCoreSrv) {
      console.log('½øÈërouterCOntroller¡£¡£¡£');
      ApiService.checkConnection()
        .then(function () {
          console.log('ApiService.checkConnection success');
          if (!AuthCoreSrv.credentials.username || !AuthCoreSrv.credentials.refereshToken) {
            $location.path('/login');
          } else {
            $location.path('/app');
          }
        })
        .catch(function (err) {
          console.log('ApiService.checkConnection err: ' + err);
          $location.path('/error');
        });

    });

})();
