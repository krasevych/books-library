exports.up = function(knex, Promise) {
  return knex.schema.table('users', table =>
    table
      .string('fullname')
      .notNull()
      .defaultTo('no name')
  );
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', table => table.dropColumn('fullname'));
};
