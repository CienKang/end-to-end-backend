const express = require('express');
const app = express.Router();

const contentTypesController = require('../controllers/contentTypes.controller');
const schemas = require('../schemas/');
const validatorMiddleware = require('../middlewares/requestValidator.middleware');
app.route('/contentTypes')
    .get(contentTypesController.getContentTypes)
    .post(validatorMiddleware.bodyValidator(schemas.postNewContentTypeSchema), contentTypesController.postNewContentType);

app.route('/contentTypes/:typeName')
    .patch(validatorMiddleware.bodyValidator(schemas.makeNewFieldInSpecificContentTypeSchema), contentTypesController.addNewFieldInSpecificContentType)
    .delete(validatorMiddleware.bodyValidator(schemas.deleteFieldInSpecificContentTypeSchema), contentTypesController.deleteFieldInSpecificContentType)
    .post(contentTypesController.renameContentType);

module.exports = app;