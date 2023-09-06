import express from 'express';
import {
  //categoryDelete,
  categoryGet,
  categoryListGet,
  categoryPost,
  // categoryPut,
} from '../controllers/categoryController';
import {param, body} from 'express-validator';

const router = express.Router();

router
  .route('/')
  .get(categoryListGet)
  .post(body('category_name').notEmpty().isString().escape(), categoryPost);

router.route('/:id').get(param('id').isMongoId(), categoryGet);
// .put(categoryPut)
// .delete(categoryDelete);

export default router;
