const bcrypt = require("bcryptjs")
const db = require("../data/dbConfig")

module.exports = {
  createDriver,
  find,
  findByEmail,
  findDriverById,
  rtnCreated,
  remove,
  update,
}

async function createDriver(driver) {
  driver.password = await bcrypt.hash(driver.password, 14)
  await db("drivers").insert(driver)
   return rtnCreated(driver.email)
}

function rtnCreated(email) {
  return db("drivers")
    .where({ email })
    .select("id", "name", "email")
    .first()
}

function find() {
  return db("drivers")
}

function findByEmail(email) {
  return db("drivers")
    .where({ email })
    .first()
}

function findDriverById(id) {
  return db("drivers")
    .where({ id })
    .first()
}

function remove(id) {
  return db("drivers")
    .where({ id })
    .del()
}

async function update(id, changes) {
  await db("drivers")
    .where({ id })
    .update(changes)

  return findDriverById(id)
    .select("name", "email", "location_id", "price", "phoneNumber")
}