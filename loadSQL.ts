import { readFileSync } from 'fs';

// const sql = readFileSync('./companyDB.sql', "utf8");

import { dbConnection, dbPool } from './src/config/mysql.config';

// dbPool.query(sql, (err, res) => {
//   console.log(err, res);
// });