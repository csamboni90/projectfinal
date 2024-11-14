const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Ruta para registrar un nuevo usuario
router.post('/html/login', userController.registerUser);

module.exports = router;
