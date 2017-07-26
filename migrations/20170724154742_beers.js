
exports.up = function(knex, Promise) {
  return knex.schema.createTable('beers', (table) => {
    table.increments()
    table.text('name')
    table.text('brewery')
    table.text('style')
    table.integer('rating')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('beers')
};
