const express = require('express');
const router = express.Router();

const apiController = require('../controllers/api.controller.js')

router.get('/products', apiController.products);
router.get('/products/:slug', apiController.products);

module.exports = router;