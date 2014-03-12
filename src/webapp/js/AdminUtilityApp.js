var adminUtilityAppConfig = function($routeProvider) {
  console.log('AdminUtilityApp App has been loaded');
  $routeProvider
    .when('/login', {
      controller: 'AdminLoginController',
      templateUrl: 'views/login.html'
    })
  ;
};

var AdminUtilityApp = angular.module('AdminUtilityApp', []).config(adminUtilityAppConfig);
