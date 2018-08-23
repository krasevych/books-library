import express from 'express';
import books from './booksRouter';
import users from './usersRouter';
import reservedBooks from './reservedBooksRouter';
const router = express.Router();

router.get('/check', (req, res) => {
  res.send('OK');
});

router.use('/books', books);
router.use('/users', users);
router.use('/reserved-books', reservedBooks);

export default router;
