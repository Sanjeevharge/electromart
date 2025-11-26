import { Router } from 'express';
import { getCategories, getCategoryDetails } from '../controllers/categoryController.js';

const router = Router();

router.get('/', getCategories);
router.get('/:slug', getCategoryDetails);

export default router;

