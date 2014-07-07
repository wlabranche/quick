angular.module('quick.button', ['geolocation'])

.controller('buttonController', function($scope, Main, geolocation){
  
  $scope.findBeer = function(){
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