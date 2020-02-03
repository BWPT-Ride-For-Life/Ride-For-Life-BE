const express = require("express")
const driversModel = require("../models/drivers-model")
const restricted = require("../auth/authenticate-middleware")

const router = express.Router()

router.get("/", restricted, async (req, res, next) => {
  try {
    const drivers = await driversModel.find()
    res.json(drivers)
  } catch (err) {
    next(err)
  }
})
router.get("/:id", restricted, async (req, res, next) => {
  try {
    const driver = await driversModel.findDriverById(req.params.id)
    res.json(driver)
  } catch (err) {
    next(err)
  }
})


module.exports = router