
function option(req) {
    if(req.session) {
        return {
            IsLoggedIn: req.session.LoggedIn,
            username: req.session.username,
            isStaff: req.session.isStaff
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
    news(req, res) {
        res.render('news', option(req));
    }
}

module.exports = new SiteController;