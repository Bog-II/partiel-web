import env from 'dotenv';
env.config();

import { createPool, createConnection } from 'mysql';

export const dbPool = createPool({
  port: 3306,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_Database,
  ssl: {
    rejectUnauthorized: false,
  },
});

export const dbConnection = createConnection({
  port: 3306,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_Database,
  ssl: {
    rejectUnauthorized: false,
  },
  multipleStatements: true,
});
