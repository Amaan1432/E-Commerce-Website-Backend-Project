
const productController = require('../controller/product_controller');

const express = require('express');

const router = express.Router();

// router.get('/signIn',)

// router.get('/signUp',)

router.post('/products/create',productController.create);

router.get('/products/',productController.products);

router.delete('/products/:id',productController.delete);

router.post('/products/:id/update_quantity/',productController.update);

module.exports= router;