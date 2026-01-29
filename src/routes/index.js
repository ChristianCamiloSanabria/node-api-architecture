const express = require('express');

const loginRoutes = require('./login');
const authRoutes = require('./auth');

const router = express.Router();

router.use('/login', loginRoutes);
router.use('/auth', authRoutes);

module.exports = router;
