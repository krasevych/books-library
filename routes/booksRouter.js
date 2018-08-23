import express from 'express';
import controllers from '../controllers';

const router = express.Router();
const { get, put, post, remove } = controllers.books;

router
  .route('/')
  .get(get)
  .put(put)
  .post(post)
  .delete(remove);

export default router;
