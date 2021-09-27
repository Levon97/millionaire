const {promisify} = require('util');
const client = require('redis').createClient({
    host: process.env.REDISHOST,
    port: process.env.REDISPORT
});

const redisAsinc = promisify(client);

async function gago(){
    await redisAsinc.get
}