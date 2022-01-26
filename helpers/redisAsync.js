const {Promise} = require('bluebird');
 const redis = require('redis');
const client = Promise.promisifyAll(redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
}));
module.exports = client;