import Product from '../models/Product.js';
import Category from '../models/Category.js';
import { products, categories } from './seedData.js';

export const seedDatabaseIfNeeded = async () => {
  const productCount = await Product.estimatedDocumentCount();
  if (productCount > 0) {
    return;
  }

  const createdProducts = await Product.insertMany(products);

  const categoryPayload = categories.map((category) => {
    const featured = createdProducts
      .filter((product) => product.category === category.name)
      .slice(0, 3)
      .map((product) => product._id);

    return { ...category, featured };
  });

  await Category.insertMany(categoryPayload);
  console.log('🌱 Seeded demo catalog');
};

