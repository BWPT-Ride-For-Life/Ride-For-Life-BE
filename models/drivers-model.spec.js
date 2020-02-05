const driversModel = require("./drivers-model")
const db = require("../data/dbConfig")

beforeEach(async () => {
  await db.seed.run()
})

describe("driversModel", () => {

  test("findDriverById", async () => {
    const res = await driversModel.findDriverById(1)
    expect(res.firstName).toMatch(/florence/i)
    expect(res.email).toBe("fl@email.com")
    expect(res.location_id).toBe(undefined)
    expect(res.location).toBe("Nansana")
  })

  test("createDriver", async () => {
    await driversModel.createDriver({firstName: "terry", lastName: "thomas", email: "zerry@email", password: "abc", location_id: 2, price: 200, phoneNumber: "555-555-5555"})
    const drivers = await db("drivers").select("*")
    expect(drivers.length).toBe(21)
  })

  test("find", async () => {
    const res = await driversModel.find()
    expect(res.length).toBe(20)
  })

  test("findByEmail", async () => {
    const res = await driversModel.findByEmail('bwanbale@email.com')
    expect(res.email).toBe('bwanbale@email.com')
    expect(res.firstName).toMatch(/bwanbale/i)
    expect(res.location_id).toBe(2)
  })
})