const Joi = require('joi');

const postNewContentTypeSchema = Joi.object({
    typeName: Joi.string().required(),
    fields: Joi.array().items(Joi.string()).required()
});

const makeNewFieldInSpecificContentTypeSchema = Joi.object({
    field: Joi.string().required()
});

const deleteFieldInSpecificContentTypeSchema = Joi.object({
    field: Joi.string().required()
});

const postNewContentInStorageSchema = Joi.object({
    data: Joi.object().required()
});

const updateContentInStorageSchema = Joi.object({
    content: Joi.object().required()
});
