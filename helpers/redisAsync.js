const {Promise} = require('bluebird');
const client = Promise.promisifyAll(require('redis').createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
}));

module.exports = client;