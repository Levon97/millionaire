
module.exports = {
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    pool: {
      max: Number(process.env.POOL_MAX),
      min: Number(process.env.POOL_MIN) ,
      acquire: Number(process.env.POOL_ACQUIRE) ,
      idle: Number(process.env.POOL_IDLE) ,
    }
  

  };
