(function () {
  'use strict';
  angular.module('com.module.books')
    .run(function ($rootScope, gettextCatalog) {
        //$rootScope.addMenu('Books', 'app.books.list', 'fa-cog');
          $rootScope.addMenu({
              name: 'Õº Èπ‹¿Ì',
              isLeaf: true,
              sref: 'app.books.list',
              icon: 'fa-cog'
          });
    });

})();
