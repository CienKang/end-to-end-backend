const ContentTypeServices = require('../services/contentTypes.services');

const getContentTypes = async (req, res) => {
    try {
        const contentTypes = await ContentTypeServices.getAllContentTypes();
        res.status(200).json(contentTypes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const postNewContentType = async (req, res) => {
    try {
        const newContentType = await ContentTypeServices.createNewContentType(req.body);
        res.status(201).json(newContentType);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const addNewFieldInSpecificContentType = async (req, res) => {
    try {
        const { typeName } = req.params;
        const newField = await ContentTypeServices.addNewFieldContentType(req.body.field, typeName);
        res.status(201).json(newField);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const deleteFieldInSpecificContentType = async (req, res) => {
    try {
        const { typeName } = req.params;
        const newField = await ContentTypeServices.deleteFieldContentType(req.body.field, typeName);
        res.status(200).json(newField);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const getFieldsInSpecificContentType = async (req, res) => {
    try {
        const { typeName } = req.params;
        const fields = await ContentTypeServices.getFieldsInSpecificContentType(typeName);
        res.status(200).json(fields);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const renameContentType = async (req, res) => {
    try {
        const { typeName } = req.params;
        const newTypeName = await ContentTypeServices.renameContentType(typeName, req.body.newTypeName);
        res.status(200).json(newTypeName);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};


module.exports = {
    getContentTypes,
    postNewContentType,
    addNewFieldInSpecificContentType,
    deleteFieldInSpecificContentType,
    getFieldsInSpecificContentType,
    renameContentType
};