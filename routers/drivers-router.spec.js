const supertest = require("supertest")
const server = require("../server.js")
const db = require("../data/dbConfig")

beforeEach(async () => {
  await db.seed.run()
})

describe("CRUD driver", () => {

  test("get list of drivers", async () => {
    const loginResponse = await supertest(server)
      .post("/api/auth/register-user")
      .send({ name: "bob", email: "bab0@email.co", password: "password" })

    const res = await supertest(server)
      .get("/api/drivers")
      .set("Authorization", loginResponse.body.token)
      .send()
      
    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.length).toBe(20)
  })

  test("get driver by id", async () => {
    const loginResponse = await supertest(server)
      .post("/api/auth/register-user")
      .send({ name: "bob", email: "bab0@.co", password: "password" })

    const res = await supertest(server)
      .get("/api/drivers/1")
      .set("Authorization", loginResponse.body.token)
    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.firstName).toBe("Florence")
  })

  test("edit driver info", async () => {
    const res = await supertest(server)
      .post("/api/drivers/20")
      .send({ name: "don", email: "myemail@email.com", location_id: 3, price: 10, phoneNumber: "123-456-7890" })
      
  })

  test("", async () => {
    
  })
})