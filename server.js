const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const MessagingResponse = require("twilio").twiml.MessagingResponse

const authRouter = require("./auth/auth-router")
const driversRouter = require("./routers/drivers-router")

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use("/api/auth", authRouter)
server.use("/api/drivers", driversRouter)

server.get("/", (req, res, next) => {
  res.json({
    message: "Server is up and Running!"
  });
});

server.post('/sms', (req, res, next) => {
  const twiml = new MessagingResponse()

  twiml.message("Yoooo that worked! Oh btw this is a automatic response so no reply needed!")

  res.writeHead(200, {"Content-Type": "text/xml"})
  res.end(twiml.toString())
})

module.exports = server