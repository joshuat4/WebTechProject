const express = require('express');


var router = express.Router();

//default route
router.get('/', function(req,res){
    res.send("Hello world");
})

//secondary route
router.get('/about', function(req,res){
    res.send("about this ..");
})

module.exports = router;