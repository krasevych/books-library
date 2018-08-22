exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', table => {
    table.increments();
    table.string('title').notNullable().un;
    table.string('description').notNullable();
    table
      .boolean('is_reserved')
      .notNullable()
      .defaultTo(false);
    table
      .integer('author_id')
      .references('id')
      .inTable('users');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};
