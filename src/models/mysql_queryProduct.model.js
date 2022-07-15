const db = require('../configs/mysql.js');

class QueryProduct {
    getListProducts(callback) {
        db.query("SELECT * FROM products", function(err, results) {
            callback(results);
        });
    }
    getProductById(id,callback) {
        db.query("SELECT * FROM products WHERE id = ?", [id], function(err, results) {
            callback(results[0]);
        });
    }
    isProductExistById(id, callback) {
        db.query("SELECT * FROM products WHERE id = ?", [id], function(err, results) {
            if(results.length > 0) { // isProductExistById
                callback(true);
            }
            else {
                callback(false);
            }
        });
    }
    isProductExistByName(name, callback) {
        db.query("SELECT * FROM products WHERE id = ?", [name], function(err, results) {
            if(results.length > 0) { // isProductExistByName
                callback(true);
            }
            else {
                callback(false);
            }
        });
    }
    insertProduct(id, name, title, description, price, image, link) {
        db.query("INSERT INTO products(id, name, title, description, price, image, link) VALUES (?,?,?,?,?,?,?)", [id, name, title, description, price, image, link]);
    }
    removeProductById(id) {
        db.query("DELETE FROM products WHERE id = ?", [id]);
    }
    updateProductById(id, option, change) {
        switch (option) {
            case 'Description':
                var sql_change = 'UPDATE products SET description = ? WHERE id = ?';
                break;
            case 'Title':
                var sql_change = 'UPDATE products SET title = ? WHERE id = ?';
                break;
            case 'Price':
                var sql_change = 'UPDATE products SET price = ? WHERE id = ?';
                break;
            case 'Image':
                var sql_change = 'UPDATE products SET image = ? WHERE id = ?';
                break;    
            case 'Link':
                var sql_change = 'UPDATE products SET link = ? WHERE id = ?';
                break;
        }
        db.query(sql_change, [change, id]);
    }
    getImageById(id, callback) {
        db.query("SELECT image FROM products WHERE id = ?", [id], function(error, results) {
            if(results.lenght > 0) {
                callback(results[0].image);
            }
            else {
                callback(null);
            }
        });
    }
}

module.exports = new QueryProduct;