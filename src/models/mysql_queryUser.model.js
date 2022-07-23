const db = require('../configs/mysql.js');

class QueryUser {
    getIDbyUsernameAndPassword(username, password, callback) {
        db.query("SELECT id FROM user_account WHERE username = ? AND password = ?", [username, password], function(err, results) {
            if(results.length > 0) { //if have id user
                callback(results[0].id, true);
            }
            else {
                callback(null, false);
            }
        });
    }
    getUserById(id, callback) {
        db.query("SELECT * FROM user_account WHERE id = ?", [id], function(err, results) {
            callback(results[0]);
        });
    }
    getRoleByUserId(id, callback) {
        db.query("SELECT role FROM user_account WHERE id = ?", [id], function(err, results) {
            callback(results[0].role);
        });
    }
    insertCustomer(id, username, password, cookie) {  
        db.query("INSERT INTO user_account(id, username, password, role, c_user) VALUES (?,?,?,?,?)", [id ,username, password, 'customer', cookie]);
    }
    isUserExistByUsername(username, callback) {
        db.query("SELECT * FROM user_account WHERE username = ?", [username], function(err, results) {
            if(results.length > 0) { //if have user
                callback(true);
            }
            else {
                callback(false);
            }
        });
    }
    getIdByCookie_User(cookie, callback) {
        db.query("SELECT id FROM user_account WHERE c_user = ?", [cookie], function(err, results) {
            if(results.length > 0) { //if have id
                callback(results[0].id, true)
            }
            else {
                callback(null, false)
            }
            
        });
    }
    getCookieById(id, callback) {
        db.query("SELECT c_user FROM user_account WHERE id = ?", [id], function(err, results) {
            callback(results[0].c_user)
        });
    }
    getProfileById(id, callback) {
        const sql = "SELECT pfl.* FROM nodejs_webshop.user_account AS acc INNER JOIN nodejs_webshop.user_profile AS pfl ON acc.id = pfl.id WHERE acc.id = ?"
        db.query(sql, [id], function(err, results) {
            callback(results[0])
        });
    }
    getListCustomer(callback) {
        const sql = "SELECT * FROM nodejs_webshop.user_account AS acc INNER JOIN nodejs_webshop.user_profile AS pfl ON acc.id = pfl.id WHERE role = 'customer'";
        db.query(sql, function(err, results) {
            callback(results)
        });
    }
}

module.exports = new QueryUser;