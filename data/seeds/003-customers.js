exports.seed = async function(knex) {
  await knex("customers").insert([
    { name: "Kevin", email: "kev@email.com", password: "abc123"},
    { name: "Bevis", email: "bevis@email.com", password: "abc123"},
    { name: "Butthead", email: "butthead@email.com", password: "abc123"},
    { name: "Bart", email: "bart@email.com", password: "abc123"},
  ])
};
