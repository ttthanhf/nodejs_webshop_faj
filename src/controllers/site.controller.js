const queryCart = require('../models/mysql_queryCart.model.js');
function option(req) {
    if(req.session) {
        return {
            IsLoggedIn: req.session.LoggedIn,
            username: req.session.username,
            isStaff: req.session.isStaff,
            totalCart: req.cookies.totalCart > 9 ? "9+" : req.cookies.totalCart
        }
    }
    else {
        return {
            IsLoggedIn: false,
            username: null,
            isStaff: null
        }
    }
}

class SiteController {
    index(req, res) {
        res.render('home', option(req));
    }
    contact(req, res) {
        res.render('contact', option(req));
    }
}

module.exports = new SiteController;