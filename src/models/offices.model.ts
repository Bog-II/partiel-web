import { dbPool } from '../config/mysql.config';

export const getAllOffices = (
  callback: (err: Error | null, res: Array<any>) => void
) => {
  dbPool.query('SELECT * FROM offices', (errQuery: Error, resQuery) => {
    if (errQuery) {
      callback(errQuery, []);
    } else {
      callback(null, resQuery);
    }
  });
};

export const getOfficeByID = (
  officeCode: number,
  callback: (err: Error | null, res: Object) => void
) => {
  dbPool.query(
    'SELECT * FROM offices WHERE officeCode = ?',
    officeCode,
    (errQuery, resQuery) => {
      if (errQuery) {
        callback(errQuery, {});
      } else {
        callback(null, resQuery);
      }
    }
  );
};

export const getEmployeesByOfficeID = (
  officeCode: number,
  callback: (err: Error | null, res: Array<any>) => void
) => {
  dbPool.query(
    'SELECT * FROM employees WHERE officeCode = ?',
    officeCode,
    (errQuery, resQuery) => {
      if (errQuery) {
        callback(errQuery, []);
      } else {
        callback(null, resQuery);
      }
    }
  );
};

export const updateOfficeByID = (
  officeCode: number,
  set: string,
  callback: (err: Error | null) => void
) => {
  dbPool.query(
    `UPDATE offices SET ${set} WHERE officeCode = ?`,
    [officeCode],
    (err, _) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    }
  );
};

export const createNewOffice = (
  officeCode: string,
  city: string,
  phone: string,
  addressLine1: string,
  addressLine2: string,
  state: string,
  country: string,
  postalCode: string,
  territory: string,
  callback: (err: Error | null) => void
) => {
  dbPool.query(
    'insert  into `offices`(`officeCode`,`city`,`phone`,`addressLine1`,`addressLine2`,`state`,`country`,`postalCode`,`territory`) values (?,?,?,?,?,?,?,?,?)',
    [
      officeCode,
      city,
      phone,
      addressLine1,
      addressLine2,
      state,
      country,
      postalCode,
      territory,
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

export const deleteOfficeByID = (
  officeCode: number,
  callback: (err: Error | null) => void
) => {
  dbPool.query(
    `DELETE FROM offices WHERE officeCode = ?`,
    [officeCode],
    (err, _) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    }
  );
};
