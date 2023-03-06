const { Router } = require('express');
const controller = require('../controller/sales.controller');

const router = Router();

router.post('/checkout', controller.create);
router.get('/sales', controller.getAll);
router.get('/sales/:id', controller.getById);

module.exports = router;
