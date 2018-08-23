import _ from 'lodash';
import knex from '../knex';

const bookProps = ['id', 'title', 'description'];

const getBookData = params => {
  const searchParams = _.pick(params, ['id', 'author']);

  return knex('books')
    .where(searchParams)
    .select(...bookProps);
};

export const getReservedBooks = table =>
  table.whereExists(function() {
    this.select('*')
      .from('reserved_books')
      .whereRaw('books.id = reserved_books.book_id');
  });

export const create = async (req, res, next) => {
  const { title, author, description } = req.body;

  const id = await knex('books')
    .insert({
      title,
      author,
      description
    })
    .returning('id')
    .then(returningArr => returningArr[0]);

  const book = await getBookData({ id });

  res.json(book);
};

export const getAll = async (req, res, next) => {
  const { hasReservation } = req.query;

  const book = !hasReservation
    ? await getBookData(req.query)
    : await getReservedBooks(knex('books'));

  res.json(book);
};

export const get = async (req, res, next) => {
  const book = await getBookData(req.params);
  res.json(book);
};

export const update = async (req, res, next) => {
  const { id } = req.params;
  const { description } = req.body;

  await knex('books')
    .where({ id })
    .update({ description });

  const book = await getBookData(req.params);

  res.json(book);
};

export const remove = async (req, res, next) => {
  const { id } = req.params;
  const book = await getBookData(req.params);

  await knex('books')
    .where({ id })
    .del();

  res.json(book);
};
