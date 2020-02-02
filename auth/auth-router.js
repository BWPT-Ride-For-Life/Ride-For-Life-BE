const usersModel = require("../models/users-model")
const driversModel = require("../models/drivers-model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const router = require("express").Router()

router.post("/register-user", async (req, res, next) => {
  try {
    const newUser = await usersModel.createUser(req.body)
    const token = signUserToken(newUser)
    res.status(201).json({
      token,
      ...newUser
    })
  } catch (err) {
    next(err)
  }
})

router.post("/register-driver", async (req, res, next) => {
  try {
    const newDriver = await driversModel.createDriver(req.body)
    const token = signDriverToken(newDriver)
    res.status(201).json({
      ...newDriver,
      token,
    })
  } catch (err) {
    next(err)
  }
})

router.post("/login", async (req, res, next) => {
  try {
    const user = await usersModel.findByEmail(req.body.email).first()
    const driver = await driversModel.findByEmail(req.body.email).first()

    if (!user && !driver) {
      return res.status(400).json({
        message: "Invalid Credentials"
      })
    }
    if (driver) {
      const driverPasswordValid = await bcrypt.compare(req.body.password, driver.password)
      if (driverPasswordValid) {
        const token = signDriverToken(driver)
        res.status(200).json({
          token,
        })
      } else {
        res.status(401).json({
          message: "Incorrect password, please try again"
        })
      }
    }
    if (user) {
      const userPasswordValid = await bcrypt.compare(req.body.password, user.password)
      if (userPasswordValid) {
        const token = signUserToken(user)
        res.status(200).json({
          token,
        })
      } else {
        res.status(401).json({
          message: "Incorrect password, please try again"
        })
      }
    }

  } catch (err) {
    next(err)
  }
})

function signUserToken(user) {
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

function signDriverToken(driver) {
  const payload = {
    driver_id: driver.id,
    email: driver.email
  }

  const secret = process.env.JWT_SECRET

  const options = {
    expiresIn: "1h"
  }

  return jwt.sign(payload, secret, options)
}

module.exports = router