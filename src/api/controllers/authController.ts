import {Request, Response, NextFunction} from 'express';
import CustomError from '../../classes/CustomError';
import {User} from '../../interfaces/User';
import UserModel from '../models/userModel';
import DBMessageResponse from '../../interfaces/DBMessageResponse';
import {validationResult} from 'express-validator';
import userModel from '../models/userModel';

const loginPost = async (
  req: Request<{}, {}, User>,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const messages = errors
        .array()
        .map((error) => `${error.msg}: ${error.param}`)
        .join(', ');
      next(new CustomError(messages, 400));
      return;
    }

    const {username, password} = req.body;

    const user = await userModel.findOne({username});

    if (!user) {
      next(new CustomError('Incorrect username/password', 404));
      return;
    }
