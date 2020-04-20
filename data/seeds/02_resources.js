
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        { name: "dope computer", description: "I wanna go fast!" },
        { name: "big speakers", description: "I wanna be loud!" },
        { name: "cool phone", description: "I wanna be hip!" }
      ]);
    });
};
