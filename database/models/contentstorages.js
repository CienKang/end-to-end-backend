'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class contentStorages extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            contentStorages.belongsTo(models.contentTypes, {
                foreignKey: 'typeId',
            });
        }
    }
    contentStorages.init({
        typeId: DataTypes.INTEGER,
        data: DataTypes.JSONB
    }, {
        sequelize,
        modelName: 'contentStorages',
    });
    return contentStorages;
};