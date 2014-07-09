angular.module('quick.login', [])

.controller('loginController', function($scope, Main){

  $scope.loginObj = Main.auth();

  $scope.login = function(){
    $scope.loginObj.$login('google');
  };
  // console.log(auth.login);
});