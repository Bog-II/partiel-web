import env from 'dotenv';
env.config();

import { Pool } from 'pg';
export const dbPool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: parseInt(process.env.PGPORT!),
  ssl: {
    rejectUnauthorized: false,
  },
});

