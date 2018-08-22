import express from 'express';
import books from './booksRouter';
import users from './usersRouter';
const router = express.Router();

router.get('/check', (req, res) => {
  res.send('OK');
});

router.use('/books', books);
router.use('/users', users);

export default router;
