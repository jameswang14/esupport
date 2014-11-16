

(function(){
  'use strict'
  var followedTeams = [];
  var searchedTeam;
  var counter = 0;
  var leagueTeams = ["Team SoloMid", "Cloud 9", "Alliance", "Star Horn Royal Club", 
  "Samsung Galaxy Blue", "Fnatic", "Samsung Galaxy White", "OMG", "NaJin White Shield" ];
  var dotaTeams = ["Moscow Five", "Virtus Pro-Dota2", "NaVi", "Team Empire", "Fnatic", "Alliance"];
  var hearthstoneTeams = ["Team Liquid HS", "StrifeCro", "Firebat", "Kolento", "Amaz", "Tarei"];
  var module = angular.module('app', ['onsen']);



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
      $scope.results = data.results.collection1[counter].Score.text;
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

