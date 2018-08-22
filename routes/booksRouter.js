import express from 'express';
import controllers from '../controllers';

const router = express.Router();
const { books } = controllers;

router
  .route('/')
  .get(books.get)
  .put(books.put)
  .post(books.post)
  .delete(books.remove);

export default router;
