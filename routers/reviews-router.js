const express = require("express")
const reviewsModel = require("../models/reviews-model")
const restricted = require("../auth/authenticate-middleware")
const userCheck = require("../middleware/userCheck")

const router = express.Router({
  mergeParams: true
})

router.post("/", restricted, userCheck, (req, res, next) => {
  const { review } = req.body
  if (!review ) {
    return res.status(400).json({
      errorMessage: "Please provide text for review."
    })
  }
  if (!req.token.user_id) {
    return res.status(401).json({
      message: "You are not authorized to add reviews"
    })
  }

  reviewsModel.insertReview({ ...req.body, driver_id: req.params.id, customer_id: req.token.user_id })
    .then((response) => {
      res.status(201).json(response.rowCount)
    })
    .catch(err => {
      next(err)
    })
})

router.put("/:reviewId", restricted, userCheck, (req, res, next) => {
  if (!req.body.review) {
    return res.status(400).json({
      errorMessage: "Please provide text for the review."
    })
  }
  const changes = { ...req.body, driver_id: req.params.id, customer_id: req.token.user_id }
  reviewsModel.updateReview(req.params.reviewId, changes)
    .then(response => {
      res.status(201).json(response)
    })
    .catch(err => {
      next(err)
    })
})

router.delete("/:reviewId", restricted, userCheck, (req, res, next) => {
  reviewsModel.deleteReview(req.params.reviewId)
    .then((response) => {
      if (response > 0)
        res.json({
          message: "Review was successfully deleted"
        })
    })
    .catch(err => {
      next(err)
    })
})

module.exports = router