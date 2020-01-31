const usersModel = require("../models/users-model")
const driversModel = require("../models/drivers-model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const router = require("express").Router()

router.post("/register-user", async (req, res, next) => {
  try {
    const newUser = await usersModel.createUser(req.body)
    const token = signToken(newUser)
    res.status(210).json({
      ...newUser,
      token,
    })
  } catch (err) {
    next()
  }
})

router.post("/register-driver", async (req, res, next) => {
  try {
    const newDriver = await driversModel.createDriver(req.body)
    const token = sighToken(newDriver)
    res.status(201).json({
      ...newDriver,
      token,
    })
  } catch (err) {
    next()
  }
})

router.post("/login", async (req, res, next) => {
  try {
    const user = await usersModel.findByEmail({ email }).first()
    const driver = await driversModel.findByEmail({ email }).first()

    if (!user && !driver) {
      return res.status(401).json({
        message: "Invalid Credentials"
      })
    }
    if (driver) {
      return driverPasswordCheck()
    }
    if (user) {
      return userPasswordCheck()
    }

  } catch (err) {
    next(err)
  }
})

function sighToken(user) {
  const payload = {
    user_id: user.id,
    email: user.email
  }

  const secret = process.env.JWT_SECRET

  const options = {
    expiresIn: "1h"
  }

  return jwt.sign(payload, secret, options)
}

async function userPasswordCheck() {
  const user = await usersModel.findByEmail({ email }).first()
  const userPasswordValid = await bcrypt.compare(req.body.password, user.password)
  if (userPasswordValid) {
    const token = signToken(user)
    res.status(200).json({
      token,
    })
  } else {
    res.status(401).json({
      message: "Invalid Credentials"
    })
  }
}
async function driverPasswordCheck() {
  const driverPasswordValid = await bcrypt.compare(req.body.password, driver.password)
  if (driverPasswordValid) {
    const token = signToken(driver)
    res.status(200).json({
      token,
    })
  } else {
    res.status(401).json({
      message: "Invalid Credentials"
    })
  }
}

module.exports = router