'use strict';

angular.module('w9naaEcholinkApp')
  .controller('MainCtrl', function ($scope, $http) {
  	$scope.members = {};
  	$scope.nodeStatus = false;

    $scope.listMembers = function () {
    	console.log('angular');

    	$http.get('/api/things/listMembers').success(function (data) {
    		$scope.members = data.members;
    	});
    };

    $scope.startNode = function () {
    	$http.get('/api/things/startNode');
    };

    $scope.stopNode = function () {
    	$http.get('/api/things/stopNode');
    };

    $scope.getNodeStatus = function () {
    	$http.get('/api/things/getNodeStatus').success(function (data) {
    		$scope.nodeStatus = data.status;
    	})
    }
  });
