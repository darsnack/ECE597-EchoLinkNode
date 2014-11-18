'use strict';

var express = require('express');
var controller = require('./thing.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/listMembers', controller.listMembers);

module.exports = router;