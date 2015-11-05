(function () {
  'use strict';
  angular
    .module('com.module.pages')
    .run(function ($rootScope, gettextCatalog) {
    	
        $rootScope.addMenu({
          name: '“≥√Êπ‹¿Ì',
          isLeaf: true,
          sref: 'app.pages',
          icon: 'fa-cog'
        });

    });

})();
