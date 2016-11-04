(function() {
  let app = angular.module("barberDrinks");
  app.service('cokeService', function() {
    var vm = this;
    vm.strongDegree = function(coke) {
      var x = coke.quantity;
      var pertinenceDegree = 0;
      if (x >= 50 && x < 52) pertinenceDegree = 1;
      if (x >= 52 && x <= 54) pertinenceDegree = (54 - x) / (54 - 52);
      coke.strongPertinenceDegree = pertinenceDegree;
    }
    vm.weakDegree = function(coke) {
      var x = coke.quantity;
      var pertinenceDegree = 0;
      if (x > 58 && x <= 60) pertinenceDegree = 1;
      if (x >= 56 && x <= 58) pertinenceDegree = (60 - x) / (60 - 58);
      coke.weakPertinenceDegree = pertinenceDegree;
    }
    vm.softDegree = function(coke) {
      var x = coke.quantity;
      var pertinenceDegree = 0;
      if (x >= 52 && x <= 54) pertinenceDegree = (54 - x) / (54 - 52);
      if (x > 54 && x < 56) pertinenceDegree = 1;
      if (x >= 56 && x <= 58) pertinenceDegree = (58 - x) / (58 - 56);
      coke.softPertinenceDegree = pertinenceDegree;
    }
    vm.cokeDegree =  function(coke) {
      vm.softDegree(coke);
      vm.weakDegree(coke);
      vm.strongDegree(coke);
    }
  });
})();
