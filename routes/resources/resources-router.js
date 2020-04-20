const express = require("express");
const router = express.Router();
const Resources = require('./resources-model.js');


router.get("/", (req, res) => {
  Resources.find()
    .then((resources) => {
      res.json(resources);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error getting resources!" });
    });
});

router.get("/:id", (req, res) => {
  const {id} = req.params;

  Resources.findById(id)
    .then((resource) => {
      if (resource) {
        res.json(resource);
      } else {
        res
          .status(404)
          .json({ message: "Could not find resource with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get resources" });
    });
});

router.post("/", (req, res) => {
  const resourceData = req.body;

  Resources.add(resourceData)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new resource" });
    });
});


module.exports = router;
