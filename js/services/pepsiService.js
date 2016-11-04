(function() {
  let app = angular.module("barberDrinks");
  app.service('pepsiService', function() {
    var vm = this;
    vm.strongDegree = function(pepsi) {
      var x = pepsi.quantity;
      var pertinenceDegree = 0;
      if (x >=60 && x < 62) pertinenceDegree = 1;
      if (x >= 62 && x <= 64) pertinenceDegree = (64 - x) / (64 - 62);
      pepsi.strongPertinenceDegree = pertinenceDegree;
    }
    vm.softDegree = function(pepsi) {
      var x = pepsi.quantity;
      var pertinenceDegree = 0;
      if (x >= 62 && x <= 64) pertinenceDegree = (64 - x) / (64 - 62);
      if (x > 64 && x < 66) pertinenceDegree = 1;
      if (x >= 66 && x <= 68) pertinenceDegree = (68 - x) / (68 - 66);
      pepsi.softPertinenceDegree = pertinenceDegree;
    }
    vm.weakDegree = function(pepsi) {
      var x = pepsi.quantity;
      var pertinenceDegree = 0;
      if (x >= 66 && x <= 68) pertinenceDegree = (68 - x) / (68 - 66);
      if (x > 68 && x <= 70) pertinenceDegree = 1;
      pepsi.weakPertinenceDegree = pertinenceDegree;
    }
    vm.pepsiDegree = function(pepsi){
      vm.softDegree(pepsi);
      vm.weakDegree(pepsi);
      vm.strongDegree(pepsi);
    }
  });
})();
