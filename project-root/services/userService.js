const User = require('../models/userModel');

class UserService {
  async createUser(username, password, role) {
    try {
      const user = new User({ username, password, role });
      await user.save();
      return user;
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

  async getUserByUsername(username) {
    try {
      const user = await User.findOne({ username });
      return user;
    } catch (error) {
      throw new Error(`Error fetching user: ${error.message}`);
    }
  }

}

module.exports = UserService;
