const id = require("../utils/generateid.js");
const db = require('../configs/mysql.js');

class QueryCart {
    addToCart(user_id, product_id, callback) {
        db.query('SELECT quantity FROM cart WHERE user_id = ? AND product_id = ?', [user_id, product_id], function(err, result) {
            if(result.length > 0) { 
                db.query('UPDATE cart SET quantity = ? WHERE user_id = ? AND product_id = ?', [result[0].quantity + 1, user_id, product_id]);
            }   
            else {
                db.query('INSERT INTO cart(id, user_id, product_id, quantity) VALUES (?,?,?,?)', [id.IdCart(), user_id, product_id, 1]);
            }
        });
        setTimeout(callback, 10);
    }
    getListCartByUser_Id(user_id, callback) {
        const sql = 'SELECT prd.*, c.quantity FROM nodejs_webshop.products AS prd INNER JOIN nodejs_webshop.cart AS c ON prd.id = c.product_id WHERE c.user_id = ?'
        db.query(sql, [user_id], function(err, result) {
            callback(result)
        });
    }
    removeProductInCart(user_id, product_id) {
        db.query('DELETE FROM cart WHERE user_id = ? AND product_id = ?', [user_id, product_id]);
    }
    countProductInCart(user_id, callback) {
        db.query('SELECT * FROM cart WHERE user_id = ?', [user_id], function(err, result) {
            callback(result.length);
        });
    }
}

module.exports = new QueryCart;