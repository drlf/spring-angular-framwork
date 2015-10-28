(function () {
  'use strict';
  
  angular
    .module('com.module.core')
    .controller('RouteCtrl', function (ApiService, $location, AuthCoreSrv) {
        console.log('RouteCtrl....');
      ApiService.checkConnection()
        .then(function () {
          console.log('ApiService.checkConnection success');
          var credentials = AuthCoreSrv.getCredentials();
          if (!credentials.username || !credentials.refereshToken) {
        	  console.log(credentials.username);
        	  console.log(credentials.refereshToken);
            //location.href = '/login.html';
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
