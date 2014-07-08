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