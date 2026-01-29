const express = require('express');
const controller = require('../../controllers/login.controller');

const router = express.Router();

router.get('/', controller.getLogin);
router.post('/', controller.sendCredentials);

module.exports = router;
