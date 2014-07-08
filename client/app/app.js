angular.module('quick', [
               // 'firebase',
               'quick.liked',
               'quick.disliked',
               'quick.services',
               'quick.main',
               'quick.search',
               'ngRoute'])
//test comment5
.config(function($routeProvider){
  $routeProvider
    .when('/index', {
      templateUrl: 'app/main.html',
      controller: 'searchController'
    })
    .when('/liked', {
      templateUrl: 'app/liked.html',
      controller: 'likedController'
    })
    .when('/disliked', {
      templateUrl: 'app/disliked.html',
      controller: 'dislikedController'
    })
    .otherwise({
      redirectTo: '/index'
    });
});