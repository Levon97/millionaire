const crypto = require('crypto');


module.exports = class PassConverter {
    // hashing password and genereate salt 
   static hash = async (password) => {
        return new Promise((resolve, reject) => {
            // generate random 16 bytes long salt
            const salt = crypto.randomBytes(5).toString("hex")
    
            crypto.scrypt(password, salt, 20, (err, derivedKey) => {
                if (err) reject(err);
                resolve(salt + ":" + derivedKey.toString('hex'))
            });
        })
    }
    // verify password with salt
   static verify = async (password, hash) => {
        return new Promise((resolve, reject) => {
            const [salt, key] = hash.split(":")
            crypto.scrypt(password, salt, 20, (err, derivedKey) => {
                if (err) reject(err);
                resolve(key == derivedKey.toString('hex'))
            });
        })
    }
}