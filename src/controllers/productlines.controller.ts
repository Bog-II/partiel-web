import { Request, Response } from 'express';

import { getAllProductLines } from '../models/productLines.model';

export const getProductLines = (req: Request, res: Response) => {
  getAllProductLines((err, resQuery) => {
    if (err) {
      res.status(500).send({
        success: false,
        message: 'unsuccessful request',
      });
    } else {
      res.status(200).send({
        success: true,
        numberOfProductLines: resQuery.length,
        productLines: resQuery,
      });
    }
  });
};
