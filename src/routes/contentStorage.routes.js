const express = require('express');
const app = express.Router();

app.route('/contentStorage/')
    .get()
    .post();

module.exports = app;