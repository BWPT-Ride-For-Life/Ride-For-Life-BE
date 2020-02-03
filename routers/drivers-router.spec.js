const supertest = require("supertest")
const server = require("../server.js")

describe("CRUD driver", () => {

  test("get list of drivers", async () => {
    const res = await supertest(server)
      .get("/api/drivers")
    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.length).toBe(20)
  })

  test("get driver by id", async () => {
    const res = await supertest(server)
      .get("/api/drivers/1")
    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.name).toMatch(/joan/i)
  })

  test("edit driver info", async () => {
    const res = await supertest(server)
      .post("/api/drivers/20")
      .send({ name: "don", email: "myemail@email.com", location_id: 3, price: 10, phoneNumber: "123-456-7890" })
      
  })

  test("", async () => {
    
  })
})