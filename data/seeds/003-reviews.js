const faker = require("faker")

exports.seed = async function(knex) {
  await knex("reviews").insert([
    { 
      review: "Really enjoyed this driver, would recommend 10 out of 10 times",
      customer_id: 1, 
      driver_id: 1,
    },
    { 
      review: "Great service. Driver showed up very quickly and got me to the hospital just in time!",
      customer_id: 1, 
      driver_id: 1,
    },
    { 
      review: "Driver just drove and did not try to make small talk.",
      customer_id: 1, 
      driver_id: 2,
    },
    { 
      review: "This driver got us to the hospital and I delivered a healthy baby boy. Thank you so much, would highly recommend",
      customer_id: 2, 
      driver_id: 2,
    },
    { 
      review: "Waited for over half a hour. Then driver showed up with and made up for being late",
      customer_id: 3, 
      driver_id: 2,
    },
    { 
      review: "There was not enough room for my stuff on the drivers motorcycle but he got me there okay",
      customer_id: 4, 
      driver_id: 3,
    },
    { 
      review: "Did not like this driver. He managed to hit every single pothole on the way to the hospital",
      customer_id: 1, 
      driver_id: 4,
    },
    { 
      review: "Driver didn't seem to know his way around the city",
      customer_id: 2, 
      driver_id: 4,
    },
    {
      review: "This driver drove wayyyy to slow. Thought I was going to have my baby on the side of the road",
      customer_id: 3, 
      driver_id: 5,
    },
    { 
      review: "Really enjoyed this service and this driver!",
      customer_id: 4, 
      driver_id: 6,
    },
    { 
      review: "Makes effort to dodge bumps in the roadway",
      customer_id: 1, 
      driver_id: 6,
    },
    { 
      review: "Pleased with the price for this driver",
      customer_id: 2, 
      driver_id: 6,
    },
    { 
      review: "Great trip! Great delivery! Highly recommend!",
      customer_id: 3, 
      driver_id: 6,
    },
    { 
      review: "Poor customer service from driver!",
      customer_id: 4, 
      driver_id: 7,
    },
    { 
      review: "Would not use this driver again! He didn't know where he was going!",
      customer_id: 1, 
      driver_id: 7,
    },
    { 
      review: "Everything went so smooth with this driver",
      customer_id: 2, 
      driver_id: 8,
    },
    { 
      review: "Very pleased would use again!",
      customer_id: 3, 
      driver_id: 8,
    },
    { 
      review: "Almost hit a sheep and a man on a cart! Besides that the trip was okay",
      customer_id: 4, 
      driver_id: 9,
    },
    { 
      review: "Driver ran out of gas on the way. Luckily another driver was able to give me a ride",
      customer_id: 1, 
      driver_id: 10,
    },
    { 
      review: faker.commerce.productAdjective(),
      customer_id: 2, 
      driver_id: 11,
    },
    {
      review: faker.commerce.productAdjective(),
      customer_id: 3, 
      driver_id: 12,
    },
    {
      review: faker.commerce.productAdjective(),
      customer_id: 4, 
      driver_id: 13,
    },
    {
      review:faker.commerce.productAdjective(),
      customer_id: 1, 
      driver_id: 13,
    },
    {
      review: faker.commerce.productAdjective(),
      customer_id: 2, 
      driver_id: 13,
    },
    {
      review: faker.commerce.productAdjective(),
      customer_id: 3, 
      driver_id: 14,
    },
    {
      review: faker.commerce.productAdjective(),
      customer_id: 4, 
      driver_id: 15,
    },
    {
      review: faker.commerce.productAdjective(),
      customer_id: 1, 
      driver_id: 16,
    },
    {
      review: faker.commerce.productAdjective(),
      customer_id: 2, 
      driver_id: 17,
    },
    {
      review: faker.commerce.productAdjective(),
      customer_id: 3, 
      driver_id: 18,
    },
    {
      review: faker.commerce.productAdjective(),
      customer_id: 4, 
      driver_id: 18,
    },
    {
      review: faker.commerce.productAdjective(),
      customer_id: 1, 
      driver_id: 19,
    },
    {
      review: faker.commerce.productAdjective(),
      customer_id: 2, 
      driver_id: 19,
    },
    {
      review: faker.commerce.productAdjective(),
      customer_id: 3, 
      driver_id: 20,
    },
  ])
};

