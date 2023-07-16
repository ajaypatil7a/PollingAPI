// Getting required modules
const express = require('express')
const Port = process.env.PORT || 5000;
const app = express();
const db = require('./config/mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
// Body-parser is use to decode the url
app.use(bodyParser.urlencoded({ extended: true }));
// Will use rotes for the requests
app.use('/', require('./routes'));
// Firing up app
app.listen( Port , (err) => {
  if (err) {
    console.log(`Error in running the server : ${err}`);
  }
  console.log(`Server is up and running at ${Port}`);
});
