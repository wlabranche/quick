angular.module('quick.search', ['geolocation'])

.controller('searchController', function($scope, Main, geolocation){

  $scope.data = {};

  $scope.findBeer = function(){
    var beer = $scope.data.text || 'beer';
    $scope.data.text = null;

    // var userLocation = Main.findLocation();
    var userLocation = '944 market san francisco ca';

    Main.findBeer(beer, userLocation);

  };

});