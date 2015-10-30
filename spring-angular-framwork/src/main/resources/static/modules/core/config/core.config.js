(function () {
  'use strict';
  angular
    .module('com.module.core')
    .config([
      'cfpLoadingBarProvider',
      function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
      }
    ])
    .run(function ($rootScope, Setting, gettextCatalog, ENV) {

      // Left Sidemenu
      $rootScope.menu = [];

      // Add Sidebar Menu
      $rootScope.addMenu = function (name, uisref, icon) {
        $rootScope.menu.push({
          name: name,
          sref: uisref,
          icon: icon
        });
      };

      // Add Menu Dashboard
      $rootScope.addMenu(gettextCatalog.getString('Dashboard'), 'app.home',
        'fa-dashboard');

      // Dashboard
      $rootScope.dashboardBox = [];

      // Add Dashboard Box
      $rootScope.addDashboardBox = function (name, color, icon, quantity, href) {
        $rootScope.dashboardBox.push({
          name: name,
          color: color,
          icon: icon,
          quantity: quantity,
          href: href
        });
      };

      // Get Settings for Database
      $rootScope.setSetting = function (key, value) {

        Setting.find({
          filter: {
            where: {
              key: key
            }
          }
        }, function (data) {

          if (data.length) {
            data[0].value = value;
            data[0].$save();
          } else {
            Setting.create({
              key: key,
              value: value
            }, function (data) {
              console.log(data);
            });
          }
          $rootScope.loadSettings();
        });
      };

      // Load Settings blank
        console.log('load setting from env....');
      $rootScope.settings = {};
        $rootScope.settings.data = ENV.SETTING;

      // Get Settings for Loopback Service
      $rootScope.loadSettings = function () {
        Setting.query(function (settings) {
          $rootScope.settings.data = settings;

          console.log($rootScope.settings);
        });
      };


    })

    //by LF.
    // check the refereshtoken .Init system setting and get user info
    //$rootScope.loadSettings();
    .run(function ($rootScope, Setting, AuthCoreSrv, StorageService, User) {
        var credentials = StorageService.getCredentials();
        //TODO if refershToken or username is null, redirect to login.html
        AuthCoreSrv.setCredentials(credentials);
        /*AuthCoreSrv.refereshToken(credentials.refereshToken, function(data){
          //TODO update accessToken , user info and permission
        });*/

        $rootScope.currentUser = User.get({
          id : credentials.userId
        });

        $rootScope.loadSettings();
    })
  ;

})();
