angular.module('quick', [
               'firebase',
               'quick.liked',
               'quick.disliked',
               'quick.services',
               'quick.main',
               'quick.search',
               'quick.request',
               'ngRoute'])

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
angular.module('quick.request', ['firebase'])

.factory('Requests', ['$firebase', function($firebase){
  var ref = new Firebase('https://quick.firebaseio.com/');
  return ref;
}])

.controller('RequestController', ['$scope', 'Requests',
            function($scope, request){
              $scope.user = 'testUser';
              $scope.name = 'beerName';
              $scope.score = 'beerScore';
              $scope.addBeer = function(){
                // $scope.user.$add({$scope.name: $scope.score});
              }
}]);
angular.module('quick.services',['firebase'])

.factory('Main', function($http, $location, $firebase){

  //should be called as site is rendered
  //get beer should just 'reveal the sites'
  // var request = {
  //   "oauth_consumer_key": "JwmBYaWKL8K_GeuYdqHAkg",
  //   "oauth_token": "IgoVpxaWJ8YZ4CSAYxg7h1a2Etff1qYA",
  //   "oauth_signature_method": "hmac-sha1",
  //   "oauth_signature": "CLamCVCU6-vlhKi3e6GjMg"

  // };

  var localBeer = function(location){
    location = location.split(' ').join('+');
    var url = 'http://api.yelp.com/v2/search?term=beer&location=' + location;
    console.log(url);
    return ['City Beer Store', 'Mikkeller Bar', 'Cellarmaker Brewing'];
  };

  var getServer = function(){
    var test = $firebase(new Firebase('https://quick.firebaseio.com'));
    return test;
  };

  var server = getServer();

  var getBeer = function(location){
    var beerStores = localBeer(location);
    return beerStores;
  };

  var storeBeer = function(beer, user){
    //store selected beer to user on server
    //user[beer] = { score: [] }
    // var server = getServer();
    // console.log(server)

  };

  var rateBeer = function(beer, score, user){
    //on beer rating, store score with beer
    //user[beer].score.push(score);

  };


  return {
    getServer: getServer,
    getBeer: getBeer,
    rateBeer: rateBeer
  }
});
angular.module('quick.disliked', [])

.controller('dislikedController', function($scope, Main){

  $scope.data = {};
  
  $scope.data.badBeers = [];

});
angular.module('quick.liked', [])

.controller('likedController', function($scope, $location, Main, Requests){
  $scope.data = {};
  
  $scope.beerList = function(){
    var url = $location.$$path
    // var test = Main.getBeer( url );
    // console.log(test);
      // .then(function(beer){
      //   console.log(beer);
      //   if ( beer.length ){
      //     $scope.data.goodBeer = beer;
      //   }else{
      //     $scope.data.goodBeer = ['things will go here at some point'];
      //   }
      //   console.log( $scope.data.goodBeer );
      // })
      // .catch(function( err ){
      //   console.log( err );
      // });
  };

  $scope.beerList();
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
    var user = 'testUser';
    $scope.data = {};
    var userLocation = '944 market san francisco ca';
    // var server = Main.getServer();
    //defined in services.js
    $scope.data.beer = Main.getBeer(userLocation);
    // console.log($scope.data.beer)
  };

});