import { dbPool } from '../config/mysql.config';

export const getCustomerByEmail = (
  email: string,
  callback: (err: Error | null, res: Object) => void
) => {
  dbPool.query(
    'SELECT * FROM users WHERE emailId = ?',
    email,
    (err, resQuery) => {
      if (err) {
        callback(err, {});
      } else {
        callback(null, resQuery);
      }
    }
  );
};

export const createNewUser = (
  email: string,
  userPassword: string,
  firstname: string,
  lastname: string,
  callback: (err: Error | null) => void
) => {
  dbPool.query(
    'INSERT INTO `users`(`emailId`,`password`,`firstName`,`lastName`) values (?,?,?,?)',
    [email, userPassword, firstname, lastname],
    (err, _) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    }
  );
};
