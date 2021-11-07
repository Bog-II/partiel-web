import { dbPool } from '../config/mysql.config';

export const deleteProductByID = (
  productCode: number,
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
  productCode: number,
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
    'insert  into `products`(`customerNumber`,`customerName`,`contactLastName`,`contactFirstName`,`phone`,`addressLine1`,`addressLine2`,`city`,`state`) values (?,?,?,?,?,?,?,?,?)',
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
        callback(err);
      } else {
        callback(null);
      }
    }
  );
};
