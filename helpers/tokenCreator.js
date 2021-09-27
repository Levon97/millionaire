const {promisify} = require('util')

const randomBytesAsync = promisify(require('crypto').randomBytes);

async function getToken(size){
    const key = await randomBytesAsync(size);
    return key.toString('hex');
}

async function TgetToken(){
    const key = await randomBytesAsync(60);
    console.log(key.toString('hex'));
}

TgetToken();