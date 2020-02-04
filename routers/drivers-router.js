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
    const driver = await driversModel.findDriverByIdWithReviews(req.params.id)
    if (driver) {
      res.json(driver)
    } else {
      res.status(404).json({ message: "driver not found" })
    }
  } catch (err) {
    next(err)
  }
})

router.put("/:id", restricted, async (req, res, next) => {
  try {
    const { name, email, location_id, price, phoneNumber } = req.body
    if (!name || !email || !location_id || !price) {
      return res.status(400).json({ message: "Missing updated information" })
    }

    const updatedDriver = await driversModel.update(req.params.id, req.body)
    if (updatedDriver) {
      res.json(updatedDriver)
    } else {
      res.status(404).json({ message: "The driver could not be found" })
    }
  } catch (err) {
    next(err)
  }
})

router.delete("/:id", restricted, async (req, res, next) => {
  try {
    const count = await driversModel.remove(req.params.id)
    if (count > 0) {
      res.json({ message: "The driver has been successfully deleted" })
    } else {
      res.status(404).json({ message: "The driver could not be found" })
    }
  } catch (err) {
    next(err)
  }
})


module.exports = router