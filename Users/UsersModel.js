const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findBy,
  insert
};

function find() {
  return db("users");
}

function findBy(username) {
  return db("users")
    .select("id", "username", "password")
    .where(username)
    .first();
}

function insert(newUser) {
  return db("users")
    .insert(newUser)
    .then(ids => {
      return getById(ids[0]);
    });
}
