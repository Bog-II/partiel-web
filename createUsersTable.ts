import { dbConnection, dbPool } from './src/config/mysql.config';

const sql = `CREATE TABLE USERS (
  id INTEGER NOT NULL PRIMARY KEY,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  emailid VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
)`;

dbPool.query(sql, (err, res) => {
  console.log(err, res);
});

// dbPool.query("SELECT * FROM USERS", (err, res) => {
//   console.log(err, res);
// });
