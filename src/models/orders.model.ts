import { dbPool } from '../config/mysql.config';

export const getAllOrders = (
  callback: (err: Error | null, res: Array<any>) => void
) => {
  dbPool.query('SELECT * FROM orders', (errQuery: Error, resQuery) => {
    if (errQuery) {
      callback(errQuery, []);
    } else {
      callback(null, resQuery);
    }
  });
};

export const getOrderByID = (
  orderNumber: number,
  callback: (err: Error | null, res: Object) => void
) => {
  dbPool.query(
    'SELECT * FROM orders WHERE orderNumber = ?',
    orderNumber,
    (err, resQuery) => {
      if (err) {
        callback(err, {});
      } else {
        callback(null, resQuery);
      }
    }
  );
};

export const getProductsByOrderID = (
  orderNumber: number,
  callback: (err: Error | null, res: Array<any>) => void
) => {
  dbPool.query(
    'SELECT * FROM products p JOIN orderdetails o ON o.productCode = p.productCode WHERE o.orderNumber = ?',
    orderNumber,
    (errQuery, resQuery) => {
      if (errQuery) {
        callback(errQuery, []);
      } else {
        callback(null, resQuery);
      }
    }
  );
};
