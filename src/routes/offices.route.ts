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

// Middlewares
router.use(express.urlencoded());
router.use(express.json());

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

export { router as officesRouter };
