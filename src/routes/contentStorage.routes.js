const express = require('express');
const app = express.Router();

const contentStorageController = require('../controllers/contentStorages.controller');

app.route('/contentStorage/:typeId')
    .get(contentStorageController.getContentStorageForTypeId)
    .post(contentStorageController.postContentStorageForTypeId)
    .patch(contentStorageController.updateSpecificContentStorageOfTypeId)
    .delete(contentStorageController.deleteSpecificContentStorageOfTypeId);

module.exports = app;