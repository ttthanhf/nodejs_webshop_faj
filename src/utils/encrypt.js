const crypto = require('crypto-js');

class Crypt {
    encrypt(text, key) {
        return crypto.AES.encrypt(text, key).toString();
    }

    decrypt(encryptData, key) {
        const value = crypto.AES.decrypt(encryptData, key);
        return value.toString(crypto.enc.Utf8);
    }
}

module.exports = new Crypt;