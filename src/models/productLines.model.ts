import { dbPool } from '../config/mysql.config';

export const getAllProductLines = (
  callback: (err: Error | null, res: Array<any>) => void
) => {
  dbPool.query('SELECT * FROM productlines', (errQuery: Error, resQuery) => {
    if (errQuery) {
      callback(errQuery, []);
    } else {
      callback(null, resQuery);
    }
  });
};