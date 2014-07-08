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
  var localBeer = function(location){

  };

  var getServer = function(){
    var test = $firebase(new Firebase('https://quick.firebaseio.com'));
    return test;
  };
  var getBeer = function(location){
    //return list of beers in area;
    console.log(location);
    // var beers = '123456789'.split('');

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
    var beer = $scope.data.text || 'beer';
    $scope.data.text = null;
    var userLocation = '944 market san francisco ca';
    var server = Main.getServer();

    //defined in services.js
    $scope.data.beer = Main.getBeer(beer, userLocation);
    
    console.log($scope.data.beer);
  };

});