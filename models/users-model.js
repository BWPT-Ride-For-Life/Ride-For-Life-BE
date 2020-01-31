const bcrypt = require("bcryptjs")
const db = require("../data/dbConfig")

module.exports = {
  createUser,
  find,
  findByEmail,
  findById,
}

async function createUser(customer) {
  customer.password = await bcrypt.hash(customer.password, 14)
   await db("customers").insert(customer)
    return findByEmail(customer.email)
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
