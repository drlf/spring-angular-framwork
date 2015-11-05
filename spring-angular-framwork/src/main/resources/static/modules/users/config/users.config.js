(function () {
  'use strict';
  angular.module('com.module.users')
    .run(function ($rootScope, gettextCatalog) {
      //$rootScope.addMenu(gettextCatalog.getString('Users'), 'app.users.list', 'fa-user');
        var userMenu = {
          name: '用户',
          icon: 'fa-user',
          sref: 'app.users.*',
          isLeaf: false,
          subMenu: [{
            name: 'user',
            isLeaf: true,
            sref: 'app.users.list',
            icon: 'fa-user'
          },
            {
              name: 'user.edit',
              isLeaf: true,
              sref: 'app.users.add',
              icon: 'fa-user'
            },
            {
              name: 'user.view',
              isLeaf: true,
              sref: 'app.users.view',
              icon: 'fa-user'
            }

          ]
        };
        $rootScope.addMenu(userMenu);
    });

})();
