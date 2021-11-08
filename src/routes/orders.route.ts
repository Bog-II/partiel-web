import express from 'express';
import { getOrder, getOrders, getProductsFromOrder } from '../controllers/orders.controller';

const router = express.Router();

// GET
router.get('/', getOrders);
router.get('/:orderNumber', getOrder);
router.get('/:orderNumber/products', getProductsFromOrder);

export { router as ordersRouter };
