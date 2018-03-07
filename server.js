const express = require('express');
var mongoose   = require('mongoose');
const routes = require('./server/routes');
const db = require('server/config/db');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(db.db);
.then(() => {
  console.log("Connected to the db.")
})
.catch((err) => {
  console.log("Error connecting to db: " + err);
})

app.use('/', routes);

app.listen(port, () => console.log(`Listening on port ${port}`));