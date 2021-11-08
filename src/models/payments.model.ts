import { dbPool } from '../config/mysql.config';

export const getAllPayments = (
  callback: (err: Error | null, res: Array<any>) => void
) => {
  dbPool.query('SELECT * FROM payments', (errQuery: Error, resQuery) => {
    if (errQuery) {
      callback(errQuery, []);
    } else {
      callback(null, resQuery);
    }
  });
};

export const getPaymentByID = (
  customerNumber: number,
  callback: (err: Error | null, res: Object) => void
) => {
  dbPool.query(
    'SELECT * FROM payments WHERE customerNumber = ?',
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
