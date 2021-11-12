import express from 'express';
import { getPayment, getPayments } from '../controllers/payments.controller';
import { checkValidParemeterID } from '../middlewares/checkValidParemeterID';

const router = express.Router();

// Middlewares
router.use(express.urlencoded());
router.use(express.json());

// GET
router.get('/', getPayments);
/**
 * @swagger
 * /api/v1/:
 *   get:
 *      description: Used to get all payments
 *      tags:
 *          - payments
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get('/:customerNumber', checkValidParemeterID, getPayment);
/**
 * @swagger
 * /api/v1/payments/{customerNumber}:
 *   get:
 *      description: Used to get all payments
 *      tags:
 *          - payments
 *      parameters:
 *          - in: path
 *            name: customerNumber
 *            type: integer
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

export { router as paymentsRouter };