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