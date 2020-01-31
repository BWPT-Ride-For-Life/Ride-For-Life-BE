const supertest = require("supertest")
const server = require("./server.js")


describe("register users route", () => {

  test("register bevis", async () => {
    const res = await supertest(server)
      .post("/api/auth/register-user")
      .send({ name: "Bevis", email: "mylittle@email.com", password: "password" })
    expect(res.status).toBe(201)
    expect(res.type).toBe("application/json")
    expect(res.body.name).toMatch(/bevis/i)
    expect(res.body.token)
  })

  test("login bevis", async () => {
    const res = await supertest(server)
      .post("/api/auth/login")
      .send({ email: "mylittle@email.com", password: "password" })
    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.token)
  })
})

describe('register drivers route', () => {
  test("register butthead", async () => {
    const res = await supertest(server)
      .post("/api/auth/register-driver")
      .send({ name: "Butthead", email: "butthead@email", password: "abc", location: "Kira", price: "2 million shillings"})
    expect(res.status).toBe(201)
    expect(res.type).toBe("application/json")
    expect(res.body.name).toMatch(/butthead/i)
    expect(res.body.token)
  })

  test("login butthead", async () => {
    const res = await supertest(server)
      .post("/api/auth/login")
      .send({ email: "butthead@email", password: "abc" })
    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.token)
  })
})
