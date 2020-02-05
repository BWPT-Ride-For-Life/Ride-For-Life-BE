const usersModel = require("../models/users-model")
const driversModel = require("../models/drivers-model")
const driverEmailCheck = require("./auth-driverEmail-middleware")
const userEmailCheck = require("./auth-userEmail-middleware")
const faker = require("faker")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const router = require("express").Router()

router.post("/register-user", driverEmailCheck, async (req, res, next) => {

  try {
    const newUser = await usersModel.createUser(req.body)
    const token = signUserToken(newUser)
    res.status(201).json({
      ...newUser,
      token,
    })
  } catch (err) {
    next(err)
  }
})

router.post("/register-driver", userEmailCheck, async (req, res, next) => {
  try {
    const driver = { 
      ...req.body,
      avatar: faker.internet.avatar(),
      created_at: new Date().toLocaleString(),
      updated_at: faker.date.future() 
    }
    const newDriver = await driversModel.createDriver(driver)
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
    const user = await usersModel.findByEmail(req.body.email)
    const driver = await driversModel.findByEmail(req.body.email)

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
          driverId: driver.id,
          token,
        })
      } else {
        res.status(401).json({
          message: "Incorrect email or password, please try again"
        })
      }
    }
    if (user) {
      const userPasswordValid = await bcrypt.compare(req.body.password, user.password)
      if (userPasswordValid) {
        const token = signUserToken(user)
        res.status(200).json({
          userId: user.id,
          token,
        })
      } else {
        res.status(401).json({
          message: "Incorrect email or password, please try again"
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
    userType: "user"
  }

  const secret = process.env.JWT_SECRET

  const options = {
    expiresIn: "72h"
  }

  return jwt.sign(payload, secret, options)
}

function signDriverToken(driver) {
  const payload = {
    driver_id: driver.id,
    userType: "driver"
  }

  const secret = process.env.JWT_SECRET

  const options = {
    expiresIn: "72h"
  }

  return jwt.sign(payload, secret, options)
}

module.exports = router