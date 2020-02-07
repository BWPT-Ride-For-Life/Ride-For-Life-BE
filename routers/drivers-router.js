const express = require("express")
const driversModel = require("../models/drivers-model")
const restricted = require("../auth/authenticate-middleware")
const reviewsRouter = require("./reviews-router")
const driverCheck = require("../middleware/driverCheck")
const cloudinary = require("cloudinary").v2
const fileupload = require("express-fileupload")
const db = require("../data/dbConfig")

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

const router = express.Router()

router.use("/:id/reviews", reviewsRouter)
router.use(fileupload({
  useTempFiles: true
}))

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

router.put("/:id", restricted, driverCheck, async (req, res, next) => {
  try {
    const { firstName, lastName, email, location_id, price, phoneNumber } = req.body
    if (!email || !location_id || !price || !firstName || !lastName || !phoneNumber) {
      return res.status(400).json({ message: "Missing updated information" })
    }
    const newInfo = {
      ...req.body,
      updated_at: new Date().toLocaleString()
    }
    const updatedDriver = await driversModel.update(req.params.id, newInfo)
    if (updatedDriver) {
      res.json(updatedDriver)
    } else {
      res.status(404).json({ message: "The driver could not be found" })
    }
  } catch (err) {
    next(err)
  }
})

router.delete("/:id", restricted, driverCheck, async (req, res, next) => {
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

router.post("/upload/:id", async (req, res, next) => {
  try {
    const file = req.files.image

    cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
      await driversModel.findDriverById(req.params.id)
      await driversModel.update(req.params.id, {
         avatar: result.secure_url
      })
        .then(rtn => res.json(rtn))
        .catch((error) => {
          console.log(err)
          console.log(error)
          res.status(500).json({
            message: "Error uploading image"
          })
        })
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router