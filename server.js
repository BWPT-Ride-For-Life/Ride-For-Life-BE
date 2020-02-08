const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const MessagingResponse = require("twilio").twiml.MessagingResponse
const restricted = require("./auth/authenticate-middleware")
const driversModel = require("./models/drivers-model")
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

server.get("/request-driver/:id", async (req, res, next) => {
  try {
    const accountSid = process.env.TWILIO_ACCOUNT_SID
    const authToken = process.env.TWILIO_AUTH_TOKEN
    const client = require("twilio")(accountSid, authToken)
  
    const driver = await driversModel.findDriverById(req.params.id)
  
    client.messages.create({
      to: driver.phoneNumber,
      from: process.env.TWILIO_NUMBER,
      body: "A user is requesting a ride! Reply with 'yes' to accept request!",
    })
      .then((message) => {
        console.log(message.sid)
        res.json({
          message: "Message successfully sent"
        })
      })
      .catch(err => {
        next(err)
      })
  } catch(err){
    next(err)
  }
  
})

server.post('/sms', (req, res, next) => {
  const twiml = new MessagingResponse()

  twiml.message("Requested successfully accepted! Please login to begin ride share!")

  res.writeHead(200, { "Content-Type": "text/xml" })
  res.end(twiml.toString())
})

module.exports = server