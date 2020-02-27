const db = require('./db_config');

function addUser(user) {
  return db("users")
    .insert(user)
    .then(res => {
      return { id: res[0] };
    });
}

function findBy(filter) {
    console.log(filter)
    return db('users').where(filter);
  }

module.exports = {
  addUser,
  findBy
}