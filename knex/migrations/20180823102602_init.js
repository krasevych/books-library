exports.up = function(knex, Promise) {
  return knex.schema

    .createTable('users', table => {
      table
        .uuid('id')
        .unique()
        .primary()
        .notNullable();
      table
        .string('email')
        .unique()
        .notNullable();
      table.string('password').notNullable();
      table.string('fullname').notNullable();
      table.timestamps(true, true);
    })

    .createTable('books', table => {
      table
        .uuid('id')
        .unique()
        .primary()
        .notNullable();
      table.string('title').notNullable();
      table.string('description').notNullable();
      table
        .uuid('author')
        .notNullable()
        .references('users.id')
        .onDelete('CASCADE');
      table.timestamps(true, true);
    })

    .createTable('reserved_books', table => {
      table
        .uuid('id')
        .unique()
        .primary()
        .notNullable();
      table
        .string('reader')
        .unique()
        .notNullable();
      table
        .uuid('book_id')
        .notNullable()
        .references('books.id')
        .onDelete('CASCADE');
      table.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('books')
    .dropTableIfExists('reserved_books');
};
