import express from 'express';
import {userPost} from '../controllers/userController';
import {body} from 'express-validator';

const router = express.Router();

router
  .route('/')
  .post(
    body('username').escape(),
    body('email').isEmail().normalizeEmail(),
    body('password').escape(),
    userPost
  );

export default router;
