const { Router } = require('express');
const controller = require('../controller/product.controller');

const router = Router();

router.get('/', controller.getAllProducts);
