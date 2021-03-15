require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();

// require database configuration
require('./configs/db.config');

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// CORS setup
app.use(
  cors({
    origin: [process.env.PUBLIC_DOMAIN, 'http://localhost:3000']
  })
);

// Routes
app.use('/api', require('./routes/project.routes'));


module.exports = app;