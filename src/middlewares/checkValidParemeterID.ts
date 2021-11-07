import { NextFunction, Request, Response } from 'express';

export const checkValidParemeterID = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { params } = req;

  // Object.values(params)[0] retrieves the first value of the object
  const id = Object.values(params)[0];

  // check if the id is a number
  if (/^\d+$/.test(id)) {
    next();
  } else {
    res.status(400).send({
      success: false,
      message: 'bad id parameter',
    });
  }
};
