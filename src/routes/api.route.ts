import express from 'express';

const apiRouter = express.Router();

import { customersRouter } from './customers.route';
import { employeesRouter } from './employees.route';
import { officesRouter } from './offices.route';
import { ordersRouter } from './orders.route';
import { paymentsRouter } from './payments.route';
import { productlinesRouter } from './productlines.route';
import { productsRouter } from './products.route';

apiRouter.use('/customers', customersRouter);
apiRouter.use('/employees', employeesRouter);
apiRouter.use('/offices', officesRouter);
apiRouter.use('/orders', ordersRouter);
apiRouter.use('/payments', paymentsRouter);
apiRouter.use('/products', productsRouter);
apiRouter.use('/productlines', productlinesRouter);

export { apiRouter };
