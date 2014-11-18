/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');

// Get list of things
exports.index = function(req, res) {
  res.render('index', {});
};

exports.listMembers = function (req, res) {
  console.log('works');
  var members = {members: ['Jon', 'Jake', 'Charlie']};
  res.json(members);
};