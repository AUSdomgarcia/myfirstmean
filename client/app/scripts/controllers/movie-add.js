'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieAddCtrl
 * @description
 * # MovieAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovieAddCtrl', function (Movie,$location) {
    var vm = this;
        vm.movie = {};
        vm.saveMovie = function(){
          Movie.post(vm.movie).then(function(){
            $location.path('/movies');
          });
        };
  });
