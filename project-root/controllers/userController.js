const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserService = require('../services/userService');

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  async registerUser(req, res) {
    try {
      const { username, password, role } = req.body;

      // Check if username is already taken
      const existingUser = await this.userService.getUserByUsername(username);
      if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create user
      const newUser = await this.userService.createUser(username, hashedPassword, role);

      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getUserByUsername(req, res) {
    try {
      const { username } = req.params;
      const user = await this.userService.getUserByUsername(username);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

}

module.exports = UserController;
