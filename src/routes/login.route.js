const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller.js')

router.get('/', authController.getLogin);
router.post('/', authController.login_action);

module.exports = router;