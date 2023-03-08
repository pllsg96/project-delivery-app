const { Router } = require('express');
const controller = require('../controller/sales.controller');
const tokenMiddleware = require('../middlewares/tokenAuthMiddleware');

const router = Router();

router.post('/checkout', controller.create);
router.get('/sales', controller.getAll);
router.get('/sales/:id', controller.getById);
router.put('/sales/:id', controller.updateStatus);

module.exports = router;
