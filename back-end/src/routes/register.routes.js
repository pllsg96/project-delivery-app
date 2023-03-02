const express = require('express');

const router = express.Router();

const controller = require('../controller/register.controller');

router.post('/', controller);

module.exports = router;