import express from 'express';
import { apiRouter } from './routes/api.route';
import { authRouter } from './routes/auth.route';

const app = express();

import env from 'dotenv';
env.config();

import path from 'path';



//ADD SWAGGER MODULES
const swaggerJsdoc = require('swagger-jsdoc');
import swaggerUi from 'swagger-ui-express';

import passport from 'passport';
import session from 'express-session';

const SECRET_KEY = process.env.SECRET_KEY || 'td8';
app.use(session({ secret: SECRET_KEY, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// EXPRESS HANDLEBARS
const exphbs = require('express-handlebars');
// import exphbs from 'express-handlebars';
const pathExpressHandleBar = path.resolve(__dirname, './views');
app.set('views', pathExpressHandleBar);
app.set('view engine', '.hbs');
app.engine(
  'hbs',
  exphbs.engine({
    extname: '.hbs',
    defaultLayout: '',
    layoutsDir: '',
  })
);

/** Routes */
app.use('/api/v1', apiRouter);
authRouter(app, passport);

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`The server is listening on http://localhost:${PORT}`);
});
