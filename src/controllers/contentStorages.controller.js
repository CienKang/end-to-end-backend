const contentStorageServices = require('../services/contentStorages.services');

const getContentStorageForTypeId = async (req, res) => {
    try {
        const { typeId } = req.params;
        const contentStorage = await contentStorageServices.getContentStorageForTypeId(typeId);
        res.status(200).json(contentStorage);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};


const postContentStorageForTypeId = async (req, res) => {
    try {
        const { typeId } = req.params;
        const content = req.body.data;
        const contentStorage = await contentStorageServices.postContentStorageForTypeId(typeId, content);
        res.status(201).json(contentStorage);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateSpecificContentStorageOfTypeId = async (req, res) => {
    try {
        const { typeId } = req.params;
        const { content } = req.body;
        const contentStorage = await contentStorageServices.updateSpecificContentStorageForTypeId(typeId, content);
        res.status(201).json(contentStorage);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const deleteSpecificContentStorageOfTypeId = async (req, res) => {
    try {
        const { typeId } = req.params;
        const { id } = req.body;
        const contentStorage = await contentStorageServices.deleteSpecificContentStorageForTypeId(typeId, id);
        res.status(204).json(contentStorage);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};


module.exports = {
    getContentStorageForTypeId,
    postContentStorageForTypeId,
    updateSpecificContentStorageOfTypeId,
    deleteSpecificContentStorageOfTypeId
};