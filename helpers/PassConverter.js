const { Promise } = require('bluebird');
const crypto = Promise.promisifyAll(require('crypto'));



module.exports = class PassConverter {
    // hashing password and genereate salt 
    static hash = async (password) => {
        const salt = (await crypto.randomBytesAsync(5)).toString("hex");
        const derivedKey = (await crypto.scryptAsync(password, salt, 20)).toString("hex");
        return (salt + ":" + derivedKey);
    }
    // verify password with salt
    static verify = async (password, hash) => {
        const [salt, key] = hash.split(":");
        const derivedKey = (await crypto.scryptAsync(password, salt, 20)).toString("hex");
        return key === derivedKey;
    }
}

