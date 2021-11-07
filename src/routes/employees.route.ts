import express from 'express';

const router = express.Router();

import { dbPool } from '../config/mysql.config';
import { getClientFromEmployee, getEmployee, getEmployees } from '../controllers/employees.controller';
import { checkValidParemeterID } from '../middlewares/checkValidParemeterID';

// GET
router.get('/', getEmployees);
router.get('/:employeeNumber', checkValidParemeterID, getEmployee);
router.get('/:employeeNumber/customers', checkValidParemeterID, getClientFromEmployee);

export { router as employeesRouter };
