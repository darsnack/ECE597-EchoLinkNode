/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash'),
		exec = require('child_process').exec;

// Get list of things
exports.index = function(req, res) {
  res.render('index', {});
};

exports.listMembers = function (req, res) {
  console.log("Getting users...");

  var data = {members: []};

  exec('tlbcmd "users"', function (error, stdout, stderr) {
  	if (error) {
  		console.log("Error getting user list: " + error);
  	} else {
  		data.members = stdout.split('\n');
  	}
  });

  res.json(data);
};

exports.startNode = function (req, res) {
	console.log("Starting node...");

	if (getNodeStatus()) {
		res.statusCode = 200;
		res.end();
		return;
	}

	exec('/usr/local/libexec/tlb -f /root/ECE597-EchoLinkNode/tlb-configs/tlb.conf', function (error, stdout, stderr) {
		if (error) {
			console.log("Error startig node: " + error);
		}
	});

	res.statusCode = 200;
	res.end();
};

exports.stopNode = function (req, res) {
	console.log("Stopping node...");

	exec('tlbcmd "shutdown"', function (error, stdout, stderr) {
		if (error) {
			console.log("Error stopping node: " + error);
		}
	});

	res.statusCode = 200;
	res.end();
};

exports.getNodeStatus = function (req, res) {
	console.log("Getting node status...");

	var data = {status: false};

	exec('ps aux | grep tl[b]', function (error, stdout, stderr) {
		if (error) {
			console.log("Error getting status: " + error);
		} else if (stdout !== '') {
			data.status = true;
		}
	});

	res.json(data);

	return data.status;
};