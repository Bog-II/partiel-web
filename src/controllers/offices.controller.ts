import { Request, Response } from 'express';

import {
  createNewOffice,
  deleteOfficeByID,
  getAllOffices,
  getEmployeesByOfficeID,
  getOfficeByID,
  updateOfficeByID,
} from '../models/offices.model';

export const getOffices = (_req: Request, res: Response) => {
  getAllOffices((err, resQuery) => {
    if (err) {
      res.status(500).send({
        success: false,
        message: 'unsuccessful request',
      });
    } else {
      res.status(200).send({
        success: true,
        numberOfOffices: resQuery.length,
        offices: resQuery,
      });
    }
  });
};

export const getOffice = (req: Request, res: Response) => {
  const { params } = req;
  const { officeCode } = params;

  const id = parseInt(officeCode);

  getOfficeByID(id, (err, resQuery) => {
    if (err) {
      res.status(500).send({
        success: false,
        message: 'unsuccessful request',
      });
    } else {
      res.status(200).send({
        success: true,
        employeeData: resQuery,
      });
    }
  });
};

export const getEmployeesFromOffice = (req: Request, res: Response) => {
  const { params } = req;
  const { officeCode } = params;

  const id = parseInt(officeCode);

  getEmployeesByOfficeID(id, (err, resQuery) => {
    if (err) {
      res.status(500).send({
        success: false,
        message: 'unsuccessful request',
      });
    } else {
      res.status(200).send({
        success: true,
        employeeClients: resQuery,
      });
    }
  });
};

export const deleteOffice = (req: Request, res: Response) => {
  const { params } = req;
  const { officeCode } = params;

  const id = parseInt(officeCode);

  deleteOfficeByID(id, (err) => {
    if (err) {
      res
        .status(500)
        .send({ success: false, message: 'unsuccessful deletion' });
    } else {
      res.status(200).send({
        success: true,
        message: 'successful office deletion',
      });
    }
  });
};

export const updateOffice = (req: Request, res: Response) => {
  const { body, params } = req;
  const { officeCode } = params;

  const id = parseInt(officeCode);

  const modifiedVals: string[] = [];
  for (const property in body) {
    modifiedVals.push(`${property} = '${body[property]}'`);
  }
  const set = modifiedVals.join(', ');

  updateOfficeByID(id, set, (err) => {
    if (err) {
      res.status(500).send({
        success: false,
        message: 'unsuccessful office modification',
      });
    } else {
      res.status(200).send({
        success: true,
        message: 'successful office modification',
      });
    }
  });
};

export const createOffice = (req: Request, res: Response) => {
  const { body } = req;
  const {
    officeCode,
    city,
    phone,
    addressLine1,
    addressLine2,
    state,
    country,
    postalCode,
    territory,
  } = body;

  createNewOffice(
    officeCode,
    city,
    phone,
    addressLine1,
    addressLine2,
    state,
    country,
    postalCode,
    territory,
    (err) => {
      if (err) {
        res
          .status(500)
          .send({ success: false, message: 'unsuccessful creation' });
      } else {
        res.status(200).send({
          success: true,
          message: 'office successfully created',
        });
      }
    }
  );
};

