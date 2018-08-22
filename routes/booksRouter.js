import express from 'express';
import controllers from '../controllers';

const router = express.Router();
const { books } = controllers;

router.route('/').get(books.get);

export default router;
