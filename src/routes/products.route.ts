import express from 'express';
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from '../controllers/products.controller';

const router = express.Router();

// Middlewares
router.use(express.urlencoded());
router.use(express.json());

// GET
router.get('/', getProducts);
router.get('/:productCode', getProduct);

// POST
router.post('/', createProduct);

// PUT
router.put('/:productCode', updateProduct);

// DELETE
router.delete('/:productCode', deleteProduct);

export { router as productsRouter };
