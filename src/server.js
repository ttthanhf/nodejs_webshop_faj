require('dotenv').config();

const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');

const { engine } = require('express-handlebars');
const expressHbs = require('express-handlebars');
var hbs = expressHbs.create({});

const cookieParser = require('cookie-parser');

const route = require('./routes/router.js');

//express
const app = express();

//
app.use(express.static(path.join(__dirname, 'public'))); //tạo foler tĩnh 

//cookieParser
app.use(cookieParser());

//session
app.use(session({
    secret: 'SECRET_KEY_SESSION',
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: 60 * 60 * 60 * 1000},
    httpOnly: true
}));

//body parser
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

//handlebars engine and set default render views
app.engine('hbs', engine());
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
//hbs config new function
hbs.handlebars.registerHelper('multi2number', function(a, b) {
    let var1 = new Number(a);
    let var2 = new Number(b);
    return var1 * var2;
});
hbs.handlebars.registerHelper('add2number', function(a, b) {
    let var1 = new Number(a);
    let var2 = new Number(b);
    return var1 * var2;
});
hbs.handlebars.registerHelper('log', function(something) {
    console.log(something);
});
hbs.handlebars.registerHelper('getTotalPriceAllItemCartAndShipping', function(array, shipping) {
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        let quantity = new Number(array[i].quantity);
        let price = new Number(array[i].price);
        total = total + (quantity * price);
    }
    return total + shipping;
});

//router
route(app);

//port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening at port ${port}`);
});
