const path = require('path');

const express = require('express');

const productsController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/products => GET
router.get('/products', productsController.getProducts);

 
// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

router.get('/edit-product/:productId', productsController.getEditProduct);          //:productId --->dynamic variable

router.post('/edit-product', productsController.postEditProduct );                     //this will not recieve any dynamic segment because its a "post request" so data can be enclosed in the request we are sending..

router.post('/delete-product', productsController.postDeleteProduct);

module.exports = router;
 