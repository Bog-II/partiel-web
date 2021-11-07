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
    (err) => {
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
  callback: (err: Error | null) => void
) => {
  dbPool.query(
    `DELETE FROM customers WHERE customerNumber = ?`,
    [customerNumber],
    (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    }
  );
};
