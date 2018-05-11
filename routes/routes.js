var express = require('express');
var router = express.Router();

var controller = require('../Controller/controller.js');


// Find all recycling stations in a state
router.get('/api/:states',controller.findAllStations);

// Find all recycling stations in a state, and 50km from user address
router.get('/api/lon/:lon/lat/:lat',controller.findCloseStations);

// Find one recycling station by id
// router.get('/api/:id',controller.findOneStation);
// var CustomerDataInstance = mongoose.model('customerDataInstance');
router.post('/post', controller.saveCustomer);

router.get('/api/postcode/:postcode', controller.countInArea);

module.exports = router;