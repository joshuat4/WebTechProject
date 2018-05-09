//For Webtech c/o "ReE Tech".

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Customer = require('./models/customerData.js');
var Partner = require('./models/partnerData.js');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

const path = require('path');


app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/frontpage.html')));
app.get('/frontpage.html', (req, res) => res.sendFile(path.join(__dirname + '/frontpage.html')));
app.post('/frontpage.html', (req, res) => res.sendFile(path.join(__dirname + '/frontpage.html')));
app.get('/collectionpartner.html', (req, res) => res.sendFile(path.join(__dirname + '/collectionpartner.html')));
app.get('/maps.html', (req, res) => res.sendFile(path.join(__dirname + '/maps.html')));
app.get('/RequestForm.html', (req, res) => res.sendFile(path.join(__dirname + '/RequestForm.html')));
app.get('/impactpage.html', (req, res) => res.sendFile(path.join(__dirname + '/impactpage.html')));
app.get('/partnerjoinform.html', (req, res) => res.sendFile(path.join(__dirname + '/partnerjoinform.html')));
app.get('/howtohelp.html', (req, res) => res.sendFile(path.join(__dirname + '/howtohelp.html')));
app.get('/sowhat.html', (req, res) => res.sendFile(path.join(__dirname + '/sowhat.html')));
app.get('/whatEwaste.html', (req, res) => res.sendFile(path.join(__dirname + '/whatEwaste.html')));


// Database setup
require('./models/db.js');

// routes setup
var routes = require('./routes/routes.js');
app.use('/',routes);



//DONT DELETE ( PROLLY SHOULD MOVE TO CONTROLLER THOUGH I DONT KNOW HOW)
//CUSTOMER
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.post('/post', function(req, res){
    console.log("got customer form data! saving to database.");
    var currCustomer = new Customer(req.body);
    currCustomer.save(function (err) {
        if (err) return handleError(err);
    });
    res.status(200).sendFile(path.join(__dirname + '/checkRequests.html'));
});


//PARTNER
app.post('/partnerpost', function(req, res){
    console.log("got partner form data! saving to database.");
    var currPartner = new Partner(req.body);
    currPartner.save(function (err) {
        if (err) return handleError(err);
    });
    res.status(200).sendFile(path.join(__dirname + '/frontpage.html'));
});





app.listen(PORT, function(req, res){
    console.log(`Express listening on port ${PORT}`);
});

// var mongoose = require('mongoose');
// var mongoDB = 'mongodb://hcheong1:qwer1234!@ds111050.mlab.com:11050/tute9';
// mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
