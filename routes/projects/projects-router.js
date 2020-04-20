const express = require('express');
const TasksRouter = require("../tasks/tasks-router");
const router = express.Router();

router.use("/tasks", TasksRouter);

module.exports = router;
