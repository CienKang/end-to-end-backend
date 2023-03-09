const {contentTypes} = require('../../database/models');

const getAllContentTypes = async () =>{
    
    const result = await contentTypes.findAll({
        attributes: ['typeName', 'fields']
    });
    return result;
        
};

const createNewContentType = async (newContentType) => {
    const result = await contentTypes.create(newContentType);
    return result;
};

const addNewFieldContentType = async (newField,typeName) => {

    const fields = await contentTypes.findOne({
        where: { typeName: typeName },
        attributes: ['fields']
    });
    
    await contentTypes.update(
        { fields: [ ...fields.fields ,newField] },
        { where: { typeName: typeName } }
    );
    return 'Field added';
};


const deleteFieldContentType = async (fieldToDelete,typeName) => {
    
    const fields = await contentTypes.findOne({
        where: { typeName: typeName },
        attributes: ['fields']
    });
    const newFields = fields.fields.filter(field => field !== fieldToDelete);
    await contentTypes.update(
        { fields: newFields },
        { where: { typeName: typeName } }
    );
    return `Field ${fieldToDelete} deleted`;
};

module.exports = {
    getAllContentTypes,
    createNewContentType,
    addNewFieldContentType,
    deleteFieldContentType
};