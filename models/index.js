const {Sequelize,DataTypes,QueryTypes} = require('sequelize');
const config = require("../config/config");
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const db = {};
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
// reading all the model files and storing them to db with calling function on it
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });


Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
module.exports = {...db,sequelize,QueryTypes};