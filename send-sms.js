const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

const client = require("twilio")(accountSid, authToken)

client.messages.create({
  to: process.env.MY_NUMBER,
  from: process.env.TWILIO_NUMBER,
  body: "Hey babe! Im sending a text from the server im building to test functionality. This is will send a text to the driver when a user request's a ride!",
})
.then((message) => console.log(message.sid))
