(function(){
  'use strict'
  angular.module('app', ['onsen']).controller(
    'GetMatchController', ['$scope', '$http', function($scope, $http) {

    $http.get(
      "https://www.kimonolabs.com/api/4ag7ique?apikey=BsZyX8bXMCMKLt0LIyhOVkKv91tYUfLQ").
    success(function(data){
      $scope.results = data;
    }).error(function(){
      $scope.results = "fail";
    });


    }
    ]);



      
}());

