import uuid from 'uuid';
import _ from 'lodash';
import knex from '../knex';

const getSelect = (table, prefix, fields) => {
  return fields.map(f => `${table}.${f} as ${prefix}_${f}`);
};

const getReservedBookData = async params => {
  const searchParams = _.pick(params, ['id']);

  const { id, book_id, reader } = await knex('reserved_books')
    .where(searchParams)
    .first('id', 'reader', 'book_id');

  const book = await knex('books')
    .where({ id: book_id })
    .first('id', 'title', 'description');

  return { id, reader, book };
};

export const create = async (req, res, next) => {
  const { book_id, reader } = req.body;
  const id = uuid();

  await knex('reserved_books').insert({
    id,
    reader,
    book_id
  });

  const book = await getReservedBookData({ id });

  res.send(book);
};

export const getAll = async (req, res, next) => {
  const books = await knex('reserved_books')
    .select(
      'reader',
      ...getSelect('books', 'book', ['title', 'description']),
      ...getSelect('users', 'author', ['fullname', 'email'])
    )
    .leftJoin('books', 'books.id', 'reserved_books.book_id')
    .leftJoin('users', 'books.author', 'users.id');

  res.json({ books });
};

export const get = async (req, res, next) => {
  const books = await getReservedBookData(req.params);
  res.json({ books });
};

export const remove = async (req, res, next) => {
  const reservation = await getReservedBookData(req.params);
  const { id } = req.params;

  await knex('reserved_books')
    .where({ id })
    .del();

  res.json({ reservation });
};
