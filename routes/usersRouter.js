import express from 'express';
import controllers from '../controllers';

const router = express.Router();
const { getAll } = controllers.users;

router.route('/').get(getAll);

export default router;
