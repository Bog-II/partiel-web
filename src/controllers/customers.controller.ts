import { Request, Response } from 'express';
import {
  createNewCustomer,
  deleteCustomerByID,
  getAllCustomers,
  getCustomerByID,
  updateCustomerByID,
} from '../models/customers.model';

export const getCustomers = (req: Request, res: Response) => {
  getAllCustomers((err, resQuery) => {
    if (err) {
      res.status(500).send({
        success: false,
        message: 'unsuccessful request',
      });
    } else {
      res.status(200).send({
        success: true,
        numberOfCustomers: resQuery.length,
        customers: resQuery,
      });
    }
  });
};

export const getCustomer = (req: Request, res: Response) => {
  const { params } = req;
  const { customerNumber } = params;

  const id = parseInt(customerNumber);

  getCustomerByID(id, (err, resQuery) => {
    if (err) {
      res.status(500).send({
        success: false,
        message: 'unsuccessful request',
      });
    } else {
      res.status(200).send({
        success: true,
        customerData: resQuery,
      });
    }
  });
};

export const deleteCustomer = (req: Request, res: Response) => {
  const { params } = req;
  const { customerNumber } = params;

  const id = parseInt(customerNumber);

  deleteCustomerByID(id, (err) => {
    if (err) {
      res
        .status(500)
        .send({ success: false, message: 'unsuccessful deletion' });
    } else {
      res.status(200).send({
        success: true,
        message: 'successful customer deletion',
      });
    }
  });
};

export const updateCustomer = (req: Request, res: Response) => {
  const { body, params } = req;
  const { customerNumber } = params;

  const id = parseInt(customerNumber);

  const modifiedVals: string[] = [];
  for (const property in body) {
    modifiedVals.push(`${property} = '${body[property]}'`);
  }
  const set = modifiedVals.join(', ');

  updateCustomerByID(id, set, (err) => {
    if (err) {
      res
        .status(500)
        .send({ success: false, message: 'unsuccessful modification' });
    } else {
      res.status(200).send({
        success: true,
        message: 'successful customer modification',
      });
    }
  });
};

export const createCustomer = (req: Request, res: Response) => {
  const { body } = req;
  const {
    customerNumber,
    customerName,
    contactLastName,
    contactFirstName,
    phone,
    addressLine1,
    addressLine2,
    city,
    state,
    postalCode,
    country,
    salesRepEmployeeNumber,
    creditLimit,
  } = body;

  createNewCustomer(
    customerNumber,
    customerName,
    contactLastName,
    contactFirstName,
    phone,
    addressLine1,
    addressLine2,
    city,
    state,
    postalCode,
    country,
    salesRepEmployeeNumber,
    creditLimit,
    (err) => {
      if (err) {
        res
          .status(500)
          .send({ success: false, message: 'unsuccessful creation' });
      } else {
        res.status(200).send({
          success: true,
          message: 'customer successfully created',
        });
      }
    }
  );
};
