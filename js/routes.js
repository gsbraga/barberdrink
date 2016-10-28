var app = angular.module('barberDrinks');
app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl : 'views/home.html',
    controller: "barberDrinksController"
  });
});
