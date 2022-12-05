const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware.js');

const productsController = require('../controllers/products.controller.js')

router.get('/:id/addtocart', authMiddleware.loggedInRequirement, productsController.addToCart);
router.get('/:id', productsController.getProduct);

module.exports = router;