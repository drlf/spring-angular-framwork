(function() {
	'use strict';

	angular.module('com.module.core').controller(
			'MainCtrl',
			function($scope, $rootScope, $state, AuthCoreSrv, User) {
			/*console.log('AuthCoreSrv.credentials.userId = ' + AuthCoreSrv.getCredentials().userId);
				$scope.currentUser = User.get({
					id : AuthCoreSrv.getCredentials().userId
				});*/
				$scope.menuoptions = $rootScope.menu;

				$scope.logout = function() {
					AppAuth.logout(function() {
						CoreService.toastSuccess('ÈÄ?Âá?', 'ÈÄ?Âá∫ÊàêÂä?');
						$state.go('login');
					});
				};
				$scope.authoriedmenu = AuthCoreSrv.getAuthoriedmenu();

			});

})();
