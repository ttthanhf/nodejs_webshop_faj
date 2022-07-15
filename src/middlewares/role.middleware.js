class RoleMiddleware {
    authorized(req, res, next) {
        if(req.session.isStaff) {
            next();
        }
        else {
            res.redirect('/');
        }
    }
}

module.exports = new RoleMiddleware;