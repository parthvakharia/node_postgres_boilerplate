const express = require('express');
const config = require('./config');
const postgraphile = require('./boot/postgraphile');

const app = express();
app.config = config;

require('./boot/express')(app);
require('./boot/sequelize');
app.use(postgraphile);
require('./boot/routes')(app);

console.log(`node_postgres_boilerplate listening on ${config.PORT}`);
app.listen(config.PORT);
