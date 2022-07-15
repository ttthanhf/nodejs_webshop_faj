

const fs = require('fs');
const dir = __dirname + "../../public/img/products";

function image() {
    return fs.readdirSync(dir);
}

module.exports = image;



