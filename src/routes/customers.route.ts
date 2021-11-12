import express from 'express';

import {
  createCustomer,
  deleteCustomer,
  getCustomer,
  getCustomers,
  getLastCustomerOrders,
  updateCustomer,
} from '../controllers/customers.controller';
import { checkValidParemeterID } from '../middlewares/checkValidParemeterID';

const router = express.Router();

// GET
router.get('/', getCustomers);
/**
 * @swagger
 * /api/v1/customers/:
 *   get:
 *      description: Used to get all customers
 *      tags:
 *          - customers
 *      responses:
 *          '200':
 *              description: Successfull request
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get('/:customerNumber', checkValidParemeterID, getCustomer);
/**
 * @swagger
 * /api/v1/customers/{customerNumber}:
 *   get:
 *      description: Used to get a customer
 *      tags:
 *          - customers
 *      parameters:
 *          - in: path
 *            name: customerNumber
 *            type: integer
 *            required: true
 *      responses:
 *          '200':
 *              description: Successfull request
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get('/:customerNumber/getLastCustomerOrders', checkValidParemeterID, getLastCustomerOrders);
/**
 * @swagger
 * /api/v1/customers/{customerNumber}/getLastCustomerOrders:
 *   get:
 *      description: Used to get all last customer order
 *      tags:
 *          - customers
 *      parameters:
 *          - in: path
 *            name: customerNumber
 *            type: integer
 *            required: true
 *          - in: query
 *            name: limit
 *            type: integer
 *            required: true
 *      responses:
 *          '200':
 *              description: Successfull request
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

// POST
router.post('/', createCustomer);
/**
 * @swagger
 * /api/v1/customers/:
 *   post:
 *      description: Used to get create a new customer
 *      tags:
 *          - customers
 *      responses:
 *          '200':
 *              description: Successfull request
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

// PUT
router.put('/:customerNumber', checkValidParemeterID, updateCustomer);
/**
 * @swagger
 * /api/v1/customers/{customerNumber}/customers:
 *   put:
 *      description: Used to update a customer
 *      tags:
 *          - customers
 *      parameters:
 *          - in: path
 *            name: customerNumber
 *            type: integer
 *            required: true
 *      responses:
 *          '200':
 *              description: Successfull request
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

// DELETE
router.delete('/:customerNumber', checkValidParemeterID, deleteCustomer);
/**
 * @swagger
 * /api/v1/customers/{customerNumber}:
 *   delete:
 *      description: Used to delete a customer
 *      tags:
 *          - customers
 *      parameters:
 *          - in: path
 *            name: customerNumber
 *            type: integer
 *            required: true
 *      responses:
 *          '200':
 *              description: Successfull request
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

export { router as customersRouter };
