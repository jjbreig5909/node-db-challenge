const express = require("express");
const helmet = require("helmet");
const ProjectRouter = require('./routes/projects/projects-router.js');
const ResourceRouter = require('./routes/resources/resources-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/projects', ProjectRouter);
server.use('/resources', ResourceRouter);


module.exports = server;