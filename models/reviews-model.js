const db = require("../data/dbConfig")

module.exports = {

  insertReview,
  findReviewById,
  updateReview,
  deleteReview,
}

function insertReview(review) {
  db("reviews").insert(review)
    .then(ids => {
      return findReviewById(ids[0])
    })
}

function findReviewById(id) {
  return db("reviews")
    .where({ id })
    .first()
}

async function updateReview(id, changes) {
  await db("reviews")
    .where({ id })
    .update(changes)
  
  return findReviewById(id)
}

function deleteReview(id) {
  return db("reviews")
    .where({ id })
    .del()
}
