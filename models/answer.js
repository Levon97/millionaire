'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Answer.hasOne(models.Question,{foreignKey: 'id'});
    }
  };
  Answer.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    question_id: {
      type: DataTypes.INTEGER,
    },
    content: {
      type: DataTypes.STRING
    },
    response: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {
    scopes: {
      withoutResponse: {
        attributes: { exclude: ['response'] },
      }
    },
    underscored: true,
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};