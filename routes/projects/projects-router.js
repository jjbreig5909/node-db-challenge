const express = require('express');
const Tasks = require('../tasks/tasks-model.js')
const Projects = require('./projects-model.js');
const router = express.Router({ mergeParams: true });


router.get('/', (req, res) =>{
    Projects.find()
    .then(projects =>{
        res.json(projects);
    })
    .catch(err => {
        res.status(500).json({message: "Error getting projects!"})
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params.id;

  Projects.findById(id)
    .then((project) => {
      if (project) {
        res.json(project);
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.post("/", (req, res) => {
  const projectData = req.body;

  Projects.add(projectData)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new project" });
    });
});



//REFACTORING TASKS BELOW
router.get("/tasks", (req, res) => {
  Tasks.find()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Error getting tasks." });
    });
});

router.get("/:id/tasks", (req, res) => {
  const id = req.params.id;
  Tasks.findByProject(id)
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Error getting tasks." });
    });
});

router.post("/:id/tasks", (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  const task = req.body;
  Tasks.add(task, id)
    .then((task) => {
      res.status(200).json(task);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Error adding task." });
    });
});


module.exports = router;
