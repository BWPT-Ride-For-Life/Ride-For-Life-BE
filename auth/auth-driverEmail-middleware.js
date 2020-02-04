const driversModel = require("../models/drivers-model")

module.exports = async (req, res, next) => {
  const driver = await driversModel.findByEmail(req.body.email)

    if (driver == undefined) {
      next()
    } else {
      return res.status(400).json({ 
        message: "The email is already being used, please choose another one" 
      })
    }
}
