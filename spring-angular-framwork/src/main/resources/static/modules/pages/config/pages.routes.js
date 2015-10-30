(function () {
  'use strict';
  angular
    .module('com.module.pages')
    .config(function ($stateProvider) {
    	
      $stateProvider
        .state('app.pages', {
          url: '/pages',
          templateUrl: 'modules/pages/views/main.html'
        });
    });

})();
