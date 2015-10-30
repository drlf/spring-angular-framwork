(function(window, angular, undefined) {'use strict';

var urlBase = "http://localhost:9000/api";
var authHeader = 'authorization';

var module = angular.module("lbServices", ['ngResource']);
  module.factory( 'Resource', [ '$resource', function( $resource ) {
    return function( url, params, methods ) {
      var defaults = {
        update: { method: 'put', isArray: false},
        create: { method: 'post' },
        updatePart: { method: 'put', isArray: false, params: {props : '@props'}}	//部分更新，�?�过设置对象的props属�?�传�?
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

    module.factory(
        "Book",
        ['Resource', function(Resource) {
            return Resource("/book/:id",
                { 'id': '@id' });
        }]);

})(window, window.angular);


/*  used with spring-data-rest
{
"query": {
    interceptor: {
        response: function(response) {
            return response.data._embedded.settings;
        }
    }
}
}
*/