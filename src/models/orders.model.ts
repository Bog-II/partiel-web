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

export const addProductByOrderID = (
  orderNumber: string,
  productCode: string,
  quantityOrdered: string,
  priceEach: string,
  orderLineNumber: string,
  callback: (err: Error | null) => void
) => {
  dbPool.query(
    'INSERT INTO orderdetails (orderNumber, productCode, quantityOrdered, priceEach,orderLineNumber) values (?,?,?,?,?)',
    [orderNumber, productCode, quantityOrdered, priceEach, orderLineNumber],
    (errQuery) => {
      if (errQuery) {
        callback(errQuery);
      } else {
        callback(null);
      }
    }
  );
};

export const deleteProdctByOrderID = (
  orderNumber: string,
  productCode: string,
  callback: (err: Error | null) => void
) => {
  dbPool.query(
    'DELETE FROM `orderdetails` WHERE (orderNumber = ?) & (productCode = ?)',
    [orderNumber, productCode],
    (errQuery) => {
      if (errQuery) {
        callback(errQuery);
      } else {
        callback(null);
      }
    }
  );
};

export const updateProductByOrderID = (
  orderNumber: string,
  productCode: string,
  set: string,
  callback: (err: Error | null) => void
) => {
  dbPool.query(
    `UPDATE orderdetails SET ${set} WHERE orderNumber = ? & productCode = ?`,
    [orderNumber, productCode],
    (errQuery) => {
      console.log(errQuery);
      if (errQuery) {
        callback(errQuery);
      } else {
        callback(null);
      }
    }
  );
};
