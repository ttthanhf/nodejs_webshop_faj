const id = require("../utils/generateid.js");
const queryUser = require('../models/mysql_queryUser.model.js');

function flashMessage(status, message) {
    switch (status) {
        case 'success':
            return {
                layout: false,
                successful: message
            }
        case 'fail':
            return {
                layout: false,
                error_label: message
            }
        default:
            return {
                layout: false
            }
    }
}

class AuthController {
    getRegister(req, res) {
        res.clearCookie('c_user');
        res.render('register', flashMessage());
    }
    register_action(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        let retypepassword = req.body.retypepassword;
        if (username && password && retypepassword) {
            queryUser.isUserExistByUsername(username, status => {
                if (status == false) {
                    if(retypepassword == password) {
                        //insert customer
                        queryUser.insertCustomer(id.IdUser(), username, password, id.IdCookieUser());

                        res.render('register', flashMessage('success','Register success!'));              
                    }
                    else {
                        res.render('register', flashMessage('fail','Password does not match !'));
                    }
                }
                else {
                    res.render('register', flashMessage('fail',"Username has already taken"));
                }			
            })  
        }
        else {
            res.render('register', flashMessage('fail',"Input something!"));
        }
    }

    getLogin(req, res) {
        if(req.session) {
            queryUser.getProfileById(req.session.idUser, result => {
                req.session.username = result.nickname;
                queryUser.getRoleByUserId(req.session.idUser, roleUser => {
                    if(roleUser == "staff" || roleUser == "dev" || roleUser == "manager") {
                        req.session.isStaff = true;
                    }
                    res.redirect('/');
                })
            });
        }
        else {
            res.render('login', flashMessage());
        }
    }
    login_action(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        if(username && password) {
            queryUser.getIDbyUsernameAndPassword(username, password, (idUser, haveIdUser) => {
                if (haveIdUser) { //login success
                    queryUser.getCookieById(idUser, cookieUser => {
                        res.cookie('c_user', cookieUser, {
                            httpOnly: true
                        });
                        res.redirect('/login');
                    });
                }
                else {                   
                    res.render('login', flashMessage('fail', 'Invaild username or password!'));
                }			
            });
        }
    }
}

module.exports = new AuthController;