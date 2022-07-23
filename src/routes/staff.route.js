const express = require('express');
const router = express.Router();

const multer = require('../middlewares/multer.middleware.js');

const staffController = require('../controllers/staff.controller.js')


router.get('/order', staffController.getOrder);

router.get('/customer', staffController.getCustomer);
router.get('/customer/list', staffController.listCustomer);

router.post('/upload-img-product', multer.upload.single('img-product-upload'), staffController.upload_img_action);

router.get('/product', staffController.getProduct);
router.get('/product/create', staffController.getProductCreate);
router.post('/product/create', staffController.actionProductCreate);
router.get('/product/change', staffController.getProductChange);
router.post('/product/change', staffController.actionChangeProduct);
router.get('/product/remove', staffController.getProductRemove);
router.post('/product/remove', staffController.actionProductRemove);

router.get('/', staffController.get);

module.exports = router;