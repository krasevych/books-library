import express from 'express';
import controllers from '../controllers';

const router = express.Router();
const { getAll, get, create, remove } = controllers.reservedBooks;

router
  .route('/')
  .get(getAll)
  .post(create);

router
  .route('/:id')
  .get(get)
  .delete(remove);

export default router;
