(function () {
  'use strict';
  angular
    .module('com.module.settings')
    .run(function ($rootScope, gettextCatalog) {
      //$rootScope.addMenu(gettextCatalog.getString('Settings'),'app.settings.list', 'fa-cog');

        var settingMenu = {
          name: 'settings',
          icon: 'fa-cog',
          sref: 'app.settings.*',
          isLeaf: false,
          subMenu: [{
            name: 'settings.list',
            isLeaf: true,
            sref: 'app.settings.list',
            icon: ''
          },
            {
              name: 'settings.add',
              isLeaf: true,
              sref: 'app.settings.add',
              icon: ''
            }
          ]
        };

        $rootScope.addMenu(settingMenu);

      $rootScope.getSetting = function (key) {
        var valor = '';
        angular.forEach($rootScope.settings.data, function (item) {
          if (item.key === key) {
            valor = item.value;
          }
        });
        return valor;
      };
    });

})();
