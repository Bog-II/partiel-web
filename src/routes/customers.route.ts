import express from 'express';

import { dbPool } from '../config/mysql.config';

const router = express.Router();

router.get('/', (req, res) => {
  dbPool.query('SELECT * FROM customers', (err, resQuery) => {
    if (err) {
      res.status(404).send({
        success: false,
        message: 'unsuccessful request',
      });
    }

    res.status(200).send({
      success: true,
      numberOfCustomers: resQuery.length,
      cutomers: resQuery,
    });
  });
});

router.get('/:customerNumber', (req, res) => {
  const { params } = req;
  const { customerNumber } = params;

  console.log(params);

  dbPool.query(
    'SELECT * FROM customers WHERE customerNumber = ?',
    customerNumber,
    (err, resQuery) => {
      if (err) {
        res
          .status(404)
          .send({ success: false, message: 'unsuccessful request' });
      }
      res.status(200).send({ success: true, cutomer: resQuery });
    }
  );
});

// router.post('/', );

// router.put('/:customer_id', );

// router.delete('/:customer_id', );

export { router as customersRouter };
