
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Graduate Lambda",
          description: "You can do it!",
          completed: false,
        },
        {
          name: "Get a new job",
          description: "Use dat knowledge!",
          completed: false,
        },
        {
          name: "Eat dessert",
          description: "Chocolate lava cake!!",
          completed: true,
        }
      ]);
    });
};
