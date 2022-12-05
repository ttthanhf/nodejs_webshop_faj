
const queryCart = require('../models/mysql_queryCart.model.js');

class CartController {
    get(req, res) {
        queryCart.getListCartByUser_Id(req.session.idUser, result => {
            res.render('cart', {
                itemCart: result,
                IsLoggedIn: req.session.LoggedIn,
                username: req.session.username,
                isStaff: req.session.isStaff,
                totalCart: req.cookies.totalCart > 9 ? "9+" : req.cookies.totalCart
            });
        });
    }
    increase(req, res) {
        queryCart.increaseProductInCart(req.session.idUser, req.params.id);
    }
    decrease(req, res) {
        queryCart.decreaseProductInCart(req.session.idUser, req.params.id);
    }
    delete(req, res) {
        queryCart.removeProductInCart(req.session.idUser, req.params.id);
        queryCart.countProductInCart(req.session.idUser, total => {
            res.cookie('totalCart', total);
            res.redirect(req.baseUrl);
        });
    }
}

module.exports = new CartController;