const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller.js')

router.post('/', authController.register_action);
router.get('/', authController.getRegister);

module.exports = router;