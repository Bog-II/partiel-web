import express from 'express';

import {
  createCustomer,
  deleteCustomer,
  getCustomer,
  getCustomers,
  updateCustomer,
} from '../controllers/customers.controller';
import { checkValidParemeterID } from '../middlewares/checkValidParemeterID';

const router = express.Router();

// Middlewares
router.use(express.urlencoded());
router.use(express.json());

// GET
router.get('/', getCustomers);
router.get('/:customerNumber', checkValidParemeterID, getCustomer);

// POST
router.post('/', createCustomer);

// PUT
router.put('/:customerNumber', checkValidParemeterID, updateCustomer);

// DELETE
router.delete('/:customerNumber', checkValidParemeterID, deleteCustomer);

export { router as customersRouter };
