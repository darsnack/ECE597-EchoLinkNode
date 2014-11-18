'use strict';

angular.module('w9naaEcholinkApp').controller('MainCtrl', function ($scope, $http) {
  	$scope.members = {};
  	$scope.nodeStatus = "Offline";
  	$scope.startMessage = "";
  	$scope.stopMessage = "";

    $scope.listMembers = function () {
    	console.log('angular');

    	$http.get('/api/things/listMembers').success(function (data) {
    		$scope.members = data.members;
    	});
    };

    $scope.startNode = function () {
    	$http.get('/api/things/startNode');

    	$http.get('/api/things/getNodeStatus').success(function (data) {
    		if (data.status) {
    			$scope.nodeStatus = "Online";
    		} else {
    			$scope.nodeStatus = "Offline";
    		}
    	});

    	$scope.startMessage = "Echolink node is running!";
    	$scope.stopMessage = "";
    };

    $scope.stopNode = function () {
    	$http.get('/api/things/stopNode');

    	$http.get('/api/things/getNodeStatus').success(function (data) {
    		if (data.status) {
    			$scope.nodeStatus = "Online";
    		} else {
    			$scope.nodeStatus = "Offline";
    		}
    	});

    	$scope.startMessage = "";
    	$scope.stopMessage = "Echolink has been shutdown :(";
    };

    $scope.getNodeStatus = function () {
    	$http.get('/api/things/getNodeStatus').success(function (data) {
    		if (data.status) {
    			$scope.nodeStatus = "Online";
    		} else {
    			$scope.nodeStatus = "Offline";
    		}
    	});
    };
});