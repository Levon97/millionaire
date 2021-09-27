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
      Game.hasMany(models.User, {foreignKey: 'user_id'});
      Game.hasMany(models.Question, {foreignKey: 'last_question_id'})
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
      defaultValue: false
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};