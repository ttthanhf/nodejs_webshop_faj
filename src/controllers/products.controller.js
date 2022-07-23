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
                totalCart: req.cookies.totalCart > 9 ? "9+" : req.cookies.totalCart,
                product: result
            });
        });
    }
    getProduct(req, res) {
        const idProduct = req.params.id;
        console.log(idProduct);
    }
    addToCart(req, res) {
        queryCart.addToCart(req.session.idUser, req.params.id, function() {
            queryCart.countProductInCart(req.session.idUser, total => {
                res.cookie('totalCart', total);
                res.redirect(req.baseUrl);
            });
        });
    }
}

module.exports = new ProductsController;