const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
console.log('hi from tasks!');
});

module.exports = router;
