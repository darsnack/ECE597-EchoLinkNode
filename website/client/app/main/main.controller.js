'use strict';

angular.module('w9naaEcholinkApp')
  .controller('MainCtrl', function ($scope, $http) {
  	$scope.members = {};

    $scope.listMembers = function () {
    	console.log('angular');

    	$http.get('/api/things/listMembers').success(function (data) {
    		$scope.members = data.members;
    	});
    };
  });
