angular.module('quick', [
               'quick.services',
               'quick.main',
               'quick.search',
               'ngRoute']);

// .config(function($routeProvider){
//   $routeProvider
//     .when('/index', {
//       templateUrl: 'app/main.html',
//       controller: 'mainController'
//     })
//     .otherwise({
//       redirectTo: '/index'
//     });
// })
// .run(function ($rootScope, $location) {

// });