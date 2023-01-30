// const queryUser = require('./models/mysql_queryUser.model.js');
// queryUser.getProfileById('1', (a) => {
//     console.log(a);
// })

// const queryProduct = require('./models/mysql_queryProduct.model.js');
// queryProduct.getProductById('178914', a => {
//     console.log(a);
// })

// const a = require('./utils/encrypt.js');
// const b = a.encrypt('xin chào', 'asd4a6sd54s6a5d46sad84d6sa51d65');
// const bd = a.decrypt(b, 'asd')
// console.log(b)
// console.log(bd)

// const id = require('./utils/generateid.js');
// console.log(id.test())


// const db = require('./configs/mysql.js');

// function isCartExist(user_id, product_id, callback) {
//     db.query('SELECT quantity FROM cart WHERE user_id = ? AND product_id = ?', [user_id, product_id], function(err, result) {
//         if(result.length > 0) {
//             callback(result[0].quantity)
//         }
//         else {
//             callback(1)
//         }
//     });
// }

// isCartExist('1651929091278-BMQlM2JfIrFV', '132906aasd', result => {
//     console.log(result)
// });

// const a = require('./models/mysql_queryCart.model.js');
// a.getListCartByUser_Id('1651929091278-BMQlM2JfIrFV', (amount) => {
//     console.log(amount);
// });

const jwt = require('jsonwebtoken');

const payload = {
  userId: 123,
  name: 'John Doe'
};

const secret = 'mysecretkey';

// const token = jwt.sign(payload, secret);
// console.log(token);

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNjc0MTEwODA3fQ.XtKzFfYADw95j4HmjjqRgltimuCwDLU_ogQukYRm21Q';

try {
  const decoded = jwt.verify(token, secret);
  console.log(decoded);
} catch (err) {
  console.log(err.message);
}