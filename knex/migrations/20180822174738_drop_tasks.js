exports.up = function(knex, Promise) {
  return knex.schema.dropTable('tasks');
};

exports.down = function(knex, Promise) {
  return knex;
};
