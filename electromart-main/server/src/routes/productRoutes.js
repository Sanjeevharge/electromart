import { Router } from 'express';
import { getProductBySlug, getProducts, getFeaturedProducts } from '../controllers/productController.js';

const router = Router();

router.get('/', getProducts);
router.get('/featured', getFeaturedProducts);
router.get('/:slug', getProductBySlug);

export default router;

