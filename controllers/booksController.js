import knex from '../knex';

const bookProps = ['id', 'title', 'description'];

const getBookData = async ({ title, authorId }) =>
  await knex('books')
    .where({ title, author: authorId })
    .select(...bookProps);

export const get = async (req, res, next) => {
  const { title, authorId } = req.query;
  const book = await getBookData({ title, authorId });

  res.json(book);
};

export const post = async (req, res, next) => {
  const { authorId, title, description } = req.body;

  await knex('books').insert({
    title,
    description,
    author: authorId
  });

  const book = await getBookData({ title, authorId });

  res.json(book);
};

export const put = async (req, res, next) => {
  const { authorId, title } = req.query;
  const { description } = req.body;

  await knex('books')
    .where({ title, author: authorId })
    .update({ description });

  const book = await getBookData({ title, authorId });

  res.json(book);
};

export const remove = async (req, res, next) => {
  const { authorId, title } = req.query;
  const book = await getBookData({ title, authorId });

  await knex('books')
    .where({ title, author: authorId })
    .del();

  res.json(book);
};
