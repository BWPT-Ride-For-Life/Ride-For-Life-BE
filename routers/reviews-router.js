const express = require("express")
const driversModel = require("../models/drivers-model")
const usersModel = require("../models/users-model")

const router = express.Router({
  mergeParams: true
})

router.get("/", (req, res) => {
  
})

module.exports = router