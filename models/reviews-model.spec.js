const reviewsModel = require("./reviews-model")
const db = require("../data/dbConfig")

beforeEach(async () => {
  await db.seed.run()
})

describe("reviewsModel", () => {

  test("findReviewById", async () => {
    const res = await reviewsModel.findReviewById(1)
    expect(res.review).toBe("Really enjoyed this driver, would recommend 10 out of 10 times")
  })

  test("createReview", async () => {
    await reviewsModel.insertReview({
      review: "This is a test",
      customer_id: 1,
      driver_id: 1,
    })
    const res = await db("reviews").select("*")
    expect(res.length).toBe(34)
  })

  test("updateReview", async () => {
    await reviewsModel.updateReview( 1, {
      review: "Updated test",
      customer_id: 1,
      driver_id: 1,
    })
    const res = await reviewsModel.findReviewById(1)
    expect(res.review).toBe("Updated test")
  })

  test("delete review", async () => {
    await reviewsModel.deleteReview(1)
    const res = await db("reviews").select("*")
    expect(res.length).toBe(32)
  })
})