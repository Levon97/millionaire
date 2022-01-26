'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Game.hasMany(models.User, {foreignKey: 'id'});
      Game.hasMany(models.Question, {foreignKey: 'id'})
      Game.belongsToMany(models.Question, { through: 'GameUserMap', foreignKey: 'game_id' });    }
  };
  Game.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
         key: 'id'
       }
    },
    last_question_id: {
      type: DataTypes.INTEGER,
    },
    active : {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    underscored: true,
    sequelize,
    modelName: 'Game',
  });
  return Game;
};