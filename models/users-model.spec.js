const db = require("../data/dbConfig")
const usersModel = require("../models/users-model")

beforeAll(async () => {
  await db.seed.run()
})

describe("usersModel", () => {

  test("findById", async () => {
    const res = await usersModel.findById(1)
    expect(res.name).toMatch(/kevin/i)
  })

  test("createUser", async () => {
    await usersModel.createUser({name: "jerry", email: "jerry@email", password: "abc"})
    const users = await db("customers").select("*")
    expect(users.length).toBe(5)
  })

  test("find", async () =>{
    const res = await usersModel.find()
    expect(res.length).toBe(5)
  })

  test("findByEmail", async () =>{
    const res = await usersModel.findByEmail('kev@email.com')
    expect(res.email).toBe('kev@email.com')
    expect(res.name).toMatch(/kevin/i)
  })
})