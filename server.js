const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
var http = require('http');
var enforce = require('express-sslify');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// tried using sslify but still deosnt seem to work properly in lighthouse tests????
app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false,
});



// routes
app.use(require("./routes/api.js"));
 
http.createServer(app).listen(PORT, function() {
    console.log('Express server listening on port ' + PORT);
});