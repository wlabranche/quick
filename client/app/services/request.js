angular.module('quick.request', ['firebase'])

.factory('Requests', ['$firebase', function($firebase){
  var ref = new Firebase('https://quick.firebaseio.com/');
  return ref;
}])

.controller('RequestController', ['$scope', 'Requests',
            function($scope, request){
              $scope.user = 'testUser';
              $scope.name = 'beerName';
              $scope.score = 'beerScore';
              $scope.addBeer = function(){
                // $scope.user.$add({$scope.name: $scope.score});
              }
}]);