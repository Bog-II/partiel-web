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
/**
 * @swagger
 * /api/v1/offices:
 *   get:
 *      description: Used to get all offices
 *      tags:
 *          - offices
 *      responses:
 *          '200':
 *              description: Successfull request
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get('/:officeCode', checkValidParemeterID, getOffice);
/**
 * @swagger
 * /api/v1/offices/{officeCode}:
 *   get:
 *      description: Used to get all an office
 *      tags:
 *          - offices
 *      parameters:
 *          - in: path
 *            name: officeCode
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

router.get(
  '/:officeCode/employees',
  checkValidParemeterID,
  getEmployeesFromOffice
);
/**
 * @swagger
 * /api/v1/offices/{officeCode}/employees:
 *   get:
 *      description: Used to get all employees from an office
 *      tags:
 *          - offices
 *      parameters:
 *          - in: path
 *            name: officeCode
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
router.post('/', createOffice);
/**
 * @swagger
 * /api/v1/offices/:
 *   post:
 *      description: Used to create a new office
 *      tags:
 *          - offices
 *      parameters:
 *          - in: path
 *            name: officeCode
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

// PUT
router.put('/:officeCode', checkValidParemeterID, updateOffice);
/**
 * @swagger
 * /api/v1/offices/{officeCode}:
 *   put:
 *      description: Used to update an office
 *      tags:
 *          - offices
 *      parameters:
 *          - in: path
 *            name: officeCode
 *            type: integer
 *            required: true
 *          - in: body
 *            name: city
 *            type: string
 *            required: false
 *          - in: body
 *            name: phone
 *            type: string
 *            required: false
 *          - in: body
 *            name: addressLine1
 *            type: string
 *            required: false
 *          - in: body
 *            name: addressLine2
 *            type: string
 *            required: false
 *          - in: body
 *            name: state
 *            type: string
 *            required: false
 *          - in: body
 *            name: country
 *            type: string
 *            required: false
 *          - in: body
 *            name: postalCode
 *            type: string
 *            required: false
 *          - in: body
 *            name: territory
 *            type: string
 *            required: false
 *      responses:
 *          '200':
 *              description: Successfull request
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

// DELETE
router.delete('/:officeCode', checkValidParemeterID, deleteOffice);
/**
 * @swagger
 * /api/v1/offices/{officeCode}:
 *   delete:
 *      description: Used to delete an order
 *      tags:
 *          - offices
 *      parameters:
 *          - in: path
 *            name: officeCode
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
