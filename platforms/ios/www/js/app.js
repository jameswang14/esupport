

(function(){
  'use strict'

  var counter = 0;

  var module = angular.module('app', ['onsen']);

  module.controller(
    'GetMatchController', ['$scope', '$http', function($scope, $http){
      $http.get(
        "https://www.kimonolabs.com/api/4ag7ique?apikey=BsZyX8bXMCMKLt0LIyhOVkKv91tYUfLQ").
      success(function(data){
        var temp=data.results;
        var temp2=[];
        var temp3=[];
        var temp4=[];
        for (var i = 0; i<data.results.collection1.length;  i++) {
          temp2.push(temp.collection1[i]);
          temp3 = temp.collection1[i].Score.text;
          temp4 = temp3.split(":");
          /**if(parseInt(temp4[0])>parseInt(temp4[1])){
              $scope.past
              temp2[i].Team2.text.colorClass("match-lost");
          } else{
            temp2[i].Team2.text.colorClass("match-won");
            temp2[i].Team1.text.colorClass("match-lost")
            }*/
        };

        $scope.results=temp2;
      }).error(function(){
        $scope.results="fail";
      });
    }]);

    module.controller(
    'GetTeam1Controller', ['$scope', '$http', function($scope, $http) {
      $http.get(
        "https://www.kimonolabs.com/api/4ag7ique?apikey=BsZyX8bXMCMKLt0LIyhOVkKv91tYUfLQ").
      success(function(data){
        var str = data.results.collection1[counter].Score.text;
        var score=str.split(":");
        if(parseInt(score[0])>parseInt(score[1])) {
          $scope.fontColor = "#8BE683";
        } else {
          $scope.fontColor="#E65073";
        }
        $scope.results = data.results.collection1[counter].Team1.text;

      }).error(function(){
        $scope.results = "fail";
      });

      }
    ]);

    module.controller(
    'GetTeam2Controller', ['$scope', '$http', function($scope, $http) {
      $http.get(
        "https://www.kimonolabs.com/api/4ag7ique?apikey=BsZyX8bXMCMKLt0LIyhOVkKv91tYUfLQ").
      success(function(data){
        var str = data.results.collection1[counter].Score.text;
        var score=str.split(":");
        if(parseInt(score[0])<parseInt(score[1])) {
          $scope.fontColor = "#8BE683";
        } else {
          $scope.fontColor="#E65073";
        }
        $scope.results = data.results.collection1[counter].Team2.text;
      }).error(function(){
        $scope.results = "fail";
      });

      }
    ]);


    module.controller(
    'GetScoreController', ['$scope', '$http', function($scope, $http) {
      $http.get(
        "https://www.kimonolabs.com/api/4ag7ique?apikey=BsZyX8bXMCMKLt0LIyhOVkKv91tYUfLQ").
      success(function(data){
        $scope.results = data.results.collection1[counter].Score.text;
      }).error(function(){
        $scope.results = "fail";
      });
    }]);


    module.controller(
    'GetDateController', ['$scope', '$http', function($scope, $http) {

    $http.get(
      "https://www.kimonolabs.com/api/4ag7ique?apikey=BsZyX8bXMCMKLt0LIyhOVkKv91tYUfLQ").
    success(function(data){
      $scope.results = data.results.collection1[counter].Date.text;
    }).error(function(){
      $scope.results = "fail";
    });

    }
    ]);

    module.controller(
    'GetTimeController', ['$scope', '$http', function($scope, $http) {
    $http.get(
      "https://www.kimonolabs.com/api/80nacg0q?apikey=BsZyX8bXMCMKLt0LIyhOVkKv91tYUfLQ").
    success(function(data){
      $scope.results = data.results.collection1[counter].Time;
    }).error(function(){
      $scope.results = "fail";
    });

    }
    ]);

    module.controller(
    'GetLeagueController', ['$scope', '$http', function($scope, $http) {
    $http.get(
      "https://www.kimonolabs.com/api/80nacg0q?apikey=BsZyX8bXMCMKLt0LIyhOVkKv91tYUfLQ").
    success(function(data){
      $scope.results = data.results.collection1[counter].League;
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

    module.controller(
      'ReturnSearchedTeams', ['$scope, $data', function($scope)
      {
        var teamSearched = $("#team-search").val(); 
        $scope.init=function(teamName)
        {
          $scope.searchedTeam=teamName;
        }
        for (var i =0; i <leagueTeams.length; i++) {
          if($scope.searchedTeam.toLowerCase() === leagueTeams[i].toLowerCase());
            $scope.returnTeam = "yay";
        };
        for (var i = 0; i < dotaTeams.length; i++) {
          if(searchedTeam.toLowerCase()===leagueTeams[i].toLowerCase());
        };
        for (var i = 0; i < dotaTeams.length; i++) {
          if(searchedTeam.toLowerCase()===hearthstoneTeams[i].toLowerCase());
        };

      }
      ]);
      
}());

