angular.module('quick.liked', [])

.controller('likedController', function($scope, $location, Main){
  $scope.data = {};
  
  $scope.beerList = function(){
      $scope.data.server = Main.storedBeers();
  };

  $scope.beerList();
});