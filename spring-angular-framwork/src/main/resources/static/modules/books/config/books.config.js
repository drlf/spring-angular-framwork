(function () {
  'use strict';
  angular.module('com.module.books')
    .run(function ($rootScope, gettextCatalog) {
    	console.log('books int......');
        $rootScope.addMenu('Books', 'app.books.list', 'fa-cog');
    });

})();
