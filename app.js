const express = require('express');
const http = require('http');
const fs = require('fs');
var path = require('path');
const cheerio = require('cheerio');
const request = require('request');
const urlToPars = "https://news.ycombinator.com/newest";
var fileNameJSON = "../angular-waxom/db.json";

const app = express();
const port = 4200;

app.set("port", port);
app.set("views", __dirname + "/src");
app.set("view engine", "ejs");
app.engine('ejs', require("ejs-locals"));

app.use(express.static(__dirname + '/src/assets'));

app.get("/", function (req, res, next) {
	res.render("index");
});

http.createServer(app).listen(app.get("port"), function () {
	console.log("Express is listening on port " + port);
})
console.log('Server running on port 4200');