const userDataAccessObject = require('../data/user');

class UserService {
  createUser(userData) {
    const { firstName, lastName, email } = userData;

    return userDataAccessObject.createUserObject(firstName, lastName, email);
  }
}

module.exports = new UserService();
