const express = require("express");
const helmet = require("helmet");
const UsersRouter = require("./Users/UsersRoutes.js");
const server = express();

server.use(express.json());
server.use("/", helmet);
server.use("/api/users", UsersRouter);

module.exports = server;
