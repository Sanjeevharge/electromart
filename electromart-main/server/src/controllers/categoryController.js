import Category from '../models/Category.js';
import Product from '../models/Product.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/errorHandler.js';

export const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find().populate('featured', 'name slug heroImage price');
  res.json({ data: categories });
});

export const getCategoryDetails = asyncHandler(async (req, res) => {
  const category = await Category.findOne({ slug: req.params.slug });

  if (!category) {
    throw new ApiError(404, 'Category not found');
  }

  const products = await Product.find({ category: category.name }).limit(8);

  res.json({ data: category, products });
});

