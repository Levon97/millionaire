'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING(80)
    },
    password: {
      allowNull: false,
      type: DataTypes.CHAR(60)
    },
    
  }, {
    scopes: {
      withoutPassword: {
        attributes: { exclude: ['password'] },
      }
    },
    hooks: {
      afterCreate: (record) => {
          delete record.dataValues.password;
      },
      afterUpdate: (record) => {
          delete record.dataValues.password;
      },
  },
    underscored: true,
    sequelize,
    modelName: 'User',
  });
  return User;
};