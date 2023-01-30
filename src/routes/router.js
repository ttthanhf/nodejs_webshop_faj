const siteRouter = require('./site.route.js');
const loginRouter = require('./login.route.js');
const registerRouter = require('./register.route.js');
const apiRouter = require('./api.route.js');
const productsRouter = require('./products.route.js');
const fruitsRouter = require('./fruits.route.js');
const juicesRouter = require('./juices.route.js');
const cartRouter = require('./cart.route.js');
const staffRouter = require('./staff.route.js');
const userRouter = require('./user.router');

const authMiddleware = require('../middlewares/auth.middleware.js')
const roleMiddleware = require('../middlewares/role.middleware.js');

function router(app) {
    //
    app.use('/login', authMiddleware.isCookieUser, loginRouter);
    app.use('/cart', authMiddleware.loggedInRequirement, cartRouter);
    app.use('/register', registerRouter);
    app.use('/products', productsRouter);
    app.use('/fruits', fruitsRouter);
    app.use('/juices', juicesRouter)
    app.use('/api', apiRouter);
    app.use('/staff', roleMiddleware.authorized, staffRouter);
    app.use('/user', authMiddleware.loggedInRequirement, userRouter)

    //
    app.get('/fb', (req, res) => {
        res.send('FB PAGE');
    })
    app.get('/instagram', (req, res) => {
        res.send('INSTAGRAM PAGE');
    })

    //
    app.get('/logout', (req, res) => { //logout
        req.session.destroy();
        res.clearCookie('c_user');
        res.redirect('/');
    });

    app.use('/', siteRouter); //home index

    //error code
    app.get('*', function(req, res){
        res.render('404', {
            layout: false
        }); 
    });
};

module.exports = router;