import express from 'express';
import {
  createOffice,
  deleteOffice,
  getEmployeesFromOffice,
  getOffice,
  getOffices,
  updateOffice,
} from '../controllers/offices.controller';

const router = express.Router();

import { checkValidParemeterID } from '../middlewares/checkValidParemeterID';

// GET
router.get('/', getOffices);
router.get('/:officeCode', checkValidParemeterID, getOffice);
router.get(
  '/:officeCode/employees',
  checkValidParemeterID,
  getEmployeesFromOffice
);

// POST
router.post('/', createOffice);

// PUT
router.put('/:officeCode', checkValidParemeterID, updateOffice);

// DELETE
router.delete('/:officeCode', checkValidParemeterID, deleteOffice);
/**
 * @swagger
 * /api/v1/orders/{orderNumber}:
 *   get:
 *      description: Used to get an order
 *      tags:
 *          - orders
 *      parameters:
 *          - in: path
 *            name: orderNumber
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

export { router as officesRouter };
