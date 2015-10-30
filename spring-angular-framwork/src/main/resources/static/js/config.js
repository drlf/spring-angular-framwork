"use strict";

 angular.module('config', [])

.constant('ENV', {appNam:'shiro-base',  name:'development',apiUrl:'http://localhost/api/',siteUrl:'http://localhost'})
.constant('SETTING', {appNam:'shiro-base',  appTheme:'skin-blue',appLayout:'fixed',
      formLayout:'horizontal', formLabelSize:'3', formInputSize:'9', 'com.module.users.enable_registration':true})
;