import { Request, Response } from 'express';
import { dbPool } from '../config/mysql.config';

export const getCustomers = (req: Request, res: Response) => {
  dbPool.query('SELECT * FROM customers', (err, resQuery) => {
    if (err) {
      res.status(500).send({
        success: false,
        message: 'unsuccessful request',
      });
    }

    res.status(200).send({
      success: true,
      numberOfCustomers: resQuery.length,
      cutomers: resQuery,
    });
  });
};

export const getCustomer = (req: Request, res: Response) => {
  const { params } = req;
  const { customerNumber } = params;

  dbPool.query(
    'SELECT * FROM customers WHERE customerNumber = ?',
    customerNumber,
    (err, resQuery) => {
      if (err) {
        res.status(500).send({
          success: false,
          message: 'unsuccessful request',
        });
      }
      res.status(200).send({
        success: true,
        cutomer: resQuery,
      });
    }
  );
};

export const deleteCustomer = (req: Request, res: Response) => {
  const { params } = req;
  const { customerNumber } = params;

  dbPool.query(
    `DELETE FROM customers WHERE customerNumber = ?`,
    [customerNumber],
    (err, _) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .send({ success: false, message: 'unsuccessful deletion' });
      } else {
        res.status(200).send({
          success: true,
          message: 'successful customer deletion',
        });
      }
    }
  );
};

export const updateCustomer = (req: Request, res: Response) => {
  const { body, params } = req;
  const { customerNumber } = params;

  const modifiedVals: string[] = [];
  for (const property in body) {
    modifiedVals.push(`${property} = '${body[property]}'`);
  }
  const set = modifiedVals.join(', ');

  dbPool.query(
    `UPDATE customers SET ${set} WHERE customerNumber = ?`,
    [customerNumber],
    (err, _) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .send({ success: false, message: 'unsuccessful modification' });
      } else {
        res.status(200).send({
          success: true,
          message: 'successful customer modification',
        });
      }
    }
  );
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

  dbPool.query(
    'insert  into `customers`(`customerNumber`,`customerName`,`contactLastName`,`contactFirstName`,`phone`,`addressLine1`,`addressLine2`,`city`,`state`,`postalCode`,`country`,`salesRepEmployeeNumber`,`creditLimit`) values (?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [
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
    ],
    (err, _) => {
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

  console.log(body);
};
