import express from 'express';
import controllers from '../controllers';

const router = express.Router();
const { get, post, remove } = controllers.reservedBooks;

router
  .route('/')
  .get(get)
  .post(post)
  .delete(remove);

export default router;
