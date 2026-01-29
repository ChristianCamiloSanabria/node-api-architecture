const express = require('express');
const controller = require('../../controllers/auth.controller');

const router = express.Router();

router.get('/token', controller.getToken);
router.post('/token', controller.sendToken);

module.exports = router;
