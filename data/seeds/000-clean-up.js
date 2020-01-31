
// const cleaner = require("knex-cleaner");


// exports.seed = function(knex) {
//   return cleaner.clean(knex, {
//      ignoreTables: ["knex_migrations", "knex_migrations_lock", "spatial_ref_sys"]
//   });
// };
exports.seed = async function(knex, Promise) {
	await knex('reviews').del()
	await knex.raw('ALTER TABLE ' + 'reviews' + ' AUTO_INCREMENT = 1')
	await knex('customers').del()
	await knex.raw('ALTER TABLE ' + 'customers' + ' AUTO_INCREMENT = 1')
	await knex('drivers').del()
	await knex.raw('ALTER TABLE ' + 'drivers' + ' AUTO_INCREMENT = 1')
	
}