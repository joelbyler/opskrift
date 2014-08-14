var opskrift = angular.module('opskrift',[
  'templates',
  'ngRoute'
]);

opskrift.config(function($routeProvider){
  $routeProvider.when("/",
    {
      templateUrl: "index.html",
      controller: "RecipesController"
    }
  );
});
var recipes = [
  {
    id: 1,
    name: 'Baked Potato w/ Cheese'
  },
  {
    id: 2,
    name: 'Garlic Mashed Potatoes'
  },
  {
    id: 3,
    name: 'Potatoes Au Gratin'
  },
  {
    id: 4,
    name: 'Baked Brussel Sprouts'
  },
];
opskrift.controller("RecipesController", function($scope, $routeParams, $location){
  $scope.search = function(keywords) {
    $location.path("/").search('keywords', keywords);
  }

   if ($routeParams.keywords) {
      keywords = $routeParams.keywords.toLowerCase()
console.log(keywords);
      //$scope.recipes = recipes.filter(recipe)-> recipe.name.toLowerCase().indexOf(keywords) != -1
      $scope.recipes = [recipes[1]]
    } else {
      $scope.recipes = []
    }
  // $scope.mode = {
  // }
});
