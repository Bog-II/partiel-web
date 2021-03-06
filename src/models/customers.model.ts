import { dbPool } from '../config/mysql.config';

export const getAllCustomers = (
  callback: (err: Error | null, res: Array<any>) => void
) => {
  dbPool.query('SELECT * FROM customers', (errQuery: Error, resQuery) => {
    if (errQuery) {
      callback(errQuery, []);
    } else {
      callback(null, resQuery);
    }
  });
};

export const getCustomerByID = (
  customerNumber: number,
  callback: (err: Error | null, res: Object) => void
) => {
  dbPool.query(
    'SELECT * FROM customers WHERE customerNumber = ?',
    customerNumber,
    (err, resQuery) => {
      if (err) {
        callback(err, {});
      } else {
        callback(null, resQuery);
      }
    }
  );
};

export const deleteCustomerByID = (
  customerNumber: number,
  callback: (err: Error | null) => void
) => {
  dbPool.query(
    `DELETE FROM customers WHERE customerNumber = ?`,
    [customerNumber],
    (err, _) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    }
  );
};

export const updateCustomerByID = (
  customerNumber: number,
  set: string,
  callback: (err: Error | null) => void
) => {
  dbPool.query(
    `UPDATE customers SET ${set} WHERE customerNumber = ?`,
    [customerNumber],
    (err, _) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    }
  );
};

export const createNewCustomer = (
  customerNumber: string,
  customerName: string,
  contactLastName: string,
  contactFirstName: string,
  phone: string,
  addressLine1: string,
  addressLine2: string,
  city: string,
  state: string,
  postalCode: string,
  country: string,
  salesRepEmployeeNumber: string,
  creditLimit: string,
  callback: (err: Error | null) => void
) => {
  dbPool.query(
    'INSERT INTO `customers`(`customerNumber`,`customerName`,`contactLastName`,`contactFirstName`,`phone`,`addressLine1`,`addressLine2`,`city`,`state`,`postalCode`,`country`,`salesRepEmployeeNumber`,`creditLimit`) values (?,?,?,?,?,?,?,?,?,?,?,?,?)',
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
        callback(err);
      } else {
        callback(null);
      }
    }
  );
};

export const getLastCustomerOrdersWithLimit = (
  customerNumber: number,
  limit: number,
  callback: (err: Error | null, res: Array<any>) => void
) => {
  dbPool.query(
    'SELECT * FROM orders where customerNumber = ? ORDER BY orderDate DESC LIMIT ?',
    [customerNumber, limit],
    (errQuery, resQuery) => {
      if (errQuery) {
        callback(errQuery, []);
      } else {
        callback(null, resQuery);
      }
    }
  );
};
