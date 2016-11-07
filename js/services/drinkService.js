(function() {
  let app = angular.module("barberDrinks");
  app.service('drinkService', function(cokeService, runService, iceService, pepsiService) {
    var vm = this;
    vm.maxBetweenDegrees = function(a, b, c){
      return Math.max(a, (Math.max(b,c)));
    }
    vm.minBetweenDegrees = function(a, b, c){
      return Math.min(a, (Math.min(b,c));
    }
    vm.ingrdientsDegree = function (ingredients) {
      cokeService.cokeDegree(ingredients[0]);
      pepsiService.pepsiDegree(ingredients[1]);
      runService.runDegree(ingredients[2]);
      iceService.iceDegree(ingredients[3]);
    }
    vm.drinkDegree = function(ingredients, drink) {
      vm.drinkSoftDegree(ingredients, drink);
      vm.drinkStrongDegree(ingredients, drink);
      vm.drinkWeakDegree(ingredients, drink);
    }
    vm.drinkWeakDegree = function(ingredients, drink) {
      var x = 0;
      var sodaIndex = 0;
      var iceDegree = ingredients[3].pertinenceDegree;
      if (ingredients[1].show) sodaIndex = 1;
      var degreeA = 0; var degreeB = 0; var degreeC = 0;
      degreeA = vm.minBetweenDegrees(iceDegree, ingredients[sodaIndex].weakPertinenceDegree, ingredients[2].weakPertinenceDegree);
      degreeB = vm.minBetweenDegrees(iceDegree, ingredients[sodaIndex].weakPertinenceDegree, ingredients[2].softPertinenceDegree);
      degreeC = vm.minBetweenDegrees(iceDegree, ingredients[sodaIndex].softPertinenceDegree, ingredients[2].weakPertinenceDegree);
      drink[0].pertinenceDegree = vm.maxBetweenDegrees(degreeA, degreeB, degreeC);
    }
    vm.drinkSoftDegree = function(ingredients, drink) {
      var x = 0;
      var sodaIndex = 0;
      var iceDegree = ingredients[3].pertinenceDegree;
      if (ingredients[1].show) sodaIndex = 1;
      var degreeA = 0; var degreeB = 0; var degreeC = 0;
      degreeA = vm.minBetweenDegrees(iceDegree, ingredients[sodaIndex].strongPertinenceDegree, ingredients[2].weakPertinenceDegree);
      degreeB = vm.minBetweenDegrees(iceDegree, ingredients[sodaIndex].softPertinenceDegree, ingredients[2].softPertinenceDegree);
      degreeC = vm.minBetweenDegrees(iceDegree, ingredients[sodaIndex].weakPertinenceDegree, ingredients[2].strongPertinenceDegree);
      drink[1].pertinenceDegree = vm.maxBetweenDegrees(degreeA, degreeB, degreeC);
    }
    vm.drinkStrongDegree = function(ingredients, drink) {
      var x = 0;
      var sodaIndex = 0;
      var iceDegree = ingredients[3].pertinenceDegree;
      if (ingredients[1].show) sodaIndex = 1;
      var degreeA = 0; var degreeB = 0; var degreeC = 0;
      degreeA = vm.minBetweenDegrees(iceDegree, ingredients[sodaIndex].strongPertinenceDegree, ingredients[2].softPertinenceDegree);
      degreeB = vm.minBetweenDegrees(iceDegree, ingredients[sodaIndex].strongPertinenceDegree, ingredients[2].strongPertinenceDegree);
      degreeC = vm.minBetweenDegrees(iceDegree, ingredients[sodaIndex].softPertinenceDegree, ingredients[2].strongPertinenceDegree);
      drink[2].pertinenceDegree = vm.maxBetweenDegrees(degreeA, degreeB, degreeC);
    }
  });
})();
