import express from 'express';
import controllers from '../controllers';

const router = express.Router();
const { getAll, get, update, create, remove } = controllers.books;

router
  .route('/')
  .get(getAll)
  .post(create);

router
  .route('/:id')
  .get(get)
  .put(update)
  .delete(remove);

export default router;
