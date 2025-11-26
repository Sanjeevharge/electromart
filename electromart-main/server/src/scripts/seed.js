import 'dotenv/config';
import { connectDatabase, disconnectDatabase } from '../config/db.js';
import Product from '../models/Product.js';
import Category from '../models/Category.js';
import { products, categories } from '../data/seedData.js';

const seed = async () => {
  try {
    await connectDatabase();
    console.log('Connected. Seeding data...');

    await Promise.all([Product.deleteMany({}), Category.deleteMany({})]);

    const createdProducts = await Product.insertMany(products);

    const categoryPayload = categories.map((category) => {
      const featuredProducts = createdProducts
        .filter((product) => product.category === category.name)
        .slice(0, 3)
        .map((product) => product._id);

      return { ...category, featured: featuredProducts };
    });

    await Category.insertMany(categoryPayload);

    console.log('✅ Seed complete');
  } catch (error) {
    console.error('❌ Seed failed', error);
    process.exitCode = 1;
  } finally {
    await disconnectDatabase();
    process.exit();
  }
};

seed();

