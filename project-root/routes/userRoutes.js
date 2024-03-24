const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

const userController = new UserController();

// Route for user registration
router.post('/register', userController.registerUser);

// Route for getting user by username
router.get('/:username', userController.getUserByUsername);

module.exports = router;
