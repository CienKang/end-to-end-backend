'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class contentTypes extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            contentTypes.hasMany(models.contentStorages, {
                foreignKey: 'typeId',
            });
        }
    }
    contentTypes.init({
        typeName: DataTypes.STRING,
        fields: DataTypes.ARRAY(DataTypes.STRING)
    }, {
        sequelize,
        modelName: 'contentTypes',
    });
    return contentTypes;
};