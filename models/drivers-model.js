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
  findDriverByIdWithReviews,
}

async function createDriver(driver) {
  driver.password = await bcrypt.hash(driver.password, 14)
  await db("drivers").insert(driver)
  return rtnCreated(driver.email)
}

function rtnCreated(email) {
  return db("drivers")
    .where({ email })
    .select("id", "firstName", "email")
    .first()
}

function find() {
  return db("drivers as d")
    .join("locations as l", "d.location_id", "l.locationId")
    .select(
      "d.firstName",
      "d.lastName",
      "d.email",
      "d.price",
      "l.name as location",
      "d.phoneNumber",
      "d.avatar",
      "d.created_at",
      "d.updated_at"
    )
}

function findByEmail(email) {
  return db("drivers")
    .where({ email })
    .first()
}

function findDriverById(id) {
  return db("drivers as d")
    .join("locations as l", "d.location_id", "l.locationId")
    .where({ id })
    .first()
    .select("d.firstName", "d.lastName", "d.email", "l.name as location", "d.price", "d.phoneNumber", "d.created_at", "d.updated_at", "d.avatar")
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
}

async function findDriverByIdWithReviews(id) {
  let drivers = await db("drivers as d")
  .leftJoin("locations as l", "l.locationId", "d.id")
  .select("d.id", "d.firstName", "d.lastName", "d.email", "d.price", "d.location_id as location", "d.phoneNumber", "d.avatar", "d.created_at", "d.updated_at")
    .where({ id })
    

  const reviews = await db("reviews as r")
  .join("customers as c", "c.id", "r.customer_id")
  .select("driver_id", "review", "name as user")
  
  const rtnList = drivers.map(indDriver => {
    const rtnReviews = reviews.filter(({ driver_id }) => driver_id === indDriver.id)
    if (indDriver.location === 1) {
      return {
        ...indDriver,
        reviews: rtnReviews,
        location: "Kampala",
      }
    }
    if (indDriver.location === 2) {
      return {
        ...indDriver,
        reviews: rtnReviews,
        location: "Nansana",
      }
    }
    if (indDriver.location === 3) {
      return {
        ...indDriver,
        reviews: rtnReviews,
        location: "Kira",
      }
    }
    return {
      ...indDriver,
      reviews: rtnReviews
    }
  })
  return rtnList[0]

}


