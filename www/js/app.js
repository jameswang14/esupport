(function(){
  'use strict';
  var module = angular.module('app', ['onsen']);

  module.controller('AppController', function($scope, $data) {
    $scope.doSomething = function() {
      setTimeout(function() {
        alert('tappaed');
      }, 100);
    };
  });

  module.controller('GetMatchController', function($scope, $http) {
      $scope.data = {};

      $scope.data.click= function (item, event) {

    $http.get(
      url: "https://www.kimonolabs.com/api/4ag7ique?apikey=BsZyX8bXMCMKLt0LIyhOVkKv91tYUfLQ"
    ).success(function(data)){
      $scope.myData = data;
    }).error(function(){

    });

    });

  module.controller('DetailController', function($scope, $data) {
    $scope.item = $data.selectedItem;
  });

  module.controller('MasterController', function($scope, $data) {
    $scope.items = $data.items;  
    
    $scope.showDetail = function(index) {
      var selectedItem = $data.items[index];
      $data.selectedItem = selectedItem;
      $scope.ons.navigator.pushPage('detail.html', {title : selectedItem.title});
    };
  });



      var data = {};
      
      data.items = [
          { 
              title: 'Item 1 Title',
              label: '4h',
              desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          },
          { 
              title: 'Another Item Title',
              label: '6h',
              desc: 'Ut enim ad minim veniam.'
          },
          { 
              title: 'Yet Another Item Title',
              label: '1day ago',
              desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          },
          { 
              title: 'Yet Another Item Title',
              label: '1day ago',
              desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          }
      ]; 
      
      return data;
  });
})();

