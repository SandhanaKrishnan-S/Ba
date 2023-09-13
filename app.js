const express = require('express');
const body_parser = require('body-parser');
const userRoute = require('./route/user.route.js')


const app = express();

app.use(body_parser.json());

app.use('/' , userRoute);
module.exports = app;
