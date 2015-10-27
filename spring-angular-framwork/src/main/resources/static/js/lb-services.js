(function(window, angular, undefined) {'use strict';

var urlBase = "http://localhost:9000/api";
var authHeader = 'authorization';

var module = angular.module("lbServices", ['ngResource']);
  module.factory( 'Resource', [ '$resource', function( $resource ) {
    return function( url, params, methods ) {
      var defaults = {
        update: { method: 'put', isArray: false },
        create: { method: 'post' }
      };
      methods = angular.extend( defaults, methods );
      var resource = $resource( urlBase + url, params, methods );
      resource.prototype.$save = function() {
        if ( !this.id ) {
          return this.$create();
        }
        else {
          return this.$update();
        }
      };
      return resource;
    };
  }]);

  module.factory(
      "User",
      ['Resource', function(Resource) {
        return Resource("/user/:id",
            { 'id': '@id' });
  }]);

  module.factory(
      "Setting",
      ['Resource', function(Resource) {
        return Resource("/setting/:id",
            { 'id': '@id' });
      }]);

})(window, window.angular);
