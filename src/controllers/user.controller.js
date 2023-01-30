
const queryUser = require("../models/mysql_queryUser.model.js");



class UserController {
    get(req, res) {
        queryUser.getProfileById(req.session.idUser, async result => {
            await res.render('user', {
                IsLoggedIn: req.session.LoggedIn,
                username: req.session.username,
                phonenumber: result.phone,
                address: result.address,
                isStaff: req.session.isStaff,
                totalCart: req.cookies.totalCart > 9 ? "9+" : req.cookies.totalCart
            });
        })
    }
}
module.exports = new UserController