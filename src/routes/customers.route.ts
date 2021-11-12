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
router.get('/:customerNumber', checkValidParemeterID, getCustomer);
router.get('/:customerNumber/getLastCustomerOrders', checkValidParemeterID, getLastCustomerOrders);

// POST
router.post('/', createCustomer);

// PUT
router.put('/:customerNumber', checkValidParemeterID, updateCustomer);

// DELETE
router.delete('/:customerNumber', checkValidParemeterID, deleteCustomer);

export { router as customersRouter };
