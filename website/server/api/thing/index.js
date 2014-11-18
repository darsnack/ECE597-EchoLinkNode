'use strict';

var express = require('express');
var controller = require('./thing.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/listMembers', controller.listMembers);
router.get('/startNode', controller.startNode);
router.get('/stopNode', controller.stopNode);
router.get('/getNodeStatus', controller.getNodeStatus);

module.exports = router;