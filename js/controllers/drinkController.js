(function() {
  let app = angular.module("barberDrinks");
  app.controller("barberDrinksController", ["$scope", "drinkService", "$http","$location", function($scope, drinkService, $http, $location) {
    $scope.coke = true;
    $scope.greaterPrice = "Será considerado para cobrança o maior valor.";
    /* ### REFDATA ### */
    $http.get('../components/refData.json').success(function(data) {
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
      $scope.equalValueAlert = false;
      if ($scope.validateCubaLibre()) {
        $scope.calculated = true;
        drinkService.ingrdientsDegree($scope.ingredients);
        drinkService.drinkDegree($scope.ingredients, $scope.drink);
        if ($scope.drink[0].pertinenceDegree === $scope.drink[1].pertinenceDegree && $scope.drink[1].pertinenceDegree !== 0) {
          $scope.alertEqualValueMessage = "O grau de pertiência de Fraco e Suave são iguais.";
          $scope.equalValueAlert = true;
        }
        if ($scope.drink[0].pertinenceDegree === $scope.drink[2].pertinenceDegree && $scope.drink[0].pertinenceDegree !== 0) {
          $scope.alertEqualValueMessage = "O grau de pertiência de Fraco e Forte são iguais.";
          $scope.equalValueAlert = true;
        }
        if ($scope.drink[2].pertinenceDegree === $scope.drink[1].pertinenceDegree && $scope.drink[1].pertinenceDegree !== 0){
          $scope.alertEqualValueMessage = "O grau de pertiência de Suave e Forte são iguais.";
          $scope.equalValueAlert = true;
        }
        if ($scope.drink[0].pertinenceDegree > $scope.drink[1].pertinenceDegree) {
          $scope.greaterIndex = 0;
        } else {
          $scope.greaterIndex = 1;
        }
        if ($scope.drink[2].pertinenceDegree >= $scope.drink[$scope.greaterIndex].pertinenceDegree) $scope.greaterIndex = 2;
      } else {
        $('#alertModal').modal('show');
      }
    }
    $scope.return = function(page) {
      $scope.calculated = false;
      $location.path("/");
    }
    $scope.helpMe = function() {
      $('#alertModal').modal('hide');
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
