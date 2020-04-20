
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          description: "Complete a stretch goal",
          notes: "This is a good start",
          completed: true,
          project_id: 1,
        },
        {
          description: "Study!",
          notes: "Good idea",
          completed: true,
          project_id: 1,
        },
        {
          description: "be cool",
          notes: "it's a struggle",
          completed: false,
          project_id: 1,
        },
        {
          description: "Rock the interview",
          notes: "Be cool!",
          completed: true,
          project_id: 2,
        },
        {
          description: "Get an offer",
          notes: "$$$$$",
          completed: false,
          project_id: 2,
        },
        {
          description: "use a spoon",
          notes: "yummmmm",
          completed: true,
          project_id: 3,
        },
      ]);
    });
};
