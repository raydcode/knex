const db = require('../db/db');

class UserDataAcessObject {
  async createUserObject(firstName, lastName, email) {
    const [id] = await db('users')
      .insert({
        email,
        first_name: firstName,
        last_name: lastName,
      })
      .returning('id');

    return id;
  }
}

module.exports = new UserDataAcessObject();
