const {Sequelize,DataTypes,QueryTypes} = require('sequelize');
const config = require("../config/config");

// creatting sequelize connection to db
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle
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
// Reward.hasMany(User, {foreignKey: 'user_id'});
// Answer.hasMany(Question,{foreignKey: 'question_id'});
// Game.hasMany(User, {foreignKey: 'user_id'});
// Game.hasMany(Question, {foreignKey: 'last_question_id'})
// Game.belongsToMany(Question, { through: 'GameUserMap', foreignKey: 'game_id' });
// Question.belongsToMany(Game, { through: 'UserTeamMaps', foreignKey: 'question_id' });

//exporting models 
module.exports={
  sequelize,
  QueryTypes,
  User,
  Reward,
  Question,
  Answer,
  Game,
  GameUserMap
}