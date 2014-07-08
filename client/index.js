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

  var lameHardCoded = [
    {name: 'City Beer Store', beer: cityBeer},
    {name: 'Mikkeller Bar', beer: []},
    {name: 'Cellarmaker Brewing', beer: []}
  ]


  var localBeer = function(location){
    location = location.split(' ').join('+');
    var url = 'http://api.yelp.com/v2/search?term=beer&location=' + location;
    return lameHardCoded;
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

  var storeBeer = function(beer){
    //store selected beer to user on server
    //user[beer] = { score: [] }
    // var server = getServer();
    // console.log(server)
    console.log(beer);

  };

  var rateBeer = function(beer, score, user){
    //on beer rating, store score with beer
    //user[beer].score.push(score);

  };


  return {
    getServer: getServer,
    getBeer: getBeer,
    rateBeer: rateBeer,
    storeBeer: storeBeer
  }
});
angular.module('quick.availableBeer',['firebase'])

.factory('Stores', function($http, $firebase){
  
});
var cityBeer = [{
  brewery: "Berryessa Brewing Company",
  name: "Common Sense-California Common"
},
{
  brewery: "St. Bernardus",
  name: "Tripel"
},
{
  brewery: "Avery Brewing Company",
  name: "Karma-Belgian Style Pale"
},

{
  brewery: "Speakeasy Ales and Lagers",
  name: "Baby Daddy-Session IPA"
},
{
  brewery: "Anchor Brewing Company",
  name: "Liberty Ale"
},
{
  brewery: "AleSmith Brewing", 
  name: "CompanyIPA"
},
{
  brewery: "Golden Road Brewing", 
  name: "Darts Away IPA-Imperial IPA"
},
{
  brewery: "Berryessa Brewing Company",
  name: "Double Tap IPA-Double IPA"
},

{
  brewery: "Speakeasy Ales and Lagers",
  name: "Payback Porter"
},
{
  brewery: "Russian River Brewing Company",
  name: "Benediction"
},
{
  brewery: "Speakeasy Ales and Lagers",
  name: "Syndicate 02"
},
{
  brewery: "Avery Brewing Company",
  name: "Samael"
},
{
  brewery: "Russian River Brewing Company",
  name:"Sanctification"
},
{
  brewery:"Stillwater Artisanal Ales and Westbrook Brewing",
  name: "Gose Gone Wild"
},
{
  brewery: "Almanac Beer Company",
  name: "Farmer's Reserve Citrus"
}]
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
    //defined in services.js
    $scope.data.beer = Main.getBeer(userLocation);
  };
  
  $scope.beerList = function(){
    Main.storeBeer('cityBeer');
  };

});