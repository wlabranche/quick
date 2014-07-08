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
angular.module('quick.services', [])

.factory('Main', function($http){

  var findLocation = function(location){
    return geolocation.getLocation()
    .then(function(data){
      $scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};
    })
    .catch(function(err){
      console.log(err);
    });
  };

  var findBeer = function(style, location){
    console.log(style, location);

  };

  return {
    findLocation: findLocation,
    findBeer: findBeer
  }
});
angular.module('quick.disliked', [])

.controller('dislikedController', function($scope, Main){

  $scope.data = {};
  
  $scope.data.badBeers = [];

});
angular.module('quick.liked', [])

.controller('likedController', function($scope, Main){

  $scope.data = {};
  
  $scope.data.goodBeers = [];

  $scope.beerList = function(){

  };

});
angular.module('quick.main', [])

.controller('mainController', function($scope, Main){
  $scope.data = {};

  $scope.loadContent = function(){
    Main.loadMain('test');
  };

  $scope.loadContent();
});
angular.module('quick.search', ['geolocation'])

.controller('searchController', function($scope, Main, geolocation){

  $scope.data = {};

  $scope.findBeer = function(){
    var beer = $scope.data.text || 'beer';
    $scope.data.text = null;

    // var userLocation = Main.findLocation();
    var userLocation = '944 market san francisco ca';

    Main.findBeer(beer, userLocation);

  };

});