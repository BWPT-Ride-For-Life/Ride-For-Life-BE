const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require("./auth/auth-router")


const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use("/api/auth", authRouter)

server.get("/", (_req, res) => {
  res.json({
    message: "Server is up and Running!"
  });
});

module.exports = server