'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieDeleteCtrl
 * @description
 * # MovieDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovieDeleteCtrl', function ($routeParams, Movie, $location) {
    var vm = this;
    vm.movie = Movie.one($routeParams.id).get().$object;
    vm.deleteMovie = function(){
      vm.movie.remove().then(function(){
        $location.path('/movies');
      });
    };
    vm.back = function(){
      $location.path('/movie/'+$routeParams.id);
    };
  });
