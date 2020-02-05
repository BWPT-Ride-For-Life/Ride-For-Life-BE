exports.up = async function(knex) {
  await knex.schema.createTable("customers", tbl => { 
    tbl.increments()
    tbl.string("name", 128).notNullable()
    tbl.string("email", 128).notNullable().unique()
    tbl.string("password", 128).notNullable()
  })

  await knex.schema.createTable('locations', tbl => {
    tbl.increments("locationId");
    tbl.string('name');
  })  

  await knex.schema.createTable("drivers", tbl => {
    tbl.increments()
    tbl.string("firstName", 128).notNullable()
    tbl.string("lastName", 128).notNullable()
    tbl.string("email", 128).notNullable().unique()
    tbl.string("password", 128).notNullable()
    tbl.integer("price").notNullable()
    tbl.integer("location_id")
      .notNullable()
      .references("locationId")
      .inTable("locations")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    tbl.string("phoneNumber")
    tbl.string("avatar")
    tbl.timestamps()
  })

  await knex.schema.createTable("reviews", tbl => {
    tbl.increments()
    tbl.string("review", 128)
    tbl.integer("customer_id")
      .notNullable()
      .references("id")
      .inTable("customers")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    tbl.integer("driver_id")
    .notNullable()
    .references("id")
    .inTable("drivers")
    .onDelete("CASCADE")
    .onUpdate("CASCADE")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("reviews")
  await knex.schema.dropTableIfExists("drivers")
  await knex.schema.dropTableIfExists("locations")
  await knex.schema.dropTableIfExists("customers")
};
