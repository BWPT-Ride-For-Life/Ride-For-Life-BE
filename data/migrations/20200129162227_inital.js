exports.up = async function(knex) {
  await knex.schema.createTable("customers", tbl => { 
    tbl.increments()
    tbl.string("name", 128).notNullable()
    tbl.string("email", 128).notNullable().unique()
    tbl.string("password", 128).notNullable()
  })

  await knex.schema.createTable("drivers", tbl => {
    tbl.increments()
    tbl.string("firstName", 128).notNullable()
    tbl.string("lastName", 128).notNullable()
    tbl.string("location", 128).notNullable()
    tbl.string("price", 128).notNullable()
  })

  await knex.schema.createTable("reviews", tbl => {
    tbl.increments()
    tbl.integer("customer_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("customers")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    tbl.integer("driver_id")
    .notNullable()
    .unsigned()
    .references("id")
    .inTable("drivers")
    .onDelete("CASCADE")
    .onUpdate("CASCADE")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("reviews")
  await knex.schema.dropTableIfExists("drivers")
  await knex.schema.dropTableIfExists("customers")
};
