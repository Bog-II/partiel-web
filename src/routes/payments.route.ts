import express from 'express';
import { getPayment, getPayments } from '../controllers/payments.controller';
import { checkValidParemeterID } from '../middlewares/checkValidParemeterID';

const router = express.Router();

// Middlewares
router.use(express.urlencoded());
router.use(express.json());

// GET
router.get('/', getPayments);
router.get('/:customerNumber', checkValidParemeterID, getPayment);

// router.get('/')
export { router as paymentsRouter };