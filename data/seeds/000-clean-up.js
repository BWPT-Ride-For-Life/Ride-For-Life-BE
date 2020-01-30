
exports.seed = async function(knex) {
  await knex("reviews").del()
  await knex("customers").del()
  await knex("drivers").del()
};
