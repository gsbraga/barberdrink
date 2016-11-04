(function() {
  let app = angular.module("barberDrinks");
  app.service('iceService', function() {
    var vm = this;
    vm.iceDegree = function(ice){
      var pertinenceDegree  = 0;
      if (ice.quantity === 20) pertinenceDegree = 1;
      ice.pertinenceDegree = pertinenceDegree;
    }
  });
})();
