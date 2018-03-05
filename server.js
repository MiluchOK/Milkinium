const express = require('express');
const routes = require('./server/routes');

const app = express();
const port = process.env.PORT || 5000;

app.use('/', routes);

app.listen(port, () => console.log(`Listening on port ${port}`));