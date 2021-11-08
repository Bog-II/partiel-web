import { Request, Response } from 'express';
import { getAllPayments, getPaymentByID } from '../models/payments.model';


export const getPayments = (req: Request, res: Response) => {
  getAllPayments((err, resQuery) => {
    if (err) {
      res.status(500).send({
        success: false,
        message: 'unsuccessful request',
      });
    } else {
      res.status(200).send({
        success: true,
        numberOfPayments: resQuery.length,
        payments: resQuery,
      });
    }
  });
};

export const getPayment = (req: Request, res: Response) => {
  const { params } = req;
  const { customerNumber } = params;

  const id = parseInt(customerNumber);

  getPaymentByID(id, (err, resQuery) => {
    if (err) {
      res.status(500).send({
        success: false,
        message: 'unsuccessful request',
      });
    } else {
      res.status(200).send({
        success: true,
        paymentData: resQuery,
      });
    }
  });
};
