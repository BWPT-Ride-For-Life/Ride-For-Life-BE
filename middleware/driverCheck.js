module.exports = (req, res, next) => {
  if (req.token.userType !== "driver") {
    res.status(401).json({
      message: "You are not authorized to perform this operation"
    })
  } else {
    next()
  }
}