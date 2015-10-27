(function () {
  'use strict';
  angular
    .module('com.module.core')
    .service('StorageService', function () {

		var storage = window.localStorage;
		var appNamespace = 'sbp';
      	this.setCredentials = function(credentials){
    	  	storage.setItem(appNamespace + '.credentials.username', credentials.username ? credentials.username : "");
			storage.setItem(appNamespace + '.credentials.userId', credentials.userId ? credentials.userId : "");
			storage.setItem(appNamespace + '.credentials.rememberMe', credentials.rememberMe ? true : false);
			storage.setItem(appNamespace + '.credentials.refereshToken', credentials.refereshToken ? credentials.refereshToken : "");
			storage.setItem(appNamespace + '.credentials.accessToken', credentials.accessToken ? credentials.accessToken : "");
    	  }
      
      	this.getCredentials = function(){
    	  	var credentials = {};
    	  	credentials.username = storage.getItem(appNamespace + '.credentials.username');
			//if(credentials.username == 'undefined')credentials.username='';
			credentials.userId = storage.getItem(appNamespace + '.credentials.userId');
			//if(credentials.userId == 'undefined')credentials.userId='';
    	  	credentials.rememberMe = storage.getItem(appNamespace + '.credentials.rememberMe') == 'true'? true : false;
    	  	credentials.refereshToken = storage.getItem(appNamespace + '.credentials.refereshToken');
    	  	credentials.accessToken = storage.getItem(appNamespace + '.credentials.accessToken');
    	  	return credentials;
      	}

		  this.removeCredentials = function(){
			  storage.removeItem(appNamespace + '.credentials.username');
			  storage.removeItem(appNamespace + '.credentials.userId');
			  storage.removeItem(appNamespace + '.credentials.rememberMe');
			  storage.removeItem(appNamespace + '.credentials.refereshToken');
			  storage.removeItem(appNamespace + '.credentials.accessToken');
		  }
      
      });

})();
