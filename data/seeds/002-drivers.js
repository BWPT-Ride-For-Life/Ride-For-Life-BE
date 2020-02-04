const faker = require("faker")

exports.seed = async function (knex) {
  await knex("drivers").insert([
    {
      firstName: "Florence",
      lastName: faker.name.lastName(),
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
      firstName: "Florence",
      lastName: faker.name.lastName(),
      email: "fl@email2451.com",
      password: "password",
      location_id: 2,
      phoneNumber: faker.phone.phoneNumberFormat(),
      avatar: faker.image.avatar(),
      price: 200,
      created_at: faker.date.past(),
      updated_at: faker.date.recent()
    },
    {
      firstName: "Emmanuel",
      lastName: faker.name.lastName(),
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
      firstName: "Deborah",
      lastName: faker.name.lastName(),
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
      firstName: "Elijah",
      lastName: faker.name.lastName(),
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
      firstName: "Moses",
      lastName: faker.name.lastName(),
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
      firstName: "Namazzi",
      lastName: faker.name.lastName(),
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
      firstName: "Namono",
      lastName: faker.name.lastName(),
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
      firstName: "Sanyu",
      lastName: faker.name.lastName(),
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
      firstName: "Akiki",
      lastName: faker.name.lastName(),
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
      firstName: "Bwanbale",
      lastName: faker.name.lastName(),
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
      firstName: "Kaikara",
      lastName: faker.name.lastName(),
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
      firstName: "Mukisa",
      lastName: faker.name.lastName(),
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
      firstName: "Shayla",
      lastName: faker.name.lastName(),
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
      firstName: "Nasiche",
      lastName: faker.name.lastName(),
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
      firstName: "Abbo",
      lastName: faker.name.lastName(),
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
      firstName: "Dembe",
      lastName: faker.name.lastName(),
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
      firstName: "Miremba",
      lastName: faker.name.lastName(),
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
      firstName: "Natukunda",
      lastName: faker.name.lastName(),
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
      firstName: "Achen",
      lastName: faker.name.lastName(),
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
