//For Webtech

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

var app = express();

app.listen(PORT, function(){
    console.log(`Express listening on port ${PORT}`);
});