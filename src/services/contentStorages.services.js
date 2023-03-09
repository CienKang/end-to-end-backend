const {contentStorages} = require('../../database/models');

const getContentStorageForTypeId = async (typeId) => {
    const result = await contentStorages.findAll({
        where: { typeId: typeId }
    });
    return result;
};

const postContentStorageForTypeId = async (typeId,content) => {
    console.log(typeId,content);
    const result = await contentStorages.create({
        typeId: typeId,
        data: content
    });
    return result;
};

const updateSpecificContentStorageForTypeId = async (id,content) => {

    const dataFound = await contentStorages.findOne({
        where: { id: id },
        raw: true,
    });

    const result = await contentStorages.update({
        data: {
            ...dataFound.data,
            ...content
        }
    },
    {
        where: { id: id }
    });
    return result;
};

const deleteSpecificContentStorageForTypeId = async (typeId,id) => {
    const result = await contentStorages.destroy({
        where: { id: id }
    });
    return result;
};


module.exports = {
    getContentStorageForTypeId,
    postContentStorageForTypeId,
    updateSpecificContentStorageForTypeId,
    deleteSpecificContentStorageForTypeId
};

