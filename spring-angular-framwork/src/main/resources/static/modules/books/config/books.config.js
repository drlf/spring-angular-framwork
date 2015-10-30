(function () {
  'use strict';
  angular.module('com.module.books')
    .run(function ($rootScope, gettextCatalog) {
        $rootScope.addMenu('Books', 'app.books.list', 'fa-cog');
    });

})();
