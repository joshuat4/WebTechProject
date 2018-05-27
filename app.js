//For Webtech c/o "ReE Tech".

var express = require('express');
var app = express();
var mongoose = require('mongoose');


var bodyParser = require('body-parser');
var Customer = require('./models/customerData.js');
var Partner = require('./models/partnerData.js');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

const path = require('path');

// move all those *.html files to ./static/
app.use(express.static('htmlPages'));


// Database setup
require('./models/db.js');
// routes setup
var routes = require('./routes/routes.js');


app.use(bodyParser.urlencoded({/**/
    extended: true
}));

app.use(bodyParser.json());

app.use('/', routes);


//PARTNER
app.post('/partnerpost', function(req, res){
    console.log("got partner form data! saving to database.");
    var currPartner = new Partner(req.body);
    currPartner.save(function (err) {
        if (err) return handleError(err);
    });
});





app.listen(PORT, function(){
    console.log(`Express listening on port ${PORT}`);
});
