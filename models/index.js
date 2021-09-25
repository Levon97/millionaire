const {Sequelize,DataTypes} = require('sequelize');
const dbConfigs = require("../config/dbconfigs");
const user = require('./user');

// creatting sequelize connection to db
const sequelize = new Sequelize(dbConfigs.DB, dbConfigs.USER, dbConfigs.PASSWORD, {
    host: dbConfigs.HOST,
    dialect: dbConfigs.dialect,

    pool: {
        max: dbConfigs.pool.max,
        min: dbConfigs.pool.min,
        acquire: dbConfigs.pool.acquire,
        idle: dbConfigs.pool.idle
  }
});

// requireing models for creating associations 
const User = require('./user')(sequelize,DataTypes);
const Reward = require('./reward')(sequelize,DataTypes);
const Question = require('./question')(sequelize,DataTypes);
const Answer = require('./answer')(sequelize,DataTypes);
const Game = require('./game')(sequelize,DataTypes);
const GameUserMap = require('./gameusermap')(sequelize,DataTypes);

// Associations 
Reward.hasMany(User, {foreignKey: 'user_id'});
Answer.hasMany(Question,{foreignKey: 'question_id'});
Game.hasMany(User, {foreignKey: 'user_id'});
Game.hasMany(Question, {foreignKey: 'last_question_id'})
Game.belongsToMany(Question, { through: 'GameUserMap', foreignKey: 'game_id' });
Question.belongsToMany(Game, { through: 'UserTeamMaps', foreignKey: 'question_id' });

//exporting models 
module.exports={
  User,
  Reward,
  Question,
  Answer,
  Game,
  GameUserMap
}