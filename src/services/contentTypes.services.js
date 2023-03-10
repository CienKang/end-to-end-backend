const { contentTypes, contentStorages } = require('../../database/models');

const getAllContentTypes = async () => {

    const result = await contentTypes.findAll({
        attributes: ['typeName', 'fields','id']
    });
    return result;

};

const createNewContentType = async (newContentType) => {
    const result = await contentTypes.create({...newContentType,fields:[]});
    return result;
};

const addNewFieldContentType = async (newField, typeName) => {

    const fields = await contentTypes.findOne({
        where: { typeName: typeName },
        attributes: ['fields', 'id']
    });

    await contentTypes.update(
        { fields: [...fields.fields, newField] },
        { where: { typeName: typeName } }
    );

    const contentStorage = await contentStorages.findAll({
        where: { typeId: fields.id },
        raw: true,
    });

    contentStorage.forEach(async (content) => {
        await contentStorages.update(
            { data: { ...content.data, [newField]: '' } },
            { where: { id: content.id } }
        );
    });
    return 'Field added';
};


const deleteFieldContentType = async (fieldToDelete, typeName) => {

    const fields = await contentTypes.findOne({
        where: { typeName: typeName },
        attributes: ['fields', 'id']
    });
    const newFields = fields.fields.filter(field => field !== fieldToDelete);
    await contentTypes.update(
        { fields: newFields },
        { where: { typeName: typeName } }
    );

    const contentStorage = await contentStorages.findAll({
        where: { typeId: fields.id },
        raw: true,
    });

    contentStorage.forEach(async (content) => {
        delete content.data[fieldToDelete];
        await contentStorages.update(
            { data: content.data },
            { where: { id: content.id } }
        );
    });


    return `Field ${fieldToDelete} deleted`;
};

const getFieldsInSpecificContentType = async (typeName) => {
    const fields = await contentTypes.findOne({
        where: { typeName: typeName },
        attributes: ['fields']
    });
    return fields;
};

const renameContentType = async (oldTypeName, newTypeName) => {
    const result = await contentTypes.update(
        { typeName: newTypeName },
        { where: { typeName: oldTypeName } }
    );

    return result;
};


module.exports = {
    getAllContentTypes,
    createNewContentType,
    addNewFieldContentType,
    deleteFieldContentType,
    getFieldsInSpecificContentType,
    renameContentType
};