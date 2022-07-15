const conn = require('../configs/mysql.js');

class ApiController {
    products(req, res) {
        const sql = 'SELECT * FROM products';
        conn.query(sql, function (err, result) {
            if (err) throw err;
            res.json(result)
        });
    }
}

module.exports = new ApiController;