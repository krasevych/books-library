import express from 'express';
import books from './booksRouter';
const router = express.Router();

router.get('/check', (req, res) => {
  res.send('OK');
});

router.use('/books', books);

export default router;
