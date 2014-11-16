(function(){
  'use strict'
  var teams = [];
  var module = angular.module('app', ['onsen']);
  module.controller(
    'GetMatchController', ['$scope', '$http', function($scope, $http) {

    $http.get(
      "https://www.kimonolabs.com/api/4ag7ique?apikey=BsZyX8bXMCMKLt0LIyhOVkKv91tYUfLQ").
    success(function(data){
      $scope.results = "ljj";
    }).error(function(){
      $scope.results = "fail";
    });


    }
    ]);
    module.controller(
    'AddTeamController', ['#scope', '$data', function($scope, $data)
    {


    }



    ]);


      
}());

