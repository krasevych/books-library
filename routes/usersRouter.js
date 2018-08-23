import express from 'express';
import controllers from '../controllers';

const router = express.Router();
const { get } = controllers.users;

router.route('/').get(get);

export default router;
