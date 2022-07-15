const { redirect } = require('express/lib/response');
const queryProduct = require('../models/mysql_queryProduct.model.js');
const queryCart = require('../models/mysql_queryCart.model.js')

class ProductsController {
    get(req, res) {
        queryProduct.getListProducts(result => {
            res.render('products', {
                IsLoggedIn: req.session.LoggedIn,
                username: req.session.username,
                isStaff: req.session.isStaff,
                product: result
            });
        });
        
    }
    getProduct(req, res) {
        const idProduct = req.params.id;
        console.log(idProduct);
    }
    addToCart(req, res) {
        queryCart.addToCart(req.session.idUser, req.params.id)
        res.redirect(req.baseUrl)
    }
}

module.exports = new ProductsController;