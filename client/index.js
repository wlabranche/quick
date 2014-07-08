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
    {name: 'Mikkeller Bar', beer: mikkeller},
    {name: 'Cellarmaker Brewing', beer: cellarMaker}
  ]


  var localBeer = function(location){
    location = location.split(' ').join('+');
    var url = 'http://api.yelp.com/v2/search?term=beer&location=' + location;
    return lameHardCoded;
  };

  var getServer = function(){
    var test = $firebase(new Firebase('https://quick.firebaseio.com/liked'));
    return test;
  };

  var server = getServer();

  var getBeer = function(location){
    var beerStores = localBeer(location);
    return beerStores;
  };

  var storeBeer = function(beer){
    //store selected beer to user on server
    server.$add({'beer': beer});
    console.log(beer.name, beer.brewery, server);

  };

  var rateBeer = function(beer, score, user){
    //on beer rating, store score with beer
    //user[beer].score.push(score);
    //probably won't be functional
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
var cellarMaker = [{
  brewery: "Cellarmaker Brewing",
  name: "Mo' Nelson"
},
{
  brewery: "Cellarmaker Brewing",
  name: "Hülly Lewis Pale Ale"
},
{
  brewery: "Cellarmaker Brewing",
  name: "Equinox"
},
{
  brewery: "Cellarmaker Brewing",
  name: "Are You Afraid of the Dank?"
},
{
  brewery: "Cellarmaker Brewing",
  name: "Hop Killah"
},
{
  brewery: "Cellarmaker Brewing",
  name: "Rye Be Bitter"
},
{
  brewery: "Cellarmaker Brewing",
  name: "Coffee and Cigarettes"
},
{
  brewery: "Cellarmaker Brewing",
  name: "Beertender's Breakfast"
},
{
  brewery: "Cellarmaker Brewing",
  name: "Walker, SoMa Ranger"
},
{
  brewery: "Cellarmaker Brewing",
  name: "Cellarmaker Porter (Batch 1)"
}];
angular.module('quick.disliked', [])

.controller('dislikedController', function($scope, Main){

  $scope.data = {};
  
  $scope.data.badBeers = [];

});
angular.module('quick.liked', [])

.controller('likedController', function($scope, $location, Main, Requests){
  $scope.data = {};
  
  $scope.beerList = function(){
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
var list = "Mikkeller:Tenderloin IPA,Alpine:Hoppy Birthday,Mikkeller:Tenderloin Wit,Vapeur:Saison de Pipaix,Anchorage:Galaxy White,8 Wired:Saison Sauvin,8 Wired:Chardonnay Saison,Fort Point Brewing:Villager,Cellarmaker:Equinox,Blaugies Saison d’Epeautre,Monarchy/Kissmeyer:Viking Gose,Mikkeller:Årh Hvad?!,Hill Farmstead/Brasserie:Blaugies La Vermontoise,Off Color Scurry:Köttbusser/Alt Bier w/ honey & Molasses,De Ranke:XXX Bitter,Tahoe Mountain:Saphir du Bois,Tahoe Mountain:Higashino Farmhouse,Berryessa:Common Sense,Jolly Pumpkin/Anchorage:Calabaza Boreal,Cellarmaker:Rye Be Bitter".split(',');
var list2 = "Mikkeller:Tenderloin Pils,Fort Point:Brewing Tosca,Firestone Walker:Pivo Hoppy Pils,Tahoe Mountain:French Pils,Firestone Walker:Easy Jack".split(',')
var list3 = "Mikkeller:Orange Yuzu Glad I Said Porter BA,De La Senne:Jambe-de-Bois,Tahoe Mountain:Auld Bitch,Mikkeller:Big Worster Malaga,Mikkeller:Rauch Geek Breakfast,Mikkeller:Monk’s Elixir,Birra del Borgo:Caos,Nøgne Ø:Imperial Stout,AleSmith:Horny Devill,Malmgard Huvila:Arctic Circle,Dieu du Ciel:Péché Mortel,Stillwater:A Saison Darkly,AleSmith:Old Numbskull,Alvinne:Melchior BA,Mikkeller:Beer Geek Breakfast".split(','); 
var list4 = "FreeWheel:London Calling,FreeWheel/Iron Bridge:Wenlock Stout".split(',')
var test = function(arr){
  var result = [];
  for (var i = 0; i < arr.length; i++){
    result.push(arr[i].split(':'));
  }
  return result;
};
var build = function(pairs){
  var result = [];
  for (var i = 0; i < pairs.length; i++){
    result.push({ brewery: pairs[i][0], name: pairs[i][1] })
  }
  return result;
};
var mikkeller = build(test(list.concat(list2).concat(list3).concat(list4)));
angular.module('quick.search', ['geolocation'])

.controller('searchController', function($scope, Main, geolocation){

  $scope.data = {};

  $scope.findBeer = function(){
    var user = 'testUser';
    $scope.data = {};
    var userLocation = '944 market san francisco ca';

    $scope.data.beer = Main.getBeer(userLocation);
  };

  $scope.beerList = function(beers){
    $scope.data.beerList = beers;
    console.log($scope.data.beerList);
  };
  $scope.saveBeer = function(beer){
    console.log('yay');
    Main.storeBeer(beer);
  }

});