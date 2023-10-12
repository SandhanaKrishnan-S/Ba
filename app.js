const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./route/user.route.js');

const app = express();

app.use(bodyParser.json());

app.use('/', userRoute);

module.exports = app;
