const db = require("../data/dbConfig.js");

module.exports = {
  find,
  insert
};

function find() {
  return db("users");
}

function insert(newUser) {
  return db("users")
    .insert(newProject)
    .then(ids => {
      return getById(ids[0]);
    });
}
