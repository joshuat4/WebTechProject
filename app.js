//For Webtech c/o "ReE Tech".

const express = require('express');
const app = express();
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

app.listen(PORT, function(){
    console.log(`Express listening on port ${PORT}`);
});

var mongoose = require('mongoose');
var mongoDB = 'mongodb://hcheong1:qwer1234!@ds111050.mlab.com:11050/tute9';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
