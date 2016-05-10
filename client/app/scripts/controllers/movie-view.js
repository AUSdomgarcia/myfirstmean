'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieViewCtrl
 * @description
 * # MovieViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovieViewCtrl', function (Movie, $routeParams) {
    var vm = this;
    vm.viewMovie = true;
    vm.movie = Movie.one($routeParams.id).get().$object;
  });
