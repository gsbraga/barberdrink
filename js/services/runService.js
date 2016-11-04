(function() {
  let app = angular.module("barberDrinks");
  app.service('runService', function() {
    var vm = this;
    vm.strongDegree = function(run) {
      var x = run.quantity;
      var pertinenceDegree = 0;
      if (x >= 23 && x <= 28) pertinenceDegree = (x - 23) / (28 - 23);
      if (x > 28 && x <= 30) pertinenceDegree = 1;
      run.strongPertinenceDegree = pertinenceDegree;
    }
    vm.softDegree = function(run) {
      var x = run.quantity;
      var pertinenceDegree = 0;
      if (x >= 15 && x <= 20) pertinenceDegree = (x - 15) / (20 - 15);
      if (x > 20 && x < 25) pertinenceDegree = 1;
      if (x >= 25 && x <= 27) pertinenceDegree = (27 - x) / (27 - 25);
      run.softPertinenceDegree = pertinenceDegree;
    }
    vm.weakDegree = function(run) {
      var x = run.quantity;
      var pertinenceDegree = 0;
      if (x >= 10 && x < 15) pertinenceDegree = 1;
      if (x >= 15 && x <= 20) pertinenceDegree = (20 - x) / (20 - 15);
      run.weakPertinenceDegree = pertinenceDegree;
    }
    vm.runDegree = function(run) {
      vm.weakDegree(run);
      vm.softDegree(run);
      vm.strongDegree(run);
    }
  });
})();
