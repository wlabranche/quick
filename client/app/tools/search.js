angular.module('quick.search', ['geolocation'])

.controller('searchController', function($scope, Main, geolocation){

  $scope.data = {};

  $scope.findBeer = function(){

    Main.findBeer($scope.data.text);

    geolocation.getLocation()
    .then(function(data){

      $scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};
      console.log($scope.coords);

    })
    .catch(function(err){
      console.log(err);
    });
  };

});