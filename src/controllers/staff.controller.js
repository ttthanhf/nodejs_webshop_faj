
const random = require('../utils/generateid.js')
const imageProducts = require('../utils/imageProducts.js');
const queryProduct = require('../models/mysql_queryProduct.model.js');

class StaffController {
    get(req, res) {
        res.render('staff', {
            layout: 'staff-layout.hbs'
        });
    }
    getProduct(req, res) {
        res.render('staff-product', {
            layout: 'staff-layout.hbs'
        });
    }
    getOrder(req, res) {
        res.render('staff-order', {
            layout: 'staff-layout.hbs'
        });
    }
    getCustomer(req, res) {
        res.render('staff-customer', {
            layout: 'staff-layout.hbs'
        });
    }
    create(req, res) {
        res.render('product-create', { 
            layout: 'staff-layout.hbs',
            listImage: imageProducts
        });
    }
    create_action(req, res) {
        let nameProduct = req.body.name_product;
        let titleProductCreate = req.body.title_product;
        let descriptionProductCreate = req.body.description_product;
        let priceProduct = req.body.price_product;
        let imgProduct = req.body.img_product;
        let linkProduct = req.body.link_product;
        if (nameProduct && titleProductCreate && priceProduct && imgProduct && linkProduct && descriptionProductCreate) {
            queryProduct.isProductExistByName(nameProduct, status => {
                if (status == false) {

                    //insert data into products
                    let idProductGenerator = random.IdProduct();
                    queryProduct.insertProduct(idProductGenerator, nameProduct, titleProductCreate, descriptionProductCreate, priceProduct, imgProduct, linkProduct);

                    res.render('product-create', { 
                        layout: 'staff-layout.hbs',
                        successful: "Create product success!",
                        listImage: imageProducts
                    });
                }
                else {
                    res.render('product-create', { 
                        layout: 'staff-layout.hbs',
                        error: "Same product already exist",
                            listImage: imageProducts
                    });
                }
            })
        }
        else {
            res.render('product-create', { 
                layout: 'staff-layout.hbs',
                error: "Please input all the field!",
                listImage: imageProducts
            });
        }
    }
    change(req, res) {
        //get list of products
        queryProduct.getListProducts(result => {
            res.render('product-change', {
                layout: 'staff-layout.hbs',
                listProduct: result
            });
        });
    }
    change_action(req, res) {
        let idProductChange = req.body.id_product;
        let radioProductChange = req.body.radio;
        let changeValue = req.body.change_value;
        if(idProductChange) {
            queryProduct.isProductExistById(idProductChange, status => {
                if (status) {

                    //update data in products
                    queryProduct.updateProductById(idProductChange, radioProductChange, changeValue);

                    //get list of products                    
                    queryProduct.getListProducts(result => {
                        res.render('product-change', {
                            layout: 'staff-layout.hbs',
                            listProduct: result,
                            successful: "Change product success!"
                        });
                    });
                }
                else {       
                    //get list of products               
                    queryProduct.getListProducts(result => {
                        res.render('product-change', {
                            layout: 'staff-layout.hbs',
                            listProduct: result,
                            error: "Cant not find product"
                        });
                    });
                }
            })
        }
    }
    remove(req, res) {
        //get list of products               
        queryProduct.getListProducts(result => {
            res.render('product-remove', {
                layout: 'staff-layout.hbs',
                listProduct: result
            });
        });
    }
    remove_action(req, res) {
        let idProductRemove = req.body.id_product;
        if(idProductRemove) {
            queryProduct.isProductExistById(idProductRemove, status => {
                if (status) {
                    //get name img
                    queryProduct.getImageById(idProductRemove, result => {
                        console.log(result);
                    });

                    //remove data in products
                    queryProduct.removeProductById(idProductRemove);

                    //get list of products               
                    queryProduct.getListProducts(result => {
                        res.render('product-remove', {
                            layout: 'staff-layout.hbs',
                            listProduct: result,
                            successful: "Remove product success!"
                        });
                    });
                }
                else {
                    //get list of products               
                    queryProduct.getListProducts(result => {
                        res.render('product-remove', {
                            layout: 'staff-layout.hbs',
                            listProduct: result,
                            error: "Cant not find product"
                        });
                    });
                }
            })
        }
    }
    upload_img_action(req, res) {
        res.render('product-create', { 
            layout: 'staff-layout.hbs',
            upload_img_success: 'Upload imgage Success!',
            listImage: imageProducts
        });
    }
}

module.exports = new StaffController;