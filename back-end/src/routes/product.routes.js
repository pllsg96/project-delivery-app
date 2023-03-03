const { Router } = require('express');

const router = Router();

const controller = require('../controller/product.controller');

router.get('/', controller.getAllProducts);

module.exports = router;
