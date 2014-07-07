angular.module('quick', ['ngRoute'])
.config(function($routeProvider, $httpProvider){
  $routeProvider
    .when('/index', {
      templateUrl: 'index.html',
      controller: 'mainController'
    })
    .otherwise({
      redirectTo: '/'
    });
})