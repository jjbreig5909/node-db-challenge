const db = require("../../data/db-config.js");

function find() {
  return db("tasks")
}

function findById(id) {
  return db("tasks").where({ id }).first();
}

function findByProject(id) {
  return db("tasks")
    .join("projects", "projects.id", "tasks.project_id")
    .select(
      "projects.name",
      "projects.description as projectDescription",
      "tasks.description",
      "tasks.notes"
    )
    .where({ project_id: id })
    .orderBy("tasks.id");
}

function add(task, project_id) {
  task.project_id = project_id;
  return db("tasks", "id")
    .insert(task)
    .then((id) => findById(...id));
}

module.exports = {
  find,
  findById,
  add,
  findByProject,
};