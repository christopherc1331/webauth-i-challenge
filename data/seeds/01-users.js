exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "GZA", password: "Liquid Swords" },
        { id: 2, username: "ODB", password: "Return to the 36 Chambers" },
        { id: 3, username: "Biggie Smallz", password: "Ready to Die" }
      ]);
    });
};
