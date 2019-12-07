const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findById,
  insert
};

function find() {
  return db("users");
}

function findById(id) {
  return db("users")
    .select("id", "username", "password")
    .where({ id })
    .first();
}

function insert(newUser) {
  return db("users")
    .insert(newUser)
    .then(ids => {
      return getById(ids[0]);
    });
}
