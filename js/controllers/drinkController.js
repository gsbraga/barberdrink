(function() {
  let app = angular.module("barberDrinks");
  app.controller("barberDrinksController", ["$scope", "drinkService", "$http","$location", function($scope, drinkService, $http, $location) {
    $scope.calculated = false;
    /* ### REFDATA ### */
    $http.get('/js/components/refData.json').success(function(data) {
      $scope.ingredients=data["ingredients"];
      $scope.developers=data["developers"];
      $scope.drink=data["drink"];
    });
    /* ### END ### */
    $scope.validateCubaLibre = function() {
      var validated = true;
      angular.forEach($scope.ingredients, function(value, key) {
        if (key === 0 && value.show) {
          if (!(value.quantity >= 50 && value.quantity <= 60)) validated = false;
        }
        if (key === 1 && value.show) {
          if (!(value.quantity >= 60 && value.quantity <= 70)) validated = false;
        }
        if (key === 2 && value.show) {
          if (!(value.quantity >= 10 && value.quantity <= 30)) validated = false;
        }
        if (key === 3 && value.show) {
          if (value.quantity !== 20) validated = false;
        }
      });
      return validated;
    }
    $scope.ingrdientsDegree = function() {
      //if ($scope.validateCubaLibre())
        $scope.calculated = true;
        drinkService.ingrdientsDegree($scope.ingredients);
        drinkService.drinkDegree($scope.ingredients, $scope.drink);
        if ($scope.drink[0].pertinenceDegree > $scope.drink[1].pertinenceDegree) {
          $scope.greaterIndex = 0;
        } else {
          $scope.greaterIndex = 1;
        }
        if ($scope.drink[2].pertinenceDegree > $scope.drink[$scope.greaterIndex].pertinenceDegree) $scope.greaterIndex = 2;
    }
    $scope.return = function() {
      $scope.calculated = false;
    }
    $scope.helpMe = function() {
      $scope.clearQuantity();
      $location.path("/help");
    }
  $scope.clearQuantity = function() {
    for (var i = 0; i < $scope.ingredients.length; i++){
      $scope.ingredients[i].quantity = 0;
    }
    $scope.ingredients[0].show = true;
    $scope.ingredients[1].show = false;
  }
  }]);
})();
