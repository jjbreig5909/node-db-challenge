const db = require("../../data/db-config.js");

function find() {
  return db("resources");
}

function findById(id) {
  return db("resources").where({ id }).first();
}

function add(resource) {
  return db("resources").insert(resource);
}

module.exports = {
  find,
  findById,
  add,
};
