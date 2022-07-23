const queryUser = require('../models/mysql_queryUser.model.js');
const queryCart = require('../models/mysql_queryCart.model.js');
function action(id) {
    
}

class AuthMiddleware {
    loggedInRequirement(req, res, next) {
        if(req.session.LoggedIn) {
            return next();
        }
        else {
            res.redirect('/login');
        }
    }
    isCookieUser(req, res, next) {
        if(req.cookies.c_user) {
            queryUser.getIdByCookie_User(req.cookies.c_user, (result, status) => {
                if(status) {
                    req.session.LoggedIn = true;
                    req.session.idUser = result; 
                    queryCart.countProductInCart(req.session.idUser, total => {
                        res.cookie('totalCart', total);
                    });
                }
                next();
            });
        }
        else {
            req.session.destroy();
            next();
        }
    }
}

module.exports = new AuthMiddleware;