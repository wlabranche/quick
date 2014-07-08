angular.module('quick.search', ['geolocation'])

.controller('searchController', function($scope, Main, geolocation){

  $scope.data = {};

  $scope.findBeer = function(){
    var user = 'testUser';
    $scope.data = {};
    var userLocation = '944 market san francisco ca';
    // var server = Main.getServer();
    //defined in services.js
    $scope.data.beer = Main.getBeer(userLocation);
    // console.log($scope.data.beer)
  };

});