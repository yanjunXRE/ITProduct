// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const cors = require('cors');
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
// Get our API routes
const api = require('./routes/api');
const app = express();
//Prevent Cross-origin request to be blocked
app.use(cors({origin: "*" }));
app.use(bodyParser.json());
// Parsers for POST data
app.use(express.json());
// Point static path to dist
app.use(express.static(path.join(__dirname, '../dist')));
// Set our api routes
app.use('/api', api);
// Catch all other routes and return the index file
app.get('*', (req, res) => {
 res.sendFile(path.join(__dirname, '../dist/meanApp/index.html'));
});
/**
* Get port from environment and store in Express.
*/
const port = process.env.PORT || '3000';
app.set('port', port);
/**
* Create HTTP server.
*/
const server = http.createServer(app);
/**
* Listen on provided port, on all network interfaces.
*/
// define a sendmail endpoint, which will send emails and response with the corresponding status

server.listen(port, () => console.log(`API running on localhost:${port}`));
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

