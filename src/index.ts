import express from 'express';
import { apiRouter } from './routes/api.route';

const app = express();

import env from 'dotenv';
env.config();

const PORT = process.env.PORT || 5000;

//ADD SWAGGER MODULES
const swaggerJsdoc = require('swagger-jsdoc');
import swaggerUi from 'swagger-ui-express';

// app.get('/', (req, res) => {
//   res.status(200).send('Home page');
// });

app.use('/api/v1', apiRouter);

/** Swagger Initialization - START */
const swaggerOption = {
  swaggerDefinition: (swaggerJsdoc.Options = {
    info: {
      title: 'TP MYSQL EXPRESS',
      description: 'API documentation',
      contact: {
        name: 'Ajouter votre nom ici',
      },
      servers: [`http://localhost:${process.env.PORT}/`],
    },
  }),
  apis: ['index.js', './routes/*.ts', '**/*.ts'],
};

const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/** Swagger Initialization - END */

app.listen(PORT, () => {
  console.log(`The server is listening on http://localhost:${PORT}`);
});
