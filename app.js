//For Webtech

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const path = require('path');

//fjioreghieoroie
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

app.listen(PORT, function(){
    console.log(`Express listening on port ${PORT}`);
});