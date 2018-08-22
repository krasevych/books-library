exports.up = function(knex, Promise) {
  return knex.schema.alterTable('books', table => {
    table.unique('title');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('books', table => {
    table.dropUnique('title');
  });
};
