const db = require("../../data/dbConfig.js");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  getById,
};

function getAll() {
  return db("hobbits");
}

function getById(id) {
  return db("hobbits").where("id", id).first();
}

async function insert(hobbit) {
  return null;
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}
