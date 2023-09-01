// TODO: Controller for the Category model
// 1. Create function to get all categories
// 2. Create function to get a category by id
// 3. Create function to create a category
// 4. Create function to update a category
// 5. Create function to delete a category

import {Request, Response, NextFunction} from 'express';
import CustomError from '../../classes/CustomError';
import {Category} from '../../interfaces/Category';
import CategoryModel from '../models/categoryModel';
import DBMessageResponse from '../../interfaces/DBMessageResponse';

const categoryListGet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await CategoryModel.find();
    res.json(categories);
  } catch (err) {
    next(err);
  }
};

const categoryGet = async (
  req: Request<{id: string}, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = await CategoryModel.findById(req.params.id);
    if (!category) {
      throw new CustomError('Category not found', 404);
    }
    res.json(category);
  } catch (err) {
    next(err);
  }
};

export {categoryListGet, categoryGet};
