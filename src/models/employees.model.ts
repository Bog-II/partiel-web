import { dbPool } from '../config/mysql.config';

export const getAllEmployees = (
  callback: (err: Error | null, res: Array<any>) => void
) => {
  dbPool.query('SELECT * FROM employees', (errQuery: Error, resQuery) => {
    if (errQuery) {
      callback(errQuery, []);
    } else {
      callback(null, resQuery);
    }
  });
};

export const getMostAssignedEmployeesWithLimit = (
  limit: number,
  callback: (err: Error | null, res: Array<any>) => void
) => {
  dbPool.query(
    'SELECT e.* FROM employees e LEFT JOIN customers c ON c.salesRepEmployeeNumber = e.employeeNumber GROUP BY (e.employeeNumber) ORDER BY count(e.employeeNumber) DESC LIMIT ?',
    limit,
    (errQuery, resQuery) => {
      if (errQuery) {
        callback(errQuery, []);
      } else {
        callback(null, resQuery);
      }
    }
  );
};

export const getEmployeesWithMostPaymentsAndLimit = (
  limit: number,
  callback: (err: Error | null, res: Array<any>) => void
) => {
  dbPool.query(
    'SELECT e.* FROM employees e LEFT JOIN customers c ON c.salesRepEmployeeNumber = e.employeeNumber LEFT JOIN payments p ON p.customerNumber = c.customerNumber GROUP BY (e.employeeNumber) ORDER BY SUM(p.amount) DESC LIMIT ?',
    limit,
    (errQuery, resQuery) => {
      if (errQuery) {
        callback(errQuery, []);
      } else {
        callback(null, resQuery);
      }
    }
  );
};

export const getEmployeeByID = (
  employeeNumber: number,
  callback: (err: Error | null, res: Object) => void
) => {
  dbPool.query(
    'SELECT * FROM employees WHERE employeeNumber = ?',
    employeeNumber,
    (errQuery, resQuery) => {
      if (errQuery) {
        callback(errQuery, {});
      } else {
        callback(null, resQuery);
      }
    }
  );
};

export const getClientsByEmployeeID = (
  employeeNumber: number,
  callback: (err: Error | null, res: Array<any>) => void
) => {
  dbPool.query(
    'SELECT * FROM customers WHERE salesRepEmployeeNumber = ?',
    employeeNumber,
    (errQuery, resQuery) => {
      if (errQuery) {
        callback(errQuery, []);
      } else {
        callback(null, resQuery);
      }
    }
  );
};