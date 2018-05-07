var express = require('express');
var router = express.Router();

var controller = require('../Controller/controller.js');


// Find all recycling stations
router.get('/api',controller.findAllStations);

// Find one recycling station by id
// router.get('/api/:id',controller.findOneStation);

module.exports = router;