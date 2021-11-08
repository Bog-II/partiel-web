import { dbPool } from '../config/mysql.config';

export const getAllProducts = (
  callback: (err: Error | null, res: Array<any>) => void
) => {
  dbPool.query('SELECT * FROM products', (errQuery: Error, resQuery) => {
    if (errQuery) {
      callback(errQuery, []);
    } else {
      callback(null, resQuery);
    }
  });
};

export const getProductByID = (
  productCode: string,
  callback: (err: Error | null, res: Object) => void
) => {
  dbPool.query(
    'SELECT * FROM products WHERE productCode = ?',
    productCode,
    (err, resQuery) => {
      if (err) {
        callback(err, {});
      } else {
        callback(null, resQuery);
      }
    }
  );
};

export const deleteProductByID = (
  productCode: string,
  callback: (err: Error | null) => void
) => {
  dbPool.query(
    `DELETE FROM products WHERE productCode = ?`,
    [productCode],
    (err, _) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    }
  );
};

export const updateProductByID = (
  productCode: string,
  set: string,
  callback: (err: Error | null) => void
) => {
  dbPool.query(
    `UPDATE products SET ${set} WHERE productCode = ?`,
    [productCode],
    (err, _) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    }
  );
};

export const createNewProduct = (
  productCode: string,
  productName: string,
  productLine: string,
  productScale: string,
  productVendor: string,
  productDescription: string,
  quantityInStock: string,
  buyPrice: string,
  MSRP: string,
  callback: (err: Error | null) => void
) => {
  dbPool.query(
    'INSERT INTO `products`(`productCode`,`productName`,`productLine`,`productScale`,`productVendor`,`productDescription`,`quantityInStock`,`buyPrice`,`MSRP`) values (?,?,?,?,?,?,?,?,?)',
    [
      productCode,
      productName,
      productLine,
      productScale,
      productVendor,
      productDescription,
      quantityInStock,
      buyPrice,
      MSRP,
    ],
    (err, _) => {
      if (err) {
        console.log(err);

        callback(err);
      } else {
        callback(null);
      }
    }
  );
};
