(function() {
  let app = angular.module("barberDrinks");
  app.service('drinkService', function(cokeService, runService, iceService, pepsiService) {
    var vm = this;
    vm.ingrdientsDegree = function (ingredients) {
      cokeService.cokeDegree(ingredients[0]);
      pepsiService.pepsiDegree(ingredients[1]);
      runService.runDegree(ingredients[2]);
      iceService.iceDegree(ingredients[3]);
    }
  });
})();
