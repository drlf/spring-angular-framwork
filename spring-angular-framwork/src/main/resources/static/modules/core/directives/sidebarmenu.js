(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name com.module.core.directive:navbar
   * @description
   * # navbar
   */
  angular
    .module('com.module.core')
    .directive('sidebarmenu', function () {
      return {
        templateUrl: 'modules/core/views/elements/sidebarmenu.html',
        restrict: 'E',
        replace : true,
        transclude : false,
        scope : {
          menus : '=menus'
        },
        controller : function() {
          var expanders = [];
          this.gotOpened = function(selectedExpander) {
            angular.forEach(expanders, function(expander) {
              if (selectedExpander != expander) {
                expander.showMe = false;
              }
            });
          }
          this.addExpander = function(expander) {
            expanders.push(expander);
          }
        }
      };
    })
      .directive('subsidebarmenu', function() {
        return {
          restrict : 'EA',
          replace : true,
          //transclude : true,
          require : '^?sidebarmenu',
          scope : {
            menu : '=menu'
          },
          templateUrl : 'modules/core/views/elements/subsidebarmenu.html',
          link : function(scope, element, attrs, accordionController) {
            scope.showMe = false;
            accordionController.addExpander(scope);
            scope.toggle = function toggle($event) {
              console.log('toggle......');
              scope.showMe = !scope.showMe;
              accordionController.gotOpened(scope);
              $event.stopPropagation();
            }
          }
        }
      });

})();
