import express from 'express';
import controllers from '../controllers';

const router = express.Router();
const { users } = controllers;

router.route('/').get(users.get);

export default router;
