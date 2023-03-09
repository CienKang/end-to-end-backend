const express = require('express');
const app = express.Router();

const contentTypesController = require('../controllers/contentTypes.controller');

app.route('/contentTypes')
    .get(contentTypesController.getContentTypes)
    .post(contentTypesController.postNewContentType);

app.route('/contentTypes/:typeName')
    .patch(contentTypesController.addNewFieldInSpecificContentType)
    .delete(contentTypesController.deleteFieldInSpecificContentType);

module.exports = app;