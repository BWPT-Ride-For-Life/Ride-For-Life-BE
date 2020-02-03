const faker = require("faker")

exports.seed = async function(knex) {
  await knex("drivers").insert([
    {
      name: "Joan",
      email: "joan@gmail.com",
      password: "password", 
      location_id: 1,
      phoneNumber: faker.phone.phoneNumberFormat(),
      avatar: faker.image.avatar(),
      price: 100,
      created_at: faker.date.past(),
      updated_at: faker.date.recent()
    },
    {
      name: "Florence",
      email: "fl@email.com",
      password: "password", 
      location_id: 2,
      phoneNumber: faker.phone.phoneNumberFormat(),
      avatar: faker.image.avatar(),
      price: 200,
      created_at: faker.date.past(),
      updated_at: faker.date.recent()
    },
    {
      name: "Emmanuel",
      email: "em1@gmail.com",
      password: "password", 
      location_id: 3,
      phoneNumber: faker.phone.phoneNumberFormat(),
      avatar: faker.image.avatar(),
      price: 100,
      created_at: faker.date.past(),
      updated_at: faker.date.recent()
    },
    {
      name: "Deborah",
      email: "db2@email.com",
      password: "password", 
      location_id: 1,
      phoneNumber: faker.phone.phoneNumberFormat(),
      avatar: faker.image.avatar(),
      price: 100,
      created_at: faker.date.past(),
      updated_at: faker.date.recent()
    },
    {
      name: "Elijah",
      email: "elijah@email.com",
      password: "password", 
      location_id: 2,
      phoneNumber: faker.phone.phoneNumberFormat(),
      avatar: faker.image.avatar(),
      price: 150,
      created_at: faker.date.past(),
      updated_at: faker.date.recent()
    },
    {
      name: "Moses",
      email: "moses@email.com",
      password: "password", 
      location_id: 3,
      phoneNumber: faker.phone.phoneNumberFormat(),
      avatar: faker.image.avatar(),
      price: 200,
      created_at: faker.date.past(),
      updated_at: faker.date.recent()
    },
    {
      name: "Namazzi",
      email: "namzz@email.com",
      password: "password", 
      location_id: 1,
      phoneNumber: faker.phone.phoneNumberFormat(),
      avatar: faker.image.avatar(),
      price: 200,
      created_at: faker.date.past(),
      updated_at: faker.date.recent()
    },
    {
      name: "Namono",
      email: "namo@email.com",
      password: "password", 
      location_id: 2,
      phoneNumber: faker.phone.phoneNumberFormat(),
      avatar: faker.image.avatar(),
      price: 200,
      created_at: faker.date.past(),
      updated_at: faker.date.recent()
    },
    {
      name: "Sanyu",
      email: "sanyu@email.com",
      password: "password", 
      location_id: 3,
      phoneNumber: faker.phone.phoneNumberFormat(),
      avatar: faker.image.avatar(),
      price: 200,
      created_at: faker.date.past(),
      updated_at: faker.date.recent()
    },
    { 
      name: "Akiki",
      email: "akiki@email.com",
      password: "password", 
      location_id: 1,
      phoneNumber: faker.phone.phoneNumberFormat(),
      avatar: faker.image.avatar(),
      price: 200,
      created_at: faker.date.past(),
      updated_at: faker.date.recent()
    },
    { 
      name: "Bwanbale",
      email: "bwanbale@email.com",
      password: "password", 
      location_id: 2,
      phoneNumber: faker.phone.phoneNumberFormat(),
      avatar: faker.image.avatar(),
      price: 200,
      created_at: faker.date.past(),
      updated_at: faker.date.recent()
    },
    { 
      name: "Kaikara",
      email: "kaik4@email.com",
      password: "password", 
      location_id: 3,
      phoneNumber: faker.phone.phoneNumberFormat(),
      avatar: faker.image.avatar(),
      price: 200,
      created_at: faker.date.past(),
      updated_at: faker.date.recent()
    },
    { 
      name: "Mukisa",
      email: "Mus@5email.com",
      password: "password", 
      location_id: 1,
      phoneNumber: faker.phone.phoneNumberFormat(),
      avatar: faker.image.avatar(),
      price: 200,
      created_at: faker.date.past(),
      updated_at: faker.date.recent()
    },
    { 
      name: "Shayla",
      email: "sha@email.com",
      password: "password", 
      location_id: 2,
      phoneNumber: faker.phone.phoneNumberFormat(),
      avatar: faker.image.avatar(),
      price: 100,
      created_at: faker.date.past(),
      updated_at: faker.date.recent()
    },
    { 
      name: "Nasiche",
      email: "nasiche5@email.com",
      password: "password", 
      location_id: 3,
      phoneNumber: faker.phone.phoneNumberFormat(),
      avatar: faker.image.avatar(),
      price: 100,
      created_at: faker.date.past(),
      updated_at: faker.date.recent()
    },
    { 
      name: "Abbo",
      email: "abbo1@email.com",
      password: "password", 
      location_id: 1,
      phoneNumber: faker.phone.phoneNumberFormat(),
      avatar: faker.image.avatar(),
      price: 100,
      created_at: faker.date.past(),
      updated_at: faker.date.recent()
    },
    { 
      name: "Dembe",
      email: "dembe2@email.com",
      password: "password", 
      location_id: 2,
      phoneNumber: faker.phone.phoneNumberFormat(),
      avatar: faker.image.avatar(),
      price: 100,
      created_at: faker.date.past(),
      updated_at: faker.date.recent()
    },
    { 
      name: "Miremba",
      email: "miremba1@email.com",
      password: "password", 
      location_id: 3,
      phoneNumber: faker.phone.phoneNumberFormat(),
      avatar: faker.image.avatar(),
      price: 100,
      created_at: faker.date.past(),
      updated_at: faker.date.recent()
    },
    { 
      name: "Natukunda",
      email: "natu@email.com",
      password: "password", 
      location_id: 1,
      phoneNumber: faker.phone.phoneNumberFormat(),
      avatar: faker.image.avatar(),
      price: 100,
      created_at: faker.date.past(),
      updated_at: faker.date.recent()
    },
    { 
      name: "Achen",
      email: "achen@email.com",
      password: "password", 
      location_id: 2,
      phoneNumber: faker.phone.phoneNumberFormat(),
      avatar: faker.image.avatar(),
      price: 200,
      created_at: faker.date.past(),
      updated_at: faker.date.recent()
    },
  ])
};
