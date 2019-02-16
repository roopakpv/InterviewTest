const express = require("express");
var cors = require('cors');





const app = express();
app.use(cors());



var page1 = require('./CONTENTLISTINGPAGE-PAGE1');
var page2 = require('./CONTENTLISTINGPAGE-PAGE1');
var page3 = require('./CONTENTLISTINGPAGE-PAGE1');

app.get("/page1", (req, res) => {
    res.send(page1);
});

app.get("/page2", (req, res, next) => {
    res.send(page1);
    next();
});

app.get("/page3", (req, res) => {
    res.send(page1);
});

app.listen(2048);

