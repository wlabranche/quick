angular.module('quick.services',['firebase'])

.factory('Main', function($http, $location, $firebase, $firebaseSimpleLogin){
  var getServer = function(endpoint){
    var test = $firebase(new Firebase('https://quick.firebaseio.com/' + endpoint));
    return test;
  };

  var auth = function(){
    var authURL = new Firebase('https://quick.firebaseio.com/');
    return $firebaseSimpleLogin(authURL);
  };


  var currentUser = currentUser || "Guest";
  var server = getServer(currentUser);
  var lazyStored = {};

  var lameHardCoded = [
    {name: 'City Beer Store', beer: cityBeer},
    {name: 'Mikkeller Bar', beer: mikkeller},
    {name: 'Cellarmaker Brewing', beer: cellarMaker}
  ];

  var localBeer = function(location){
    location = location.split(' ').join('+');
    var url = 'http://api.yelp.com/v2/search?term=beer&location=' + location;
    return lameHardCoded;
  };

  var getBeer = function(location){
    var beerStores = localBeer(location);
    return beerStores;
  };

  var storeBeer = function(beer, user){
    var key = JSON.stringify(beer);
    if (!lazyStored[key]){
      server.$add(beer);
      lazyStored[key] = true
      console.log(beer.name, beer.brewery, server);
    }else{
      console.log('already added');
    }
  };

  var storedBeers = function(){
    return server;
  };

  var rateBeer = function(beer, score){
    //on beer rating, store score with beer
    //user[beer].score.push(score);
    //probably won't be functional

  };

  return {
    getServer: getServer,
    getBeer: getBeer,
    rateBeer: rateBeer,
    storeBeer: storeBeer,
    storedBeers: storedBeers,
    auth: auth
  }
});