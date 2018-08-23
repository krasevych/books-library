import knex from '../knex';
import { getReservedBooks } from './booksController';

const getUsersWithReservation = table =>
  table.whereExists(function() {
    const booksTable = this.select('*').from('books');
    getReservedBooks(booksTable).whereRaw('users.id = books.author');
  });

export const getAll = async (req, res, next) => {
  const { offset, limit, hasReservation } = req.query;

  const users = !hasReservation
    ? await knex('users')
        .select('id', 'fullname')
        .limit(limit)
        .offset(offset)
    : await getUsersWithReservation(knex('users'));

  res.json({ users });
};
