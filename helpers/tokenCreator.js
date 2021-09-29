const {Promise} = require('bluebird');
const crypto = Promise.promisifyAll(require('crypto'));

async function getToken(size){
    
    const key = await crypto.randomBytesAsync(size);
    console.log(key.toString('hex'));
    return key.toString('hex');
}
getToken(64);

module.exports = {
    getToken,
    crypto
};

