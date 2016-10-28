(function() {
  let app = angular.module("barberDrinks");
  app.controller("barberDrinksController", ["$scope", "$http", function($scope, $http) {
    $scope.coke = true;
    //START RefData
    $http.get('/js/components/refData.json').success(function(data) {
      $scope.ingredients=data["ingredients"];
      $scope.standardDrinks=data["standardDrinks"];
      $scope.developers=data["developers"];
    });
    //END RefData//
  $scope.doStandardDrink = function(drink) {
    $scope.ingredients[0].quantity = drink.coke;
    $scope.ingredients[1].quantity = drink.pepsi;
    $scope.ingredients[2].quantity = drink.rum;
    $scope.ingredients[3].quantity = drink.ice;
  };
  $scope.cleanQuantity = function() {
    for (var i = 0; i < $scope.ingredients.length; i++){
      $scope.ingredients[i].quantity = 0;
    }
    $scope.ingredients[0].show = true;
    $scope.ingredients[1].show = false;
  }
  }]);
})();
