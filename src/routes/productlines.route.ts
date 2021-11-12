import express from 'express';
import { getProductLines } from '../controllers/productlines.controller';

const router = express.Router();

// GET
router.get('/', getProductLines);
/**
 * @swagger
 * /api/v1/productlines:
 *   get:
 *      description: Used to get all productlines
 *      tags:
 *          - productlines
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

export { router as productLinesRouter };
