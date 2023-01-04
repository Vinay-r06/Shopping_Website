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


module.exports = router;
