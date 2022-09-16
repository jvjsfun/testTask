var app = angular.module("MyApp", []);
// const hellodata = require('./data.json');

app.controller("MyController", function ($scope, $http) {
  $scope.IsVisible = false;
  $scope.mainData = {
  };

  activate();
  function activate() {

    var onSuccess = function (data, status, headers, config) {
        $scope.mainData= data.data;
        sortData();
    };

    var onError = function (data, status, headers, config) {
        $scope.error = status;
    }

    var promise = $http.get("http://localhost:3000/data");
        
    promise.success(onSuccess);
    promise.error(onError);
  }

  function compareAudience(a, b) {
    return b.source_items.audience_size - a.source_items.audience_size;
  }
  function sortData(){
    $scope.data = $scope.mainData.sort(compareAudience);
  }

});
