const bcrypt = require("bcryptjs")
const db = require("../data/dbConfig")

module.exports = {
  createUser,
  find,
  findByEmail,
  findById,
  rtnCreated,
}

async function createUser(customer) {
  customer.password = await bcrypt.hash(customer.password, 14)
   await db("customers").insert(customer)
    return rtnCreated(customer.email)
}

function rtnCreated(email) {
  return db("customers")
    .where({ email })
    .select("id", "name", "email")
    .first()
}

function find() {
  return db("customers")
}

function findByEmail(email) {
  return db("customers")
    .where({ email })
    .first()
}

function findById(id) {
  return db("customers")
    .where({ id })
    .first()
}
