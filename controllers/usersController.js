import knex from '../knex';

export const get = async (req, res, next) => {
  const { offset, limit } = req.query;

  const users = await knex('users')
    .select('id', 'fullname')
    .limit(limit)
    .offset(offset);

  res.json({ users });
};