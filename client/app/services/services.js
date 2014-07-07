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