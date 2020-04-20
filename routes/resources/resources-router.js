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
