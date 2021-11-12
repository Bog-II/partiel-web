import express from 'express';

const router = express.Router();

import {
  getClientFromEmployee,
  getEmployee,
  getEmployees,
  getEmployeesWithMostPayments,
  getMostAssignedEmployees,
} from '../controllers/employees.controller';
import { checkValidParemeterID } from '../middlewares/checkValidParemeterID';

// GET
router.get('/', getEmployees);
/**
 * @swagger
 * /api/v1/employees:
 *   get:
 *      description: Used to get all employees
 *      tags:
 *          - employees
 *      responses:
 *          '200':
 *              description: Successfull request
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get('/mostAssigned', getMostAssignedEmployees);
/**
 * @swagger
 * /api/v1/employees/mostAssigned:
 *   get:
 *      description: Used to get most assigned employees
 *      tags:
 *          - employees
 *      responses:
 *          '200':
 *              description: Successfull request
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get('/mostPayments', getEmployeesWithMostPayments);
/**
 * @swagger
 * /api/v1/employees/mostPayments:
 *   get:
 *      description: Used to get employeest with th most payments
 *      tags:
 *          - employees
 *      responses:
 *          '200':
 *              description: Successfull request
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get('/:employeeNumber', checkValidParemeterID, getEmployee);
/**
 * @swagger
 * /api/v1/employees/{employeeNumber}:
 *   get:
 *      description: Used to get all an office
 *      tags:
 *          - employees
 *      parameters:
 *          - in: path
 *            name: employeeNumber
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
  '/:employeeNumber/customers',
  checkValidParemeterID,
  getClientFromEmployee
);
/**
 * @swagger
 * /api/v1/employees/{employeeNumber}/customers:
 *   get:
 *      description: Used to get all customers of an employee
 *      tags:
 *          - employees
 *      parameters:
 *          - in: path
 *            name: employeeNumber
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

export { router as employeesRouter };
