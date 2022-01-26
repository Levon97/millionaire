const {Promise} = require('bluebird');
const crypto = Promise.promisifyAll(require('crypto'))

async function tokenCreator(size){
    
    const key = await crypto.randomBytesAsync(size);
    return key.toString('hex');
}

module.exports = {
    tokenCreator,
    crypto
};

