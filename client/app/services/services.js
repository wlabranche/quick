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