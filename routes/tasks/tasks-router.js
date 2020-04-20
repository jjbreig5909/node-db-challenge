const express = require("express");
const router = express.Router();
const Tasks = require('./tasks-model.js')
const Projects = require("../projects/projects-model.js");

router.get("/", (req, res) => {
  Tasks.find()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error getting tasks!" });
    });
});

router.post("/", (req, res) => {
    console.log(req.params)
  const projectId = req.params.projectid
  const task = req.body;
  Tasks.add(task, projectId)
    .then((task) => {
      res.status(200).json(task);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Error reaching project server." });
    });
});

module.exports = router;
