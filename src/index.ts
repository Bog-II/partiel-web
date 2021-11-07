import express from 'express';
import { apiRouter } from './routes/api.route';

import env from 'dotenv';
env.config();

const app = express();

// app.get('/', (req, res) => {
//   res.status(200).send('Home page');
// });

app.use('/api/v1', apiRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`The server is listening on http://localhost:${PORT}`);
});
