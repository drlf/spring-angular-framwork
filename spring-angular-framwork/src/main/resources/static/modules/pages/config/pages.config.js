(function () {
  'use strict';
  angular
    .module('com.module.pages')
    .run(function ($rootScope, gettextCatalog) {
    	
        $rootScope.addMenu({
          name: 'ҳ�����',
          isLeaf: true,
          sref: 'app.pages',
          icon: 'fa-cog'
        });

    });

})();
