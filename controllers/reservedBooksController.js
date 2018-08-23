import knex from '../knex';

function getSelect(table, prefix, fields) {
  return fields.map(f => `${table}.${f} as ${prefix}_${f}`);
}

export const get = async (req, res, next) => {
  const { bookId } = req.query;

  const books = await knex('reserved_books')
    .where({
      book_id: bookId
    })
    .select(
      'reader',
      ...getSelect('users', 'user', ['id', 'fullname', 'email']),
      ...getSelect('books', 'book', ['id', 'title', 'description'])
    )
    .leftJoin('books', 'books.id', 'reserved_books.book_id')
    .leftJoin('users', 'books.author', 'users.id');

  res.json({ books });
};

export const post = async (req, res, next) => {
  const { bookId, reader } = req.body;

  await knex('reserved_books').insert({
    reader,
    book_id: bookId
  });

  res.send('reserved');
};

export const remove = async (req, res, next) => {
  const { bookId, reader } = req.query;

  await knex('reserved_books')
    .where({
      reader,
      book_id: bookId
    })
    .del();

  res.send('reservation was cleared');
};
