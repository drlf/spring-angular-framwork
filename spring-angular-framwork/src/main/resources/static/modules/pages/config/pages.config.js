(function () {
  'use strict';
  angular
    .module('com.module.pages')
    .run(function ($rootScope, gettextCatalog) {
    	
      $rootScope.addMenu('Pages',
        'app.pages', 'fa-cog');

    });

})();
