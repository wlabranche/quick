angular.module('quick.services', [])

.factory('Main', function($http){

  var findLocation = function(location){
    console.log(location);
  };

  var findBeer = function(style){
    console.log(style);
  };

  return {
    findLocation: findLocation,
    findBeer: findBeer
  }
});