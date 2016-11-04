var app = angular.module('barberDrinks');
app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl : 'views/home.html',
    controller: "barberDrinksController"
  })
  .when('/help', {
    templateUrl : 'views/help.html'
  })
  .when('/notfound', {
    templateUrl: 'views/notfound.html'
  })
  .otherwise({
    redirectTo: '/notfound'
  });
});
