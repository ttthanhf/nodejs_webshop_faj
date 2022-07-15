const express = require('express');
const router = express.Router();

const multer = require('../middlewares/multer.middleware.js');

const staffController = require('../controllers/staff.controller.js')

router.get('/product', staffController.getProduct);
router.get('/order', staffController.getOrder);
router.get('/customer', staffController.getCustomer);

router.post('/upload-img-product', multer.upload.single('img-product-upload'), staffController.upload_img_action);

router.get('/product/create', staffController.create);
router.post('/product/create', staffController.create_action);

router.get('/product/change', staffController.change);
router.post('/product/change', staffController.change_action);

router.get('/product/remove', staffController.remove);
router.post('/product/remove', staffController.remove_action);

router.get('/', staffController.get);

module.exports = router;