const express = require('express');
const app = express.Router();

const schemas = require('../schemas');
const validatorMiddleware = require('../middlewares/requestValidator.middleware');
const contentStorageController = require('../controllers/contentStorages.controller');

app.route('/contentStorage/:typeId')
    .get(contentStorageController.getContentStorageForTypeId)
    .post( validatorMiddleware.bodyValidator(schemas.postNewContentInStorageSchema) ,contentStorageController.postContentStorageForTypeId)
    .patch( validatorMiddleware.bodyValidator(schemas.updateContentInStorageSchema) ,contentStorageController.updateSpecificContentStorageOfTypeId)
    .delete( validatorMiddleware.bodyValidator(schemas.deleteContentInStorageSchema) ,contentStorageController.deleteSpecificContentStorageOfTypeId);

module.exports = app;