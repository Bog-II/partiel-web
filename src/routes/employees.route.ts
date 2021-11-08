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
router.get('/mostAssigned', getMostAssignedEmployees);
router.get('/mostPayments', getEmployeesWithMostPayments);
router.get('/:employeeNumber', checkValidParemeterID, getEmployee);
router.get(
  '/:employeeNumber/customers',
  checkValidParemeterID,
  getClientFromEmployee
);

export { router as employeesRouter };
