
const { customAlphabet } = require('nanoid');

class GenerateID {
    IdUser() {
        let timeStamp = new Date().getTime();
        let randomIdUser = customAlphabet('1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM', 12); //generater 12 char random
        let idUser = timeStamp + "-" + randomIdUser();
        return idUser;
    }
    IdProduct() {
        let randomIdProduct = customAlphabet('1234567890', 6); //generater 6 char random
        let idProduct = randomIdProduct();
        return idProduct;
    }
    IdKey() {
        let randomIdKey = customAlphabet('1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM', 12);
        let idKey = randomIdKey();
        return idKey;
    }
    IdCookieUser() {
        let randomIdCookieUser = customAlphabet('1234567890', 20);
        let idCookieUser = randomIdCookieUser();
        return idCookieUser;
    }
    IdCart() {
        let randomIdCart = customAlphabet('1234567890qwertyuiopasdfghjklzxcvbnm', 6);
        let idCart = randomIdCart();
        return idCart;
    }
}

module.exports = new GenerateID;