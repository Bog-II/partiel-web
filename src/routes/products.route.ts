import express from 'express';

const router = express.Router();

import { checkValidParemeterID } from '../middlewares/checkValidParemeterID';

// Middlewares
router.use(express.urlencoded());
router.use(express.json());

// POST
router.post('/', createProduct);

// PUT
router.put('/:productCode', checkValidParemeterID, updateProduct);

// DELETE
router.delete('/:productCode', checkValidParemeterID, deleteProduct);

export { router as productsRouter };