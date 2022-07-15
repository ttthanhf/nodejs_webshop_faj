
const queryCart = require('../models/mysql_queryCart.model.js');

class CartController {
    get(req, res) {
        queryCart.getListCartByUser_Id(req.session.idUser, result => {
            res.render('cart', {
                itemCart: result,
                IsLoggedIn: req.session.LoggedIn,
                username: req.session.username,
                isStaff: req.session.isStaff
            })
        })
    }
    cart_action(req, res) {
        
    }
    delete(req, res) {
        const product_id = req.params.id;
        queryCart.removeProductInCart(req.session.idUser, product_id);
        res.redirect('/cart');
    }
}

module.exports = new CartController;