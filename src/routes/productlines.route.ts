import express from 'express';
import { getProductLines } from '../controllers/productlines.controller';

const router = express.Router();

// GET
router.get('/', getProductLines);

export { router as productLinesRouter };
