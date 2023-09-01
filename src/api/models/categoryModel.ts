import {Schema, model} from 'mongoose';
import {Category} from '../../interfaces/Category';
// Schema for the Category model
// based on the Category interface located at: src/interfaces/Category.ts

const categorySchema = new Schema<Category>({
  category_name: {
    type: String,
    required: true,
    unique: true,
  },
});

export default model<Category>('Category', categorySchema);
