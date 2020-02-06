const usersModel = require("../models/users-model")

module.exports = async (req, res, next) => {
  const user = await usersModel.findByEmail(req.body.email)

    if (user == undefined) {
      next()
    } else {
      return res.status(400).json({ 
        message: "The email is already being used, please choose another one" 
      })
    }
}