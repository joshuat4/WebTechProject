// Create database
var mongoose = require('mongoose');
mongoose.connect('mongodb://hcheong1:qwer1234!@ds111050.mlab.com:11050/tute9',function(err){
    if(!err){
        console.log('Connected to mongo');
    }else{
        console.log('Failed to connect to mongo');
    }
});


require('./mapData.js');
