const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cart.controller.js');

router.get('/:id/delete', cartController.delete);
router.get('/:id/increase', cartController.increase);
router.get('/:id/decrease', cartController.decrease);
router.get('/', cartController.get);

module.exports = router;