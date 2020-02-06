const supertest = require("supertest")
const server = require("./server.js")
const db = require("./data/dbConfig")

beforeEach(async () => {
  await db.seed.run()
})


describe("register users route", () => {

  test("register bevis", async () => {
    const res = await supertest(server)
      .post("/api/auth/register-user")
      .send({ name: "Bevis", email: "mylittle@email.com", password: "password" })
    expect(res.status).toBe(201)
    expect(res.type).toBe("application/json")
    expect(res.body.name).toMatch(/bevis/i)
    expect(res.body.id)
    expect(res.body.token)
  })

//   test("login bevis", async () => {
//     const res = await supertest(server)
//       .post("/api/auth/login")
//       .send({ email: "mylittle@email.com", password: "password" })
//     expect(res.status).toBe(200)
//     expect(res.type).toBe("application/json")
//     expect(res.body.id)
//     expect(res.body.token)
//   })
})

describe('register drivers route', () => {
  
  test("register butthead", async () => {
    const res = await supertest(server)
      .post("/api/auth/register-driver")
      .send({ firstName: "Bevis", lastName: "Butthead", email: "butthead@email", password: "abc", location_id: 2, price: 100, phoneNumber: "555-965-7815" })
    expect(res.status).toBe(201)
    expect(res.type).toBe("application/json")
    // expect(res.body.lastName).toBe("Butthead")
    expect(res.body.id)
    expect(res.body.token)
  })

  // test("login butthead", async () => {
  //   const res = await supertest(server)
  //     .post("/api/auth/login")
  //     .send({ email: "butthead@email", password: "abc" })
  //   expect(res.status).toBe(200)
  //   expect(res.type).toBe("application/json")
  //   expect(res.body.id)
  //   expect(res.body.token)
  // })

  test("login fail with incorrect password", async () => {
    const res = await supertest(server)
      .post("/api/auth/login")
      .send({ email: "butthead@email", password: "ab" })
    expect(res.status).toBe(400)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toBe("Invalid Credentials")
  })

})