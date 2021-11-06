import express from 'express';

import env from 'dotenv';
env.config();

import { dbPool } from './config/pg.config';

console.log(dbPool);

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Home page');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`The server is listening on http://localhost:${PORT}`);
});
