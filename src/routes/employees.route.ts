import express from 'express';

const router = express.Router();

import { dbPool } from '../config/mysql.config';

router.get('/', (req, res) => {
  dbPool.query('SELECT * FROM employees', (err, resQuery) => {
    if (err) {
      res.status(404).send({
        success: false,
        message: 'unsuccessful request',
      });
    }

    res.status(200).send({
      success: true,
      numberOfEmployees: resQuery.length,
      employees: resQuery,
    });
  });
});

router.get('/:employeeNumber', (req, res) => {
  const { params } = req;
  const { employeeNumber } = params;

  console.log(params);

  dbPool.query(
    'SELECT * FROM employees WHERE employeeNumber = ?',
    employeeNumber,
    (err, resQuery) => {
      if (err) {
        res.status(404).send({
          success: false,
          message: 'unsuccessful request',
        });
      }
      res.status(200).send({
        success: true,
        cutomer: resQuery,
      });
    }
  );
});

router.use(express.urlencoded());
router.use(express.json());

router.post('/', (req, res) => {
  const { body } = req;
  res.send(body);
});

export { router as employeesRouter };
