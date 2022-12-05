const express = require('express');
const router = express.Router();

const siteController = require('../controllers/site.controller.js')

router.get('/contact', siteController.contact);
router.get('/',siteController.index);

module.exports = router;