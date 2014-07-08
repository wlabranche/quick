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