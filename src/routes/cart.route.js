const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cart.controller.js');

router.post('/:id/delete', cartController.delete);
router.get('/', cartController.get);

module.exports = router;