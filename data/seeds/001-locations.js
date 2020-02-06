
exports.seed = function (knex) {
  return knex('locations').insert([
    { name: 'Kampala' },
    { name: 'Nansana' },
    { name: 'Kira' }
  ]);
};
