"use strict";
const path = require('path');
const express = require('express');
const app = express();                               // create our app w/ express
const bodyParser = require('body-parser');    // pull information from HTML POST (express4)
const caesarCodeClass = require('./caesar-code');
const caesarCode = new caesarCodeClass();
// configuration =================


app.use(express.static(__dirname + '/'));                 // set the static files location /public/img will be /img for users
app.use(bodyParser.urlencoded({ 'extended': 'true' }));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../', 'index.html')); // load the single view file (angular will handle the page changes on the front-end)
});

app.post('/api/get-offset', function (req, res, next) {
    let response = {
        offset: caesarCode.getOffsetByString(req.body.key)
    };
    res.json(response);
});


// listen (start app with node server.js) ======================================
app.listen(12345);
console.log("app listening on port 12345");