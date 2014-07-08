angular.module('quick.liked', [])

.controller('likedController', function($scope, $location, Main, Requests){
  $scope.data = {};
  
  $scope.beerList = function(){
    // var test = Main.getBeer( url );
    // console.log(test);
      // .then(function(beer){
      //   console.log(beer);
      //   if ( beer.length ){
      //     $scope.data.goodBeer = beer;
      //   }else{
      //     $scope.data.goodBeer = ['things will go here at some point'];
      //   }
      //   console.log( $scope.data.goodBeer );
      // })
      // .catch(function( err ){
      //   console.log( err );
      // });
  };

  $scope.beerList();
});