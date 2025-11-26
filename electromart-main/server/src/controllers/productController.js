import Product from '../models/Product.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/errorHandler.js';

const buildProductFilters = (query) => {
  const filters = {};

  if (query.category) {
    filters.category = query.category;
  }

  if (query.tag) {
    filters.tags = { $in: query.tag.split(',') };
  }

  if (query.minPrice || query.maxPrice) {
    filters.price = {};
    if (query.minPrice) {
      filters.price.$gte = Number(query.minPrice);
    }
    if (query.maxPrice) {
      filters.price.$lte = Number(query.maxPrice);
    }
  }

  if (query.search) {
    filters.$text = { $search: query.search };
  }

  return filters;
};

export const getProducts = asyncHandler(async (req, res) => {
  const filters = buildProductFilters(req.query);
  const sort = req.query.sort === 'price-asc'
    ? { price: 1 }
    : req.query.sort === 'price-desc'
    ? { price: -1 }
    : req.query.sort === 'rating'
    ? { rating: -1 }
    : { createdAt: -1 };

  const products = await Product.find(filters).sort(sort);

  res.json({ data: products });
});

export const getProductBySlug = asyncHandler(async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });

  if (!product) {
    throw new ApiError(404, 'Product not found');
  }

  const related = await Product.find({
    _id: { $ne: product._id },
    category: product.category,
  })
    .limit(4)
    .select('name slug heroImage price rating');

  res.json({ data: product, related });
});

export const getFeaturedProducts = asyncHandler(async (req, res) => {
  const [featured, newArrivals] = await Promise.all([
    Product.find({ isFeatured: true }).limit(6),
    Product.find({ isNewArrival: true }).limit(6),
  ]);

  res.json({ featured, newArrivals });
});

